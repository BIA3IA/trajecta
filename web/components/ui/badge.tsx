import type * as React from "react"
import { cn } from "@/lib/utils"

export type BadgeSeverity = "brand" | "success" | "warning" | "danger" | "subtle"

const severityStyles: Record<BadgeSeverity, string> = {
  brand: "border-brand-primary/40 bg-brand-primary/15 text-brand-soft",
  success: "border-emerald-500/30 bg-emerald-500/8 text-emerald-400",
  warning: "border-yellow-500/30 bg-yellow-500/8 text-yellow-400",
  danger: "border-orange-400/30 bg-orange-400/8 text-orange-400",
  subtle: "border-border-subtle bg-surface-2 text-text-muted",
}

function Badge({ className, severity = "brand", ...props }: React.ComponentProps<"span"> & { severity?: BadgeSeverity }) {
  return (
    <span
      className={cn(
        "inline-flex w-fit shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-pill border px-2.5 py-0.5 font-medium text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/35 [&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        severityStyles[severity],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
