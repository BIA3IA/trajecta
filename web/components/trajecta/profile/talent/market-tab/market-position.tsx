import { MarketCard } from "@/components/blocks/market-card"
import { Badge } from "@/components/ui/badge"
import type { marketPositionData, marketReadiness } from "./types"

const readinessConfig: Record<marketReadiness, { label: string; severity: "brand" | "warning" | "danger" }> = {
  strong: { label: "Strong position", severity: "brand" },
  good: { label: "Good position", severity: "brand" },
  moderate: { label: "Moderate position", severity: "warning" },
  challenging: { label: "Challenging position", severity: "danger" },
}

export function MarketPosition({ data }: { data: marketPositionData }) {
  const { label, severity } = readinessConfig[data.readiness]

  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-start justify-between gap-5">
        <div className="flex max-w-3xl flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p className="typo-section-eyebrow">Market position</p>
            <h2 className="typo-h2 text-text-primary">{data.title}</h2>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="typo-label text-brand-soft">{data.snapshot}</p>
            <span className="hidden h-1 w-1 rounded-full bg-border-strong sm:block" aria-hidden />
            <p className="typo-body-sm text-text-muted">{data.benchmarkLabel}</p>
          </div>

          <p className="typo-body max-w-2xl text-text-secondary">{data.summary}</p>
        </div>

        <Badge severity={severity} className="mt-1 shrink-0">
          {label}
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-panel bg-border-subtle lg:grid-cols-4">
        {data.signals.map((signal) => (
          <MarketCard key={signal.label} signal={signal} />
        ))}
      </div>
    </section>
  )
}
