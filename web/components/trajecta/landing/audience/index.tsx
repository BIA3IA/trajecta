import { AnimatedGradientText } from "../shared/animated-gradient-text"
import { SectionShell } from "../shared/section-shell"
import { AudienceCard } from "./card"
import { audienceCards, audienceSectionContent } from "./data"

export function AudienceSection() {
  return (
    <SectionShell id="audience" aria-labelledby="audience-heading">
      <div className="mx-auto max-w-4xl text-center">
        <p className="typo-section-eyebrow">{audienceSectionContent.eyebrow}</p>
        <h2 id="audience-heading" className="typo-display-lg mt-4 text-balance">
          {audienceSectionContent.title}{" "}
          <AnimatedGradientText>{audienceSectionContent.titleAccent}</AnimatedGradientText>
        </h2>
        <p className="typo-body-lg mt-6 text-text-secondary">{audienceSectionContent.description}</p>
      </div>

      <div className="mt-10 grid gap-5 lg:mt-16 lg:grid-cols-2">
        {audienceCards.map((audience) => (
          <AudienceCard key={audience.id} {...audience} />
        ))}
      </div>
    </SectionShell>
  )
}
