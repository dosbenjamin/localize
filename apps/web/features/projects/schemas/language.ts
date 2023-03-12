import { z } from 'zod'

export const CreateLanguageSchema = z.object({
  iso: z.string().length(2, 'Language ISO code length is 2 characters'),
  name: z.string().min(1, 'You have to define a language name'),
})

export type CreateLanguageValues = z.infer<typeof CreateLanguageSchema>

export const ReadLanguageSchema = z.object({
  iso: z.string().length(2),
  name: z.string().min(1),
})

export type ReadLanguageValues = z.infer<typeof ReadLanguageSchema>
