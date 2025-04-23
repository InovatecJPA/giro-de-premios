import { IsEnum, IsNumber, IsUUID, Min } from "class-validator";
import { ExtractType } from "../../../prisma/generated/prisma/client";

export class CreateExtractDto {
    @IsUUID('4')
    user_id: string;

    @IsNumber()
    @Min(1)
    amount: number;

    @IsEnum(ExtractType)
    type: ExtractType;

    @IsUUID('4')
    ticket_payment_id: string;
}