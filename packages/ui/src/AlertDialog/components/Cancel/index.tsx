import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { Button } from '../../../Button'
import type { PropsWithChildren } from 'react'

type CancelProps = PropsWithChildren

export const Cancel = (props: CancelProps) => (
  <AlertDialog.Cancel asChild>
    <Button intent="neutral" {...props} />
  </AlertDialog.Cancel>
)
