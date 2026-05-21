import { AudienceSection } from "@/components/trajecta/landing/audience"
import { BrokenLayer } from "@/components/trajecta/landing/broken-layer"
import { HeroSection } from "@/components/trajecta/landing/hero"
import { PricingSection } from "@/components/trajecta/landing/pricing"

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
