"use client"

import { useState } from "react"

import { AnimatedGradientText } from "../shared/animated-gradient-text"
import { SectionShell } from "../shared/section-shell"
import { SegmentedControl } from "../shared/segmented-control"
import { PricingCard } from "./card"
import { pricingAudienceOptions, pricingContent } from "./data"
import type { PricingAudience } from "./types"

export function PricingSection() {
  const [audience, setAudience] = useState<PricingAudience>("talents")
  const content = pricingContent[audience]

  return (
    <SectionShell id="pricing" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-4xl text-center">
        <p className="typo-section-eyebrow">{content.eyebrow}</p>
        <h2 id="pricing-heading" className="typo-display-lg mt-4 text-balance">
          {content.title} <AnimatedGradientText>{content.titleAccent}</AnimatedGradientText>
        </h2>
        <p className="typo-body-lg mt-6 text-text-secondary">{content.description}</p>
      </div>

      <div className="mx-auto mt-8 flex max-w-3xl justify-center">
        <SegmentedControl
          options={pricingAudienceOptions}
          value={audience}
          onChange={setAudience}
          label="Select audience"
          className="border border-brand-soft/12 bg-[linear-gradient(180deg,rgba(26,20,43,0.92),rgba(19,15,32,0.92))] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
          activeClassName="bg-background text-text-primary shadow-[0_8px_22px_rgba(11,7,20,0.26)]"
          inactiveClassName="text-text-secondary hover:text-text-primary"
        />
      </div>

      <div className="relative mt-10 lg:mt-16">
        <div className="pointer-events-none absolute inset-x-[14%] top-10 h-56 rounded-full bg-brand-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute top-24 left-[8%] h-40 w-40 rounded-full bg-brand-soft/10 blur-3xl" />
        <div className="pointer-events-none absolute top-24 right-[8%] h-40 w-40 rounded-full bg-brand-accent/8 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-4xl gap-5 lg:grid-cols-2">
          {content.plans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
