import type { ComponentPropsWithoutRef } from "react"
import { cn } from "@/lib/utils"

type SectionShellProps = ComponentPropsWithoutRef<"section">

export function SectionShell({ className, ...props }: SectionShellProps) {
  return <section className={cn("mx-auto w-full max-w-350 px-5 py-24 sm:px-8 lg:px-10", className)} {...props} />
}
