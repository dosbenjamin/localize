import { supabase } from 'lib/supabase.client'
import { useMutation } from 'react-query'

export const useSignOut = () => {
  return useMutation(async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
      return Promise.reject(error.message)
    }

    return Promise.resolve('Successfully signed out')
  })
}
