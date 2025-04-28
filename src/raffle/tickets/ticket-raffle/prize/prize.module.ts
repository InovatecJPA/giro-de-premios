import { Module } from "@nestjs/common";
import { PrizeService } from "./prize.service";
import { PrizeController } from "./prize.controller";

@Module({
    imports: [],
    controllers: [PrizeController],
    providers: [PrizeService],
    exports: []
})
export class PrizeModule { }