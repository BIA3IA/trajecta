import { cn } from "@/lib/utils"
import type { marketData } from "./types"

export function MarketCard({ signal }: { signal: marketData }) {
  return (
    <div key={signal.label} className="flex flex-col gap-1 bg-surface-1 px-5 py-4">
      <p className="typo-section-eyebrow text-text-muted">{signal.label}</p>
      <p className="typo-h2 text-text-primary">{signal.value}</p>
      <p
        className={cn(
          "typo-body-sm",
          signal.up === true && "text-brand-soft",
          signal.up === false && "text-brand-accent",
          signal.up === undefined && "text-text-muted"
        )}
      >
        {signal.sub}
      </p>
    </div>
  )
}
