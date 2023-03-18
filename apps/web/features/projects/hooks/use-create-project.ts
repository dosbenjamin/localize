import type { CreateProjectInput } from '@localize/web/features/projects'
import type { WrappedUseMutation } from '@localize/web/libs/react-query'
import { createProject } from '@localize/web/features/projects/client'
import { useMutation } from '@tanstack/react-query'

export const useCreateProject: WrappedUseMutation<void, void, CreateProjectInput> = (options) =>
  useMutation(createProject, options)
