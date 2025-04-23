import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { CreateTicketPaymentDto } from "./dto/create-ticket-payment.dto";
import { PaginationOptions } from "../../utils/types/pagination.types";
import { ResponseTicketPaymentDto } from "./dto/response-ticket-payment.dto";
import { plainToInstance } from "class-transformer";
import { RaffleEditionService } from "../raffle-edition/raffle-edition.service";
import { DiscountRuleService } from "../discount-rule/discount-rule.service";
import { Decimal } from "@prisma/client/runtime/library";

@Injectable()
export class TicketPaymentService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly raffleEditionService: RaffleEditionService,
        private readonly discountRuleService: DiscountRuleService,
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

        const data = plainToInstance(ResponseTicketPaymentDto, items);

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

    async create(data: CreateTicketPaymentDto) {
        const { raffle_edition_id, ...dataPayment } = data
        let discount: Decimal = new Decimal(0)
        const raffleEdition = await this.raffleEditionService.findById(raffle_edition_id)
        const discountRule = await this.discountRuleService.findByHighestDiscountAvailableByTicketAmount(dataPayment.ticket_amount)

        if (discountRule) {
            discount = discountRule.discount_value
        }

        const total_value = discount
            .times(new Decimal(dataPayment.ticket_amount))
            .times(new Decimal(raffleEdition.price))


        const ticketPaymentData = {
            ...dataPayment,
            discount,
            total_value: new Decimal(total_value)
        }

        return this.prisma.ticketPayment.create({
            data: ticketPaymentData
        });
    }

}