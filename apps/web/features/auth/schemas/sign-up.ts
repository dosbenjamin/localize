import { z } from 'zod'

export const SignUpSchema = z.object({
  confirmPassword: z.string().min(8),
  email: z.string().email(),
  password: z.string().min(8),
})

export type SignUpValues = z.infer<typeof SignUpSchema>
