import { Inconsolata } from '@next/font/google'
import { cx } from 'class-variance-authority'
import type { ReactNode } from 'react'
import './output.css'

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata'
})

type Props = {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => (
  <html lang="en">
    {/*
      <head /> will contain the components returned by the nearest parent
      head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
    */}
    <head />
    <body className={cx(inconsolata.variable, 'font-mono bg-purple-900 antialiased')}>{children}</body>
  </html>
)

export default RootLayout
