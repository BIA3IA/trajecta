import type * as React from "react"
import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "group card-border card-hover-brand surface-brand relative overflow-hidden rounded-card",
        className
      )}
      {...props}
    />
  )
}

export { Card }
