'use client'

import { Button, Form } from '@localize/ui'
import { type CreateMemberInvitationInput, CreateMemberInvitationInputSchema } from '@localize/web/features/projects'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

type CreateMemberInvitationFormProps = {
  projectId: string
}

export const CreateMemberInvitationForm = ({ projectId }: CreateMemberInvitationFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateMemberInvitationInput>({
    defaultValues: { projectId },
    resolver: zodResolver(CreateMemberInvitationInputSchema),
  })

  const handleInvitation = handleSubmit((values) => {
    console.log(values)
  })

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleInvitation}
      className="flex flex-col gap-y-8"
    >
      <Form.Control>
        <Form.Label htmlFor="member-email">Email</Form.Label>
        <Form.Input
          id="member-email"
          placeholder="email@example.org"
          errorMessage={errors.email?.message}
          {...register('email')}
        />
      </Form.Control>
      <Button>Send</Button>
    </form>
  )
}
