import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { roleSuggestion } from "./types"

export function RoleRefinement({ roleSuggestions }: { roleSuggestions: roleSuggestion[] }) {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <p className="typo-section-eyebrow">Role refinement</p>
        <p className="typo-body-sm mt-0.5 text-text-muted">
          Suggestions to sharpen this spec and attract better-fit candidates
        </p>
      </div>
      <Card static className="divide-y divide-border-subtle p-6">
        {roleSuggestions.map((suggestion, i) => {
          const styles = {
            refine: { label: "Refine", cls: "text-text-muted border-border-subtle" },
            add: { label: "Add", cls: "text-brand-soft border-brand-primary/28" },
            clarify: { label: "Clarify", cls: "text-brand-accent border-brand-accent/28" },
          }[suggestion.type]
          return (
            <div
              key={suggestion.type}
              className={cn(
                "flex items-center gap-3 py-4",
                i === 0 && "pt-0",
                i === roleSuggestions.length - 1 && "pb-0"
              )}
            >
              <Badge className={cn("w-16 shrink-0 justify-center", styles.cls)}>{styles.label}</Badge>
              <p className="typo-body-sm text-text-secondary">{suggestion.text}</p>
            </div>
          )
        })}
      </Card>
    </section>
  )
}
