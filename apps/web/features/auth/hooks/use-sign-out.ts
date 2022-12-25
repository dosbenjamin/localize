import { useMutation } from '@tanstack/react-query'
import { supabase } from 'lib/supabase.client'

export const useSignOut = () => {
  return useMutation(async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
      return Promise.reject(error.message)
    }

    return Promise.resolve('Successfully signed out')
  })
}
