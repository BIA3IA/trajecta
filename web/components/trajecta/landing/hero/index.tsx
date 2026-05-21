import { HeroContent } from "./hero-content"
import { HeroPreview } from "./hero-preview"

export function HeroSection() {
  return (
    <section id="top" className="relative isolate" aria-labelledby="hero-heading">
      <div className="-z-10 absolute inset-0 bg-[radial-gradient(circle_at_72%_8%,rgba(139,92,246,0.3),transparent_28rem)]" />
      <div className="-z-10 absolute inset-0 bg-[radial-gradient(circle_at_88%_42%,rgba(232,121,249,0.12),transparent_20rem)]" />
      <div className="-z-10 absolute inset-x-0 top-0 h-96 animate-glow-shift bg-[linear-gradient(180deg,rgba(196,181,253,0.08),transparent)]" />

      <div className="mx-auto flex w-full max-w-400 flex-col px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 py-20 lg:grid-cols-[1fr_0.9fr] lg:py-24">
          <HeroContent />
          <HeroPreview />
        </div>
      </div>
    </section>
  )
}
