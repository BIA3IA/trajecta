import { marketSignals, roleProfile } from "./data"
import { MarketSignals } from "./market-signals"
import { RoleExtracted } from "./role-extracted"

export function TabOverview() {
  return (
    <div className="flex flex-col gap-16">
      <RoleExtracted roleProfile={roleProfile} />

      <MarketSignals marketSignals={marketSignals} />
    </div>
  )
}
