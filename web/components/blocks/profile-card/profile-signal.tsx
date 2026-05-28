import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import type { ProfileSignal } from "./types"

export function ProfileSignalCard({ label, title, detail, value, icon: Icon }: ProfileSignal) {
  return (
    <Card className="group p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="icon-brand flex size-10 shrink-0 items-center justify-center rounded-panel text-brand-soft ring-1 ring-brand-primary/18 transition-all duration-200 group-hover:scale-105 group-hover:ring-brand-accent/28">
            <Icon className="size-4" aria-hidden="true" />
          </span>

          <div className="min-w-0">
            <p className="typo-section-eyebrow text-text-muted/90">{label}</p>
            <p className="typo-label truncate text-text-primary">{title}</p>
            <p className="typo-body-sm text-text-muted/95">{detail}</p>
          </div>
        </div>

        <span className="typo-h3 text-brand-soft tracking-tight">{value}%</span>
      </div>

      <Progress value={value} aria-label={`${title} signal strength`} className="mt-3 h-2.5 bg-white/6" />
    </Card>
  )
}
