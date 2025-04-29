import {
  IsEnum,
  IsOptional,
  IsUUID,
  Min,
} from 'class-validator';
import { IsBigInt } from 'src/decorators/bigint-validator.decorator';
import { TicketRaffleStatus } from 'src/prisma/generated/prisma/client';

export class CreateTicketRaffleDto {
  @IsBigInt()
  @Min(1)
  ticket_raffle_number: bigint;

  @IsEnum(TicketRaffleStatus)
  @IsOptional()
  status?: TicketRaffleStatus

  @IsOptional()
  @IsUUID('4')
  prize_id: string | null;

  @IsUUID('4')
  raffle_edition_id: string;
}
