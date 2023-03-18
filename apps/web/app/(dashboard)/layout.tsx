import { Logo } from '@localize/ui'
import type { PropsWithChildren } from 'react'
import { SignOutButton } from '@localize/web/features/auth/client'
import { createClient } from '@localize/web/libs/supabase/server'

type DashboardLayoutProps = PropsWithChildren

const DashboardLayout = async ({ children }: DashboardLayoutProps) => {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <>
      <header className="border-purple-360 divide-purple-360 flex items-center divide-x border-b">
        <Logo className="mx-10 w-72" />
        <div className="flex flex-1 flex-col items-end p-8">
          <p>Connected as {user?.email}</p>
          <SignOutButton />
        </div>
      </header>
      <main className="border-purple-360 mx-auto w-full max-w-7xl flex-1 border-x">{children}</main>
    </>
  )
}

export default DashboardLayout
