import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type AnimatedGradientTextProps = {
  children: ReactNode
  className?: string
}

export function AnimatedGradientText({ children, className }: AnimatedGradientTextProps) {
  return (
    <span
      className={cn(
        "animate-gradient-shift-x bg-[linear-gradient(90deg,var(--color-brand-primary)_0%,#9b6bff_25%,var(--color-brand-accent)_65%,var(--color-brand-soft)_100%)] bg-size-[220%_100%] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  )
}
