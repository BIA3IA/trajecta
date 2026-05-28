import { cn } from "@/lib/utils"
import { Badge } from "../badge"
import { Card } from "../card"
import type { suggestion } from "./types"

const styles: Record<suggestion["type"], { label: string; cls: string }> = {
  refine: { label: "Refine", cls: "text-text-muted border-border-subtle" },
  add: { label: "Add", cls: "text-brand-soft border-brand-primary/28" },
  clarify: { label: "Clarify", cls: "text-brand-accent border-brand-accent/28" },
  deepen: { label: "Deepen", cls: "text-text-muted border-border-subtle" },
  learn: { label: "Learn", cls: "text-brand-soft border-brand-primary/28" },
  certify: { label: "Certify", cls: "text-brand-accent border-brand-accent/28" },
}

export function SuggestionsCard({ suggestions }: { suggestions: suggestion[] }) {
  return (
    <Card static className="divide-y divide-border-subtle p-6">
      {suggestions.map((suggestion, i) => {
        const style = styles[suggestion.type]
        return (
          <div
            key={suggestion.text}
            className={cn("flex items-center gap-3 py-4", i === 0 && "pt-0", i === suggestions.length - 1 && "pb-0")}
          >
            <Badge className={cn("w-16 shrink-0 justify-center", style.cls)}>{style.label}</Badge>
            <p className="typo-body-sm text-text-secondary">{suggestion.text}</p>
          </div>
        )
      })}
    </Card>
  )
}
