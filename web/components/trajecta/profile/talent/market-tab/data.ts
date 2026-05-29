import type { marketPositionData } from "./types";

export const marketPosition: marketPositionData = {
  title: "Strong position in the senior frontend market",
  snapshot: "Q2 2026 market snapshot",
  benchmarkLabel: "Compared with senior frontend and product-leaning engineering profiles in the same geography",
  readiness: "strong",
  summary:
    "Your profile is above benchmark because demand is high for senior React/TypeScript engineers who can also show product judgment.",
  signals: [
    {
      label: "Demand for your profile",
      value: "High",
      sub: "+22% YoY",
      up: true,
    },
    { label: "Avg time to offer", value: "18 days", sub: "For your seniority" },
    { label: "Reachable openings", value: "~340", sub: "Europe + remote" },
    { label: "Avg salary range", value: "€65-80k", sub: "Market benchmark" },
  ],
}
