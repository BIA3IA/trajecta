import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import type * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  cn(
    "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap",
    "typo-label rounded-pill outline-none transition-all duration-200",
    "focus-visible:ring-2 focus-visible:ring-brand-primary/35",
    "disabled:pointer-events-none disabled:opacity-50",
    "aria-invalid:border-red-500 aria-invalid:ring-red-500/20",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ),
  {
    variants: {
      variant: {
        default: "bg-brand-primary text-white shadow-brand hover:bg-brand-primary-hover",
        secondary:
          "border border-border-strong bg-surface-1 text-text-primary hover:border-brand-primary hover:bg-surface-2",
        outline:
          "border border-border-subtle bg-surface-2 text-text-secondary hover:border-brand-primary/50 hover:text-brand-soft",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp data-slot="button" data-variant={variant} className={cn(buttonVariants({ variant, className }))} {...props} />
  )
}

export { Button }
