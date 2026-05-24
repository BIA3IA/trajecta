import type * as React from "react"
import { cn } from "@/lib/utils"

function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex w-fit shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-pill border border-brand-primary/40 bg-brand-primary/15 px-2.5 py-0.5 font-medium text-brand-soft text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/35 [&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

export { Badge }
