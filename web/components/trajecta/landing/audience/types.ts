import type { IconType } from "react-icons"

export type AudienceTone = "talent" | "company"

export type AudienceSectionContent = {
  eyebrow: string
  title: string
  titleAccent: string
  description: string
}

export type AudienceItem = {
  id: string
  title: string
  text: string
  badge?: string
  tone: AudienceTone
  icon: IconType
  journey: JourneyStep[]
}

export type JourneyStep = {
  id: string
  title: string
  text: string
}
