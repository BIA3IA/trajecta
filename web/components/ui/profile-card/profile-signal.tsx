import { Progress } from "@/components/ui/progress"
import type { ProfileSignal } from "../types"

export function ProfileSignalCard({ label, title, detail, value, icon: Icon }: ProfileSignal) {
  return (
    <div className="group rounded-panel border border-white/7 bg-[linear-gradient(180deg,rgba(22,18,36,0.88),rgba(22,18,36,0.7))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-200 hover:border-brand-primary/20 hover:bg-[linear-gradient(180deg,rgba(34,28,53,0.92),rgba(24,20,40,0.76))]">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-panel bg-[linear-gradient(135deg,rgba(139,92,246,0.22),rgba(232,121,249,0.14))] text-brand-soft ring-1 ring-brand-primary/18 transition-all duration-200 group-hover:scale-105 group-hover:ring-brand-accent/28">
            <Icon className="size-4" aria-hidden="true" />
          </span>

          <div className="min-w-0">
            <p className="typo-section-eyebrow text-text-muted/90">{label}</p>
            <p className="truncate font-medium text-text-primary">{title}</p>
            <p className="typo-body-sm text-text-muted/95">{detail}</p>
          </div>
        </div>

        <span className="font-display font-semibold text-brand-soft text-xl tracking-tight">{value}%</span>
      </div>

      <Progress value={value} aria-label={`${title} signal strength`} className="mt-3 h-2.5 bg-white/6" />
    </div>
  )
}
