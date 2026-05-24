export type PricingAudience = "talents" | "companies"

export type PricingPlan = {
  id: string
  name: string
  label: string
  description: string
  priceLabel: string
  note: string
  cta: string
  href: string
  highlighted?: boolean
  features: string[]
}

export type PricingContent = {
  eyebrow: string
  title: string
  titleAccent: string
  description: string
  plans: PricingPlan[]
}
