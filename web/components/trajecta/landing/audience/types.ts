import type { IconType } from "react-icons"
import type { SectionHeadingContent } from "../shared/types"

export type AudienceTone = "talent" | "company"

export type AudienceSectionContent = SectionHeadingContent & {
  titleAccent: string
}

export type AudienceItem = {
  id: string
  title: string
  text: string
  badge?: string
  summary: string
  tone: AudienceTone
  icon: IconType
  journey: JourneyStep[]
}

export type JourneyStep = {
  id: string
  title: string
  text: string
}
