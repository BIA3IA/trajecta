import type * as React from "react"
import { cn } from "@/lib/utils"

function Card({ className, static: isStatic, ...props }: React.ComponentProps<"div"> & { static?: boolean }) {
  return (
    <div
      className={cn(
        "group card-border surface-brand relative overflow-hidden rounded-card",
        !isStatic && "card-hover-brand",
        className
      )}
      {...props}
    />
  )
}

export { Card }
