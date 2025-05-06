import { Controller, Get, HttpCode, Post, Query } from "@nestjs/common";
import ForgotPasswordService from "./forgot-password.service";
import { plainToInstance } from "class-transformer";
import { ResponseForgotPasswordDTO } from "./dto/response-forgot-password.dto";
import { CreateForgotPasswordDto } from "./dto/create-forgot-password.dto";

@Controller('forgot-password')
export default class ForgotPasswordController {
    constructor(
        private readonly forgotPasswordService: ForgotPasswordService
    ) { }

    @Get()
    async findAll(@Query('page') skip = 1, @Query('limit') take = 10) {
        const paginationOptions = { skip, take };

        return this.forgotPasswordService.findAll(paginationOptions)
    }

    @Get(':id')
    async findById(id: string) {
        const forgotPassword = this.forgotPasswordService.findById(id)

        const forgotPasswordResponse = plainToInstance(ResponseForgotPasswordDTO, forgotPassword);

        return { data: { forgotPasswordResponse } }
    }
}