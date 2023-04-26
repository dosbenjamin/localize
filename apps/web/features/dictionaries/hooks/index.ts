import type { CreateDictionaryInput } from '@localize/web/features/dictionaries'
import type { WrappedUseMutation } from '@localize/web/libs/react-query'
import { createDictionary } from '@localize/web/features/dictionaries/client'
import { useMutation } from '@tanstack/react-query'

export const useCreateDictionary: WrappedUseMutation<void, void, CreateDictionaryInput> = (options) =>
  useMutation(createDictionary, options)
