import { FiArrowRight, FiRefreshCw } from "react-icons/fi"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { ResultsProps } from "./types"

export function StepResults({
  analysis,
  eyebrow,
  title,
  titleAccent,
  resetLabel,
  continueLabel,
  onContinue,
  onReset,
}: ResultsProps) {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="typo-section-eyebrow">{eyebrow}</p>
        <h1 className="typo-display-lg text-balance">
          {title} <span className="text-brand-gradient">{titleAccent}</span>
        </h1>
      </div>

      <Card className="p-6 md:p-8">
        <div className="card-glow-overlay card-glow-brand group-hover:opacity-100" />
        <div className="card-top-line card-top-line-brand" />
        <div className="relative flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <p className="typo-section-eyebrow">Seniority level</p>
            <Badge>{analysis.seniority}</Badge>
          </div>
          <p className="typo-body text-text-secondary">{analysis.summary}</p>
        </div>
      </Card>

      <div className="grid gap-5 sm:grid-cols-3">
        {analysis.skillGroups.map((group) => (
          <Card key={group.label} className="p-6">
            <div className="card-top-line card-top-line-brand" />
            <div className="relative flex flex-col gap-4">
              <p className="typo-section-eyebrow">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <div className="relative flex flex-col gap-2">
          <p className="typo-section-eyebrow">Certifications</p>
          <div className="flex flex-wrap gap-2">
            {analysis.certifications.map((cert) => (
              <Badge key={cert}>{cert}</Badge>
            ))}
          </div>
        </div>
      </Card>

      <div className="flex items-center justify-between gap-4">
        <Button variant="outline" onClick={onReset}>
          <FiRefreshCw className="size-4" aria-hidden />
          {resetLabel}
        </Button>
        <Button variant="gradient" onClick={onContinue}>
          <span className="relative z-10">{continueLabel}</span>
          <FiArrowRight
            className="relative z-10 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
            aria-hidden
          />
        </Button>
      </div>
    </div>
  )
}
