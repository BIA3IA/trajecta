import { FiCheckCircle } from "react-icons/fi"
import { cn } from "@/lib/utils"
import type { skillGroup } from "./types"

export function SkillCard({ group }: { group: skillGroup }) {
  return (
    <div key={group.label} className={cn("flex flex-col gap-3 rounded-panel border p-4", group.color)}>
      <p className="typo-section-eyebrow opacity-70">{group.label}</p>
      <div className="flex flex-wrap gap-1.5">
        {group.skills.map((skill) => {
          const verified = group.verifiedSkills?.includes(skill)
          return (
            <span
              key={skill}
              className="typo-body-sm flex items-center gap-1 rounded-full border border-current/20 bg-background/30 px-2.5 py-0.5"
            >
              {verified && <FiCheckCircle className="size-3 shrink-0" aria-label="Verified" />}
              {skill}
            </span>
          )
        })}
      </div>
    </div>
  )
}
