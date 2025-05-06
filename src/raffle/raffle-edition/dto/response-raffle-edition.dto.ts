import { Decimal } from '@prisma/client/runtime/library';
import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { RaffleEditionStatus } from '../../../prisma/generated/prisma/client';

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
  @Transform(({ value }) => {
    if (value instanceof Decimal) return value.toString();
    if (typeof value === 'string') return value;
    return new Decimal(value).toString();
  })
  price: string;

  @Expose()
  @Type(() => Date)
  raffle_draw_date: Date;

  @Expose()
  user_id: string | null;
}
