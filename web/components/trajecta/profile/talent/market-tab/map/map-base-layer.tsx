import { DEMAND_COLOR_BOOST_ID, EUROPE_MAP_MASK_ID } from "./constants"
import type { EuropeDemandMapVisual } from "./types"

export function MapBaseLayer({ visual }: { visual: EuropeDemandMapVisual }) {
  return (
    <g mask={`url(#${EUROPE_MAP_MASK_ID})`} filter={`url(#${DEMAND_COLOR_BOOST_ID})`}>
      <rect width="1000" height="684" fill={`url(#${visual.baseGradientId})`} opacity={visual.baseGradientOpacity} />
      {visual.baseEllipses.map((ellipse) => (
        <ellipse
          key={`${ellipse.cx}-${ellipse.cy}-${ellipse.gradientId}`}
          cx={ellipse.cx}
          cy={ellipse.cy}
          rx={ellipse.rx}
          ry={ellipse.ry}
          fill={`url(#${ellipse.gradientId})`}
          opacity={ellipse.opacity}
        />
      ))}
    </g>
  )
}
