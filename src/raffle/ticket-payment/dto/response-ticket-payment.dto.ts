import { IsDate, IsString, IsUUID } from "class-validator";
import { CreateTicketPaymentDto } from "./create-ticket-payment.dto";

export class ResponseTicketPaymentDto extends CreateTicketPaymentDto {
    @IsUUID('4')
    id: string

    @IsString()
    discount: string

    @IsString()
    total_value: string

    @IsDate()
    created_at: Date
}