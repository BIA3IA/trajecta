export function HighlightPill({
  label,
  icon,
  variant = "default",
}: {
  label: string
  icon?: React.ReactNode
  variant?: "default" | "muted"
}) {
  if (variant === "muted") {
    return (
      <div className="flex items-center gap-2.5 rounded-pill border border-white/6 bg-white/2 px-3.5 py-2.5 text-text-muted/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
        {icon && (
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white/6 text-text-muted/50 ring-1 ring-white/8">
            {icon}
          </span>
        )}
        <span className="typo-label leading-[1.15]">{label}</span>
      </div>
    )
  }

  return (
    <div className="group hover:-translate-y-0.5 relative flex items-center gap-2.5 overflow-hidden rounded-pill border border-white/8 bg-[linear-gradient(180deg,rgba(29,22,48,0.96),rgba(18,14,31,0.92))] px-3.5 py-2.5 text-text-secondary shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-200 ease-out hover:scale-[1.03] hover:border-brand-primary/40 hover:text-text-primary hover:shadow-[0_12px_28px_rgba(139,92,246,0.16)]">
      {icon && (
        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-primary/12 text-brand-soft ring-1 ring-brand-primary/18 transition-all duration-200 ease-out group-hover:scale-110 group-hover:bg-brand-primary/18 group-hover:ring-brand-primary/28">
          {icon}
        </span>
      )}
      <span className="typo-label leading-[1.15]">{label}</span>
    </div>
  )
}
