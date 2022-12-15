import localFont from '@next/font/local'
import { cx } from 'class-variance-authority'
import type { ReactNode } from 'react'
import './output.css'

const inconsolata = localFont({
  src: './Inconsolata-VF.woff2',
  variable: '--font-inconsolata',
  weight: '200 900',
  declarations: [
    {
      prop: 'font-stretch',
      value: '50 200'
    }
  ]
})

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    {/*
      <head /> will contain the components returned by the nearest parent
      head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
    */}
    <head />
    <body className={cx(inconsolata.variable, 'bg-purple-900 font-mono antialiased optimize-legibility')}>
      {children}
    </body>
  </html>
)

export default RootLayout
