"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Hint } from "@/components/ui/hint"
import { ProfileCard } from "@/components/ui/profile-card"
import { ease } from "@/lib/motion"
import { previewCardContent, previewHints } from "./data"

export function HeroPreview() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 70])

  return (
    <motion.div
      ref={ref}
      className="relative lg:pl-6"
      style={{ y }}
      initial={{ opacity: 0, x: 40, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1, ease, delay: 0.5 }}
    >
      <div className="-inset-8 -z-10 absolute animate-glow-shift rounded-full bg-brand-primary/20 blur-3xl" />

      <ProfileCard {...previewCardContent} />

      {previewHints.map((hint) => (
        <Hint key={`${hint.label}-${hint.value}`} {...hint} />
      ))}
    </motion.div>
  )
}
