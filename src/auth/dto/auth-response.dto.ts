import { IsBoolean, IsDate, IsString, IsUUID } from "class-validator";


export class AuthResponseDto {
    @IsUUID('4')
    id: string;

    @IsString()
    provider: string;

    @IsBoolean()
    is_verified: boolean

    @IsString()
    provider_user_id: string;

    @IsUUID('4')
    user_id: string;

    @IsDate()
    created_at: Date;

    @IsDate()
    updated_at: Date
}