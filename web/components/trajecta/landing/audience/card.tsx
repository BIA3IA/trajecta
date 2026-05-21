import { Card } from "@/components/ui/card"
import { JourneySection } from "./journey"
import type { AudienceItem } from "./types"

export function AudienceCard({ id, title, text, badge, summary, tone, icon: Icon, journey }: AudienceItem) {
  return (
    <Card
      id={id}
      className="group card-border card-hover card-hover-brand surface-brand relative overflow-hidden p-6 md:p-8"
    >
      <div className="card-glow-overlay card-glow-brand group-hover:opacity-100" />
      <div className="card-shimmer -top-4 card-shimmer-brand left-[-18%] h-56 w-32 rotate-[-22deg]" />
      <div className="card-left-rail card-left-rail-brand" />
      <div className="card-top-line card-top-line-brand" />

      <div className="relative">
        <div className="flex items-start gap-4">
          <div className="flex items-center gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-panel bg-[linear-gradient(135deg,rgba(139,92,246,0.68),rgba(232,121,249,0.54))] text-white shadow-[0_0_12px_rgba(232,121,249,0.18)] ring-1 ring-brand-accent/28">
              <Icon className="size-7" aria-hidden="true" />
            </span>

            <div>
              {badge ? <p className="typo-section-eyebrow mb-2 text-text-muted/78">{badge}</p> : null}
              <h3 className="typo-h2 text-text-primary">{title}</h3>
              <p className="typo-body-sm mt-2 text-text-muted">{summary}</p>
            </div>
          </div>
        </div>

        <p className="typo-body my-6 max-w-2xl text-text-secondary">{text}</p>

        <JourneySection journey={journey} tone={tone} />
      </div>
    </Card>
  )
}
