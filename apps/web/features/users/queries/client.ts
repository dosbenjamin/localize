import { type ReadUserOutput, ReadUserOutputSchema } from '@localize/web/features/users'
import { supabase } from '@localize/web/libs/supabase/client'

export const getUser = async (): Promise<ReadUserOutput> => {
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return ReadUserOutputSchema.parse(user)
}
