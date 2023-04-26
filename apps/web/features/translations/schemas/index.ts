import { z } from 'zod'

export const TranslationPageParamsSchema = z.object({
  dictionaryId: z.string().uuid(),
  projectId: z.string().uuid(),
  translationId: z.string().uuid(),
})
export type TranslationPageParams = z.infer<typeof TranslationPageParamsSchema>
