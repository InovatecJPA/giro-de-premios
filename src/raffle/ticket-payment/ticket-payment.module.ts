import { Module } from "@nestjs/common";
import { RaffleEditionModule } from "../raffle-edition/raffle-edition.module";
import { DiscountRuleModule } from "../discount-rule/discount-rule.module";
import { TicketPaymentController } from "./ticket-payment.controller";
import { TicketPaymentService } from "./ticket-payment.service";

@Module({
    imports: [RaffleEditionModule, DiscountRuleModule],
    controllers: [TicketPaymentController],
    providers: [TicketPaymentService],
    exports: []
})
export class TicketPaymentModule { }