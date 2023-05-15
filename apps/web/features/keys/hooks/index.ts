import type { CreateKeyInput } from '@localize/web/features/keys'
import type { WrappedUseMutation } from '@localize/web/libs/react-query/client'
import { createKey } from '@localize/web/features/keys/client'
import { useMutation } from '@tanstack/react-query'

export const useCreateKey: WrappedUseMutation<void, void, CreateKeyInput> = (options) => useMutation(createKey, options)
