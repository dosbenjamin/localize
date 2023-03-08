import '@localize/theme/globals.css'
import { QueryClient, SupabaseListener, Toaster } from 'shared/client'
import type { PropsWithChildren } from 'react'
import { createClient } from 'lib/supabase.server'

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
        <SupabaseListener accessToken={session?.access_token} />
        <Toaster />
        <QueryClient>{children}</QueryClient>
      </body>
    </html>
  )
}

export default RootLayout
