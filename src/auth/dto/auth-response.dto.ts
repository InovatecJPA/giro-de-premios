import { z } from 'zod';


export const AuthResponseSchema = z.object({
    id: z.string().uuid({ message: 'ID must be a valid UUID' }),
    provider: z.string(),
    provider_user_id: z.string().min(1, { message: 'Provider user ID is required' }),
    is_verified: z.boolean({ message: 'Is verified must be a boolean' }).default(false),
    user_id: z.string().uuid({ message: 'User ID must be a valid UUID' }),
    created_at: z.date(),
    updated_at: z.date(),
    password_hash: z.any().nullable().optional().transform(() => undefined),
    activation_token: z.any().nullable().optional().transform(() => undefined),
    expiration_date: z.any().nullable().optional().transform(() => undefined),
});

export type AuthResponseDto = z.infer<typeof AuthResponseSchema>;