// test/utils/test-auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from '../../src/auth/auth.service';
import { PrismaModule } from '../../src/prisma/prisma.module';
import { MailModule } from '../../src/mail/mail.module';
import { ForgotPasswordModule } from '../../src/auth/forgot-password/forgot-password.module';
import { AuthController } from '../../src/auth/auth.controller';


@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET || 'secret',
            signOptions: { expiresIn: '1d', algorithm: 'HS256' },
        }),
        PrismaModule,
        MailModule,
        ForgotPasswordModule
    ],
    providers: [
        AuthService,
    ],
    exports: [AuthService],
    controllers: [AuthController],
})
export class TestAuthModule { }
