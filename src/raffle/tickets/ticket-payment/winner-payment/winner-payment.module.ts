import { Module } from '@nestjs/common';
import { WinnerPaymentService } from './winner-payment.service';
import { WinnerPaymentController } from './winner-payment.controller';
import { PrismaService } from '../../../../prisma/prisma.service';

@Module({
    imports: [],
    controllers: [WinnerPaymentController],
    providers: [WinnerPaymentService],
    exports: []
})
export class WinnerPaymentModule { }

