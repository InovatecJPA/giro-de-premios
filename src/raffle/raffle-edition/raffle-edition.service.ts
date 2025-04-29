import { Injectable } from "@nestjs/common";
import { PaginationOptions } from "src/utils/types/pagination.types";
import { CreateRaffleEditionDto } from "./dto/create-raffle-edition.dto";
import { PrismaService } from "../../prisma/prisma.service";
import { Decimal } from "@prisma/client/runtime/library";
import { plainToInstance } from "class-transformer";
import { ResponseRaffleEditionDto } from "./dto/response-raffle-edition.dto";
import { CreateTicketRaffleDto } from "../tickets/ticket-raffle/dto/create-ticket-raffle.dto";
import { CreateRaffleEditionPrizeDto } from "./dto/create-raffle-edition-prize.dto";
import { TicketRaffleService } from "../tickets/ticket-raffle/ticket-raffle.service";
import { generateRandomNumbers } from "../../utils/functions/generateNumbers";
import { TicketQueueService } from "../tickets/ticket-queue/ticket-queue.service";
import { CreateTicketQueuePrizedDto } from "../tickets/ticket-queue/dto/create-ticket-queue-prized.dto";

@Injectable()
export class RaffleEditionService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly ticketRaffleService: TicketRaffleService,
        private readonly ticketQueueService: TicketQueueService
    ) { }

    async findAll(pagination: PaginationOptions) {
        const { items, pages, skip, take, total } = await this.prisma.paginate(
            this.prisma.raffleEdition,
            {
                ...pagination,
                select: {
                    id: true,
                    name: true,
                    price: true,
                    total_tickets: true,
                    created_at: true,
                },
            }
        )

        const data = items.map((item) => plainToInstance(ResponseRaffleEditionDto, { ...item, price: item.price.toString() }))

        return { data, meta: { total, pages, skip, take } };
    }

    async findById(id: string) {
        return this.prisma.raffleEdition.findUnique({
            where: { id }
        })
    }

    async create(dataEdition: CreateRaffleEditionDto, prizedTickets: CreateRaffleEditionPrizeDto[]) {
        const totalPrizeTickets = prizedTickets.reduce((sum, prize) => sum + prize.quantity, 0);

        const superData = {
            ...dataEdition,
            winner_tickets: totalPrizeTickets,
            price: new Decimal(dataEdition.price),
        }

        const raffleEdition = await this.prisma.raffleEdition.create(
            { data: superData }
        )

        const queueData: CreateTicketQueuePrizedDto = {
            raffle_edition_id: raffleEdition.id,
            quantity: totalPrizeTickets,
            prizes: prizedTickets,
        }

        this.ticketQueueService.queueTicketPrize(queueData)

        return raffleEdition
    }

    async update(id: string, data: any) { }
    async delete(id: string) { }
    async exists(id: string) {
        // if (await this.findById(id)) {
        //       return true;
        //     }

        //     return false;
    }
}