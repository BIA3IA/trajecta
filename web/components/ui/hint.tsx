import { cn } from "@/lib/utils"
import type { HintPosition, Hint as HintProps } from "./types"

const positionClassNames: Record<HintPosition, string> = {
  "bottom-right": "-bottom-5 -right-2 animate-float-soft",
  "top-left": "-left-12 -top-8 bg-surface-2/95 backdrop-blur animate-float-soft [animation-delay:1.4s]",
}

export function Hint({ position, label, value }: HintProps) {
  return (
    <div
      className={cn(
        "absolute hidden rounded-panel border border-brand-primary/22 bg-[linear-gradient(180deg,rgba(35,28,56,0.96),rgba(26,21,43,0.94))] px-4 py-3 shadow-[0_18px_42px_rgba(8,6,16,0.34),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur md:block",
        positionClassNames[position]
      )}
    >
      <p className="typo-section-eyebrow">{label}</p>
      <p className="typo-label mt-1 text-text-primary">{value}</p>
    </div>
  )
}
