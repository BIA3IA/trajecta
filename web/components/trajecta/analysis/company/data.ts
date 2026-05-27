import type { Tab } from "@/components/ui/tabs"
import type { AnalysisTab } from "./types"

export const tabs: Tab<AnalysisTab>[] = [
  { id: "overview", label: "Overview" },
  { id: "market", label: "Market" },
  { id: "talent-pool", label: "Talent Pool" },
]
