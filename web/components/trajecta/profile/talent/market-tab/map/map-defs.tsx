import { DEMAND_COLOR_BOOST_ID, EUROPE_MAP_MASK_ID } from "./constants"
import type { EuropeDemandMapVisual } from "./types"

export function MapDefs({ visual }: { visual: EuropeDemandMapVisual }) {
  return (
    <defs>
      {visual.gradients.map((gradient) =>
        gradient.kind === "radial" ? (
          <radialGradient key={gradient.id} id={gradient.id}>
            {gradient.stops.map((stop) => (
              <stop
                key={`${gradient.id}-${stop.offset}`}
                offset={stop.offset}
                stopColor={stop.color}
                stopOpacity={stop.opacity}
              />
            ))}
          </radialGradient>
        ) : (
          <linearGradient
            key={gradient.id}
            id={gradient.id}
            x1={gradient.x1}
            x2={gradient.x2}
            y1={gradient.y1}
            y2={gradient.y2}
          >
            {gradient.stops.map((stop) => (
              <stop
                key={`${gradient.id}-${stop.offset}`}
                offset={stop.offset}
                stopColor={stop.color}
                stopOpacity={stop.opacity}
              />
            ))}
          </linearGradient>
        )
      )}
      <filter id={DEMAND_COLOR_BOOST_ID} colorInterpolationFilters="sRGB">
        <feColorMatrix type="saturate" values={String(visual.colorBoost.saturation)} />
        <feComponentTransfer>
          <feFuncR type="linear" slope={visual.colorBoost.slopeR} />
          <feFuncG type="linear" slope={visual.colorBoost.slopeG} />
          <feFuncB type="linear" slope={visual.colorBoost.slopeB} />
        </feComponentTransfer>
      </filter>
      <mask id={EUROPE_MAP_MASK_ID} maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="684">
        <rect width="1000" height="684" fill="black" />
        <image href={visual.mapImageHref} x="0" y="0" width="1000" height="684" />
      </mask>
    </defs>
  )
}
