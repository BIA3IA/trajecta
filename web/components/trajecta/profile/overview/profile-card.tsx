import { SkillCard } from "@/components/blocks/skill-card"
import { Badge } from "@/components/ui/badge"
import type { profileData } from "./types"

type Props = {
  profile: profileData
  eyebrow: string
}

export function ProfileCard({ profile, eyebrow }: Props) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <p className="typo-section-eyebrow">{eyebrow}</p>
          <h2 className="typo-display-lg text-text-primary">{profile.title}</h2>
          {profile.subtitle && <p className="typo-body text-text-secondary">{profile.subtitle}</p>}
          <p className="typo-body mt-1 max-w-2xl text-text-secondary">{profile.summary}</p>
        </div>
        <Badge severity="brand" className="mt-1 shrink-0">
          {profile.seniority}
        </Badge>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {profile.skillGroups.map((group) => (
          <SkillCard key={group.label} group={group} />
        ))}
      </div>
    </section>
  )
}
