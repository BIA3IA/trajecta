export type europeanDemandLevel = "very-high" | "high" | "medium" | "low"

export type europeanDemandZone = {
  id: string
  label: string
  level: europeanDemandLevel
  cx: number
  cy: number
  rx: number
  ry: number
}

export type demandLevelVisual = {
  label: string
  gradientId: string
  swatch: string
}

export type demandGradientStop = {
  offset: string
  color: string
  opacity: number
}

export type demandGradient = {
  id: string
  kind: "radial" | "linear"
  x1?: string
  x2?: string
  y1?: string
  y2?: string
  stops: demandGradientStop[]
}

export type demandBaseEllipse = {
  cx: number
  cy: number
  rx: number
  ry: number
  gradientId: string
  opacity: number
}

export type EuropeDemandMapVisual = {
  viewBox: string
  mapImageHref: string
  mapImageClassName: string
  levelConfig: Record<europeanDemandLevel, demandLevelVisual>
  gradients: demandGradient[]
  baseGradientId: string
  baseGradientOpacity: number
  baseEllipses: demandBaseEllipse[]
  colorBoost: {
    saturation: number
    slopeR: number
    slopeG: number
    slopeB: number
  }
}
