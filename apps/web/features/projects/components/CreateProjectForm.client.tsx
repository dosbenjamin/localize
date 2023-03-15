'use client'

import { Button, Form } from '@localize/ui'
import {
  type CreateProjectInput,
  CreateProjectInputSchema,
  useCreateProject,
} from '@localize/web/features/projects/client'
import { Dialog } from '@localize/ui'
import { toast } from 'react-hot-toast/headless'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import useDialog = Dialog.useDialog

export const CreateProjectForm = () => {
  const router = useRouter()
  const { toggleDialog } = useDialog()
  const { mutateAsync: createProject, isLoading } = useCreateProject()

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

    toggleDialog()
    router.refresh()
  })

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleCreateProject}
      className="flex flex-col space-y-8"
    >
      <Form.Control>
        <Form.Label>Title</Form.Label>
        <Form.Input placeholder="Localize" errorMessage={errors.title?.message} {...register('title')} />
      </Form.Control>
      <Button loading={isLoading} disabled={isLoading}>
        Create
      </Button>
    </form>
  )
}
