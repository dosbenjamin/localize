'use client'

import { Button, Dialog, Form, Icon } from '@localize/ui'
import {
  type CreateDictionaryInput,
  CreateDictionaryInputSchema,
  type CreateLanguageInput,
  CreateLanguageInputSchema,
} from '@localize/web/features/projects'
import { useFieldArray, useForm } from 'react-hook-form'
import type { BaseSyntheticEvent } from 'react'
import { toast } from 'react-hot-toast/headless'
import { useCreateDictionary } from '@localize/web/features/projects/client'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import useDialog = Dialog.useDialog

type CreateDictionaryFormProps = {
  projectId: string
}

export const CreateDictionaryForm = ({ projectId }: CreateDictionaryFormProps) => {
  const router = useRouter()
  const { toggleDialog } = useDialog()

  const {
    handleSubmit: handleGlobalSubmit,
    register: registerGlobal,
    control: globalControl,
    formState: { errors: globalErrors },
  } = useForm<CreateDictionaryInput>({
    defaultValues: {
      project_id: projectId,
    },
    resolver: zodResolver(CreateDictionaryInputSchema),
  })

  const {
    handleSubmit: handleLanguageSubmit,
    register: registerLanguage,
    formState: { errors: languageErrors },
    reset: resetLanguage,
    setFocus: setLanguageFocus,
  } = useForm<CreateLanguageInput>({
    reValidateMode: 'onSubmit',
    resolver: zodResolver(CreateLanguageInputSchema),
  })

  const {
    append: addLanguage,
    remove: removeLanguage,
    fields: languages,
  } = useFieldArray<CreateDictionaryInput>({
    control: globalControl,
    name: 'languages',
  })

  const { mutateAsync: createDictionary } = useCreateDictionary({
    onSuccess: () => {
      toggleDialog()
      router.refresh()
    },
  })

  const handleCreateDictionary = async (event: BaseSyntheticEvent) => {
    await handleLanguageSubmit((data) => addLanguage(data))(event)

    await handleGlobalSubmit(async (data) => {
      await toast.promise(createDictionary(data), {
        error: 'Error while creating the dictionary',
        loading: 'Creating your dictionary...',
        success: 'Dictionary successfully created',
      })
    })(event)
  }

  const handleAddLanguage = handleLanguageSubmit((data) => {
    addLanguage(data)
    setLanguageFocus('name')
    resetLanguage()
  })

  const handleRemoveLanguage = (index: number) => removeLanguage(index)

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleAddLanguage}
      className="flex flex-col gap-y-8"
    >
      <Form.Control>
        <Form.Label>Name</Form.Label>
        <Form.Input
          {...registerGlobal('name')}
          placeholder="Dictionary's name"
          errorMessage={globalErrors.name?.message}
        />
      </Form.Control>
      <Form.Control as="fieldset">
        <Form.Label as="legend">Languages</Form.Label>
        <ul className="bg-purple-540 flex flex-wrap gap-2 p-2 empty:hidden">
          {languages.map(({ iso, name, id }, index) => (
            <li key={id} className="bg-purple-360 flex items-center gap-2 py-1 px-2">
              <span>
                [{iso}] {name}
              </span>
              <button aria-label={`Remove ${name} language`} type="button" onClick={() => handleRemoveLanguage(index)}>
                <Icon.Cross className="rotate-45 fill-white" width="1rem" height="1rem" />
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-start gap-x-2">
          <Form.Input
            className="flex-1"
            placeholder="Language name"
            errorMessage={languageErrors.name?.message}
            {...registerLanguage('name')}
          />
          <Form.Input
            className="flex-1"
            placeholder="ISO Code"
            maxLength={2}
            errorMessage={languageErrors.iso?.message}
            {...registerLanguage('iso')}
          />
          <Button intent="tertiary" size="unstyled" className="w-14 p-4" aria-label="Add a language">
            <Icon.Cross />
          </Button>
        </div>
        <Form.Error>{globalErrors.languages?.message}</Form.Error>
      </Form.Control>
      <Button
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={handleCreateDictionary}
        type="button"
        className="ml-auto"
      >
        Submit
      </Button>
    </form>
  )
}
