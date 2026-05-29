import { EmergingSkills } from "../../overview/emerging-skills"
import { KeyFindings } from "../../overview/key-findings"
import { MarketSignals } from "../../overview/market-signals"
import { ProfileCard } from "../../overview/profile-card"
import { RoleMatchGrid } from "../../overview/role-match-grid"
import { SkillEvidence } from "../../overview/skill-evidence"
import { SuggestionList } from "../../overview/suggestion-list"
import { emergingSkills, evidence, fitRoles, keyFindings, marketSignals, skillSuggestions, talentProfile } from "./data"

export function TabOverview() {
  return (
    <div className="flex flex-col gap-16">
      <ProfileCard profile={talentProfile} eyebrow="Talent profile" />
      <SkillEvidence evidence={evidence} />
      <MarketSignals marketSignals={marketSignals} />
      <KeyFindings keyFindings={keyFindings} />
      <EmergingSkills emergingSkills={emergingSkills} />
      <RoleMatchGrid
        roles={fitRoles}
        eyebrow="Best fit roles"
        description="Roles where your current skill set creates the strongest match"
      />
      <SuggestionList
        suggestions={skillSuggestions}
        eyebrow="Skill refinement"
        description="What to learn, deepen, or certify to sharpen your profile"
      />
    </div>
  )
}
