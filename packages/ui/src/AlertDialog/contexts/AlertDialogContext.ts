'use client'

import { createContext } from 'react'

export const Context = createContext<ContextValue | null>(null)

export type ContextValue = {
  toggleDialog: () => void
}

export const ContextProvider = Context.Provider
