import { create } from 'domain';
import { z } from 'zod';
import { Profiles } from '../../prisma/generated/prisma/client';

export const ResponseUserSchema = z.object({
  id: z.string().uuid({ message: 'ID must be a valid UUID' }),
  name: z.string(),
  cpf: z.string().regex(/^\d{11}$/, { message: 'CPF must have exactly 11 digits' }),
  number: z.string().regex(/^\d{10,11}$/, { message: 'Invalid Brazilian phone number' }), // Adjust regex as needed
  social_media: z.string().url({ message: 'Invalid URL' }).nullable().optional(),
  saldo: z.any(),
  comissao: z.any(),
  profile: z.nativeEnum(Profiles, { message: 'Profile must be a valid Profile' }),
  owner_id: z.string().uuid({ message: 'Owner ID must be a valid UUID' }).nullable().optional(),
  created_at: z.date(),
  updated_at: z.date(),

});

export type ResponseUserDTO = z.infer<typeof ResponseUserSchema>;