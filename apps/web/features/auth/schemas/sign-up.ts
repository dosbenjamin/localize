import { z } from 'zod'

export const SignUpSchema = z
  .object({
    email: z.string().email('Email is invalid'),
    password: z.string().min(8, 'Password must be at least 8 character(s)'),
    passwordConfirmation: z.string().min(8, 'Password must be at least 8 character(s)'),
  })
  .refine(({ password, passwordConfirmation }) => password === passwordConfirmation, {
    message: "Passwords don't match",
    path: ['passwordConfirmation'],
  })

export type SignUpValues = z.infer<typeof SignUpSchema>
