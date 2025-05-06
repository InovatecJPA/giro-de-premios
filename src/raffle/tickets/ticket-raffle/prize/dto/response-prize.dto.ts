import { create } from 'domain';
import { z } from 'zod';

export const ResponsePrizeSchema = z.object({
  id: z.string().uuid({ message: 'ID must be a valid UUID' }),
  prize_name: z.string().min(1, { message: 'Prize name is required' }),
  prize_quantity: z
    .number()
    .int({ message: 'Prize quantity must be an integer' })
    .nonnegative({ message: 'Prize quantity must be non-negative' }),
  created_at: z.date(),
  updated_at: z.date(),
});

export type ResponsePrizeDto = z.infer<typeof ResponsePrizeSchema>;