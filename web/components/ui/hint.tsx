import { cn } from "@/lib/utils"

export type HintPosition = "bottom-right" | "top-left" | "top-right" | "bottom-left"

export type HintProps = {
  label: string
  value: string
  position: HintPosition
}

const positionClassNames: Record<HintPosition, string> = {
  "bottom-right": "-bottom-5 -right-5 animate-float-soft",
  "top-right": "-top-5 -right-12 animate-float-soft [animation-delay:0.7s]",
  "bottom-left": "-bottom-5 -left-2 animate-float-soft [animation-delay:0.35s]",
  "top-left": "-left-12 -top-8 animate-float-soft [animation-delay:1.4s]",
}

export function Hint({ position, label, value }: HintProps) {
  return (
    <div
      className={cn(
        "surface-brand absolute hidden rounded-panel border border-brand-primary/22 px-4 py-3 shadow-[0_18px_42px_rgba(8,6,16,0.34)] backdrop-blur md:block",
        positionClassNames[position]
      )}
    >
      <p className="typo-section-eyebrow">{label}</p>
      <p className="typo-label mt-1 text-text-primary">{value}</p>
    </div>
  )
}
