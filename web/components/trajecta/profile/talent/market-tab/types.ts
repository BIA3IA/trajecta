import type { marketData } from "@/components/blocks/market-card/types"

export type marketReadiness = "strong" | "good" | "moderate" | "challenging"

export type marketPositionData = {
  title: string
  snapshot: string
  benchmarkLabel: string
  readiness: marketReadiness
  summary: string
  signals: marketData[]
}
