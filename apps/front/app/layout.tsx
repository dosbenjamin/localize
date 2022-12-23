import { SupabaseListener } from 'features/auth'
import { createClient } from 'lib/supabase.server'
import type { PropsWithChildren } from 'react'
import 'theme/globals.css'

type RootLayoutProps = PropsWithChildren

const RootLayout = async ({ children }: RootLayoutProps) => {
  const supabase = createClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <html lang="en">
      {/*
      <head /> will contain the components returned by the nearest parent
      head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
    */}
      <head />
      <body className="grid min-h-screen bg-purple-900 text-white">
        <SupabaseListener accessToken={session?.access_token} />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
