import { IsEmail, IsString, IsUUID } from 'class-validator';

export class SendEmailTicketPurchaseDto {

    @IsString()
    raffle_edition_title: string;

    @IsUUID('4')
    ticket_payment_id: string;
}

