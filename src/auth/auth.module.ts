import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import UserModule from "../user/user.module";
import { PrismaModule } from "../prisma/prisma.module";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET || 'secret',
            signOptions: { expiresIn: '1d', algorithm: 'HS256' }
        }),
        UserModule,
        PrismaModule,
    ],
    providers: [AuthService],
    controllers: [AuthController],
    exports: [JwtModule]
})
export class AuthModule { }