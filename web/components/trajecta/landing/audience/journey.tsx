import { cn } from "@/lib/utils"
import type { AudienceTone, JourneyStep } from "./types"

const stepBadgeClassName =
  "bg-[linear-gradient(135deg,rgba(139,92,246,0.72),rgba(232,121,249,0.60))] text-white ring-brand-accent/30 shadow-[0_0_10px_rgba(232,121,249,0.22)]"

const journeyToneStyles = {
  talent: {
    line: "bg-[linear-gradient(90deg,rgba(232,121,249,0.24),rgba(196,181,253,0.20))]",
    surface: "hover:border-brand-soft/18 hover:bg-[linear-gradient(180deg,rgba(33,26,52,0.82),rgba(22,17,36,0.72))]",
    glow: "bg-[radial-gradient(circle_at_0%_0%,rgba(196,181,253,0.12),transparent_14rem)]",
  },
  company: {
    line: "bg-[linear-gradient(90deg,rgba(232,121,249,0.24),rgba(139,92,246,0.22))]",
    surface: "hover:border-brand-primary/18 hover:bg-[linear-gradient(180deg,rgba(36,29,57,0.82),rgba(24,20,40,0.72))]",
    glow: "bg-[radial-gradient(circle_at_0%_0%,rgba(139,92,246,0.10),transparent_14rem)]",
  },
} satisfies Record<AudienceTone, { line: string; surface: string; glow: string }>

export function JourneySection({ journey, tone }: { journey: JourneyStep[]; tone: AudienceTone }) {
  const styles = journeyToneStyles[tone]

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <p className="typo-section-eyebrow">How it works</p>
        <div className={cn("hidden h-px flex-1 sm:block", styles.line)} />
      </div>

      <div className="relative mt-4 grid gap-3 lg:grid-cols-3">
        <div className={cn("pointer-events-none absolute top-3 right-8 left-8 hidden h-px lg:block", styles.line)} />
        {journey.map((step, index) => (
          <div
            key={step.id}
            className={cn(
              "group/step relative rounded-panel border border-white/7 bg-[linear-gradient(180deg,rgba(22,18,36,0.88),rgba(22,18,36,0.68))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-200",
              styles.surface
            )}
          >
            <div className={cn("card-glow-overlay group-hover/step:opacity-100", styles.glow)} />
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "relative z-10 flex size-7 shrink-0 items-center justify-center rounded-full text-xs ring-1",
                  stepBadgeClassName
                )}
              >
                {index + 1}
              </span>
              <div>
                <p className="typo-section-eyebrow text-text-muted">Step {index + 1}</p>
                <p className="typo-label mt-1 text-text-primary">{step.title}</p>
              </div>
            </div>

            <p className="typo-body-sm mt-3 text-text-secondary">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
