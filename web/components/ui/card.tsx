import type * as React from "react"

import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "flex flex-col rounded-card border border-border-subtle bg-surface-1 text-text-primary shadow-none",
        className
      )}
      {...props}
    />
  )
}
export { Card }
