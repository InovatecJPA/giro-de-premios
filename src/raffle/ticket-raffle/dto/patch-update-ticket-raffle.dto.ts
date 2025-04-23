import { PartialType } from '@nestjs/mapped-types';
import { CreateTicketRaffleDto } from './create-ticket-raffle.dto';

export class PatchUpdateTicketRaffleDto extends PartialType(CreateTicketRaffleDto) {}
