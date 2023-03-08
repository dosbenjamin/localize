import { Logo } from '@localize/ui'
import type { PropsWithChildren } from 'react'

export const dynamic = 'force-static'

type AuthLayoutProps = PropsWithChildren

const AuthLayout = ({ children }: AuthLayoutProps) => (
  <main className="grid flex-1 place-items-center">
    <section className="bg-purple-720 relative w-full max-w-md">
      <Logo className="absolute -top-8 left-1/2 h-8 -translate-y-full -translate-x-1/2" />
      <div className="bg-purple-360 absolute top-0 left-1/2 h-px w-screen -translate-x-1/2" />
      <div className="bg-purple-360 absolute right-0 top-1/2 h-screen w-px -translate-y-1/2" />
      <div className="bg-purple-360 absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2" />
      <div className="bg-purple-360 absolute left-0 top-1/2 h-screen w-px -translate-y-1/2" />
      <div className="flex flex-col space-y-8 p-12">{children}</div>
    </section>
  </main>
)

export default AuthLayout
