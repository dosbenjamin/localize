'use client'

import { Button, Form, Heading, Icon } from '@localize/ui'
import {
  CreateDictionarySchema,
  type CreateDictionaryValues,
  CreateLanguageSchema,
  useCreateDictionary,
} from '@localize/web/features/projects/client'
import { useFieldArray, useForm } from 'react-hook-form'
import type { MouseEventHandler } from 'react'
import { toast } from 'react-hot-toast/headless'
import { zodResolver } from '@hookform/resolvers/zod'

type CreateDictionaryFormProps = {
  projectId: string
}

export const CreateDictionaryForm = ({ projectId }: CreateDictionaryFormProps) => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<CreateDictionaryValues>({
    defaultValues: {
      project_id: projectId,
    },
    resolver: zodResolver(CreateDictionarySchema),
  })

  const {
    append: addLanguage,
    remove: removeLanguage,
    fields: languages,
  } = useFieldArray<CreateDictionaryValues>({
    control,
    name: 'languages',
  })

  const { mutateAsync: createDictionary } = useCreateDictionary()

  const handleCreateDictionary = handleSubmit(async (data) => {
    await toast.promise(createDictionary(data), {
      error: 'error',
      loading: 'creatin',
      success: 'success',
    })
  })

  const handleAddLanguage: MouseEventHandler<HTMLButtonElement> = ({ currentTarget }) => {
    if (!currentTarget.form) return

    const formData = new FormData(currentTarget.form)

    try {
      addLanguage(
        CreateLanguageSchema.parse({
          iso: formData.get('languageIso')?.toString(),
          name: formData.get('languageName')?.toString(),
        }),
      )

      currentTarget.form.reset()
    } catch (errors) {
      console.log(errors)
      // console.log(errors.message)
    }
  }

  const handleRemoveLanguage = (index: number) => removeLanguage(index)

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleCreateDictionary}
      className="space-y-8"
    >
      <Form.Control>
        <Form.Label>Name</Form.Label>
        <Form.Input {...register('name')} placeholder="Dictionary's name" errorMessage={errors.name?.message} />
      </Form.Control>
      <fieldset className="space-y-4">
        <Heading>Languages</Heading>
        <ul className="flex max-w-lg flex-wrap gap-2 empty:hidden">
          {languages.map(({ name, id }, index) => (
            <li key={id} className="bg-purple-180 flex items-center space-x-2 py-1 px-2">
              <span>{name}</span>
              <button aria-label={`Remove ${name} language`} onClick={() => handleRemoveLanguage(index)}>
                <Icon.Cross className="rotate-45 fill-white" width="1rem" height="1rem" />
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-end space-x-4">
          <Form.Input name="languageName" placeholder="Language name" />
          <Form.Input name="languageIso" placeholder="ISO Code" maxLength={2} />
          <Button aria-label="Add language" type="button" onClick={handleAddLanguage} intent="neutral">
            +
          </Button>
        </div>
      </fieldset>
      <Button>Submit</Button>
    </form>
  )
}
