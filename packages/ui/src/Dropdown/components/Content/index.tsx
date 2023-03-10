import * as Dropdown from '@radix-ui/react-dropdown-menu'
import type { PropsWithChildren } from 'react'
import { Window } from '../../../Window'

type ContentProps = PropsWithChildren

export const Content = (props: ContentProps) => (
  <Dropdown.Content
    sideOffset={16}
    asChild
  >
    <Window size="sm" className="flex flex-col items-start" {...props} />
  </Dropdown.Content>
)
