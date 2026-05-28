import { MarketCard } from "@/components/ui/market-card"
import type { marketData } from "@/components/ui/market-card/types"

export function MarketSignals({ marketSignals }: { marketSignals: marketData[] }) {
  return (
    <section className="flex flex-col gap-4">
      <p className="typo-section-eyebrow">Market signals</p>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-panel bg-border-subtle lg:grid-cols-4">
        {marketSignals.map((signal) => (
          <MarketCard key={signal.label} signal={signal} />
        ))}
      </div>
    </section>
  )
}
