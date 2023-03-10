'use client'

import * as AlertDialog from '@radix-ui/react-alert-dialog'
import type { PropsWithChildren } from 'react'

type PortalProps = PropsWithChildren

export const Portal = (props: PortalProps) => (
  <AlertDialog.Portal>
    <div className="fixed inset-0 grid place-items-center" {...props} />
  </AlertDialog.Portal>
)
