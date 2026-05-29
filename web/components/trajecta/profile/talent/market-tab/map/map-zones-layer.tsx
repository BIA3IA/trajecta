import { DEMAND_COLOR_BOOST_ID, EUROPE_MAP_MASK_ID } from "./constants"
import { DemandZone } from "./demand-zone"
import type { EuropeDemandMapVisual, europeanDemandZone } from "./types"

export function MapZonesLayer({ zones, visual }: { zones: europeanDemandZone[]; visual: EuropeDemandMapVisual }) {
  return (
    <g mask={`url(#${EUROPE_MAP_MASK_ID})`} filter={`url(#${DEMAND_COLOR_BOOST_ID})`}>
      {zones.map((zone) => (
        <DemandZone key={zone.id} zone={zone} levelConfig={visual.levelConfig} />
      ))}
    </g>
  )
}
