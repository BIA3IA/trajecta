import { EvidenceCard } from "@/components/ui/evidence-card"
import type { skillEvidence } from "../../../../ui/evidence-card/types"

export function SkillEvidence({ evidence }: { evidence: skillEvidence[] }) {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <p className="typo-section-eyebrow">Skill evidence</p>
        <p className="typo-body-sm mt-0.5 text-text-muted">
          Verifiable proof behind the skills - certifications, real experience, and personal projects
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {evidence.map((evidence) => {
          return <EvidenceCard key={evidence.title} evidence={evidence} />
        })}
      </div>
    </section>
  )
}
