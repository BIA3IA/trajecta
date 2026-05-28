import { FiAward, FiBriefcase, FiCode } from "react-icons/fi"
import { Badge } from "@/components/ui/badge"
import type { skillEvidence } from "./types"

const config: Record<skillEvidence["kind"], { icon: React.ElementType; label: string }> = {
  certification: { icon: FiAward, label: "Certification" },
  experience: { icon: FiBriefcase, label: "Experience" },
  project: { icon: FiCode, label: "Project" },
}

export function EvidenceCard({ evidence }: { evidence: skillEvidence }) {
  const { icon: Icon, label } = config[evidence.kind]

  return (
    <div className="flex items-start gap-4 rounded-panel border border-border-subtle bg-surface-1 px-5 py-4">
      <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-brand-primary/20 bg-brand-primary/10">
        <Icon className="size-4 text-brand-soft" aria-hidden />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="flex flex-col gap-0.5">
            <p className="typo-label text-text-primary">{evidence.title}</p>
            <p className="typo-body-sm text-text-muted">{evidence.subtitle}</p>
          </div>
          <div className="flex items-center gap-4">
            {"year" in evidence && <span className="typo-body-sm text-text-muted">{evidence.year}</span>}
            {"url" in evidence && evidence.url && (
              <a
                href={evidence.url}
                target="_blank"
                rel="noopener noreferrer"
                className="typo-body-sm text-brand-soft underline-offset-2 hover:underline"
              >
                Open Proof
              </a>
            )}
            <Badge className="border-border-subtle text-text-muted">{label}</Badge>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {evidence.coveredSkills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
