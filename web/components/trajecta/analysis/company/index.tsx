"use client"

import { Tabs } from "@/components/ui/tabs"
import { tabs } from "./data"
import { TabOverview } from "./overview"
import { TabMarket } from "./tab-market"
import { TabTalentPool } from "./tab-talent-pool"

export function CompanyAnalysis() {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="typo-section-eyebrow">Company - Analysis</p>
        <h1 className="typo-display-lg text-balance">
          {/* TODO: Sostituire sto testo */}
          The <span className="text-brand-gradient">role intelligence</span>
        </h1>
      </div>

      <Tabs tabs={tabs} defaultValue="overview">
        {(active) => (
          <>
            {active === "overview" && <TabOverview />}
            {active === "market" && <TabMarket />}
            {active === "talent-pool" && <TabTalentPool />}
          </>
        )}
      </Tabs>
    </div>
  )
}
