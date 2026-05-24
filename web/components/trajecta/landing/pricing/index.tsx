"use client"

import { useState } from "react"

import { SegmentedControl } from "../shared/segmented-control"
import { PricingCard } from "./card"
import { pricingAudienceOptions, pricingContent } from "./data"
import type { PricingAudience } from "./types"

export function PricingSection() {
  const [audience, setAudience] = useState<PricingAudience>("talents")
  const content = pricingContent[audience]

  return (
    <section
      className="mx-auto flex w-full max-w-350 flex-col gap-12 px-5 py-24 sm:px-8 lg:px-10"
      aria-labelledby="pricing-heading"
    >
      <div className="reveal-up mx-auto flex max-w-4xl flex-col gap-4 text-center">
        <p className="typo-section-eyebrow">{content.eyebrow}</p>
        <h2 id="pricing-heading" className="typo-display-lg text-balance">
          {content.title} <br />
          <span className="text-brand-gradient">{content.titleAccent}</span>
        </h2>
        <p className="typo-body-lg text-text-secondary">{content.description}</p>
      </div>

      <div className="mx-auto flex justify-center">
        <SegmentedControl
          options={pricingAudienceOptions}
          value={audience}
          onChange={setAudience}
          label="Select audience"
          className="surface-control"
          activeClassName="bg-brand-vivid text-text-primary"
          inactiveClassName="text-text-secondary hover:text-text-primary"
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-5xl gap-5 lg:grid-cols-2">
        {content.plans.map((plan) => (
          <PricingCard key={plan.id} {...plan} />
        ))}
      </div>
    </section>
  )
}
