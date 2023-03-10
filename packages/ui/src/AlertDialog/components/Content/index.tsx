'use client'

import * as AlertDialog from '@radix-ui/react-alert-dialog'
import type { PropsWithChildren } from 'react'
import { Window } from '../../../Window'

type ContentProps = PropsWithChildren

export const Content = (props: ContentProps) => (
  <AlertDialog.Content asChild>
    <Window className="w-full max-w-xl" {...props} />
  </AlertDialog.Content>
)
