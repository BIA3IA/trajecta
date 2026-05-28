import { RoleCard } from "@/components/blocks/role-card"
import type { roleMatch } from "@/components/blocks/role-card/types"

type Props = {
  roles: roleMatch[]
  eyebrow: string
  description: string
}

export function RoleMatchGrid({ roles, eyebrow, description }: Props) {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <p className="typo-section-eyebrow">{eyebrow}</p>
        <p className="typo-body-sm mt-0.5 text-text-muted">{description}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {roles.map((role) => (
          <RoleCard key={role.title} role={role} />
        ))}
      </div>
    </section>
  )
}
