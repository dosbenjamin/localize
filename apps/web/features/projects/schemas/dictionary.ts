import { CreateLanguageInputSchema } from '@localize/web/features/projects/client'
import { z } from 'zod'

export const CreateDictionaryInputSchema = z.object({
  languages: CreateLanguageInputSchema.array().nonempty('Add at least one language to create the dictionary'),
  name: z.string().min(1, 'Enter a name to create the dictionary'),
  project_id: z.string().uuid('Project ID is invalid'),
})

export type CreateDictionaryInput = z.infer<typeof CreateDictionaryInputSchema>

export const CreateDictionaryOutputSchema = z.object({
  name: z.string(),
})

export type CreateDictionaryOutput = z.infer<typeof CreateDictionaryOutputSchema>
