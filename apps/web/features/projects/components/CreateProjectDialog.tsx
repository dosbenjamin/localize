'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Dialog, Form, Link } from '@localize/ui'
import { PostgrestError } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import { type PropsWithChildren, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast/headless'
import { useCreateProject } from '../hooks/use-create-project'
import { createProjectSchema, CreateProjectSchema } from '../schemas/create-project'

export type CreateProjectDialogProps = PropsWithChildren<{
  userId: string | undefined
}>

export const CreateProjectDialog = ({ children, userId }: CreateProjectDialogProps) => {
  const [formOpen, setFormOpen] = useState(false)
  const router = useRouter()
  const { mutateAsync: createProject, isLoading } = useCreateProject()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProjectSchema>({
    defaultValues: { ownerId: userId },
    resolver: zodResolver(createProjectSchema),
  })

  const toggleDialog = () => setFormOpen((formOpen) => !formOpen)

  const handleCreateProject = handleSubmit(async (data) => {
    await toast.promise(createProject(data), {
      error: ({ message }: PostgrestError) => message,
      loading: 'Creating your project...',
      success: 'Project successfully created',
    })

    toggleDialog()
    router.refresh()
  })

  return (
    <Dialog.Root open={formOpen} onOpenChange={toggleDialog}>
      <Dialog.Trigger asChild>
        <button className="bg-purple-720 grid h-48 w-full place-content-center p-8 outline-none">
          <Link as="span">Create new project</Link>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content className="w-full">
          <form
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onSubmit={handleCreateProject}
            className="flex flex-col space-y-8"
          >
            {children}
            <div className="space-y-4">
              <div className="space-y-2">
                <Form.Label>Name</Form.Label>
                <Form.Input placeholder="Localize" errorMessage={errors.name?.message} {...register('name')} />
              </div>
            </div>
            <Button loading={isLoading} disabled={isLoading}>
              Create
            </Button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
