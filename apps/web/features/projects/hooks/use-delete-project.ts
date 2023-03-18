import type { WrappedUseMutation } from '@localize/web/libs/react-query'
import { deleteProject } from '@localize/web/features/projects/client'
import { useMutation } from '@tanstack/react-query'

export const useDeleteProject: WrappedUseMutation<void, void, string> = (options) => useMutation(deleteProject, options)
