import { z } from 'zod'

export const CreateMemberInvitationInputSchema = z.object({
  email: z.string().email(),
  projectId: z.string(),
})
export type CreateMemberInvitationInput = z.infer<typeof CreateMemberInvitationInputSchema>
