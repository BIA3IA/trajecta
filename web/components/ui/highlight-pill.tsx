import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

const variantStyles = {
  default: {
    pill: "surface-brand group relative overflow-hidden border-white/8 text-text-secondary transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:border-brand-primary/40 hover:text-text-primary",
    icon: "bg-brand-primary/12 text-brand-soft ring-brand-primary/18 transition-all duration-200 ease-out group-hover:scale-110 group-hover:bg-brand-primary/18 group-hover:ring-brand-primary/28",
  },
  muted: {
    pill: "border-white/6 bg-white/2 text-text-muted/60",
    icon: "bg-white/6 text-text-muted/50 ring-white/8",
  },
} satisfies Record<"default" | "muted", { pill: string; icon: string }>

export function HighlightPill({
  label,
  icon,
  variant = "default",
}: {
  label: string
  icon?: ReactNode
  variant?: "default" | "muted"
}) {
  const styles = variantStyles[variant]

  return (
    <div className={cn("flex items-center gap-2.5 rounded-pill border px-3.5 py-2.5", styles.pill)}>
      {icon ? (
        <span className={cn("flex size-6 shrink-0 items-center justify-center rounded-full ring-1", styles.icon)}>
          {icon}
        </span>
      ) : null}
      <span className="typo-label">{label}</span>
    </div>
  )
}
