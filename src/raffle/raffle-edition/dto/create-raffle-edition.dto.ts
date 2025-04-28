import { Transform } from 'class-transformer';
import { IsString, IsOptional, IsEnum, IsInt, Min, IsDateString, IsUUID, IsDecimal } from 'class-validator';
import { RaffleEditionStatus } from 'src/prisma/generated/prisma/client';

export class CreateRaffleEditionDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsEnum(RaffleEditionStatus)
  status?: RaffleEditionStatus

  @IsOptional()
  @IsInt()
  @Min(1)
  total_tickets: number;

  @IsInt()
  @Min(1)
  winner_tickets: number;

  @IsDecimal({ decimal_digits: '2' })
  @Transform(({ value }) => (value.toString()))
  price: string;

  @IsDateString()
  raffle_draw_date: string;

  @IsOptional()
  @IsUUID()
  user_id?: string | null
}

