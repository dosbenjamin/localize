import { type CreateProjectValues, type ReadProjectValues, createProject } from '@localize/web/features/projects/client'
import type { PostgrestError } from '@supabase/supabase-js'
import type { WrappedUseMutation } from '@localize/web/libs/react-query'
import { useMutation } from '@tanstack/react-query'

export const useCreateProject: WrappedUseMutation<ReadProjectValues[], PostgrestError, CreateProjectValues> = (
  options,
) => useMutation(createProject, options)
