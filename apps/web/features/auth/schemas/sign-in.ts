import { z } from 'zod'

export const SignInSchema = z.object({
  email: z.string().email('Email is invalid'),
  password: z.string().min(8, 'Password must be at least 8 character(s)'),
})

export type SignInValues = z.infer<typeof SignInSchema>
