import { IsDate, IsString, IsUUID } from "class-validator";
import { CreateTicketPaymentDto } from "./create-ticket-payment.dto";

export class ResponseTicketPaymentDto extends CreateTicketPaymentDto {
    @IsUUID('4')
    id: string


    @IsDate()
    created_at: Date
}