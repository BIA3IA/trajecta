"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { ease } from "@/lib/motion"
import type { JourneyStep } from "./types"

export function JourneySection({ journey }: { journey: JourneyStep[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <div ref={ref} className="relative mt-4 grid gap-3 lg:grid-cols-3">
      <motion.div
        className="card-top-line-brand pointer-events-none absolute top-3 right-8 left-8 hidden h-px origin-left lg:block"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.75, ease, delay: 0.2 }}
      />

      {journey.map((step, index) => (
        <motion.div
          key={step.id}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease, delay: 0.1 + index * 0.13 }}
        >
          <Card className="group/step relative p-4 transition-all duration-200">
            <div className="card-glow-overlay card-glow-brand group-hover/step:opacity-100" />
            <div className="flex items-center gap-3">
              <span className="step-badge icon-brand">{index + 1}</span>
              <div>
                <p className="typo-section-eyebrow text-text-muted">Step {index + 1}</p>
                <p className="typo-label mt-1 text-text-primary">{step.title}</p>
              </div>
            </div>
            <p className="typo-body-sm mt-3 text-text-secondary">{step.text}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
