import {
  type CreateDictionaryValues,
  type ReadDictionaryValues,
  createDictionary,
} from '@localize/web/features/projects/client'
import type { WrappedUseMutation } from '@localize/web/libs/react-query'
import { useMutation } from '@tanstack/react-query'

export const useCreateDictionary: WrappedUseMutation<ReadDictionaryValues[], void, CreateDictionaryValues> = (
  options,
) => useMutation(createDictionary, options)
