"use client"

import { useRouter } from "next/navigation"
import { RoleSelector } from "@/components/trajecta/analysis/role-selector"
import type { Role } from "@/components/trajecta/analysis/types"

export default function AnalysisPage() {
  const router = useRouter()

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center gap-10 px-5 py-24 sm:px-8 lg:px-10">
      <div className="reveal-up flex flex-col items-center gap-4 text-center">
        <p className="typo-section-eyebrow">Try Trajecta</p>
        <h1 className="typo-display-lg text-balance">
          Who are <span className="text-brand-gradient">you?</span>
        </h1>
        <p className="typo-body-lg max-w-xl text-text-secondary">
          Tell us who you are so we can show you what Trajecta sees and what it can do for you.
        </p>
      </div>

      <RoleSelector onSubmit={(role: Role) => router.push(`/analysis/${role}`)} />
    </main>
  )
}
