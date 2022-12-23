import type { Meta } from '@storybook/react'
import { Link } from '.'

const config: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
}

export default config

export const Default = () => <Link>Link</Link>
