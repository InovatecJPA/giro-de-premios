// src/ticket-raffle/ticket-raffle.service.ts
import {
    Injectable,
    NotFoundException,
  } from '@nestjs/common';
  import { PrismaService } from '../prisma/prisma.service';
  import {
    TicketRaffle,
  } from 'src/prisma/generated/prisma/client';
  import { plainToInstance } from 'class-transformer';
  import { CreateTicketRaffleDto } from './dto/create-ticket-raffle.dto';
  import { PatchUpdateTicketRaffleDto } from './dto/patch-update-ticket-raffle.dto';
  import { PutUpdateTicketRaffleDto } from './dto/put-update-ticket-raffle.dto';
  import { ResponseTicketRaffleDto } from './dto/response-ticket-raffle.dto';
  import { PaginationOptions } from '../utils/types/pagination.types';
  
  @Injectable()
  export class TicketRaffleService {
    constructor(private readonly prisma: PrismaService) {}
  
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
          raffle_number: item.raffle_number.toString(),
        }),
      );
  
      return { data, meta: { total, pages, skip, take } };
    }
  
    async findById(id: string) {
      const raffle = await this.prisma.ticketRaffle.findUnique({
        where: { id },
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
  
      if (!raffle) {
        throw new NotFoundException('Bilhete não encontrado');
      }
  
      return raffle;
    }
  
    async findByRaffleNumberAndRaffleEdition(raffle_number: bigint, raffle_edition_id: string) {
      const raffle = await this.prisma.ticketRaffle.findUnique({
        where: { 
          raffle_number_raffle_edition_id: {
            raffle_number,
            raffle_edition_id
          }
        },
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
  
      if (!raffle) {
        throw new NotFoundException('Bilhete nao encontrado');
      }
  
      return raffle;
    }

    async create(dto: CreateTicketRaffleDto): Promise<TicketRaffle> {
      const exists = await this.findByRaffleNumberAndRaffleEdition(
        dto.raffle_number,
        dto.raffle_edition_id
      ) 

      if (exists) {
        throw new NotFoundException('Bilhete ja cadastrado');
      }

      const created = await this.prisma.ticketRaffle.create({
        data: { 
          ...dto, 
          raffle_number: BigInt(dto.raffle_number),
        },
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
  }
  