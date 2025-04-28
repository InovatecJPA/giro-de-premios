import { Module } from "@nestjs/common";
import { TicketRaffleController } from "./ticket-raffle.controller";
import { TicketRaffleService } from "./ticket-raffle.service";

@Module({
    imports: [],
    controllers: [TicketRaffleController],
    providers: [TicketRaffleService],
    exports: [TicketRaffleService]
})
export class TicketRaffleModule { }