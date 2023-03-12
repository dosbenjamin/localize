import { type DeleteProjectValue, deleteClient } from '@localize/web/features/projects/client'
import type { PostgrestError } from '@supabase/supabase-js'
import type { WrappedUseMutation } from '@localize/web/libs/react-query'
import { useMutation } from '@tanstack/react-query'

export const useDeleteProject: WrappedUseMutation<void, PostgrestError, DeleteProjectValue> = (options) =>
  useMutation(deleteClient, options)
