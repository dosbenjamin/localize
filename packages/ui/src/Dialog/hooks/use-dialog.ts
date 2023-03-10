'use client'

import * as Dialog from '..'
import { useContext } from 'react'

export const useDialog = (): Dialog.ContextValue => {
  const context = useContext(Dialog.Context)

  if (!context) {
    throw new Error('`useDialog` should be used within `ContextProvider`')
  }

  return context
}
