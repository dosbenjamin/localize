import * as z from 'zod'

export const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .strict()

export type SignUpSchema = z.infer<typeof signUpSchema>
