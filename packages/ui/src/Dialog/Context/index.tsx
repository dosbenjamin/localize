'use client'

import { createContext, type PropsWithChildren } from 'react'

export const Context = createContext<ContextValue | null>(null)

export type ContextValue = {
  toggleDialog: () => void
}

type ContextProviderProps = PropsWithChildren<{
  value: ContextValue
}>

export const ContextProvider = (props: ContextProviderProps) => <Context.Provider {...props} />
