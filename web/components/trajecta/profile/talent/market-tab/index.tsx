import { europeanDemandZones, marketPosition } from "./data"
import { EuropeDemandMap } from "./map"
import { MarketPosition } from "./market-position"

export function TabMarket() {
  return (
    <div className="flex flex-col gap-12">
      <MarketPosition data={marketPosition} />
      <EuropeDemandMap zones={europeanDemandZones} />
    </div>
  )
}
