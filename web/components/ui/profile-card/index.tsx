import { ProfileMetricCard } from "./profile-metric"
import { ProfileSignalCard } from "./profile-signal"
import { ProfileTabs } from "./profile-tabs"
import type { ProfileCardProps } from "./types"

export function ProfileCard({ eyebrow, title, tabs, metrics, signals }: ProfileCardProps) {
  return (
    <div className="surface-brand relative animate-float-soft overflow-hidden rounded-card border border-brand-primary/18 p-4">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(196,181,253,0.12),transparent_28%)]" />

      <div className="relative overflow-hidden rounded-panel border border-white/8 bg-[linear-gradient(180deg,rgba(38,30,60,0.96),rgba(31,24,49,0.94))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        <div className="card-top-line bg-[linear-gradient(90deg,transparent,rgba(196,181,253,0.45),transparent)]" />
        <div className="absolute inset-y-0 left-0 w-1/2 animate-scan bg-[linear-gradient(90deg,transparent,rgba(196,181,253,0.08),transparent)]" />

        <header className="flex flex-col items-start gap-1">
          <p className="typo-section-eyebrow text-text-muted/90">{eyebrow}</p>
          <h2 className="typo-h3 max-w-lg text-balance">{title}</h2>
        </header>

        <ProfileTabs tabs={tabs} />

        <div className="mt-2 grid gap-2 sm:grid-cols-3">
          {metrics.map((metric) => (
            <ProfileMetricCard key={metric.label} {...metric} />
          ))}
        </div>

        <div className="mt-2 grid gap-2">
          {signals.map((signal) => (
            <ProfileSignalCard key={signal.title} {...signal} />
          ))}
        </div>
      </div>
    </div>
  )
}
