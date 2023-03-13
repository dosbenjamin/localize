import { CreateLanguageSchema, ReadLanguageSchema } from '@localize/web/features/projects/client'
import { z } from 'zod'

export const CreateDictionarySchema = z.object({
  languages: CreateLanguageSchema.array().nonempty('Add at least one language to create the dictionary'),
  name: z.string().min(1, 'Define a name to create the dictionary'),
  project_id: z.string().uuid('Project ID is invalid'),
})

export type CreateDictionaryValues = z.infer<typeof CreateDictionarySchema>

export const ReadDictionarySchema = z.object({
  languages: ReadLanguageSchema.array().optional(),
  name: z.string(),
})

export type ReadDictionaryValues = z.infer<typeof ReadDictionarySchema>
