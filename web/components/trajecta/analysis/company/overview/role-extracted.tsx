import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { roleData } from "./types"

export function RoleExtracted({ roleProfile }: { roleProfile: roleData }) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <p className="typo-section-eyebrow">Role extracted</p>
          <h2 className="typo-display-lg text-text-primary">{roleProfile.title}</h2>
          <p className="typo-body mt-1 max-w-2xl text-text-secondary">{roleProfile.summary}</p>
        </div>
        <Badge className="mt-1 shrink-0">{roleProfile.seniority}</Badge>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {roleProfile.skillGroups.map((group) => (
          <div key={group.label} className={cn("flex flex-col gap-3 rounded-panel border p-4", group.color)}>
            <p className="typo-section-eyebrow opacity-70">{group.label}</p>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="typo-body-sm rounded-full border border-current/20 bg-background/30 px-2.5 py-0.5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
