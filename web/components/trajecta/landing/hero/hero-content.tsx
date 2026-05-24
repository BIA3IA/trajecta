import Link from "next/link"
import { FiArrowRight, FiCheckCircle } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import { HighlightPill } from "@/components/ui/highlight-pill"
import { heroContent, heroHighlights } from "./data"

export function HeroContent() {
  return (
    <div className="reveal-up max-w-3xl">
      <p className="typo-section-eyebrow">{heroContent.eyebrow}</p>

      <h1 id="hero-heading" className="typo-display-xl mt-4 max-w-4xl text-balance">
        <span className="hidden sm:inline">{heroContent.titleLead} </span>
        {heroContent.titleBridge} <span className="text-brand-gradient">{heroContent.titleAccent}</span>
      </h1>

      <p className="typo-body-lg mt-6 max-w-2xl text-text-secondary">{heroContent.description}</p>

      <div className="my-7 grid max-w-2xl gap-3 sm:grid-cols-3">
        {heroHighlights.map((item) => (
          <HighlightPill key={item} label={item} icon={<FiCheckCircle className="size-3.5" aria-hidden="true" />} />
        ))}
      </div>

      <Button asChild variant="gradient">
        <Link href={heroContent.cta.href}>
          <span className="relative z-10">{heroContent.cta.label}</span>
          <FiArrowRight
            className="relative z-10 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </Button>
    </div>
  )
}
