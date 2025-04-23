import { PartialType } from '@nestjs/mapped-types';
import { CreateRaffleEditionDto } from './create-raffle-edition.dto';

export class PatchUpdateRaffleEditionDto extends PartialType(CreateRaffleEditionDto) {}
