
import { marketPosition } from "./data"
import { MarketPosition } from "./market-position"

export function TabMarket() {
  return (
    <div className="flex flex-col gap-12">
      <MarketPosition data={marketPosition} />
    </div>
  )
}
