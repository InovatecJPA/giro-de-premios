import { Transform } from "class-transformer";
import { IsDecimal, IsEmail, IsNumber, IsPhoneNumber, IsString, IsUUID, Matches, Min } from "class-validator";

export class CreateTicketPaymentDto {

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

    @IsString()
    discount: string

    @IsDecimal({ decimal_digits: '2' })
    @Transform(({ value }) => (value.toString()))
    total_value: string

}