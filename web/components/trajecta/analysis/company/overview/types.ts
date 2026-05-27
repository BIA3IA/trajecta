type skill = {
  label: string
  color: string
  skills: string[]
}

export type roleData = {
  title: string
  seniority: string
  summary: string
  skillGroups: skill[]
}

export type marketData = {
  label: string
  value: string
  sub: string
  up?: boolean
}

export type roleSuggestion = { type: "refine" | "add" | "clarify"; text: string }
