import { IsEmail, IsNumber, IsOptional, IsPhoneNumber, IsString, IsUUID, Matches, Min } from "class-validator";

export class BuyingTicketsDto {

    @IsString()
    @Matches(/^\d{11}$/, { message: 'CPF must have exactly 11 digits' })
    cpf: string;

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber('BR', { message: 'Número de telefone inválido' })
    number: string;

    @IsNumber()
    @Min(1)
    ticket_amount: number;

    @IsUUID('4')
    raffle_edition_id: string

    @IsOptional()
    @IsUUID('4')
    user_id?: string
}