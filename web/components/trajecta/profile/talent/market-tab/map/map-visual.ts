import type { EuropeDemandMapVisual } from "./types"

export const europeDemandMapVisual: EuropeDemandMapVisual = {
  viewBox: "275 92 745 585",
  mapImageHref: "/europe.svg",
  mapImageClassName: "opacity-[0.2] brightness-150 contrast-125",
  levelConfig: {
    "very-high": {
      label: "Very high",
      gradientId: "veryHighDemand",
      swatch: "border-brand-accent/80 bg-brand-accent/80",
    },
    high: {
      label: "High",
      gradientId: "highDemand",
      swatch: "border-brand-primary/80 bg-brand-primary/80",
    },
    medium: {
      label: "Medium",
      gradientId: "mediumDemand",
      swatch: "border-sky-400/80 bg-sky-400/60",
    },
    low: {
      label: "Lower",
      gradientId: "lowDemand",
      swatch: "border-brand-soft/20 bg-brand-soft/40",
    },
  },
  gradients: [
    {
      id: "veryHighDemand",
      kind: "radial",
      stops: [
        { offset: "0%", color: "var(--color-brand-accent)", opacity: 1 },
        { offset: "42%", color: "var(--color-brand-accent)", opacity: 0.96 },
        { offset: "74%", color: "var(--color-brand-accent)", opacity: 0.56 },
        { offset: "92%", color: "var(--color-brand-accent)", opacity: 0.12 },
        { offset: "100%", color: "var(--color-brand-accent)", opacity: 0 },
      ],
    },
    {
      id: "highDemand",
      kind: "radial",
      stops: [
        { offset: "0%", color: "var(--color-brand-primary)", opacity: 1 },
        { offset: "48%", color: "var(--color-brand-primary)", opacity: 0.9 },
        { offset: "78%", color: "var(--color-brand-primary)", opacity: 0.48 },
        { offset: "94%", color: "var(--color-brand-primary)", opacity: 0.12 },
        { offset: "100%", color: "var(--color-brand-primary)", opacity: 0 },
      ],
    },
    {
      id: "mediumDemand",
      kind: "radial",
      stops: [
        { offset: "0%", color: "#7dd3fc", opacity: 0.86 },
        { offset: "62%", color: "#60a5fa", opacity: 0.56 },
        { offset: "90%", color: "#38bdf8", opacity: 0.16 },
        { offset: "100%", color: "var(--color-brand-primary)", opacity: 0 },
      ],
    },
    {
      id: "lowDemand",
      kind: "radial",
      stops: [
        { offset: "0%", color: "var(--color-brand-soft)", opacity: 0.54 },
        { offset: "72%", color: "var(--color-brand-soft)", opacity: 0.28 },
        { offset: "100%", color: "var(--color-brand-soft)", opacity: 0 },
      ],
    },
    {
      id: "continentDemand",
      kind: "linear",
      x1: "18%",
      x2: "88%",
      y1: "35%",
      y2: "70%",
      stops: [
        { offset: "0%", color: "var(--color-brand-soft)", opacity: 0.64 },
        { offset: "38%", color: "var(--color-brand-primary)", opacity: 0.66 },
        { offset: "62%", color: "var(--color-brand-accent)", opacity: 0.48 },
        { offset: "100%", color: "var(--color-brand-primary)", opacity: 0.4 },
      ],
    },
  ],
  baseGradientId: "continentDemand",
  baseGradientOpacity: 1,
  baseEllipses: [
    { cx: 500, cy: 405, rx: 470, ry: 330, gradientId: "mediumDemand", opacity: 1 },
    { cx: 545, cy: 405, rx: 230, ry: 170, gradientId: "highDemand", opacity: 0.84 },
    { cx: 410, cy: 430, rx: 230, ry: 150, gradientId: "highDemand", opacity: 0.72 },
    { cx: 650, cy: 445, rx: 230, ry: 170, gradientId: "mediumDemand", opacity: 0.62 },
  ],
  colorBoost: {
    saturation: 1.55,
    slopeR: 1.04,
    slopeG: 0.92,
    slopeB: 1.08,
  },
}
