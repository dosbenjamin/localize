import {
  type CreateProjectInput,
  type CreateProjectOutput,
  createProject,
} from '@localize/web/features/projects/client'
import type { WrappedUseMutation } from '@localize/web/libs/react-query'
import { useMutation } from '@tanstack/react-query'

export const useCreateProject: WrappedUseMutation<CreateProjectOutput, void, CreateProjectInput> = (options) =>
  useMutation(createProject, options)
