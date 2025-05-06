import { Decimal } from '@prisma/client/runtime/library';
import { Transform } from 'class-transformer';
import { IsString, IsOptional, IsEnum, IsInt, Min, IsDateString, IsUUID, IsDecimal, Validate, ValidateNested, IsNumberString } from 'class-validator';
import { RaffleEditionStatus } from '../../../prisma/generated/prisma/client';

export class CreateRaffleEditionDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsEnum(RaffleEditionStatus)
  status?: RaffleEditionStatus

  @IsUUID('4')
  prize_id: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  total_tickets: number;

  @IsDecimal({ decimal_digits: '2' })
  @Transform(({ value }) => (value.toString()))
  price: Decimal;

  @IsNumberString()
  winner_ticket_drawn: bigint;

  @IsDateString()
  raffle_draw_date: string;

  @IsOptional()
  @IsUUID()
  user_id?: string | null

}
