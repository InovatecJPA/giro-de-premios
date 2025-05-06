import { z } from 'zod';
import { RaffleEditionStatus } from '../../../prisma/generated/prisma/client';


export const ResponseRaffleEditionSchema = z.object({
  id: z.string().uuid({ message: 'ID must be a valid UUID' }),
  title: z.string().min(1, { message: 'Title is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
  status: z.nativeEnum(RaffleEditionStatus, { message: 'Status must be a valid RaffleEditionStatus' }),
  total_tickets: z.number().int().positive({ message: 'Total tickets must be a positive integer' }),
  winner_tickets: z.number().int().nonnegative({ message: 'Winner tickets must be a non-negative integer' }),
  price: z.any(),
  raffle_draw_date: z
    .string()
    .datetime({ message: 'Raffle draw date must be a valid ISO datetime' })
    .transform((value) => new Date(value)),
  user_id: z.string().uuid({ message: 'User ID must be a valid UUID' }).nullable(),
});

export type ResponseRaffleEditionDto = z.infer<typeof ResponseRaffleEditionSchema>;