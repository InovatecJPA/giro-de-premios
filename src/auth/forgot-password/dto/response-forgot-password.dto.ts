import { z } from 'zod';

export const ResponseForgotPasswordSchema = z.object({
    id: z.string().uuid({ message: 'ID must be a valid UUID' }),
    auth_id: z.string().uuid({ message: 'Auth ID must be a valid UUID' }),
    password_reset_token: z.string().min(1, { message: 'Password reset token is required' }),
    password_reset_token_expires: z
        .string()
        .datetime({ message: 'Password reset token expires must be a valid ISO datetime' })
        .transform((value) => new Date(value)),
    created_at: z.date(),

});

export type ResponseForgotPasswordDto = z.infer<typeof ResponseForgotPasswordSchema>;