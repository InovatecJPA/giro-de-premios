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

    async buyTickets(buyingTicketsData: BuyingTicketsDto) {
        let discount = new Decimal(0)
        const edition = await this.raffleEditionService.findById(buyingTicketsData.raffle_edition_id);

        if (!edition) {
            throw new NotFoundException('Raffle edition not found');
        }

        const discountRule = await this.discountRuleService.findByHighestDiscountAvailableByTicketAmount(buyingTicketsData.ticket_amount)

        if (discountRule) {
            discount = new Decimal(discountRule.discount_value)
        }

        const totalValue = discount.times(new Decimal(buyingTicketsData.ticket_amount).times(new Decimal(edition.price)))


        //Cria transação no banco
        // await this.transactionService.create(createTransactionDto);
        //--> Logica de extrato
        //--> await this.extratoService.deposit(depositData);
        //----> Atualizar saldo

        const createQueueTicketData = {
            ...buyingTicketsData,
            discount: discount.toString(),
            total_value: totalValue.toString(),
        }

        const { raffle_edition_id, ...createTicketPaymentDto } = createQueueTicketData;

        const ticketPayment = await this.prisma.ticketPayment.create({
            data: createTicketPaymentDto,
        });

        this.ticketQueueService.queueTicketPurchase(createQueueTicketData);

        return ticketPayment
    }

}