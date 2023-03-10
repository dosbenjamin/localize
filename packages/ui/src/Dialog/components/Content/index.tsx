'use client'

import * as Dialog from '@radix-ui/react-dialog'
import type { PropsWithChildren } from 'react'
import { Window } from '../../../Window'

type ContentProps = PropsWithChildren

export const Content = (props: ContentProps) => (
  <Dialog.Content asChild>
    <Window {...props} />
  </Dialog.Content>
)
