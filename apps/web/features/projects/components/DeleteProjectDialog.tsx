'use client'

import { Button, Dialog } from '@localize/ui'
import { PostgrestError } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import { type PropsWithChildren, useState } from 'react'
import { toast } from 'react-hot-toast/headless'
import { useDeleteProject } from '../hooks/use-delete-project'

export type DeleteProjectDialogProps = PropsWithChildren<{
  projectId: string
}>

export const DeleteProjectDialog = ({ children, projectId }: DeleteProjectDialogProps) => {
  const [confirmationOpen, setConfirmationOpen] = useState(false)
  const router = useRouter()

  const { mutateAsync: deleteProject, isLoading } = useDeleteProject()

  const handleProjectDelete = async () => {
    await toast.promise(deleteProject(projectId), {
      error: ({ message }: PostgrestError) => message,
      loading: 'Deleting your project...',
      success: 'Project successfully deleted',
    })

    router.refresh()
  }

  return (
    <Dialog.Root open={confirmationOpen} onOpenChange={setConfirmationOpen}>
      <Dialog.Trigger>Delete</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content className="flex flex-col space-y-8">
          {children}
          <Button
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={handleProjectDelete}
            intent="danger"
            loading={isLoading}
            disabled={isLoading}
          >
            Delete
          </Button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
