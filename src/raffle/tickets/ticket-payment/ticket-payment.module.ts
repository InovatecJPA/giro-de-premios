import { Module } from "@nestjs/common";
import { RaffleEditionModule } from "../../raffle-edition/raffle-edition.module";
import { DiscountRuleModule } from "../../discount-rule/discount-rule.module";
import { TicketPaymentController } from "./ticket-payment.controller";
import { TicketPaymentService } from "./ticket-payment.service";
import { TicketRaffleModule } from "../ticket-raffle/ticket-raffle.module";
import { TicketQueueModule } from "../ticket-queue/ticket-queue.module";
import { UserService } from "../../../user/user.service";

@Module({
    imports: [
        RaffleEditionModule,
        DiscountRuleModule,
        TicketRaffleModule,
        TicketQueueModule,
        UserService,
    ],
    controllers: [TicketPaymentController],
    providers: [TicketPaymentService],
    exports: []
})
export class TicketPaymentModule { }