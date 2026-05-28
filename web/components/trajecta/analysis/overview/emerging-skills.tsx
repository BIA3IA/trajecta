import { SkillTimeline } from "@/components/ui/skill-timeline"
import type { emergingSkill } from "@/components/ui/skill-timeline/types"

export function EmergingSkills({ emergingSkills }: { emergingSkills: emergingSkill[] }) {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <p className="typo-section-eyebrow">Emerging skills</p>
        <p className="typo-body-sm mt-0.5 text-text-muted">
          What the market will likely require for this role in the next 6-24 months
        </p>
      </div>
      <SkillTimeline emergingSkills={emergingSkills} />
    </section>
  )
}
