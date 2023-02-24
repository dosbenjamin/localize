'use client'

import * as Dialog from '@radix-ui/react-dialog'
import type { PropsWithChildren } from 'react'

type PortalProps = PropsWithChildren

export const Portal = (props: PortalProps) => (
  <Dialog.Portal>
    <div className="fixed inset-0 grid place-items-center" {...props} />
  </Dialog.Portal>
)
