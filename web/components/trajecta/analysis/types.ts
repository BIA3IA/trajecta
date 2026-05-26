export type Role = "talent" | "company"

export type RoleData = {
  id: Role
  icon: React.ComponentType<{ className?: string; "aria-hidden": boolean }>
  title: string
  features: string[]
}
