import { IsNumberString, IsString } from 'class-validator';

export class PatchAddFinalPrizeDto {

    @IsNumberString()
    ticket_number: bigint;
}

