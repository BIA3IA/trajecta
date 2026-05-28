import { EmergingSkills } from "../../overview/emerging-skills"
import { KeyFindings } from "../../overview/key-findings"
import { MarketSignals } from "../../overview/market-signals"
import { ProfileCard } from "../../overview/profile-card"
import { RoleMatchGrid } from "../../overview/role-match-grid"
import { SuggestionList } from "../../overview/suggestion-list"
import { adjacentRoles, emergingSkills, keyFindings, marketSignals, roleProfile, roleSuggestions } from "./data"

export function TabOverview() {
  return (
    <div className="flex flex-col gap-16">
      <ProfileCard profile={roleProfile} eyebrow="Role extracted" />
      <MarketSignals marketSignals={marketSignals} />
      <KeyFindings keyFindings={keyFindings} />
      <EmergingSkills emergingSkills={emergingSkills} />
      <RoleMatchGrid
        roles={adjacentRoles}
        eyebrow="Transferable talent"
        description="Adjacent roles with high skill overlap - alternative pools to source from"
      />
      <SuggestionList
        suggestions={roleSuggestions}
        eyebrow="Role refinement"
        description="Suggestions to sharpen this spec and attract better-fit candidates"
      />
    </div>
  )
}
