"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { StepResults } from "@/components/trajecta/analysis/step-results"
import type { ProfileAnalysis } from "@/components/trajecta/analysis/types"

const mockAnalysis: ProfileAnalysis = {
  seniority: "Mid - Senior",
  summary:
    "Based on your description, you have a strong technical background with experience in TypeScript and React, along with a good understanding of product thinking and API design. Your ownership mindset and cross-functional collaboration skills are also evident.",
  skillGroups: [
    {
      label: "Technical",
      skills: ["TypeScript", "React", "REST APIs", "Testing", "Git", "Performance optimization"],
    },
    {
      label: "Domain",
      skills: ["Product thinking", "API design", "Accessibility", "Design systems"],
    },
    {
      label: "Soft skills",
      skills: ["Async communication", "Cross-functional collaboration", "Ownership mindset", "Mentoring"],
    },
  ],
  certifications: ["No strict requirements", "AWS or GCP experience is a plus"],
}

export default function TalentResultsPage() {
  const router = useRouter()

  useEffect(() => {
    const saved = sessionStorage.getItem("trajecta:talent:description")
    if (!saved) router.replace("/analysis/talent")
  }, [router])

  // TODO il loading da aggiungere
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-5 py-24 sm:px-8 lg:px-10">
      <StepResults
        analysis={mockAnalysis}
        eyebrow="Talent - Skill Map"
        title="Your skill profile"
        titleAccent="looks like this"
        resetLabel="Retry"
        continueLabel="Continue"
        onContinue={() => router.push("/analysis/talent/analysis")}
        onReset={() => router.push("/analysis/talent")}
      />
    </main>
  )
}
