"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FiArrowRight, FiCheckCircle } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import { HighlightPill } from "@/components/ui/highlight-pill"
import { ease, fadeUp, staggerContainer } from "@/lib/motion"
import { heroContent, heroHighlights } from "./data"

export function HeroContent() {
  return (
    <div className="max-w-3xl">
      <motion.p
        className="typo-section-eyebrow"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.1 }}
      >
        {heroContent.eyebrow}
      </motion.p>

      <motion.h1
        id="hero-heading"
        className="typo-display-xl mt-4 max-w-4xl text-balance"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease, delay: 0.25 }}
      >
        <span className="hidden sm:inline">{heroContent.titleLead} </span>
        {heroContent.titleBridge} <span className="text-brand-gradient">{heroContent.titleAccent}</span>
      </motion.h1>

      <motion.p
        className="typo-body-lg mt-6 max-w-2xl text-text-secondary"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.42 }}
      >
        {heroContent.description}
      </motion.p>

      <motion.div
        className="my-7 grid max-w-2xl gap-3 sm:grid-cols-3"
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.09, 0.6)}
      >
        {heroHighlights.map((item) => (
          <motion.div key={item} variants={fadeUp}>
            <HighlightPill label={item} icon={<FiCheckCircle className="size-3.5" aria-hidden="true" />} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.85 }}
      >
        <Button asChild variant="gradient">
          <Link href={heroContent.cta.href}>
            <span className="relative z-10">{heroContent.cta.label}</span>
            <FiArrowRight
              className="relative z-10 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}
