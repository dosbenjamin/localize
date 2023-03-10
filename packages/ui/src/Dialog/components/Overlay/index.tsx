'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { Cloak } from '../../../Cloak'

export const Overlay = () => (
  <Dialog.Overlay asChild>
    <Cloak />
  </Dialog.Overlay>
)
