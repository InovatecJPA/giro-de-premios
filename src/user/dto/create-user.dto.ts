import { Exclude, Transform } from "class-transformer";
import { IsOptional, IsEmail, IsEnum, IsPhoneNumber, IsString, IsStrongPassword, IsUUID, Matches, IsDecimal } from "class-validator";
import { Profiles } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { constrainedMemory } from "process";
import { validateHeaderValue } from "http";


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

}