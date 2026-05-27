"use client"

import { useRouter } from "next/navigation"
import { StepInput } from "@/components/trajecta/analysis/step-input"
import type { RoleInput } from "@/components/trajecta/analysis/types"

export default function CompanyInputPage() {
  const router = useRouter()

  function handleSubmit({ description }: RoleInput) {
    sessionStorage.setItem("trajecta:company:description", description)
    router.push("/analysis/company/results")
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-5 py-24 sm:px-8 lg:px-10">
      <StepInput
        onSubmit={handleSubmit}
        eyebrow="Company - Role Analysis"
        title="Describe the role"
        titleAccent="you're hiring for"
        description="The more detail you provide, the more precise the skill map Trajecta builds."
        label="Role description"
        placeholder="Describe the responsibilities, required skills, experience level, team context, and anything else that defines this role…"
        submitLabel="Analyze role"
      />
    </main>
  )
}
