import { FiZap } from "react-icons/fi"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { emergingSkill } from "./types"

export function SkillItem({ skill, isLast }: { skill: emergingSkill; isLast?: boolean }) {
  return (
    <div key={skill.skill} className="flex gap-4">
      <div className="flex w-5 shrink-0 flex-col items-center">
        <div className="flex size-5 shrink-0 items-center justify-center rounded-full border border-brand-primary/30 bg-surface-2">
          <FiZap className="size-3 text-brand-soft" aria-hidden />
        </div>
        {!isLast && <div className="w-px flex-1 bg-border-subtle" />}
      </div>

      <div className={cn("flex flex-col gap-1 pb-6", isLast && "pb-0")}>
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="w-26">{skill.horizon}</Badge>
          <p className="typo-label text-text-primary">{skill.skill}</p>
        </div>
        <p className="typo-body-sm text-text-secondary">{skill.reason}</p>
      </div>
    </div>
  )
}
