import { ProfileMetricCard } from "./profile-metric"
import { ProfileSignalCard } from "./profile-signal"
import { ProfileTabs } from "./profile-tabs"
import type { ProfileCardProps } from "./types"

export function ProfileCard({ eyebrow, title, tabs, metrics, signals }: ProfileCardProps) {
  return (
    <div className="surface-brand relative animate-float-soft overflow-hidden rounded-card border border-brand-primary/18 p-4">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,color-mix(in_srgb,var(--color-brand-soft)_12%,transparent),transparent_28%)]" />

      <div className="surface-brand relative overflow-hidden rounded-panel border border-white/8 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        <div className="card-top-line bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--color-brand-soft)_45%,transparent),transparent)]" />
        <div className="absolute inset-y-0 left-0 w-1/2 animate-scan bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--color-brand-soft)_8%,transparent),transparent)]" />

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
