"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FiArrowDown, FiArrowRight } from "react-icons/fi"
import { slideFromLeft, slideFromRight, spring } from "@/lib/motion"
import { BrokenLayerCard } from "./card"
import { brokenLayerItems, brokenLayerSectionContent } from "./data"

export function BrokenLayer() {
  const [legacyItem, futureItem] = brokenLayerItems
  const cardsRef = useRef<HTMLDivElement>(null)
  const inView = useInView(cardsRef, { once: true, margin: "-100px" })

  return (
    <section
      aria-labelledby="broken-layer-heading"
      className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="reveal-up grid gap-4 text-center">
        <p className="typo-section-eyebrow">{brokenLayerSectionContent.eyebrow}</p>
        <h2 id="broken-layer-heading" className="typo-display-lg text-balance">
          {brokenLayerSectionContent.title} <br />
          <span className="text-brand-gradient"> {brokenLayerSectionContent.titleAccent}</span>
        </h2>
      </div>

      <div ref={cardsRef} className="relative flex flex-col gap-5 md:flex-row">
        <motion.div
          className="flex flex-1 flex-col gap-2"
          variants={slideFromLeft}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <p className="typo-section-eyebrow pl-1 text-text-muted">Without Trajecta</p>
          <BrokenLayerCard {...legacyItem} />
        </motion.div>

        <div className="flex shrink-0 items-center justify-center py-2 md:py-0">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: spring, delay: 0.35 }}
          >
            <FiArrowRight className="hidden size-6 text-brand-soft md:block" aria-hidden="true" />
            <FiArrowDown className="size-6 text-brand-soft md:hidden" aria-hidden="true" />
          </motion.div>
        </div>

        <motion.div
          className="flex flex-1 flex-col gap-2"
          variants={slideFromRight}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <p className="typo-section-eyebrow pl-1">With Trajecta</p>
          <BrokenLayerCard {...futureItem} />
        </motion.div>
      </div>
    </section>
  )
}
