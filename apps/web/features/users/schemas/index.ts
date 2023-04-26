import { z } from 'zod'

export const ReadUserOutputSchema = z.object({
  email: z.string().email(),
})
export type ReadUserOutput = z.infer<typeof ReadUserOutputSchema>
