"use client"

import { Tabs } from "@/components/ui/tabs"
import { tabs } from "./data"
import { TabMarket } from "./market-tab"
import { TabOverview } from "./overview-tab"
import { TabCompanies } from "./tab-companies"

export function TalentAnalysis() {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="typo-section-eyebrow">Talent - Analysis</p>
        <h1 className="typo-display-lg text-balance">
          Your <span className="text-brand-gradient">Skill Identity</span>
        </h1>
      </div>

      <Tabs tabs={tabs} defaultValue="overview">
        {(active) => (
          <>
            {active === "overview" && <TabOverview />}
            {active === "market" && <TabMarket />}
            {active === "companies" && <TabCompanies />}
          </>
        )}
      </Tabs>
    </div>
  )
}
