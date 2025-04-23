import { Controller, Query } from "@nestjs/common";
import ForgotPasswordService from "./forgot-password.service";
import { plainToInstance } from "class-transformer";
import { ResponseForgotPasswordDTO } from "./dto/response-forgot-password.dto";

@Controller('forgot-password')
export default class ForgotPasswordController {
    constructor(
        private readonly forgotPasswordService: ForgotPasswordService
    ) { }

    async findAll(@Query('page') skip = 1, @Query('limit') take = 10) {
        const paginationOptions = { skip, take };

        return this.forgotPasswordService.findAll(paginationOptions)
    }

    async findById(id: string) {
        const forgotPassword = this.forgotPasswordService.findById(id)

        const forgotPasswordResponse = plainToInstance(ResponseForgotPasswordDTO, forgotPassword);

        return { data: { forgotPasswordResponse } }
    }
}