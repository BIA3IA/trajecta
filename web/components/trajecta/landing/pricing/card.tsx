import Link from "next/link"
import { FiArrowRight, FiCheck } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { gradientButtonClassName } from "@/lib/styles"
import { cn } from "@/lib/utils"
import type { PricingPlan } from "./types"

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
  return (
    <Card className="group card-border card-hover surface-brand card-hover-brand relative flex h-full flex-col overflow-hidden p-6 md:p-8">
      <div className="card-glow-overlay card-glow-brand group-hover:opacity-100" />
      <div className="card-shimmer card-shimmer-brand -top-6 left-[-16%] h-56 w-32 rotate-[-22deg]" />
      <div className="card-top-line card-top-line-brand" />

      <div className="relative flex h-full flex-col gap-8">
        <div>
          <p className="typo-section-eyebrow">{label}</p>
          <h3 className="typo-h2 mt-2 text-text-primary">{name}</h3>
          <p className="typo-body mt-2 text-text-secondary">{description}</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-end gap-2">
            <span className="typo-price text-text-primary">{priceLabel}</span>
            <span className="typo-body-sm mb-1.5 text-text-muted">{note}</span>
          </div>
          <div className="ml-auto shrink-0">
            <Button
              asChild
              className={cn(
                highlighted
                  ? gradientButtonClassName
                  : "hover:-translate-y-0.5 relative border-none bg-white/6 px-5 py-3 text-text-secondary shadow-none transition-all duration-200 ease-out hover:scale-[1.02] hover:bg-white/10 hover:text-text-primary"
              )}
            >
              <Link href={href}>
                <span className="relative z-10">{cta}</span>
                <span className="flex size-6 items-center justify-center rounded-full bg-white/14 text-white transition-transform duration-200 group-hover:translate-x-0.5">
                  <FiArrowRight aria-hidden="true" className="size-3.5" />
                </span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="typo-section-eyebrow">Includes</p>
          <div className="card-top-line-brand hidden h-px flex-1 sm:block" />
        </div>

        <div className="flex flex-1 flex-col gap-3">
          {features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center text-brand-accent">
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
