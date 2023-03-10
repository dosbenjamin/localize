'use client'

import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { Cloak } from '../../../Cloak'

export const Overlay = () => (
  <AlertDialog.Overlay asChild>
    <Cloak />
  </AlertDialog.Overlay>
)
