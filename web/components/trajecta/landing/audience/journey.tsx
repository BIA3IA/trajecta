import type { JourneyStep } from "./types"

export function JourneySection({ journey }: { journey: JourneyStep[] }) {
  return (
    <div className="relative mt-4 grid gap-3 lg:grid-cols-3">
      <div className="card-top-line-brand pointer-events-none absolute top-3 right-8 left-8 hidden h-px lg:block" />
      {journey.map((step, index) => (
        <div
          key={step.id}
          className="group/step card-border card-hover-brand surface-brand relative rounded-panel p-4 transition-all duration-200"
        >
          <div className="card-glow-overlay card-glow-brand group-hover/step:opacity-100" />
          <div className="flex items-center gap-3">
            <span className="step-badge icon-brand">{index + 1}</span>
            <div>
              <p className="typo-section-eyebrow text-text-muted">Step {index + 1}</p>
              <p className="typo-label mt-1 text-text-primary">{step.title}</p>
            </div>
          </div>

          <p className="typo-body-sm mt-3 text-text-secondary">{step.text}</p>
        </div>
      ))}
    </div>
  )
}
