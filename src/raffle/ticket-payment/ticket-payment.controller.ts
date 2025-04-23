import { Controller } from "@nestjs/common";
import { TicketPaymentService } from "./ticket-payment.service";

@Controller('ticket-payment')
export class TicketPaymentController {
    constructor(
        private readonly ticketPaymentService: TicketPaymentService
    ) { }
}