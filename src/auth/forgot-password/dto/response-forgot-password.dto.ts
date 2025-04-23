import { IsDate, IsUUID } from "class-validator";
import { CreateForgotPasswordDto } from "./create-forgot-password.dto";

export class ResponseForgotPasswordDTO extends CreateForgotPasswordDto {
    @IsUUID('4')
    id: string

    @IsDate()
    created_at: Date
}