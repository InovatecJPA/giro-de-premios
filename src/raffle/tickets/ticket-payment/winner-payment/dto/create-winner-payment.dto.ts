import { IsUUID, IsString, IsNumber, IsDate } from 'class-validator';

export class CreateWinnerPaymentDto {
    @IsString()
    ticket_raffle_id: string;

    @IsNumber()
    ticket_payment_id: string;
}
