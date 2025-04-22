import { Module } from "@nestjs/common";
import { RaffleEditionService } from "./raffle-edition.service";
import { RaffleEditionController } from "./raffle-edition.controller";

@Module({
    imports: [],
    controllers: [RaffleEditionController],
    providers: [RaffleEditionService],
    exports: [],
})
export class RaffleEditionModule {}