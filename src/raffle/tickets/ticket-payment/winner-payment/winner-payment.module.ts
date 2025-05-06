import { Module } from '@nestjs/common';
import { WinnerPaymentService } from './winner-payment.service';
import { WinnerPaymentController } from './winner-payment.controller';

@Module({
    imports: [],
    controllers: [WinnerPaymentController],
    providers: [WinnerPaymentService],
    exports: [WinnerPaymentService]
})
export class WinnerPaymentModule { }

