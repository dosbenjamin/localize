import { z } from 'zod'

export const CreateMemberInvitationSchema = z.object({
  email: z.string().email(),
  projectId: z.string(),
})

export type CreateMemberInvitationValues = z.infer<typeof CreateMemberInvitationSchema>
