import type { EuropeDemandMapVisual } from "./types"

export function MapLegend({ levelConfig }: { levelConfig: EuropeDemandMapVisual["levelConfig"] }) {
  return (
    <div className="pointer-events-none absolute top-[14%] right-[6%] flex flex-col items-start gap-2">
      {Object.entries(levelConfig).map(([level, config]) => (
        <div key={level} className="flex items-center gap-2">
          <span className={`size-2 rounded-full border ${config.swatch}`} />
          <span className="typo-caption text-text-secondary">{config.label}</span>
        </div>
      ))}
    </div>
  )
}
