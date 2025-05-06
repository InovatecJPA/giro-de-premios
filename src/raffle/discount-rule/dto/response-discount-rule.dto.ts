import { z } from 'zod';

export const ResponseDiscountRuleSchema = z.object({
  id: z.string().uuid({ message: 'ID must be a valid UUID' }),
  min_tickets: z.any(),
  discount_value: z.any(),
  raffle_edition_id: z.string().uuid({ message: 'Raffle edition ID must be a valid UUID' }),
});

export type ResponseDiscountRuleDto = z.infer<typeof ResponseDiscountRuleSchema>;