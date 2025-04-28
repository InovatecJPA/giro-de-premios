import { IsDate, IsUUID } from "class-validator";
import { CreateDepositExtractDto } from "./create-deposit-extract.dto";

export class ResponseDepositExtractDto extends CreateDepositExtractDto {
    @IsUUID('4')
    id: string

    @IsDate()
    createdAt: Date
}