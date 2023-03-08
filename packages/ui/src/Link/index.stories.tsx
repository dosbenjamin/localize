import { Link } from '.'
import type { Meta } from '@storybook/react'

const config: Meta<typeof Link> = {
  component: Link,
  title: 'Components/Link',
}

export default config

export const Default = () => <Link>Link</Link>
