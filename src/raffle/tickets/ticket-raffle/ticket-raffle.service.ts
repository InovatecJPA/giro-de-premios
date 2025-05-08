import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

import { plainToInstance } from 'class-transformer';
import { CreateTicketRaffleDto } from './dto/create-ticket-raffle.dto';
import { PatchUpdateTicketRaffleDto } from './dto/patch-update-ticket-raffle.dto';
import { PutUpdateTicketRaffleDto } from './dto/put-update-ticket-raffle.dto';
import { ResponseTicketRaffleDto, ResponseTicketRaffleSchema } from './dto/response-ticket-raffle.dto';
import { PaginationOptions } from '../../../utils/types/pagination.types';
import { Prisma, TicketRaffle, TicketRaffleStatus } from '../../../prisma/generated/prisma/client';


@Injectable()
export class TicketRaffleService {
  constructor(private readonly prisma: PrismaService) { }

  async findAll(
    pagination: PaginationOptions,
  ) {
    const { items, meta } =
      await this.prisma.paginate(this.prisma.ticketRaffle, {
        ...pagination,
        select: {
          id: true,
          raffle_number: true,
          status: true,
          prize_id: true,
          raffle_edition_id: true,
          created_at: true,
          updated_at: true,
        },
      });

    const data = items.map((item) =>
      ResponseTicketRaffleSchema.parse(item),
    );

    return { items: data, meta };
  }

  async findById(id: string) {
    const raffle = await this.prisma.ticketRaffle.findUnique({
      where: { id },
      select: {
        id: true,
        ticket_raffle_number: true,
        status: true,
        prize_id: true,
        raffle_edition_id: true,
        created_at: true,
        updated_at: true,
      },
    });

    if (!raffle) {
      throw new NotFoundException('Bilhete não encontrado');
    }

    return raffle;
  }

  async findAllByRaffleEditionByStatusBoughtAndReserved(raffle_edition_id: string, tx?: Prisma.TransactionClient) {
    const db = tx || this.prisma

    const raffles = await db.ticketRaffle.findMany({
      where: {
        raffle_edition_id,
        status: {
          in: [TicketRaffleStatus.bought, TicketRaffleStatus.reserved]
        }
      },
      select: {
        id: true,
        ticket_raffle_number: true,
        status: true,
        prize_id: true,
        raffle_edition_id: true,
        created_at: true,
        updated_at: true
      }
    })

    return raffles
  }

  async findAllByRaffleEditionWithPrizeAvailable(raffle_edition_id: string) {
    return await this.prisma.ticketRaffle.findMany({
      where: {
        raffle_edition_id,
        status: TicketRaffleStatus.available,
        prize_id: { not: null }
      }
    })
  }

  async findByRaffleNumberAndRaffleEdition(ticket_raffle_number: bigint, raffle_edition_id: string) {
    const raffle = await this.prisma.ticketRaffle.findUnique({
      where: {
        ticket_raffle_number_raffle_edition_id: {
          ticket_raffle_number,
          raffle_edition_id
        }
      },
      select: {
        id: true,
        ticket_raffle_number: true,
        status: true,
        prize_id: true,
        raffle_edition_id: true,
        created_at: true,
        updated_at: true,
      },
    });

    if (!raffle) {
      throw new NotFoundException('Bilhete nao encontrado');
    }

    return raffle;
  }

  async create(dto: CreateTicketRaffleDto): Promise<TicketRaffle> {
    const exists = await this.findByRaffleNumberAndRaffleEdition(
      dto.ticket_raffle_number,
      dto.raffle_edition_id
    )

    if (exists) {
      throw new NotFoundException('Bilhete ja cadastrado');
    }

    const created = await this.prisma.ticketRaffle.create({
      data: {
        ...dto,
        ticket_raffle_number: BigInt(dto.ticket_raffle_number),
      },
    });

    return created;
  }

  async createMany(data: CreateTicketRaffleDto[], tx?: Prisma.TransactionClient) {
    const db = tx || this.prisma

    const created = await db.ticketRaffle.createMany({
      data,
      skipDuplicates: true
    });

    return created;
  }

  async update(
    id: string,
    dto: PatchUpdateTicketRaffleDto | PutUpdateTicketRaffleDto,
  ) {
    if (!(await this.exists(id)))
      throw new NotFoundException('Bilhete nao encontrado');

    const updated = await this.prisma.ticketRaffle.update({
      where: { id },
      data: {
        ...dto,
      },
    });

    return updated;
  }

  async remove(id: string) {
    if (!(await this.exists(id)))
      throw new NotFoundException('Bilhete nao encontrado');
    await this.prisma.ticketRaffle.delete({ where: { id } });
  }

  async exists(id: string) {
    if (await this.findById(id)) {
      return true;
    }

    return false;
  }

  async reserveTickets(raffle_edition_id: string, numbers: bigint[], tx?: Prisma.TransactionClient) {
    const db = tx || this.prisma

    const existingTickets = await db.ticketRaffle.findMany({
      where: {
        raffle_edition_id,
        ticket_raffle_number: { in: numbers }
      }
    })

    if (existingTickets.length > 0)
      throw new Error(`Alguns tickets já existem: ${existingTickets.map(t => t.ticket_raffle_number).join(', ')}`)


    const tickets = await db.ticketRaffle.createMany({
      data: numbers.map(number => ({
        ticket_raffle_number: number,
        raffle_edition_id,
        prize_id: null,
        status: TicketRaffleStatus.reserved
      }))
    })
    return tickets
  }

  async confirmTicketPurchase(
    raffle_edition_id: string,
    numbers: bigint[],
    tx?: Prisma.TransactionClient
  ) {
    const db = tx || this.prisma

    const completed = await db.ticketRaffle.updateMany({
      where: {
        raffle_edition_id,
        ticket_raffle_number: { in: numbers },
        status: TicketRaffleStatus.reserved
      },
      data: {
        status: TicketRaffleStatus.bought
      }
    })

    return completed
  }
}
