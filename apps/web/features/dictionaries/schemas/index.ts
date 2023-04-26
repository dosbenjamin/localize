import { CreateLanguageInputSchema, ReadLanguageOutputSchema } from '@localize/web/features/languages'
import { z } from 'zod'

export const CreateDictionaryInputSchema = z.object({
  languages: CreateLanguageInputSchema.array().nonempty('Add at least one language to create the dictionary'),
  name: z.string().min(1, 'Enter a name to create the dictionary'),
  project_id: z.string().uuid('Project ID is invalid'),
})
export type CreateDictionaryInput = z.infer<typeof CreateDictionaryInputSchema>

export const ReadDictionaryOutputSchema = z.object({
  id: z.string().uuid(),
  languages: ReadLanguageOutputSchema.array(),
  name: z.string(),
})
export type ReadDictionaryOutput = z.infer<typeof ReadDictionaryOutputSchema>

export const DictionaryLayoutParamsSchema = z.object({
  dictionaryId: z.string().uuid(),
  projectId: z.string().uuid(),
})
export type DictionaryLayoutParams = z.infer<typeof DictionaryLayoutParamsSchema>
