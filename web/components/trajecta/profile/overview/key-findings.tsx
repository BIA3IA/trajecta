import { FindingCard } from "@/components/blocks/finding-card"
import type { keyFinding } from "@/components/blocks/finding-card/types"

export function KeyFindings({ keyFindings }: { keyFindings: keyFinding[] }) {
  return (
    <section className="flex flex-col gap-4">
      <p className="typo-section-eyebrow">Key findings</p>
      <div className="flex flex-col gap-3">
        {keyFindings.map((finding) => (
          <FindingCard key={finding.title} finding={finding} />
        ))}
      </div>
    </section>
  )
}
