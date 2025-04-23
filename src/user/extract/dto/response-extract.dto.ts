import { IsDate, IsUUID } from "class-validator";
import { CreateExtractDto } from "./create-extract.dto";

export class ResponseExtractDto extends CreateExtractDto {
    @IsUUID('4')
    id: string

    @IsDate()
    createdAt: Date
}