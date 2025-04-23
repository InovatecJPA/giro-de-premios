import { IsDate, IsString, IsUUID } from "class-validator"

export class CreateForgotPasswordDto {
    @IsUUID('4')
    auth_id: string

    @IsString()
    password_reset_token: string

    @IsDate()
    password_reset_token_expires: Date
}