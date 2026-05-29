import type { europeanDemandZone } from "./map/types"
import type { marketPositionData } from "./types"

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

export const europeanDemandZones: europeanDemandZone[] = [
  { id: "london", label: "London", level: "high", cx: 360, cy: 370, rx: 82, ry: 54 },
  { id: "dublin", label: "Dublin", level: "medium", cx: 292, cy: 374, rx: 58, ry: 42 },
  { id: "amsterdam", label: "Amsterdam", level: "very-high", cx: 460, cy: 355, rx: 92, ry: 64 },
  { id: "paris", label: "Paris", level: "high", cx: 410, cy: 430, rx: 104, ry: 68 },
  { id: "berlin", label: "Berlin", level: "very-high", cx: 548, cy: 350, rx: 112, ry: 74 },
  { id: "munich", label: "Munich", level: "high", cx: 530, cy: 420, rx: 86, ry: 58 },
  { id: "zurich", label: "Zurich", level: "high", cx: 486, cy: 455, rx: 74, ry: 48 },
  { id: "milan", label: "Milan", level: "very-high", cx: 520, cy: 475, rx: 92, ry: 58 },
  { id: "rome", label: "Rome", level: "high", cx: 548, cy: 535, rx: 76, ry: 48 },
  { id: "stockholm", label: "Stockholm", level: "medium", cx: 570, cy: 245, rx: 78, ry: 58 },
  { id: "copenhagen", label: "Copenhagen", level: "high", cx: 515, cy: 318, rx: 70, ry: 46 },
  { id: "warsaw", label: "Warsaw", level: "high", cx: 635, cy: 390, rx: 94, ry: 62 },
  { id: "prague", label: "Prague", level: "medium", cx: 575, cy: 428, rx: 78, ry: 50 },
  { id: "vienna", label: "Vienna", level: "medium", cx: 615, cy: 462, rx: 82, ry: 52 },
  { id: "bucharest", label: "Bucharest", level: "high", cx: 705, cy: 532, rx: 86, ry: 54 },
  { id: "cluj", label: "Cluj-Napoca", level: "medium", cx: 662, cy: 500, rx: 66, ry: 42 },
  { id: "barcelona", label: "Barcelona", level: "medium", cx: 410, cy: 570, rx: 82, ry: 50 },
  { id: "madrid", label: "Madrid", level: "low", cx: 330, cy: 590, rx: 88, ry: 56 },
  { id: "lisbon", label: "Lisbon", level: "low", cx: 248, cy: 600, rx: 60, ry: 42 },
  { id: "nordics", label: "Nordics", level: "medium", cx: 585, cy: 190, rx: 118, ry: 78 },
  { id: "south-east Europe", label: "South-east Europe", level: "medium", cx: 690, cy: 530, rx: 140, ry: 86 },
]
