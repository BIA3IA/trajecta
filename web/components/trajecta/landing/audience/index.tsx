"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ease } from "@/lib/motion"
import { AudienceCard } from "./card"
import { audienceCards, audienceSectionContent } from "./data"

export function AudienceSection() {
  const cardsRef = useRef<HTMLDivElement>(null)
  const inView = useInView(cardsRef, { once: true, margin: "-80px" })

  return (
    <section
      id="audience"
      aria-labelledby="audience-heading"
      className="mx-auto w-full max-w-350 px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="reveal-up mx-auto max-w-5xl text-center">
        <p className="typo-section-eyebrow">{audienceSectionContent.eyebrow}</p>
        <h2 id="audience-heading" className="typo-display-lg mt-4 text-balance">
          {audienceSectionContent.title}
          <span className="text-brand-gradient"> {audienceSectionContent.titleAccent}</span>
        </h2>
        <p className="typo-body-lg mt-6 text-text-secondary">{audienceSectionContent.description}</p>
      </div>

      <div ref={cardsRef} className="mx-auto mt-10 grid gap-5 lg:mt-16 lg:grid-cols-2">
        {audienceCards.map((audience, i) => (
          <motion.div
            key={audience.id}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: i * 0.15 }}
          >
            <AudienceCard {...audience} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
