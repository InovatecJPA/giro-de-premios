import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../prisma/prisma.service";
import { PaginationOptions } from "../../../utils/types/pagination.types";
import { ResponseTicketPaymentDto } from "./dto/response-ticket-payment.dto";
import { plainToInstance } from "class-transformer";
import { BuyingTicketsDto } from "./dto/buying-ticket.dto";
import { RaffleEditionService } from "../../raffle-edition/raffle-edition.service";
import { TicketQueueService } from "../ticket-queue/ticket-queue.service";
import { Decimal } from "@prisma/client/runtime/library";
import { DiscountRuleService } from "../../discount-rule/discount-rule.service";
import { create } from "node:domain";

@Injectable()
export class TicketPaymentService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly ticketQueueService: TicketQueueService,
        private readonly raffleEditionService: RaffleEditionService,
        private readonly discountRuleService: DiscountRuleService
    ) { }

    async findAll(paginationOptions: PaginationOptions) {
        const { items, pages, skip, take, total } = await this.prisma.paginate(
            this.prisma.ticketPayment,
            {
                ...paginationOptions,
                select: {
                    id: true,
                    discount: true,
                    total_value: true,
                    created_at: true,
                },
            }
        )

        const data = items.map((item) => plainToInstance(ResponseTicketPaymentDto, item))

        return {
            data,
            meta: { total, pages, skip, take },
        }
    }

    async findById(id: string) {
        return this.prisma.ticketPayment.findUnique({
            where: { id },
        });
    }

    async countSoldTickets(raffle_edition_id: string) {
        const result = await this.prisma.ticketPayment.aggregate({
            _sum: {
                total_value: true,
                ticket_amount: true,
            },
            where: {
                ticket_raffle: {
                    some: {
                        raffle_edition_id: raffle_edition_id,
                    },
                },
            },
        });

        return {
            totalValue: result._sum.total_value ?? 0,
            ticketAmount: result._sum.ticket_amount ?? 0,
        };
    }

    async buyTickets(buyingTicketsData: BuyingTicketsDto) {
        let discount = new Decimal(0)
        const edition = await this.raffleEditionService.findById(buyingTicketsData.raffle_edition_id);

        if (!edition) {
            throw new NotFoundException('Raffle edition not found');
        }

        if (edition.status === 'closed') {
            throw new NotFoundException('Rifa Finalizada');
        }

        const discountRule = await this.discountRuleService.findByHighestDiscountAvailableByTicketAmount(buyingTicketsData.ticket_amount)

        if (discountRule) {
            discount = new Decimal(discountRule.discount_value)
        }

        const totalValue = new Decimal(buyingTicketsData.ticket_amount)
            .times(new Decimal(edition.price))
            .times(new Decimal(1)
                .minus(discount))


        // Cria transação no banco 
        // Está faltando
        // await this.transactionService.create(createTransactionDto);

        //--> Logica de extrato já esta implementada
        //--> await this.extratoService.deposit(depositData);

        const baseTicketData = {
            ...buyingTicketsData,
            discount: discount.toString(),
            total_value: totalValue.toString(),
        };

        const { raffle_edition_id, ...ticketPaymentData } = baseTicketData;

        const ticketPayment = await this.prisma.ticketPayment.create({
            data: ticketPaymentData,
        });

        await this.ticketQueueService.queueTicketPurchase({
            ...baseTicketData,
            ticket_payment_id: ticketPayment.id,
            raffle_edition_title: edition.title
        });

        return ticketPayment;

    }

}