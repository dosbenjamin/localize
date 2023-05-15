'use client'

import { Button, Form } from '@localize/ui'
import { type CreateKeyInput, CreateKeyInputSchema } from '@localize/web/features/keys/schemas'
import { toast } from 'react-hot-toast/headless'
import { useCreateKey } from '@localize/web/features/keys/hooks'
import { useDialog } from '@localize/ui/src/Dialog'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

type Props = {
  projectId: string
  dictionaryId: string
}

export const CreateKeyForm = ({ projectId, dictionaryId }: Props) => {
  const router = useRouter()
  const { toggleDialog } = useDialog()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateKeyInput>({
    defaultValues: {
      dictionary_id: dictionaryId,
      project_id: projectId,
    },
    resolver: zodResolver(CreateKeyInputSchema),
  })

  const { mutateAsync: createKey, isLoading: isCreatingKey } = useCreateKey({
    onSuccess: () => {
      toggleDialog()
      router.refresh()
    },
  })

  const handleCreateKey = handleSubmit(async (values) => {
    await toast.promise(createKey(values), {
      error: 'error',
      loading: 'loading',
      success: 'success',
    })
  })

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleCreateKey}
      className="flex flex-col space-y-4"
    >
      <Form.Control>
        <Form.Label>Translation key</Form.Label>
        <Form.Input placeholder="common.actions.submit" {...register('key')} errorMessage={errors.key?.message} />
      </Form.Control>
      <Button className="ml-auto" loading={isCreatingKey}>
        Add
      </Button>
    </form>
  )
}
