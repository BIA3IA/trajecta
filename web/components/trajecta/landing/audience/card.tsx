import { Card } from "@/components/ui/card"
import { JourneySection } from "./journey"
import type { AudienceItem } from "./types"

export function AudienceCard({ id, title, text, badge, icon: Icon, journey }: AudienceItem) {
  return (
    <Card id={id} className="card-hover p-6 md:p-8">
      <div className="card-glow-overlay card-glow-brand group-hover:opacity-100" />
      <div className="card-shimmer -top-4 card-shimmer-brand left-[-18%] h-56 w-32 rotate-[-22deg]" />
      <div className="card-left-rail card-left-rail-brand" />
      <div className="card-top-line card-top-line-brand" />

      <div className="relative">
        <div className="flex items-center gap-4">
          <span className="icon-brand flex size-14 shrink-0 items-center justify-center rounded-panel text-white ring-1 ring-brand-accent/28">
            <Icon className="size-7" aria-hidden="true" />
          </span>

          <div className="flex flex-col gap-1">
            {badge ? <p className="typo-section-eyebrow text-text-muted/78">{badge}</p> : null}
            <h3 className="typo-h2 text-text-primary">{title}</h3>
          </div>
        </div>

        <p className="typo-body my-6 max-w-2xl text-text-secondary">{text}</p>

        <div className="flex items-center justify-between gap-4">
          <p className="typo-section-eyebrow">How it works</p>
          <div className="card-top-line-brand hidden h-px flex-1 sm:block" />
        </div>

        <JourneySection journey={journey} />
      </div>
    </Card>
  )
}
