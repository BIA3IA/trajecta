import { SuggestionsCard } from "@/components/blocks/suggestions-card"
import type { suggestion } from "@/components/blocks/suggestions-card/types"

type Props = {
  suggestions: suggestion[]
  eyebrow: string
  description: string
}

export function SuggestionList({ suggestions, eyebrow, description }: Props) {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <p className="typo-section-eyebrow">{eyebrow}</p>
        <p className="typo-body-sm mt-0.5 text-text-muted">{description}</p>
      </div>
      <SuggestionsCard suggestions={suggestions} />
    </section>
  )
}
