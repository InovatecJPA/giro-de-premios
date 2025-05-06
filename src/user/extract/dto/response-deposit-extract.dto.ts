import { z } from 'zod'
import { ExtractType } from '../../../prisma/generated/prisma/client'

export const ResponseDepositExtractSchema = z.object({
    id: z.string().uuid({ message: 'ID must be a valid UUID' }),
    amount: z.any(),
    type: z.nativeEnum(ExtractType, { message: 'Type must be a valid ExtractType' }),
    ticket_payment_id: z.string().uuid({ message: 'Ticket Payment ID must be a valid UUID' }).optional(),
    user_id: z.string().uuid({ message: 'User ID must be a valid UUID' }),
    created_at: z.date(),
    comissao_user_id: z.string().uuid({ message: 'Comissao User ID must be a valid UUID' }).optional(),
})

export type ResponseDepositExtractDto = z.infer<typeof ResponseDepositExtractSchema>
