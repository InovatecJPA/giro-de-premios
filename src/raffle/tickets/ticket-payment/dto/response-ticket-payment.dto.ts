import { z } from 'zod';

export const ResponseTicketPaymentSchema = z.object({
    id: z.string().uuid({ message: 'ID must be a valid UUID' }),
    cpf: z
        .string()
        .regex(/^\d{11}$/, { message: 'CPF must have exactly 11 digits' }),
    email: z.string().email({ message: 'Invalid email address' }),
    name: z.string().min(1, { message: 'Name is required' }),
    number: z
        .string()
        .regex(/^\d{10,11}$/, { message: 'Invalid Brazilian phone number' })
        .nullable()
        .optional(),
    ticket_amount: z
        .number()
        .int()
        .positive({ message: 'Ticket amount must be a positive integer' }),
    discount: z.any(),
    total_value: z.any(),
    created_at: z.date(),
});

export type ResponseTicketPaymentDto = z.infer<typeof ResponseTicketPaymentSchema>;