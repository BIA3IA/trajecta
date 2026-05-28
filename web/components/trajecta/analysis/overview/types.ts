import type { skillGroup } from "@/components/ui/skill-card/types"

export type profileData = {
  title: string
  subtitle?: string
  seniority: string
  summary: string
  skillGroups: skillGroup[]
}
