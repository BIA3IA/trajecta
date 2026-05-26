"use client"

import Link from "next/link"
import { useState } from "react"
import { FiArrowRight, FiCheck } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { roles } from "./data"
import type { Role } from "./types"

export function RoleSelector() {
  const [selected, setSelected] = useState<Role | null>(null)

  const selectedRole = roles.find((r) => r.id === selected)
  const continueLabel = selectedRole ? `Continue as ${selectedRole.title}` : "Continue"

  return (
    <div className="flex w-full flex-col items-center gap-8">
      <div className="grid w-full gap-5 sm:grid-cols-2">
        {roles.map((roleData) => (
          <Card
            key={roleData.id}
            role="button"
            tabIndex={0}
            aria-pressed={selected === roleData.id}
            onClick={() => setSelected(roleData.id)}
            onKeyDown={(e) => e.key === "Enter" && setSelected(roleData.id)}
            className={cn(
              "card-hover cursor-pointer p-8 outline-none transition-all duration-200",
              selected === roleData.id &&
                "border-brand-primary/28 shadow-[0_18px_52px_color-mix(in_srgb,var(--color-brand-primary)_22%,transparent)]"
            )}
          >
            <div
              className={cn(
                "card-glow-overlay card-glow-brand transition-opacity duration-200",
                selected === roleData.id ? "opacity-100" : "group-hover:opacity-100"
              )}
            />
            <div className="card-top-line card-top-line-brand" />

            <div className="relative flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="icon-brand flex size-14 shrink-0 items-center justify-center rounded-panel text-white ring-1 ring-brand-accent/28">
                  <roleData.icon className="size-8" aria-hidden />
                </span>
                <h2 className="typo-h2 text-text-primary">{roleData.title}</h2>
              </div>

              <div className="flex flex-col gap-2.5">
                {roleData.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <span className="flex size-5 shrink-0 items-center justify-center text-brand-accent">
                      <FiCheck className="size-4" aria-hidden />
                    </span>
                    <p className="typo-body-sm text-text-secondary">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selected ? (
        <Button asChild variant="gradient">
          <Link href={`/analysis/${selected}`}>
            <span className="relative z-10">{continueLabel}</span>
            <FiArrowRight
              className="relative z-10 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </Button>
      ) : (
        <Button variant="gradient" disabled>
          <span className="relative z-10">{continueLabel}</span>
          <FiArrowRight className="relative z-10" aria-hidden />
        </Button>
      )}
    </div>
  )
}
