import { Badge } from "@/components/ui/badge"
import type { ProfileCardProps } from "../types"
import { ProfileMetricCard } from "./profile-metric"
import { ProfileSignalCard } from "./profile-signal"
import { ProfileTabs } from "./profile-tabs"

export function ProfileCard({
  eyebrow,
  title,
  badgeLabel,
  badgeIcon: BadgeIcon,
  tabs,
  metrics,
  signals,
}: ProfileCardProps) {
  return (
    <div className="relative animate-float-soft overflow-hidden rounded-card border border-brand-primary/18 bg-[linear-gradient(180deg,rgba(31,24,49,0.98),rgba(18,14,31,0.96))] p-4 shadow-[0_26px_80px_rgba(11,7,20,0.42)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(196,181,253,0.12),transparent_28%)]" />

      <div className="relative overflow-hidden rounded-panel border border-white/8 bg-[linear-gradient(180deg,rgba(38,30,60,0.96),rgba(31,24,49,0.94))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(196,181,253,0.45),transparent)]" />
        <div className="absolute inset-y-0 left-0 w-1/2 animate-scan bg-[linear-gradient(90deg,transparent,rgba(196,181,253,0.08),transparent)]" />

        <header className="flex items-start justify-between gap-4">
          <div>
            <p className="typo-section-eyebrow text-text-muted/90">{eyebrow}</p>
            <h2 className="typo-h3 mt-2 max-w-lg text-balance">{title}</h2>
          </div>

          {badgeLabel ? (
            <Badge className="border-brand-primary/25 bg-brand-primary/12 text-brand-soft shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              {BadgeIcon ? <BadgeIcon className="size-4" aria-hidden="true" /> : null}
              {badgeLabel}
            </Badge>
          ) : null}
        </header>

        <ProfileTabs tabs={tabs} />

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {metrics.map((metric) => (
            <ProfileMetricCard key={metric.label} {...metric} />
          ))}
        </div>

        <div className="mt-5 grid gap-3">
          {signals.map((signal) => (
            <ProfileSignalCard key={signal.title} {...signal} />
          ))}
        </div>
      </div>
    </div>
  )
}
