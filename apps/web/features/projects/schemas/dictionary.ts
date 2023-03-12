import { CreateLanguageSchema, ReadLanguageSchema } from '@localize/web/features/projects/client'
import { z } from 'zod'

export const CreateDictionarySchema = z
  .object({
    languages: z.array(CreateLanguageSchema),
    name: z.string().min(1, 'You have to define a name to create the dictionary'),
    projectId: z.string().uuid('Project ID is invalid'),
  })
  .transform(({ projectId, ...values }) => ({ project_id: projectId, ...values }))

export type CreateDictionaryValues = z.infer<typeof CreateDictionarySchema>

export const ReadDictionarySchema = z.object({
  languages: z.array(ReadLanguageSchema),
  name: z.string().min(1),
})

export type ReadDictionaryValues = z.infer<typeof ReadDictionarySchema>
