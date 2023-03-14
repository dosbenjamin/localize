import { z } from 'zod'

export const CreateLanguageInputSchema = z.object({
  iso: z
    .string()
    .length(2, 'Language ISO code length is 2 characters')
    .transform((iso) => iso.toUpperCase()),
  name: z.string().min(1, 'You have to define a language name'),
})

export type CreateLanguageInput = z.infer<typeof CreateLanguageInputSchema>
