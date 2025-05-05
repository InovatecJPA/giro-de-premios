import { Process, Processor } from "@nestjs/bull";
import { Logger } from "@nestjs/common";
import { TicketRaffleService } from "../ticket-raffle/ticket-raffle.service";
import { PrismaService } from "../../../prisma/prisma.service";
import { Job } from "bull";
import { generateRandomNumbers } from "../../../utils/functions/generateNumbers";
import { CreateBodyTicketQueueDto } from "./dto/create-body-ticket-payment.dto";
import { CreateTicketRaffleDto } from "../ticket-raffle/dto/create-ticket-raffle.dto";
import { CreateTicketQueuePrizedDto } from "./dto/create-ticket-queue-prized.dto";
import { PaymentStatus, TicketRaffleStatus } from "../../../prisma/generated/prisma/client";
import { SendEmailTicketPurchaseDto } from "./dto/send-email-ticket-purchase.dto";
import { EmailOptions, MailService } from "../../../mail/mail.service";

@Processor('ticket-purchase')
export class TicketQueueProcessor {
    private readonly logger = new Logger(TicketQueueProcessor.name)

    constructor(
        private ticketRaffleService: TicketRaffleService,
        private mailService: MailService,
        private prisma: PrismaService
    ) { }

    @Process({
        name: 'add-prized-tickets',
        concurrency: 1
    })
    async processAddPrizedTickets(job: Job<CreateTicketQueuePrizedDto>) {
        this.logger.log(`Processando compra de tickets: ${job.id}, quantia: ${job.data.quantity}`)
        const data = job.data
        let prizedTicketsData: CreateTicketRaffleDto[] = []

        try {
            const generatedNumbers = generateRandomNumbers(data.quantity, [])

            data.prizes.forEach((prize) => {
                for (let i = 0; i < prize.quantity; i++) {
                    prizedTicketsData.push({
                        prize_id: prize.prize_id,
                        raffle_edition_id: data.raffle_edition_id,
                        ticket_raffle_number: BigInt(generatedNumbers.shift()!)
                    })
                }
            })

            await this.ticketRaffleService.createMany(prizedTicketsData)

            return {
                ticket_numbers: generatedNumbers
            }
        } catch (error) {
            this.logger.error(error)
        }


    }

    @Process({
        name: 'buy-tickets',
        concurrency: 1
    })
    async processBuyTickets(job: Job<CreateBodyTicketQueueDto>) {
        this.logger.log(`Processando compra de tickets: ${job.id}, quantia: ${job.data.ticket_amount}`)
        const data = job.data

        try {
            const result = await this.prisma.$transaction(async (tx) => {
                const raffles = await this.ticketRaffleService.findAllByRaffleEditionByStatusBoughtAndReserved(
                    data.raffle_edition_id,
                    tx
                )
                const remainingWinningTickets = await this.ticketRaffleService.findAllByRaffleEditionWithPrizeAvailable(
                    data.raffle_edition_id
                )

                const usedNumbers = raffles.map(raffle => Number(raffle.ticket_raffle_number))

                const generatedNumbers = generateRandomNumbers(data.ticket_amount, usedNumbers)
                const bigIntNumbers = generatedNumbers.map(n => BigInt(n));


                const winningTicketsDrawn = remainingWinningTickets.filter(ticket =>
                    bigIntNumbers.some(n => n === ticket.ticket_raffle_number)
                );

                await Promise.all(
                    winningTicketsDrawn.map(async (ticket) => {
                        const updatedTicket = await this.prisma.ticketRaffle.update({
                            where: { id: ticket.id },
                            data: { status: TicketRaffleStatus.bought }
                        });

                        return this.prisma.winnerPayment.create({
                            data: {
                                ticket_raffle_id: updatedTicket.id,
                                ticket_payment_id: data.ticket_payment_id,
                            }
                        });
                    })
                );



                await this.ticketRaffleService.reserveTickets(
                    data.raffle_edition_id,
                    bigIntNumbers,
                    tx
                );



                await this.ticketRaffleService.confirmTicketPurchase(
                    data.raffle_edition_id,
                    bigIntNumbers,
                    tx
                )

                return {
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

    @Process({
        name: 'send-email-ticket-purchase',
        concurrency: 1
    })
    async processSendEmailTicketPurchase(job: Job<SendEmailTicketPurchaseDto>) {
        const data = job.data
        try {


            const payment = await this.prisma.ticketPayment.findUnique({
                where: { id: job.data.ticket_payment_id },
                include: { ticket_raffle: true }
            })

            if (!payment) throw new Error('Payment not found')

            const mailOptions: EmailOptions = {
                to: payment.email,
                subject: 'Compra realizada com sucesso!',
                template: 'purchased-tickets',
                context: {
                    username: payment.name,
                    raffleEditionTitle: data.raffle_edition_title,
                    ticketRaffles: payment.ticket_raffle.map(ticketRaffle => ({
                        ticketRaffleNumber: ticketRaffle.ticket_raffle_number.toString()
                    })),
                    supportEmail: process.env.SUPPORT_EMAIL,
                    siteName: process.env.PROJECT_NAME,
                }
            }

            await this.mailService.sendMail(mailOptions)

            this.logger.log(`Ticket email sent successfully to ${payment.email}`);
        } catch (error) {
            this.logger.error(`Failed to send ticket email: ${error.message}`, {
                paymentId: data.ticket_payment_id,
                error: error.stack
            });
            throw error;
        }
    }

}