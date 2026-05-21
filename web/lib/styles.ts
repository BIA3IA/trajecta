import { cn } from "@/lib/utils"

export const gradientButtonClassName = cn(
  "group animate-gradient-shift-x w-fit overflow-hidden rounded-pill",
  "border border-brand-primary/40",
  "bg-brand-vivid bg-size-[200%_100%] px-5 py-3 text-[15px] text-white",
  "shadow-[0_18px_40px_rgba(139,92,246,0.28),inset_0_1px_0_rgba(255,255,255,0.16)]",
  "transition-all duration-200 ease-out",
  "hover:-translate-y-0.5 hover:scale-[1.02]",
  "hover:shadow-[0_24px_56px_rgba(139,92,246,0.34),inset_0_1px_0_rgba(255,255,255,0.2)]",
)
