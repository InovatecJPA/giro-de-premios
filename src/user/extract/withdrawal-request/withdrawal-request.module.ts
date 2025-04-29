import { Module } from '@nestjs/common';
import { WithdrawalRequestService } from './withdrawal-request.service';
import { WithdrawalRequestController } from './withdrawal-request.controller';

@Module({
    imports: [],
    controllers: [WithdrawalRequestController],
    providers: [WithdrawalRequestService],
    exports: [],
})
export class WithdrawalRequestModule { }
