import type { Meta } from '@storybook/react'
import { Spinner } from '.'

const config: Meta<typeof Spinner> = {
  component: Spinner,
  title: 'Components/Icons/Spinner',
}

export default config

export const Default = () => <Spinner width="24" height="24" color="#FFF" />
