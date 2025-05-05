import { IsDate, IsString, IsUUID } from "class-validator"

export class CreateForgotPasswordDto {
    @IsUUID('4')
    auth_id: string
}