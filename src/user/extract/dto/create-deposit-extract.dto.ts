import { IsEnum, IsNumber, IsUUID, Min, ValidateIf } from "class-validator";
import { ExtractType } from "../../../prisma/generated/prisma/client";

export class CreateDepositExtractDto {
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