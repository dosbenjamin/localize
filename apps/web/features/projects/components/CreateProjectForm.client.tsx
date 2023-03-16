'use client'

import { Button, Form } from '@localize/ui'
import { type CreateProjectInput, CreateProjectInputSchema } from '@localize/web/features/projects'
import { Dialog } from '@localize/ui'
import { toast } from 'react-hot-toast/headless'
import { useCreateProject } from '@localize/web/features/projects/client'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import useDialog = Dialog.useDialog

export const CreateProjectForm = () => {
  const router = useRouter()
  const { toggleDialog } = useDialog()

  const { mutateAsync: createProject, isLoading } = useCreateProject({
    onSuccess: () => {
      toggleDialog()
      router.refresh()
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProjectInput>({
    resolver: zodResolver(CreateProjectInputSchema),
  })

  const handleCreateProject = handleSubmit(async (data) => {
    await toast.promise(createProject(data), {
      error: 'Error while creating the project',
      loading: 'Creating your project...',
      success: 'Project successfully created',
    })
  })

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleCreateProject}
      className="flex flex-col gap-y-8"
    >
      <Form.Control>
        <Form.Label>Title</Form.Label>
        <Form.Input placeholder="Localize" errorMessage={errors.title?.message} {...register('title')} />
      </Form.Control>
      <Button loading={isLoading} disabled={isLoading} className="ml-auto">
        Create
      </Button>
    </form>
  )
}
