import { SkillItem } from "./skill-item"
import type { emergingSkill } from "./types"

export function SkillTimeline({ emergingSkills }: { emergingSkills: emergingSkill[] }) {
  return (
    <div className="flex flex-col">
      {emergingSkills.map((skill, i) => {
        const isLast = i === emergingSkills.length - 1
        return <SkillItem key={skill.skill} skill={skill} isLast={isLast} />
      })}
    </div>
  )
}
