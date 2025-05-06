// src/ticket-raffle/dto/response-ticket-raffle.dto.ts
import { z } from 'zod';
import { TicketRaffleStatus } from '../../../../prisma/generated/prisma/client';


export const ResponseTicketRaffleSchema = z.object({
  id: z.string().uuid({ message: 'ID must be a valid UUID' }),
  raffle_number: z
    .any()
    .transform((value) => value.toString())
    .pipe(z.string({ message: 'Raffle number must be a string' })),
  status: z.nativeEnum(TicketRaffleStatus, { message: 'Status must be a valid TicketRaffleStatus' }),
  prize_id: z.string().uuid({ message: 'Prize ID must be a valid UUID' }).nullable(),
  raffle_edition_id: z.string().uuid({ message: 'Raffle edition ID must be a valid UUID' }),
  created_at: z.date(),
  updated_at: z.date(),
});

export type ResponseTicketRaffleDto = z.infer<typeof ResponseTicketRaffleSchema>;