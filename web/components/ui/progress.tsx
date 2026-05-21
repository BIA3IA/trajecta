"use client"

import { Progress as ProgressPrimitive } from "radix-ui"
import type * as React from "react"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

function Progress({ className, value = 0, ...props }: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setDisplayValue(value ?? 0)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [value])

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      value={displayValue}
      className={cn("relative h-2 w-full overflow-hidden rounded-pill bg-surface-3", className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="h-full w-full flex-1 rounded-pill bg-[linear-gradient(90deg,var(--color-brand-primary),var(--color-brand-accent))] shadow-[0_0_18px_rgba(232,121,249,0.16)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translateX(-${100 - displayValue}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
