import { z } from 'zod'

export const inviteMemberSchema = z.object({
  email: z.string().email(),
  projectId: z.string(),
})

export type InviteMemberSchema = z.infer<typeof inviteMemberSchema>
