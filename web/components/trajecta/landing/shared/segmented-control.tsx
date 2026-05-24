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
  shimmerActive = false,
}: SegmentedControlProps<TValue>) {
  return (
    <fieldset>
      {label && <legend className="sr-only">{label}</legend>}
      <div
        className={cn("inline-grid rounded-pill p-1", className)}
        style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}
      >
      {options.map((option) => {
        const isActive = option.value === value

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange?.(option.value)}
            className={cn(
              "typo-label relative overflow-hidden rounded-pill px-4 py-2 text-center transition-all duration-200",
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
      </div>
    </fieldset>
  )
}
