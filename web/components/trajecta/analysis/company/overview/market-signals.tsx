import { cn } from "@/lib/utils"
import type { marketData } from "./types"

export function MarketSignals({ marketSignals }: { marketSignals: marketData[] }) {
  return (
    <section className="flex flex-col gap-4">
      <p className="typo-section-eyebrow">Market signals</p>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-panel bg-border-subtle lg:grid-cols-4">
        {marketSignals.map((signal) => (
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
        ))}
      </div>
    </section>
  )
}
