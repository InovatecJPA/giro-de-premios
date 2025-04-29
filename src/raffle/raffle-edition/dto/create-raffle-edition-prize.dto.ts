import { IsNumber, IsUUID, Min } from "class-validator";

export class CreateRaffleEditionPrizeDto {
    @IsNumber()
    @Min(1)
    quantity: number;

    @IsUUID('4')
    prize_id: string;
}