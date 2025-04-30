import { IsBoolean, IsDate, IsEnum } from "class-validator";
import { PaymentStatus } from "../../../../../prisma/generated/prisma/client";

export class UpdateStatusSuccessWinnerPaymentDto {

    @IsEnum(PaymentStatus)
    status: PaymentStatus
    @IsDate()
    payment_date: Date
}