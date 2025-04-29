import { Module } from "@nestjs/common";
import { RaffleEditionService } from "./raffle-edition.service";
import { RaffleEditionController } from "./raffle-edition.controller";
import { TicketRaffleModule } from "../tickets/ticket-raffle/ticket-raffle.module";
import { TicketQueueModule } from "../tickets/ticket-queue/ticket-queue.module";

@Module({
    imports: [TicketRaffleModule, TicketQueueModule],
    controllers: [RaffleEditionController],
    providers: [RaffleEditionService],
    exports: [RaffleEditionService],
})
export class RaffleEditionModule { }