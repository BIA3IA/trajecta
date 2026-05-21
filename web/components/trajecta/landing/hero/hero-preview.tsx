import { Hint } from "@/components/ui/hint"
import { ProfileCard } from "@/components/ui/profile-card"
import { previewCardContent, previewHints } from "./data"

export function HeroPreview() {
  return (
    <div className="relative lg:pl-6">
      <div className="-inset-8 -z-10 absolute animate-glow-shift rounded-full bg-brand-primary/20 blur-3xl" />

      <ProfileCard {...previewCardContent} />

      {previewHints.map((hint) => (
        <Hint key={`${hint.label}-${hint.value}`} {...hint} />
      ))}
    </div>
  )
}
