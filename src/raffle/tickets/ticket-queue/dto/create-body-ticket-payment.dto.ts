import { IsUUID } from "class-validator";
import { CreateTicketPaymentDto } from "../../ticket-payment/dto/create-ticket-paymento.dto";

export class CreateBodyTicketQueueDto extends CreateTicketPaymentDto {

    @IsUUID('4')
    raffle_edition_id: string
}