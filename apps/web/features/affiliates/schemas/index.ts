import { z } from 'zod'

export const ReadAffiliateRoleOutputSchema = z.enum(['Administrator', 'Editor', 'Contributor'])
export type ReadAffiliateRoleOutput = z.infer<typeof ReadAffiliateRoleOutputSchema>

export const ReadAffiliateOutputSchema = z.object({
  role: ReadAffiliateRoleOutputSchema,
})
export type ReadAffiliateOutput = z.infer<typeof ReadAffiliateOutputSchema>
