"use client"

import { Progress as ProgressPrimitive } from "radix-ui"
import type { ComponentProps } from "react"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

function Progress({ className, value = 0, ...props }: ComponentProps<typeof ProgressPrimitive.Root>) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setDisplayValue(value ?? 0))
    return () => cancelAnimationFrame(frame)
  }, [value])

  return (
    <ProgressPrimitive.Root
      value={displayValue}
      className={cn("relative h-2 w-full overflow-hidden rounded-pill bg-surface-3", className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 rounded-pill bg-brand-vivid transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translateX(-${100 - displayValue}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
