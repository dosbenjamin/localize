import { Gear } from '.'
import type { Meta } from '@storybook/react'

const config: Meta<typeof Gear> = {
  component: Gear,
  title: 'Components/Icons/Gear',
}

export default config

export const Default = () => <Gear width="24" height="24" color="#FFF" />
