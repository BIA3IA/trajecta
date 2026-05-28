import type { skillGroup } from "@/components/blocks/skill-card/types"

export type profileData = {
  title: string
  subtitle?: string
  seniority: string
  summary: string
  skillGroups: skillGroup[]
}
