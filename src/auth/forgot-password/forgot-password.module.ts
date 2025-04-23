import { Module } from "@nestjs/common";
import ForgotPasswordController from "./forgot-password.controller";
import ForgotPasswordService from "./forgot-password.service";

@Module({
    imports: [],
    controllers: [ForgotPasswordController],
    providers: [ForgotPasswordService],
    exports: []
})
export class ForgotPasswordModule { }