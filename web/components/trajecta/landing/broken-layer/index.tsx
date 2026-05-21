import { FiArrowDown, FiArrowRight } from "react-icons/fi"
import { AnimatedGradientText } from "../shared/animated-gradient-text"
import { BrokenLayerCard } from "./card"
import { brokenLayerItems, brokenLayerSectionContent } from "./data"

export function BrokenLayer() {
  const [legacyItem, futureItem] = brokenLayerItems

  return (
    <section
      aria-labelledby="broken-layer-heading"
      className="mx-auto flex w-full max-w-380 flex-col gap-20 px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="reveal-up grid gap-4">
        <p className="typo-section-eyebrow">{brokenLayerSectionContent.eyebrow}</p>
        <h2 id="broken-layer-heading" className="typo-display-lg text-balance">
          {brokenLayerSectionContent.title}
          <AnimatedGradientText> {brokenLayerSectionContent.titleAccent}</AnimatedGradientText>
        </h2>
      </div>

      <div className="relative flex flex-col gap-5 md:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <p className="typo-section-eyebrow pl-1 text-text-muted">Without Trajecta</p>
          <BrokenLayerCard {...legacyItem} />
        </div>

        <div className="flex shrink-0 items-center justify-center py-2 md:py-0">
          <FiArrowRight className="hidden size-6 text-brand-soft md:block" />
          <FiArrowDown className="size-6 text-brand-soft md:hidden" />
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <p className="typo-section-eyebrow pl-1">With Trajecta</p>
          <BrokenLayerCard {...futureItem} />
        </div>
      </div>
    </section>
  )
}
