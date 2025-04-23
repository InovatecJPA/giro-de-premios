// dto/response-raffle-edition.dto.ts
import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { RaffleEditionStatus } from 'src/prisma/generated/prisma/client';

@Exclude()
export class ResponseRaffleEditionDto {
  @Expose()
  id: string;

  @Expose()
  title: string;

  @Expose()
  description: string;

  @Expose()
  status: RaffleEditionStatus;

  @Expose()
  total_tickets: number;

  @Expose()
  winner_tickets: number;

  @Expose()
  @Transform(({ value }) => value.toString())
  price: string

  @Expose()
  @Type(() => Date)
  raffle_draw_date: Date;

  @Expose()
  user_id: string | null;
}
