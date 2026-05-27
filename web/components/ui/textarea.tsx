import { cva, type VariantProps } from "class-variance-authority"
import type * as React from "react"

import { cn } from "@/lib/utils"

const textareaVariants = cva(
  cn(
    "w-full rounded-panel border bg-surface-1 p-4",
    "typo-body text-text-primary placeholder:text-text-muted",
    "resize-none outline-none transition-colors duration-200 focus:outline-none",
    "disabled:pointer-events-none disabled:opacity-50",
    "aria-invalid:border-red-500 aria-invalid:ring-1 aria-invalid:ring-red-500/20"
  ),
  {
    variants: {
      variant: {
        default: "border-border-subtle",
        ghost: "border-transparent bg-transparent focus:bg-surface-1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & VariantProps<typeof textareaVariants>

export function Textarea({ className, variant, ...props }: TextareaProps) {
  return <textarea className={cn(textareaVariants({ variant }), className)} {...props} />
}
