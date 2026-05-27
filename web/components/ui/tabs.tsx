"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export type Tab<T extends string = string> = {
  id: T
  label: string
}

type TabsProps<T extends string = string> = {
  tabs: Tab<T>[]
  defaultValue?: T
  onChange?: (id: T) => void
  children: (active: T) => React.ReactNode
  className?: string
}

export function Tabs<T extends string = string>({ tabs, defaultValue, onChange, children, className }: TabsProps<T>) {
  const [active, setActive] = useState<T>((defaultValue ?? tabs[0]!.id) as T)

  function handleSelect(id: T) {
    setActive(id)
    onChange?.(id)
  }

  return (
    <div className={cn("flex flex-col gap-8", className)}>
      <div className="flex border-border-subtle border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => handleSelect(tab.id)}
            className={cn(
              "typo-label -mb-px border-b-2 px-6 py-3 transition-colors duration-200",
              active === tab.id
                ? "border-brand-primary text-text-primary"
                : "border-transparent text-text-muted hover:text-text-secondary"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div>{children(active)}</div>
    </div>
  )
}
