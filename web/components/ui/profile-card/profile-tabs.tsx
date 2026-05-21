import { SegmentedControl, type SegmentedControlOption } from "../../trajecta/landing/shared/segmented-control"
import type { ProfileTab } from "../types"

type ProfileTabsProps = {
  tabs: ProfileTab[]
}

export function ProfileTabs({ tabs }: ProfileTabsProps) {
  const activeTab = tabs.find((tab) => tab.active)?.id ?? tabs[0]?.id
  const options: SegmentedControlOption<string>[] = tabs.map((tab) => ({
    label: tab.label,
    value: tab.id,
  }))

  if (!activeTab) {
    return null
  }

  return (
    <SegmentedControl
      options={options}
      value={activeTab}
      label="Skill intelligence views"
      className="relative mt-6 border border-white/8 bg-black/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
      activeClassName="bg-brand-vivid text-white shadow-[0_10px_30px_rgba(139,92,246,0.20),0_10px_30px_rgba(232,121,249,0.12),inset_0_1px_0_rgba(255,255,255,0.14)]"
      inactiveClassName="text-text-muted hover:text-text-secondary"
      shimmerActive
    />
  )
}
