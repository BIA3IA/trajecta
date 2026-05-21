import type { IconType } from "react-icons"

export type ProfileMetric = {
  label: string
  value: string
}

export type ProfileSignal = {
  label: string
  title: string
  detail: string
  value: number
  icon: IconType
}

export type ProfileTab = {
  id: string
  label: string
  active?: boolean
}

export type HintPosition = "bottom-right" | "top-left"

export type Hint = {
  label: string
  value: string
  position: HintPosition
}

export type ProfileCardProps = {
  eyebrow: string
  title: string
  badgeLabel?: string
  badgeIcon?: IconType
  tabs: ProfileTab[]
  metrics: ProfileMetric[]
  signals: ProfileSignal[]
}
