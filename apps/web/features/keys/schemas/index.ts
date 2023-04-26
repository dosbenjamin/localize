import { z } from 'zod'

export const CreateKeyInputSchema = z.object({
  dictionaryId: z.string().uuid(),
  key: z.string().min(1),
  projectId: z.string().uuid(),
})
export type CreateKeyInput = z.infer<typeof CreateKeyInputSchema>
