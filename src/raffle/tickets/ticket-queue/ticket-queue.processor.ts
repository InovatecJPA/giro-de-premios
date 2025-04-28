import { Process, Processor } from "@nestjs/bull";
import { Logger } from "@nestjs/common";
import { TicketRaffleService } from "../ticket-raffle/ticket-raffle.service";
import { PrismaService } from "../../../prisma/prisma.service";
import { Job } from "bull";
import { Decimal } from "@prisma/client/runtime/library";
import { RaffleEditionService } from "../../raffle-edition/raffle-edition.service";
import { DiscountRuleService } from "../../discount-rule/discount-rule.service";
import { CreateTicketPaymentDto } from "../ticket-payment/dto/create-ticket-payment.dto";

@Processor('ticket-purchase')
export class TicketQueueProcessor {
    private readonly logger = new Logger(TicketQueueProcessor.name)

    constructor(
        private ticketRaffleService: TicketRaffleService,
        private raffleEditionService: RaffleEditionService,
        private discountRuleService: DiscountRuleService,
        private prisma: PrismaService
    ) { }

    @Process({
        name: 'buy-tickets',
        concurrency: 1
    })
    async processBuyTickets(job: Job<CreateTicketPaymentDto>) {
        this.logger.log(`Processando compra de tickets: ${job.id}, quantia: ${job.data.ticket_amount}`)
        const data = job.data

        try {
            const result = await this.prisma.$transaction(async (tx) => {
                const raffles = await this.ticketRaffleService.findAllByRaffleEditionByStatusBoughtAndReserved(
                    data.raffle_edition_id,
                    tx
                )
                const usedNumbers = raffles.map(raffle => Number(raffle.ticket_raffle_number))

                const generatedNumbers = this.generateRandomNumbers(data.ticket_amount, usedNumbers)

                const bigIntNumbers = generatedNumbers.map(n => BigInt(n));

                await this.ticketRaffleService.reserveTickets(
                    data.raffle_edition_id,
                    bigIntNumbers,
                    tx
                );


                const payment = await tx.ticketPayment.create({
                    data: {
                        cpf: data.cpf,
                        email: data.email,
                        name: data.name,
                        number: data.number,
                        ticket_amount: data.ticket_amount,
                        discount: data.discount,
                        total_value: data.total_value,
                        ticket_raffle: {
                            connect: bigIntNumbers.map(number => ({
                                ticket_raffle_number_raffle_edition_id: {
                                    raffle_edition_id: data.raffle_edition_id,
                                    ticket_raffle_number: number
                                }
                            }))
                        }
                    }
                });

                await this.ticketRaffleService.confirmTicketPurchase(
                    data.raffle_edition_id,
                    bigIntNumbers,
                    tx
                )

                return {
                    payment_id: payment.id,
                    ticket_numbers: generatedNumbers
                }
            }, {
                maxWait: 10000,
                timeout: 20000
            })

            this.logger.log(`Compra finalizada com sucesso: ${job.id}`);
            return result;

        } catch (error) {
            this.logger.error(`Erro ao processar compra: ${error.message}`, error.stack);
            throw error;
        }
    }

    private generateRandomNumbers(amount: number, usedNumbers: number[]): number[] {
        const maxDigits = 9;
        const maxNumber = Math.pow(10, maxDigits) - 1;
        const uniqueNumbers: number[] = [];
        const usedNumbersSet = new Set(usedNumbers.map(num => num.toString().padStart(maxDigits, '0')));
        const maxAttempts = amount * 10;

        if (amount > maxNumber - usedNumbers.length) {
            throw new Error(`Not enough available numbers (${maxNumber} total, ${usedNumbers.length} used, ${amount} requested)`);
        }

        let attempts = 0;
        while (uniqueNumbers.length < amount && attempts++ < maxAttempts) {
            const randomNum = Math.floor(Math.random() * maxNumber) + 1;
            const numStr = randomNum.toString().padStart(maxDigits, '0');

            if (!usedNumbersSet.has(numStr)) {
                usedNumbersSet.add(numStr);
                uniqueNumbers.push(randomNum);
            }
        }

        if (uniqueNumbers.length < amount) {
            throw new Error(`Failed to generate all unique numbers after ${maxAttempts} attempts`);
        }

        return uniqueNumbers;
    }
}