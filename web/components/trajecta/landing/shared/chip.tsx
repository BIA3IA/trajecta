import { cn } from "@/lib/utils"

type ChipProps = {
  label: string
  className?: string
}

export function Chip({ label, className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill border border-white/10 bg-[linear-gradient(180deg,rgba(36,26,58,0.94),rgba(22,16,40,0.90))] px-2.5 py-1 text-[12px] leading-none",
        className
      )}
    >
      <span className="size-1.5 shrink-0 rounded-full bg-current opacity-80 shadow-[0_0_5px_currentColor]" />
      {label}
    </span>
  )
}
