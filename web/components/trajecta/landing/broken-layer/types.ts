export type BrokenLayerTone = "legacy" | "future"

export type BrokenLayerItem = {
  label: string
  title: string
  text: string
  tone: BrokenLayerTone
  badgeLabel: string
  summary: string
}

export type BrokenLayerSectionContent = {
  eyebrow: string
  title: string
  titleAccent: string
}
