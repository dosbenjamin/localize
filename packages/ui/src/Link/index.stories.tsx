import type { Meta } from '@storybook/react'
import { Link } from '.'

const config: Meta<typeof Link> = {
  component: Link,
  title: 'Components/Link',
}

export default config

export const Default = () => <Link>Link</Link>
