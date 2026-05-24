import { AudienceCard } from "./card"
import { audienceCards, audienceSectionContent } from "./data"

export function AudienceSection() {
  return (
    <section
      id="audience"
      aria-labelledby="audience-heading"
      className="mx-auto w-full max-w-350 px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="reveal-up mx-auto max-w-5xl text-center">
        <p className="typo-section-eyebrow">{audienceSectionContent.eyebrow}</p>
        <h2 id="audience-heading" className="typo-display-lg mt-4 text-balance">
          {audienceSectionContent.title}
          <span className="text-brand-gradient"> {audienceSectionContent.titleAccent}</span>
        </h2>
        <p className="typo-body-lg mt-6 text-text-secondary">{audienceSectionContent.description}</p>
      </div>

      <div className="mx-auto mt-10 grid gap-5 lg:mt-16 lg:grid-cols-2">
        {audienceCards.map((audience) => (
          <AudienceCard key={audience.id} {...audience} />
        ))}
      </div>
    </section>
  )
}
