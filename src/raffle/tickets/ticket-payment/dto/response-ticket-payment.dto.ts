import { IsDate, IsString, IsUUID } from "class-validator";
import { CreateTicketPaymentDto } from "./create-ticket-paymento.dto";

export class ResponseTicketPaymentDto extends CreateTicketPaymentDto {
    @IsUUID('4')
    id: string


    @IsDate()
    created_at: Date
}