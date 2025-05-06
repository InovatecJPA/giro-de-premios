import { z } from 'zod';
import { PaymentStatus } from '../../../../../prisma/generated/prisma/client';

export const ResponseWinnerPaymentSchema = z.object({
    id: z.string().uuid({ message: 'ID must be a valid UUID' }),
    ticket_raffle_id: z.string().uuid({ message: 'Ticket raffle ID must be a valid UUID' }),
    ticket_payment_id: z.string().uuid({ message: 'Ticket payment ID must be a valid UUID' }),
    status: z.nativeEnum(PaymentStatus, { message: 'Status must be a valid PaymentStatus' }),
    payment_date: z.date().optional(),
    created_at: z.date(),
    updated_at: z.date(),
});

// Type for TypeScript
export type ResponseWinnerPaymentDto = z.infer<typeof ResponseWinnerPaymentSchema>;