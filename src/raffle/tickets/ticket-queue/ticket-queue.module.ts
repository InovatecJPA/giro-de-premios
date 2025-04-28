import { BullModule } from "@nestjs/bull";
import { Module } from "@nestjs/common";
import { TicketRaffleModule } from "../ticket-raffle/ticket-raffle.module";
import { TicketQueueService } from "./ticket-queue.service";
import { TicketCleanupService } from "./ticket-cleanup.service";
import { TicketQueueProcessor } from "./ticket-queue.processor";
import { RaffleEditionModule } from "../../raffle-edition/raffle-edition.module";
import { DiscountRuleModule } from "../../discount-rule/discount-rule.module";
import { BullBoardModule } from "@bull-board/nestjs";
import { BullAdapter } from "@bull-board/api/bullAdapter";

@Module({
    imports: [
        BullModule.registerQueue({
            name: 'ticket-purchase'
        }),
        BullBoardModule.forFeature({
            name: 'ticket-purchase',
            adapter: BullAdapter,
        }),
        TicketRaffleModule,
        RaffleEditionModule,
        DiscountRuleModule,
    ],
    controllers: [],
    providers: [
        TicketQueueService,
        TicketCleanupService,
        TicketQueueProcessor,
    ],
    exports: [
        TicketQueueService,
    ]
})
export class TicketQueueModule { }