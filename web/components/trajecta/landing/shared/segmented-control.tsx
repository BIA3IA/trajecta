"use client"

import { cn } from "@/lib/utils"

export type SegmentedControlOption<TValue extends string> = {
  label: string
  value: TValue
}

type SegmentedControlProps<TValue extends string> = {
  options: SegmentedControlOption<TValue>[]
  value: TValue
  onChange?: (value: TValue) => void
  label?: string
  className?: string
  activeClassName: string
  inactiveClassName: string
  itemClassName?: string
  shimmerActive?: boolean
}

export function SegmentedControl<TValue extends string>({
  options,
  value,
  onChange,
  label,
  className,
  activeClassName,
  inactiveClassName,
  itemClassName,
  shimmerActive = false,
}: SegmentedControlProps<TValue>) {
  return (
    <fieldset className={cn("inline-flex rounded-pill p-1", className)}>
      {label && <legend className="sr-only">{label}</legend>}
      {options.map((option) => {
        const isActive = option.value === value

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange?.(option.value)}
            className={cn(
              "typo-label relative flex-1 overflow-hidden rounded-pill px-4 py-2 text-center transition-all duration-200",
              itemClassName,
              isActive ? activeClassName : inactiveClassName
            )}
            aria-pressed={isActive}
            disabled={!onChange}
          >
            {isActive && shimmerActive ? (
              <span className="pointer-events-none absolute inset-y-0 left-0 w-1/2 skew-x-[-20deg] animate-shimmer-sweep bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.26),transparent)]" />
            ) : null}
            {option.label}
          </button>
        )
      })}
    </fieldset>
  )
}
