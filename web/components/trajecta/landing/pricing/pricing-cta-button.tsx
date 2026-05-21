import { FiArrowRight } from "react-icons/fi"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type PricingCtaButtonProps = {
  label: string
  href: string
  className: string
  iconClassName: string
  sheenClassName: string
  variant: "default" | "outline"
}

export function PricingCtaButton({
  label,
  href,
  className,
  iconClassName,
  sheenClassName,
  variant,
}: PricingCtaButtonProps) {
  return (
    <Button asChild variant={variant} className={cn("group w-full overflow-hidden border-0 px-4 py-3", className)}>
      <a href={href}>
        <span className="relative z-10 flex w-full items-center justify-center gap-2">
          <span>{label}</span>
          <span
            className={cn(
              "flex size-6 items-center justify-center rounded-full transition-transform duration-200 group-hover:translate-x-0.5",
              iconClassName
            )}
          >
            <FiArrowRight aria-hidden="true" className="size-3.5" />
          </span>
        </span>

        <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <span
            className={cn(
              "-skew-x-12 absolute inset-y-0 left-[-18%] w-24 animate-shimmer-sweep blur-xl",
              sheenClassName
            )}
          />
        </span>
      </a>
    </Button>
  )
}
