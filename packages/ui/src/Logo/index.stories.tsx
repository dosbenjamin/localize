import type { Meta } from '@storybook/react'
import { Logo } from '.'

const config: Meta<typeof Logo> = {
  component: Logo,
  title: 'Components/Logo',
}

export default config

export const Default = () => <Logo width="320" color="#FFF" />
