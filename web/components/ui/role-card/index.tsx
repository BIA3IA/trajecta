import { Badge } from "../badge"
import { Card } from "../card"
import { Progress } from "../progress"
import type { roleMatch } from "./types"

export function RoleCard({ role }: { role: roleMatch }) {
  return (
    <Card static key={role.title} className="p-5">
      <div className="card-top-line card-top-line-brand" />
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-2">
          <p className="typo-label text-text-primary">{role.title}</p>
          <span className="typo-h3 shrink-0 text-brand-soft">{role.match}%</span>
        </div>
        <Progress value={role.match} />
        <div className="flex flex-wrap gap-1.5">
          {role.sharedSkills.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
        <p className="typo-body-sm text-text-muted">{role.note}</p>
      </div>
    </Card>
  )
}
