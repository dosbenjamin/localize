import { Divider, Logo } from '@localize/ui'
import type { PropsWithChildren } from 'react'

type AuhenticationLayoutProps = PropsWithChildren

const AuhenticationLayout = ({ children }: AuhenticationLayoutProps) => (
  <main className="grid place-items-center">
    <section className="bg-purple-720 relative w-full max-w-md">
      <Logo className="absolute -top-8 left-1/2 h-8 -translate-y-full -translate-x-1/2" />
      <Divider className="absolute top-0 left-1/2 w-screen -translate-x-1/2" />
      <Divider className="absolute left-0 top-1/2 h-screen -translate-y-1/2" orientation="vertical" />
      <Divider className="absolute bottom-0 left-1/2 w-screen -translate-x-1/2" />
      <Divider className="absolute right-0 top-1/2 h-screen -translate-y-1/2" orientation="vertical" />
      {children}
    </section>
  </main>
)

export default AuhenticationLayout
