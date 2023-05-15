import { z } from 'zod'

export const CreateKeyInputSchema = z.object({
  dictionary_id: z.string().uuid(),
  key: z.string().min(1),
  project_id: z.string().uuid(),
})
export type CreateKeyInput = z.infer<typeof CreateKeyInputSchema>
