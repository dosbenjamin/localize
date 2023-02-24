'use client'

import { useContext } from 'react'
import * as Dialog from '..'

export const useDialog = (): Dialog.ContextValue => {
  const context = useContext(Dialog.Context)

  if (!context) {
    throw new Error('`useDialog` should be used within `ContextProvider`')
  }

  return context
}
