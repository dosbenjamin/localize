import { type DeleteProjectValue, deleteClient } from '@localize/web/features/projects/client'
import type { WrappedUseMutation } from '@localize/web/libs/react-query'
import { useMutation } from '@tanstack/react-query'

export const useDeleteProject: WrappedUseMutation<void, void, DeleteProjectValue> = (options) =>
  useMutation(deleteClient, options)
