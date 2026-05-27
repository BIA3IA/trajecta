import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import type { adjacentRole } from "./types"

export function TransferableTalent({ adjacentRoles }: { adjacentRoles: adjacentRole[] }) {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <p className="typo-section-eyebrow">Transferable talent</p>
        <p className="typo-body-sm mt-0.5 text-text-muted">
          Adjacent roles with high skill overlap - alternative pools to source from
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {adjacentRoles.map((r) => (
          <Card static key={r.title} className="p-5">
            <div className="card-top-line card-top-line-brand" />
            <div className="relative flex flex-col gap-4">
              <div className="flex items-start justify-between gap-2">
                <p className="typo-label text-text-primary">{r.title}</p>
                <span className="typo-h3 shrink-0 text-brand-soft">{r.overlap}%</span>
              </div>
              <Progress value={r.overlap} />
              <div className="flex flex-wrap gap-1.5">
                {r.sharedSkills.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
              <p className="typo-body-sm text-text-muted">{r.note}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
