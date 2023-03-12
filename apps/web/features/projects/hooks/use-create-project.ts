import { type CreateProjectValues, type ReadProjectValues, createProject } from '@localize/web/features/projects/client'
import type { WrappedUseMutation } from '@localize/web/libs/react-query'
import { useMutation } from '@tanstack/react-query'

export const useCreateProject: WrappedUseMutation<ReadProjectValues[], void, CreateProjectValues> = (options) =>
  useMutation(createProject, options)
