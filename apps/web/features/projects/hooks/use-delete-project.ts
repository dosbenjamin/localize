import type { DeleteProjectInput } from '@localize/web/features/projects'
import type { WrappedUseMutation } from '@localize/web/libs/react-query'
import { deleteClient } from '@localize/web/features/projects/client'
import { useMutation } from '@tanstack/react-query'

export const useDeleteProject: WrappedUseMutation<void, void, DeleteProjectInput> = (options) =>
  useMutation(deleteClient, options)
