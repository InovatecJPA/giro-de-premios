import { ValidateNested } from "class-validator";
import { CreateRaffleEditionPrizeDto } from "./create-raffle-edition-prize.dto";
import { CreateRaffleEditionDto } from "./create-raffle-edition.dto";
import { Type } from "class-transformer";

export class CreateBodyRaffleEditionDto extends CreateRaffleEditionDto {

    @ValidateNested({ each: true })
    @Type(() => CreateRaffleEditionPrizeDto)
    prizes: CreateRaffleEditionPrizeDto[]
}