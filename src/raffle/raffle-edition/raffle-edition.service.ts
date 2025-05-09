import { Injectable, NotFoundException } from "@nestjs/common";
import { PaginationOptions } from "src/utils/types/pagination.types";
import { CreateRaffleEditionDto } from "./dto/create-raffle-edition.dto";
import { PrismaService } from "../../prisma/prisma.service";
import { Decimal } from "@prisma/client/runtime/library";
import { plainToInstance } from "class-transformer";
import { ResponseRaffleEditionDto, ResponseRaffleEditionSchema } from "./dto/response-raffle-edition.dto";
import { CreateRaffleEditionPrizeDto } from "./dto/create-raffle-edition-prize.dto";
import { TicketQueueService } from "../tickets/ticket-queue/ticket-queue.service";
import { CreateTicketQueuePrizedDto } from "../tickets/ticket-queue/dto/create-ticket-queue-prized.dto";
import { PutUpdateRaffleEditionDto } from "./dto/put-update-raffle-edition.dto";
import { PatchUpdateRaffleEditionDto } from "./dto/patch-update-raffle-edition.dto";

@Injectable()
export class RaffleEditionService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly ticketQueueService: TicketQueueService
    ) { }

    async findAll(pagination: PaginationOptions) {
        const { items, meta } = await this.prisma.paginate(
            this.prisma.raffleEdition,
            {
                ...pagination,
                select: {
                    id: true,
                    title: true,
                    price: true,
                    total_tickets: true,
                    created_at: true,
                },
            }
        )

        const data = items.map((item) => ResponseRaffleEditionSchema.parse(item));

        return { items: data, meta };
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
            winner_ticket_drawn: BigInt(dataEdition.winner_ticket_drawn),
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

    async update(id: string, data: PutUpdateRaffleEditionDto | PatchUpdateRaffleEditionDto) {
        if (!this.exists(id)) {
            throw new NotFoundException('Rifa nao encontrada');
        }

        return this.prisma.raffleEdition.update({
            where: { id },
            data: data,
        })
    }

    async delete(id: string) {
        if (!(await this.exists(id))) {
            throw new NotFoundException('Rifa nao encontrada');
        }
        await this.prisma.raffleEdition.delete({ where: { id } });
    }

    async exists(id: string) {
        if (await this.findById(id)) {
            return true;
        }

        return false;
    }

    async addFinalPrize(id: string, ticket_number: bigint) {
        if (!(await this.exists(id))) {
            throw new NotFoundException('Rifa nao encontrada');
        }

        await this.update(id, { winner_ticket_drawn: ticket_number, status: 'closed' })

        // move ticket to history
        // ticketPaymento
    }
}