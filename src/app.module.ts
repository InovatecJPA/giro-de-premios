import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import UserModule from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ForgotPasswordModule } from './auth/forgot-password/forgot-password.module';
import { DiscountRuleModule } from './raffle/discount-rule/discount-rule.module';
import { TicketPaymentModule } from './raffle/tickets/ticket-payment/ticket-payment.module';
import { RaffleEditionModule } from './raffle/raffle-edition/raffle-edition.module';
import { TicketRaffleModule } from './raffle/tickets/ticket-raffle/ticket-raffle.module';
import { PrizeModule } from './raffle/tickets/ticket-raffle/prize/prize.module';
import { ExtractModule } from './user/extract/extract.module';
import { BullModule } from '@nestjs/bull';
import { TicketQueueModule } from './raffle/tickets/ticket-queue/ticket-queue.module';
import { ScheduleModule } from '@nestjs/schedule';
import { BullBoardModule } from '@bull-board/nestjs';
import { ExpressAdapter } from '@bull-board/express';
import { WithdrawalRequestModule } from './user/extract/withdrawal-request/withdrawal-request.module';



@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379
      }
    }),
    BullBoardModule.forRoot({
      route: '/queues',
      adapter: ExpressAdapter
    }),
    ScheduleModule.forRoot(),
    UserModule,
    AuthModule,
    ForgotPasswordModule,
    DiscountRuleModule,
    RaffleEditionModule,
    TicketPaymentModule,
    TicketRaffleModule,
    PrizeModule,
    ExtractModule,
    TicketQueueModule,
    WithdrawalRequestModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
