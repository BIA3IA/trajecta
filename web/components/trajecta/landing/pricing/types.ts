import type { SectionHeadingContent } from "../shared/types"

export type PricingAudience = "talents" | "companies"

export type PricingPlan = {
  id: string
  name: string
  label: string
  description: string
  priceLabel: string
  note?: string
  cta: string
  href: string
  highlighted?: boolean
  features: string[]
}

export type PricingContent = SectionHeadingContent & {
  titleAccent: string
  plans: PricingPlan[]
}
