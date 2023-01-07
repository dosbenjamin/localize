import { z } from 'zod'

export const signUpSchema = z
  .object({
    confirmPassword: z.string().min(8),
    email: z.string().email(),
    password: z.string().min(8),
  })
  .strict()

export type SignUpSchema = z.infer<typeof signUpSchema>
