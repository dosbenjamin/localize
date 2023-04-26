import { type ReadUserOutput, ReadUserOutputSchema } from '@localize/web/features/users'
import { createClient } from '@localize/web/libs/supabase/server'

export const getUser = async (): Promise<ReadUserOutput> => {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return ReadUserOutputSchema.parse(user)
}
