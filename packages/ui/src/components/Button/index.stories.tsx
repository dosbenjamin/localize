import type { Meta } from '@storybook/react'
import { Button } from '.'

const config: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
}

export default config

export const Default = () => <Button>Button</Button>
