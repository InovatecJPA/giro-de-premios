import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
  TicketRaffle,
  TicketRaffleStatus,
} from 'src/prisma/generated/prisma/client';
import { plainToInstance } from 'class-transformer';
import { CreateTicketRaffleDto } from './dto/create-ticket-raffle.dto';
import { PatchUpdateTicketRaffleDto } from './dto/patch-update-ticket-raffle.dto';
import { PutUpdateTicketRaffleDto } from './dto/put-update-ticket-raffle.dto';
import { ResponseTicketRaffleDto } from './dto/response-ticket-raffle.dto';
import { PaginationOptions } from '../../utils/types/pagination.types';
import { CreateTicketPaymentDto } from '../ticket-payment/dto/create-ticket-payment.dto';
import { max } from 'class-validator';

@Injectable()
export class TicketRaffleService {
  constructor(private readonly prisma: PrismaService) { }

  async findAll(
    pagination: PaginationOptions,
  ) {
    const { total, items, pages, skip, take } =
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
      plainToInstance(ResponseTicketRaffleDto, {
        ...item,
        raffle_number: item.ticket_raffle_number.toString(),
      }),
    );

    return { data, meta: { total, pages, skip, take } };
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

  async findAllByRaffleEditionByStatusBought(raffle_edition_id: string) {
    const raffles = await this.prisma.ticketRaffle.findMany({
      where: {
        raffle_edition_id,
        status: TicketRaffleStatus.bought
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

  async createMany(data: CreateTicketRaffleDto[]) {
    const created = await this.prisma.ticketRaffle.createMany({
      data,
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

  async buyTickets(data: CreateTicketPaymentDto) {
    const raffles = await this.findAllByRaffleEditionByStatusBought(data.raffle_edition_id)

    const usedNumbers = raffles.map(raffle => Number(raffle.ticket_raffle_number));

    const winningTickets = await this.findAllByRaffleEditionWithPrizeAvailable(data.raffle_edition_id)

    const winningNumbers = new Set(
      winningTickets.map(ticket => Number(ticket.ticket_raffle_number))
    )

    const generatedNumbers = this.generateRandomNumbers(data.ticket_amount, usedNumbers)

    const results = await this.processTickets(
      data.raffle_edition_id,
      generatedNumbers,
      winningTickets
    );
  }

  private async processTickets(
    editionId: string,
    generatedNumbers: number[],
    winningTickets: TicketRaffle[]
  ) {
    const winningNumbersMap = new Map(
      winningTickets.map(t => [Number(t.ticket_raffle_number), t])
    );

    const winningTicketsResult = [];
    const regularTickets = [];

    await this.prisma.$transaction(async (prisma) => {
      for (const number of generatedNumbers) {
        const winningTicket = winningNumbersMap.get(number);

        if (winningTicket) {
          //TICKET PAYMENT
        } else {
          //TICKET PAYMENT ALSO
        }
      }
    });

    return { winningTickets: winningTicketsResult, regularTickets };
  }

  private generateRandomNumbers(amount: number, usedNumbers: number[]): number[] {
    const maxDigits = 8;  // Typically 8 digits for raffle tickets (100 million possibilities)
    const maxNumber = Math.pow(10, maxDigits) - 1;
    const uniqueNumbers: number[] = [];
    const usedNumbersSet = new Set(usedNumbers.map(num => num.toString().padStart(maxDigits, '0')));
    const maxAttempts = amount * 100; // Safety net to prevent infinite loops

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
