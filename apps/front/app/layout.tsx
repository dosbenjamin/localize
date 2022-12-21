import type { PropsWithChildren } from 'react'
import 'theme/globals.css'

type RootLayoutProps = PropsWithChildren

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    {/*
      <head /> will contain the components returned by the nearest parent
      head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
    */}
    <head />
    <body className="bg-purple-900">{children}</body>
  </html>
)

export default RootLayout
