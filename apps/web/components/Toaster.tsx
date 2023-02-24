'use client'

import type { ReactNode } from 'react'
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
        <div
          className="absolute top-0 right-0 z-10 flex max-h-screen flex-col items-end space-y-2 overflow-hidden p-4"
          onMouseEnter={startPause}
          onMouseLeave={endPause}
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
        </div>
      )}
    </>
  )
}
