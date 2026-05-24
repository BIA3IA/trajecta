import { FiCheckCircle, FiMinus } from "react-icons/fi"
import { Card } from "@/components/ui/card"
import { HighlightPill } from "@/components/ui/highlight-pill"
import { cn } from "@/lib/utils"
import type { BrokenLayerItem, BrokenLayerTone } from "./types"

const toneStyles = {
  legacy: {
    card: "bg-[linear-gradient(180deg,rgba(18,16,22,0.98),rgba(12,11,16,0.96))] border-white/5 hover:border-white/8 hover:shadow-[0_16px_36px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.02)]",
    glow: "bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.03),transparent_20rem)]",
    shimmer: "bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.04),transparent)]",
    topLine: "bg-[linear-gradient(90deg,transparent,rgba(180,180,180,0.18),transparent)]",
    rail: "bg-white/[0.06]",
    label: "text-text-muted/60",
  },
  future: {
    card: "",
    glow: "card-glow-brand",
    shimmer: "card-shimmer-brand",
    topLine: "card-top-line-brand",
    rail: "card-left-rail-brand",
    label: "text-brand-soft",
  },
} satisfies Record<
  BrokenLayerTone,
  { card: string; glow: string; shimmer: string; topLine: string; rail: string; label: string }
>

export function BrokenLayerCard({ label, title, text, tone, badgeLabel, summary }: BrokenLayerItem) {
  const styles = toneStyles[tone]
  const isLegacy = tone === "legacy"

  return (
    <Card className={cn("card-hover p-6", styles.card)}>
      <div className={cn("card-glow-overlay group-hover:opacity-100", styles.glow)} />
      <div className={cn("card-shimmer inset-y-0 left-0 w-1/3 skew-x-[-18deg]", styles.shimmer)} />
      <div className={cn("card-top-line", styles.topLine)} />
      <div className={cn("card-left-rail", styles.rail)} />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between">
          <p className={cn("typo-section-eyebrow", styles.label)}>{label}</p>
          <HighlightPill
            label={badgeLabel}
            variant={isLegacy ? "muted" : "default"}
            icon={
              isLegacy ? (
                <FiMinus className="size-3.5" aria-hidden="true" />
              ) : (
                <FiCheckCircle className="size-3.5" aria-hidden="true" />
              )
            }
          />
        </div>

        <h3 className="typo-h2 max-w-xl text-balance text-text-primary">{title}</h3>
        <p className="typo-body mt-5 max-w-xl text-text-secondary">{text}</p>
        <p className="typo-body-sm mt-5 max-w-xl text-text-muted">{summary}</p>
      </div>
    </Card>
  )
}
