import type { EuropeDemandMapVisual, europeanDemandZone } from "./types"

export function DemandZone({
  zone,
  levelConfig,
}: {
  zone: europeanDemandZone
  levelConfig: EuropeDemandMapVisual["levelConfig"]
}) {
  const level = levelConfig[zone.level]

  return (
    <ellipse
      cx={zone.cx}
      cy={zone.cy}
      rx={zone.rx}
      ry={zone.ry}
      fill={`url(#${level.gradientId})`}
      aria-label={`${zone.label}: ${level.label} demand`}
    />
  )
}
