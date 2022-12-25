'use client'

import { Stack } from '@localize/ui'
import { ReactNode } from 'react'
import { useToaster } from 'react-hot-toast/headless'
import { Toast } from './Toast'

export const Toaster = () => {
  const {
    toasts,
    handlers: { startPause, endPause },
  } = useToaster()

  return (
    <>
      {!!toasts.length && (
        <Stack.Vertical
          onMouseEnter={startPause}
          onMouseLeave={endPause}
          className="absolute top-0 right-0 z-10 max-h-screen overflow-hidden p-4"
          align="end"
        >
          {toasts.flatMap(({ visible, id, type, ariaProps, message }) =>
            visible
              ? [
                  <Toast key={id} type={type} {...ariaProps}>
                    {message as ReactNode}
                  </Toast>,
                ]
              : [],
          )}
        </Stack.Vertical>
      )}
    </>
  )
}
