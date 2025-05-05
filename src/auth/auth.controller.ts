import { Body, Controller, Get, HttpCode, Param, Patch, Post, Query } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthLoginDto } from "./dto/auth-login.dto";
import { IsPublic } from "../decorators/is-public-validator.decorator";
import { plainToInstance } from "class-transformer";
import { AuthResponseDto } from "./dto/auth-response.dto";
import { AuthResetDto } from "./dto/auth-reset.dto";

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ) { }

    @Get()
    async findAll(@Query('page') skip = 1, @Query('limit') take = 10) {

        const pagination = {
            skip,
            take
        }

        return await this.authService.findAll(pagination)
    }


    @Get(':id')
    async findById(@Param('id') id: string) {
        const auth = await this.authService.findById(id)

        const authResponseDto = plainToInstance(AuthResponseDto, auth);

        return { data: { authResponseDto } }
    }

    @Get('user/:userId')
    async findByUserId(@Param('userId') userId: string, @Query('page') skip = 1, @Query('limit') take = 10) {
        const pagination = { skip, take };
        return await this.authService.findByUserId(userId, pagination);
    }

    @Get('provider/:provider/provider-user/:providerUserId')
    async findByProviderAndProviderUserId(@Param('providerUserId') providerUserId: string, @Param('provider') provider: string) {
        const auth = await this.authService.findByProviderAndProviderUserId(providerUserId, provider);

        const authResponseDto = plainToInstance(AuthResponseDto, auth);

        return { data: { authResponseDto } }
    }

    @Get('email/:email')
    async findByEmail(@Param('email') email: string) {
        return await this.authService.findByEmail(email);
    }

    @IsPublic()
    @Post('login')
    async login(@Body() data: AuthLoginDto) {
        return await this.authService.login(data);
    }

    @IsPublic()
    @Post('activate')
    async activate(@Query('token') token: string) {
        return await this.authService.activate(token);
    }

    @HttpCode(204)
    @Patch('reset-password')
    async resetPassword(@Param('id') id: string, @Body() data: AuthResetDto) {
        const { old_password, new_password } = data

        await this.authService.resetPassword(id, old_password, new_password);
    }
}