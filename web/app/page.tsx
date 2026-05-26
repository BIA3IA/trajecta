import { AudienceSection } from "@/components/trajecta/landing/audience"
import { BrokenLayer } from "@/components/trajecta/landing/broken-layer"
import { HeroSection } from "@/components/trajecta/landing/hero"
import { PricingSection } from "@/components/trajecta/landing/pricing"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trajecta: Career Intelligence for the Future of Work",
  description:
    "Discover your skill identity and unlock personalized career insights with Trajecta's AI-powered career intelligence platform. Navigate the future of work with confidence.",
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-background text-text-primary">
      <HeroSection />
      <BrokenLayer />
      <AudienceSection />
      <PricingSection />
    </main>
  )
}
