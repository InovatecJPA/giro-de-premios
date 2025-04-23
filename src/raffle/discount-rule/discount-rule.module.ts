import { Module } from "@nestjs/common";
import { DiscountRuleController } from "./discount-rule.controller";
import { DiscountRuleService } from "./discount-rule.service";

@Module({
    imports: [],
    controllers: [DiscountRuleController],
    providers: [DiscountRuleService],
    exports: [DiscountRuleService]
})
export class DiscountRuleModule { }