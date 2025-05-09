import { Body, Controller, Get, Headers, HttpCode, NotFoundException, Param, Patch, Post, Query } from "@nestjs/common";
import { AuthService, JwtAuthPayload } from "./auth.service";
import { AuthLoginDto } from "./dto/auth-login.dto";
import { IsPublic } from "../decorators/is-public-validator.decorator";
import { AuthResponseSchema } from "./dto/auth-response.dto";
import { AuthResetDto } from "./dto/auth-reset.dto";
import { CurrentUser } from "../decorators/get-current-user.decorator";
import { SelfOnly } from "../decorators/self-only.decorator";

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

        const auth = await this.authService.findAll(pagination)
        return { data: auth }
    }



    @SelfOnly()
    @Get('user/:id')
    async findByUserId(@Param('id') id: string, @Query('page') skip = 1, @Query('limit') take = 10) {
        const pagination = { skip, take };
        const authUser = await this.authService.findByUserId(id, pagination);

        if (authUser.items.length === 0) {
            throw new NotFoundException('Auth para o usuário não encontrado')
        }

        return { data: authUser }
    }

    @Get('provider/:provider/provider-user/:providerUserId')
    async findByProviderAndProviderUserId(@Param('providerUserId') providerUserId: string, @Param('provider') provider: string) {
        const auth = await this.authService.findByProviderAndProviderUserId(providerUserId, provider);

        if (!auth) {
            throw new NotFoundException('Auth nao encontrado')
        }

        const authResponseDto = AuthResponseSchema.parse(auth)

        return { data: { authResponseDto } }
    }

    @Get('email/:email')
    async findByEmail(@Param('email') email: string) {
        const authEmail = await this.authService.findByEmail(email);

        if (authEmail.length === 0) {
            throw new NotFoundException('Auth para o email nao encontrado')
        }

        return { data: authEmail }
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
    async resetPassword(@CurrentUser('id') id: string, @Body() data: AuthResetDto) {
        const { old_password, new_password } = data

        await this.authService.resetPassword(id, old_password, new_password);
    }

    @IsPublic()
    @Post('forgot-password')
    @HttpCode(204)
    async forgotPassword(@Body() data: { email: string }) {
        return await this.authService.forgotPassword(data.email);
    }

    @IsPublic()
    @Post('change-forgot-password')
    async resetForgotPassword(@Query('token') token: string, @Body() data: { new_password: string }) {
        return await this.authService.resetForgotPassword(token, data.new_password);
    }

    @Get('protected')
    async protectedRoute(@Headers('authorization') token: string) {
        const auth = this.authService.verifyToken(token.split(' ')[1]);

        return {
            message: 'This route is protected by the auth guard',
            auth
        };
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        const auth = await this.authService.findById(id)

        if (!auth) {
            throw new NotFoundException('Auth nao encontrado')
        }

        const authResponseDto = AuthResponseSchema.parse(auth)

        return { data: { authResponseDto } }
    }
}