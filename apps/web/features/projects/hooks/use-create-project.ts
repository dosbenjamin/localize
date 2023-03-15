import type { CreateProjectInput, CreateProjectOutput } from '@localize/web/features/projects'
import type { WrappedUseMutation } from '@localize/web/libs/react-query'
import { createProject } from '@localize/web/features/projects/client'
import { useMutation } from '@tanstack/react-query'

export const useCreateProject: WrappedUseMutation<CreateProjectOutput, void, CreateProjectInput> = (options) =>
  useMutation(createProject, options)
