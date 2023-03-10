'use client'

import * as Dropdown from '../..'
import type { PropsWithChildren, ReactNode } from 'react'

type ContainerProps = PropsWithChildren<{
  trigger: ReactNode
}>

export const Container = ({ children, trigger }: ContainerProps) => (
  <Dropdown.Root>
    <Dropdown.Trigger asChild>{trigger}</Dropdown.Trigger>
    <Dropdown.Portal>
      <Dropdown.Content>
        {children}
      </Dropdown.Content>
    </Dropdown.Portal>
  </Dropdown.Root>
)
