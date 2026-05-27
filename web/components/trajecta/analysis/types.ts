export type Role = "talent" | "company"

export type SkillGroup = {
  label: string
  skills: string[]
}

export type ProfileAnalysis = {
  seniority: string
  summary: string
  skillGroups: SkillGroup[]
  certifications: string[]
}

export type ResultsProps = {
  analysis: ProfileAnalysis
  eyebrow: string
  title: string
  titleAccent: string
  resetLabel: string
  continueLabel: string
  onContinue: () => void
  onReset: () => void
}

export type RoleData = {
  id: Role
  icon: React.ComponentType<{ className?: string; "aria-hidden": boolean }>
  title: string
  features: string[]
}

export type RoleInput = {
  description: string
}

export type InputProps = {
  onSubmit: (input: RoleInput) => void
  initialValue?: string
  eyebrow: string
  title: string
  titleAccent: string
  description: string
  label: string
  placeholder: string
  submitLabel: string
}
