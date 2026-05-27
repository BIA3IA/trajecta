export type Role = "talent" | "company"

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
  eyebrow: string
  title: string
  titleAccent: string
  description: string
  label: string
  placeholder: string
  submitLabel: string
}
