import { z } from 'zod'

export const CreateLanguageInputSchema = z.object({
  iso: z
    .string()
    .length(2, 'Enter a 2 ISO code to add language')
    .transform((iso) => iso.toUpperCase()),
  name: z.string().min(1, 'Enter a name to add language'),
})
export type CreateLanguageInput = z.infer<typeof CreateLanguageInputSchema>

export const ReadLanguageOutputSchema = z.object({
  id: z.string().uuid(),
  iso: z.string(),
  name: z.string(),
})
export type ReadLanguageOutput = z.infer<typeof ReadLanguageOutputSchema>

export const LanguagePageParamsSchema = z.object({
  dictionaryId: z.string().uuid(),
  languageId: z.string().uuid(),
})
export type LanguagePageParams = z.infer<typeof LanguagePageParamsSchema>
