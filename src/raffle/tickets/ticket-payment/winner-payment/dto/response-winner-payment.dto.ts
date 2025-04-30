import { IsUUID, IsDate, IsString, IsEnum } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { PaymentStatus } from '../../../../../prisma/generated/prisma/client';

export class ResponseWinnerPaymentDto {
    @IsUUID('4')
    id: string;

    @IsString()
    ticket_raffle_id: string;

    @IsString()
    ticket_payment_id: string;

    @IsEnum(PaymentStatus)
    status: PaymentStatus;

    @IsDate()
    payment_date: Date;

    @IsDate()
    created_at: Date;

    @IsDate()
    updated_at: Date;
}

