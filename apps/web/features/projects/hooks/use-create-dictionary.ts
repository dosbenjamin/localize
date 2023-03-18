import type { CreateDictionaryInput } from '@localize/web/features/projects'
import type { WrappedUseMutation } from '@localize/web/libs/react-query'
import { createDictionary } from '@localize/web/features/projects/client'
import { useMutation } from '@tanstack/react-query'

export const useCreateDictionary: WrappedUseMutation<void, void, CreateDictionaryInput> = (options) =>
  useMutation(createDictionary, options)
