import { createProject, deleteProject } from '@localize/web/features/projects/mutations/client'
import type { CreateProjectInput } from '@localize/web/features/projects'
import type { WrappedUseMutation } from '@localize/web/libs/react-query/client'
import { useMutation } from '@tanstack/react-query'

export const useCreateProject: WrappedUseMutation<void, void, CreateProjectInput> = (options) =>
  useMutation(createProject, options)

export const useDeleteProject: WrappedUseMutation<void, void, string> = (options) => useMutation(deleteProject, options)
