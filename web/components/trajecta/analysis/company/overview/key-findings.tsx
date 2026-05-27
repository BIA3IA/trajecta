import { FiAlertCircle, FiCheckCircle } from "react-icons/fi"
import { cn } from "@/lib/utils"
import type { keyFinding } from "./types"

export function KeyFindings({ keyFindings }: { keyFindings: keyFinding[] }) {
  return (
    <section className="flex flex-col gap-4">
      <p className="typo-section-eyebrow">Key findings</p>
      <div className="flex flex-col gap-3">
        {keyFindings.map((finding) => (
          <div
            key={finding.title}
            className={cn(
              "flex items-start gap-4 rounded-r-panel border-l-2 px-5 py-4",
              finding.type === "risk"
                ? "border-brand-accent bg-brand-accent/5"
                : "border-brand-primary bg-brand-primary/5"
            )}
          >
            {finding.type === "risk" ? (
              <FiAlertCircle className="size-4 shrink-0 self-center text-brand-accent" aria-hidden />
            ) : (
              <FiCheckCircle className="size-4 shrink-0 self-center text-brand-soft" aria-hidden />
            )}
            <div className="flex flex-col gap-1">
              <p className="typo-label text-text-primary">{finding.title}</p>
              <p className="typo-body-sm text-text-secondary">{finding.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
