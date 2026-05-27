"use client"

import { useRouter } from "next/navigation"
import { StepInput } from "@/components/trajecta/analysis/step-input"
import type { RoleInput } from "@/components/trajecta/analysis/types"

export default function TalentInputPage() {
  const router = useRouter()

  function handleSubmit({ description }: RoleInput) {
    sessionStorage.setItem("trajecta:talent:description", description)
    router.push("/analysis/talent/results")
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-5 py-24 sm:px-8 lg:px-10">
      <StepInput
        onSubmit={handleSubmit}
        eyebrow="Talent - Self Analysis"
        title="Describe yourself to see "
        titleAccent="your skill profile"
        description="The more detail you provide, the more precise the skill map Trajecta builds."
        label="Your description"
        placeholder="Describe your responsibilities, required skills, experience level, team context, and anything else that defines your role and expertise…"
        submitLabel="Analyze myself"
      />
    </main>
  )
}
