import { IsUUID, IsNumber, ValidateNested } from "class-validator";
import { CreateRaffleEditionPrizeDto } from "../../../raffle-edition/dto/create-raffle-edition-prize.dto";
import { Type } from "class-transformer";

export class CreateTicketQueuePrizedDto {
    @IsUUID("4")
    raffle_edition_id: string;

    @IsNumber()
    quantity: number

    @ValidateNested()
    @Type(() => CreateRaffleEditionPrizeDto)
    prizes: CreateRaffleEditionPrizeDto[]
}
