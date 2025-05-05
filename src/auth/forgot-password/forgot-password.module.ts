import { Module } from "@nestjs/common";
import ForgotPasswordController from "./forgot-password.controller";
import ForgotPasswordService from "./forgot-password.service";
import { MailModule } from "../../mail/mail.module";

@Module({
    imports: [],
    controllers: [ForgotPasswordController],
    providers: [ForgotPasswordService],
    exports: [ForgotPasswordService],
})
export class ForgotPasswordModule { }