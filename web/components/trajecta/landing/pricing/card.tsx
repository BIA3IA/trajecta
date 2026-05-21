import { FiCheck } from "react-icons/fi"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { PricingCtaButton } from "./pricing-cta-button"
import type { PricingPlan } from "./types"

const variantStyles = {
  default: {
    card: "border-white/7 bg-[linear-gradient(180deg,rgba(24,18,40,0.96),rgba(16,12,28,0.92))] hover:border-brand-soft/16 hover:shadow-[0_16px_34px_rgba(167,139,250,0.08),inset_0_1px_0_rgba(255,255,255,0.04)]",
    glow: "bg-[radial-gradient(circle_at_100%_0%,rgba(196,181,253,0.10),transparent_18rem)]",
    topLine: "bg-[linear-gradient(90deg,transparent,rgba(196,181,253,0.34),transparent)]",
    priceValue: "text-text-primary",
    button: "relative bg-white/6 text-text-secondary hover:bg-white/10 hover:text-text-primary",
    buttonIcon: "bg-white/14 text-white",
    buttonSheen: "bg-white/10",
    shimmer: "from-transparent via-brand-soft/14 to-transparent",
    featureIcon: "text-brand-accent",
  },
  highlighted: {
    card: "border-brand-primary/26 bg-[linear-gradient(180deg,rgba(33,25,53,0.98),rgba(20,15,34,0.94))] shadow-[0_16px_42px_rgba(139,92,246,0.10),inset_0_1px_0_rgba(255,255,255,0.04)] hover:border-brand-primary/34 hover:shadow-[0_20px_48px_rgba(139,92,246,0.14),inset_0_1px_0_rgba(255,255,255,0.05)]",
    glow: "card-glow-brand",
    topLine: "card-top-line-brand",
    priceValue: "text-brand-soft",
    button:
      "relative animate-gradient-shift-x bg-brand-vivid bg-size-[200%_100%] text-white shadow-[0_10px_24px_rgba(139,92,246,0.22),0_10px_24px_rgba(232,121,249,0.14),inset_0_1px_0_rgba(255,255,255,0.18)] hover:brightness-110 hover:shadow-[0_14px_28px_rgba(139,92,246,0.30),inset_0_1px_0_rgba(255,255,255,0.18)]",
    buttonIcon: "bg-white/14 text-white",
    buttonSheen: "bg-white/12",
    shimmer: "card-shimmer-brand",
    featureIcon: "text-brand-accent",
  },
} satisfies Record<
  "default" | "highlighted",
  {
    card: string
    glow: string
    topLine: string
    priceValue: string
    button: string
    buttonIcon: string
    buttonSheen: string
    shimmer: string
    featureIcon: string
  }
>

type PricingCardProps = PricingPlan

export function PricingCard({
  name,
  label,
  description,
  priceLabel,
  note,
  cta,
  href,
  highlighted,
  features,
}: PricingCardProps) {
  const styles = variantStyles[highlighted ? "highlighted" : "default"]

  return (
    <Card
      className={cn(
        "group card-border card-hover relative flex h-full flex-col overflow-hidden p-6 md:p-8",
        styles.card
      )}
    >
      <div className={cn("card-glow-overlay group-hover:opacity-100", styles.glow)} />
      <div className={cn("card-shimmer -top-6 left-[-16%] h-56 w-32 rotate-[-22deg]", styles.shimmer)} />
      <div className={cn("card-top-line", styles.topLine)} />

      <div className="relative flex h-full flex-col">
        <div>
          <p className="typo-section-eyebrow">{label}</p>
          <h3 className="typo-h2 mt-2 text-text-primary">{name}</h3>
          <p className="typo-body mt-2 text-text-secondary">{description}</p>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <div className="flex items-end gap-2">
            <span className={cn("typo-price", styles.priceValue)}>{priceLabel}</span>
            {note ? <span className="typo-body-sm mb-1.5 text-text-muted">{note}</span> : null}
          </div>
          <div className="ml-auto shrink-0">
            <PricingCtaButton
              label={cta}
              href={href}
              className={styles.button}
              iconClassName={styles.buttonIcon}
              sheenClassName={styles.buttonSheen}
              variant={highlighted ? "default" : "outline"}
            />
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <p className="typo-section-eyebrow">Includes</p>
          <div className="h-px flex-1 bg-border-subtle" />
        </div>

        <div className="mt-5 flex flex-1 flex-col gap-3">
          {features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <span className={cn("mt-0.5 flex size-5 shrink-0 items-center justify-center", styles.featureIcon)}>
                <FiCheck className="size-4" aria-hidden="true" />
              </span>
              <p className="typo-body text-text-secondary">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
