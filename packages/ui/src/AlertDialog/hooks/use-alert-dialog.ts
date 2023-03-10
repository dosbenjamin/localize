'use client'

import * as AlertDialog from '..'
import { useContext } from 'react'

export const useAlertDialog = (): AlertDialog.ContextValue => {
  const context = useContext(AlertDialog.Context)

  if (!context) {
    throw new Error('useAlertDialog should be used within AlertDialog.ContextProvider')
  }

  return context
}
