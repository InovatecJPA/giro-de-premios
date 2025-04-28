// src/ticket-raffle/dto/response-ticket-raffle.dto.ts
import { Exclude, Expose, Transform } from 'class-transformer';
import { TicketRaffleStatus } from 'src/prisma/generated/prisma/client';

@Exclude()
export class ResponseTicketRaffleDto {
  @Expose()
  id: string;

  @Expose()
  @Transform(({ value }) => value.toString())
  raffle_number: string;

  @Expose()
  status: TicketRaffleStatus;

  @Expose()
  prize_id: string;

  @Expose()
  raffle_edition_id: string;

  @Expose()
  created_at: Date;

  @Expose()
  updated_at: Date;
}
