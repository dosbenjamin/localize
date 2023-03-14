import {
  type CreateDictionaryInput,
  type CreateDictionaryOutput,
  createDictionary,
} from '@localize/web/features/projects/client'
import type { WrappedUseMutation } from '@localize/web/libs/react-query'
import { useMutation } from '@tanstack/react-query'

export const useCreateDictionary: WrappedUseMutation<CreateDictionaryOutput, void, CreateDictionaryInput> = (options) =>
  useMutation(createDictionary, options)
