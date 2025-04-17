import { Transform, Type } from "class-transformer";
import { IsOptional, IsEmail, IsEnum, IsPhoneNumber, IsString, IsStrongPassword, IsUUID, Matches, IsDecimal, ValidateNested } from "class-validator";
import { Profiles } from "@prisma/client";
import { AuthRegisterDto } from "../../auth/dto/auth-register.dto";



export class CreateUserDTO {
    @IsString()
    name: string;

    @IsString()
    @Matches(/^\d{11}$/, { message: 'CPF must have exactly 11 digits' })
    cpf: string;


    @IsPhoneNumber('BR', { message: 'Telefone Invalido' })
    number: string;

    @IsString()
    @IsOptional()
    @Matches(/(?:https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?/)
    social_media?: string;

    @IsOptional()
    @Transform(({ value }) => {
        if (value === undefined || value === null) {
            return "0.00";
        }
        return value.toString();
    })
    comissao: string;

    @IsEnum(Profiles)
    profile: Profiles;

    @IsOptional()
    @IsUUID()
    owner_id?: string | null;

    @ValidateNested()
    @Type(() => AuthRegisterDto)
    credentials: AuthRegisterDto
}