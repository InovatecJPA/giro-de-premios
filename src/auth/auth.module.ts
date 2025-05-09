import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import UserModule from '../user/user.module';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { APP_GUARD } from '@nestjs/core';
import { MailModule } from '../mail/mail.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { SelfOnlyGuard } from '../guards/self-only.guard';
import { AuthGuard } from '../guards/auth.guard';
import { RolesGuard } from '../guards/roles.guard';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || 'secret',
      signOptions: { expiresIn: '1d', algorithm: 'HS256' },
    }),
    PrismaModule,
    MailModule,
    ForgotPasswordModule,
  ],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: SelfOnlyGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    }
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule { }
