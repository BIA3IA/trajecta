import type { ProfileMetric } from "./types"

export function ProfileMetricCard({ label, value }: ProfileMetric) {
  return (
    <div className="card-border card-hover-brand surface-brand rounded-panel p-4">
      <p className="typo-section-eyebrow text-text-muted/90">{label}</p>
      <p className="typo-h3 mt-2 text-text-primary tracking-tight">{value}</p>
    </div>
  )
}
