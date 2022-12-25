import * as z from 'zod'

export const signInSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
  })
  .strict()

export type SignInSchema = z.infer<typeof signInSchema>
