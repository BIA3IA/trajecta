import { adjacentRoles, emergingSkills, keyFindings, marketSignals, roleProfile, roleSuggestions } from "./data"
import { EmergingSkills } from "./emerging-skills"
import { KeyFindings } from "./key-findings"
import { MarketSignals } from "./market-signals"
import { RoleExtracted } from "./role-extracted"
import { RoleRefinement } from "./role-refinement"
import { TransferableTalent } from "./trasferable-talent"

export function TabOverview() {
  return (
    <div className="flex flex-col gap-16">
      <RoleExtracted roleProfile={roleProfile} />
      <MarketSignals marketSignals={marketSignals} />
      <KeyFindings keyFindings={keyFindings} />
      <TransferableTalent adjacentRoles={adjacentRoles} />
      <EmergingSkills emergingSkills={emergingSkills} />
      <RoleRefinement roleSuggestions={roleSuggestions} />
    </div>
  )
}
