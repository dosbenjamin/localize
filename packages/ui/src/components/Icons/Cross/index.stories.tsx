import type { Meta } from '@storybook/react'
import { Cross } from '.'

const config: Meta<typeof Cross> = {
  component: Cross,
  title: 'Components/Icons/Cross',
}

export default config

export const Default = () => <Cross width="24" height="24" fill="#FFF" />
