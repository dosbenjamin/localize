'use client'

import { Button, Dialog, Form, Icon } from '@localize/ui'
import {
  type CreateDictionaryInput,
  CreateDictionaryInputSchema,
  type CreateLanguageInput,
  CreateLanguageInputSchema,
  useCreateDictionary,
} from '@localize/web/features/projects/client'
import { useFieldArray, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast/headless'
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

  const { mutateAsync: createDictionary } = useCreateDictionary()

  const handleCreateDictionary = handleGlobalSubmit(async (data) => {
    await toast.promise(createDictionary(data), {
      error: 'error',
      loading: 'creatin',
      success: 'success',
    })

    toggleDialog()
    router.refresh()
  })

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
      className="space-y-8"
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
            <li key={id} className="bg-purple-360 flex items-center space-x-2 py-1 px-2">
              <span>
                [{iso}] {name}
              </span>
              <button aria-label={`Remove ${name} language`} type="button" onClick={() => handleRemoveLanguage(index)}>
                <Icon.Cross className="rotate-45 fill-white" width="1rem" height="1rem" />
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-end space-x-2">
          <Form.Input
            {...registerLanguage('name')}
            placeholder="Language name"
            errorMessage={languageErrors.name?.message}
          />
          <Form.Input
            {...registerLanguage('iso')}
            placeholder="ISO Code"
            maxLength={2}
            errorMessage={languageErrors.iso?.message}
          />
          <Button aria-label="Add language" intent="neutral">
            +
          </Button>
        </div>
      </Form.Control>
      <Button
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={handleCreateDictionary}
        type="button"
      >
        Submit
      </Button>
    </form>
  )
}
