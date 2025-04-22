import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthLoginDto } from "./dto/auth-login.dto";
import { IsPublic } from "../decorators/is-public-validator.decorator";

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
        return await this.authService.findById(id)
    }

    @Get('user/:userId')
    async findByUserId(@Param('userId') userId: string, @Query('page') skip = 1, @Query('limit') take = 10) {
        const pagination = { skip, take };
        return await this.authService.findByUserId(userId, pagination);
    }

    @Get('provider/:provider/provider-user/:providerUserId')
    async findByProviderAndProviderUserId(@Param('providerUserId') providerUserId: string, @Param('provider') provider: string) {
        return await this.authService.findByProviderAndProviderUserId(providerUserId, provider);
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


}