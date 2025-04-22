import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsUUID,
  Min,
} from 'class-validator';
import { IsBigInt } from 'src/decorators/bigint-validator.decorator';
import { TicketRaffleStatus } from 'src/prisma/generated/prisma/client';

export class CreateTicketRaffleDto {

  @IsBigInt()
  @Min(1)
  raffle_number: bigint;

  @IsEnum(TicketRaffleStatus)
  @IsOptional()
  status?: TicketRaffleStatus;

  @IsOptional()
  @IsUUID()
  prize_id: string;

  @IsUUID()
  raffle_edition_id: string;
}
