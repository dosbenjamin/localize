import '@localize/theme/globals.css'
import { SupabaseContextProvider, SupabaseListener } from '@localize/web/libs/supabase/client'
import type { PropsWithChildren } from 'react'
import { QueryClient } from '@localize/web/libs/react-query/client'
import { Toaster } from '@localize/web/libs/react-hot-toast/client'
import { createClient } from '@localize/web/libs/supabase/server'

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
      <body className="flex min-h-screen flex-col bg-purple-900 text-white">
        <SupabaseContextProvider>
          <SupabaseListener accessToken={session?.access_token} />
          <QueryClient>{children}</QueryClient>
        </SupabaseContextProvider>
        <Toaster />
      </body>
    </html>
  )
}

export default RootLayout
