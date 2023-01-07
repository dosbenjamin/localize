import { z } from 'zod'

export const createProjectSchema = z.object({
  name: z.string(),
  ownerId: z.string(),
})

export type CreateProjectSchema = z.infer<typeof createProjectSchema>
