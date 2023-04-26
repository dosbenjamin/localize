'use client'

import type { ReactNode } from 'react'
import { Toast } from '@localize/web/libs/react-hot-toast/client'
import { useToaster } from 'react-hot-toast/headless'

export const Toaster = () => {
  const {
    toasts,
    handlers: { startPause, endPause },
  } = useToaster()

  return (
    <>
      {toasts.length ? (
        <div
          className="absolute bottom-0 right-0 z-10 flex max-h-screen flex-col items-end gap-y-2 overflow-hidden p-4"
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
      ) : null}
    </>
  )
}
