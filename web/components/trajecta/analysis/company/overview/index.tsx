import { keyFindings, marketSignals, roleProfile, roleSuggestions } from "./data"
import { KeyFindings } from "./key-findings"
import { MarketSignals } from "./market-signals"
import { RoleExtracted } from "./role-extracted"
import { RoleRefinement } from "./role-refinement"

export function TabOverview() {
  return (
    <div className="flex flex-col gap-16">
      <RoleExtracted roleProfile={roleProfile} />
      <MarketSignals marketSignals={marketSignals} />
      <KeyFindings keyFindings={keyFindings} />
      <RoleRefinement roleSuggestions={roleSuggestions} />
    </div>
  )
}
