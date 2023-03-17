import {
  ReadAffiliateOutputSchema,
  ReadAffiliateRoleOutputSchema,
  ReadDictionaryOutputSchema,
} from '@localize/web/features/projects'
import { z } from 'zod'

export const CreateProjectInputSchema = z.object({
  title: z.string().min(1, 'Enter a title to create the project'),
})
export type CreateProjectInput = z.infer<typeof CreateProjectInputSchema>

export const CreateProjectOutputSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
})
export type CreateProjectOutput = z.infer<typeof CreateProjectOutputSchema>

export const ReadProjectOutputSchema = z.object({
  affiliates: ReadAffiliateOutputSchema.array(),
  dictionaries: ReadDictionaryOutputSchema.array(),
  id: z.string().uuid(),
  role: ReadAffiliateRoleOutputSchema,
  title: z.string(),
})
export type ReadProjectOutput = z.infer<typeof ReadProjectOutputSchema>

export const DeleteProjectInputSchema = z.string().uuid()
export type DeleteProjectInput = z.infer<typeof DeleteProjectInputSchema>
