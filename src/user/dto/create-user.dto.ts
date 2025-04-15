import { Exclude, Transform } from "class-transformer";
import { IsOptional, IsEmail, IsEnum, IsPhoneNumber, IsString, IsStrongPassword, IsUUID, Matches } from "class-validator";
import { Profiles } from "@prisma/client";


export class CreateUserDTO {
    @IsString()
    name: string;

    @IsString()
    @Matches(/^\d{11}$/, { message: 'CPF must have exactly 11 digits' })
    cpf: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber('BR', { message: 'Telefone Invalido' })
    number: string;

    @IsString()
    @IsOptional()
    @Matches(/(?:https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?/)
    social_media?: string;

    @Exclude({ toPlainOnly: true })
    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    }, {
        message: 'A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um símbolo'
    })
    password: string;

    @Matches(/^\d*\.\d{1,2}$/, { message: 'Commission must be in format 0.00 with up to 2 decimal places' })
    comissao: string;

    @IsEnum(Profiles)
    profile: Profiles;

    @IsOptional()
    @IsUUID()
    owner_id?: string | null;

}