"use client"

import { Tabs } from "@/components/ui/tabs"
import { tabs } from "./data"
import { TabCompanies } from "./tab-companies"
import { TabMarket } from "./tab-market"
import { TabOverview } from "./tab-overview"

export function TalentAnalysis() {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="typo-section-eyebrow">Talent - Analysis</p>
        <h1 className="typo-display-lg text-balance">
          {/* TODO: Sostituire sto testo */}
          Your <span className="text-brand-gradient">skill identity</span>
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
