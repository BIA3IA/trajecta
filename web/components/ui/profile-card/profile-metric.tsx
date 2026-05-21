import type { ProfileMetric } from "../types"

export function ProfileMetricCard({ label, value }: ProfileMetric) {
  return (
    <div className="rounded-panel border border-white/7 bg-[linear-gradient(180deg,rgba(21,17,35,0.74),rgba(21,17,35,0.48))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-200 hover:border-brand-primary/22 hover:bg-[linear-gradient(180deg,rgba(35,28,56,0.82),rgba(24,19,40,0.62))]">
      <p className="typo-section-eyebrow text-text-muted/90">{label}</p>
      <p className="mt-2 font-display font-semibold text-2xl text-text-primary tracking-tight">{value}</p>
    </div>
  )
}
