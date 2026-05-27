"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { StepResults } from "@/components/trajecta/analysis/step-results"
import type { ProfileAnalysis } from "@/components/trajecta/analysis/types"

const mockAnalysis: ProfileAnalysis = {
  seniority: "Mid - Senior",
  summary:
    "The role requires strong technical depth and ownership mindset, with the ability to collaborate cross-functionally and communicate clearly in async environments.",
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

export default function CompanyResultsPage() {
  const router = useRouter()

  // Questo serve per evitare di arrivare senza description a questa pagina
  useEffect(() => {
    const saved = sessionStorage.getItem("trajecta:company:description")
    if (!saved) router.replace("/analysis/company")
  }, [router])

  // TODO qui ci mettiamo un loading tipo (cosi quando chiamiamo l'ai vera c'é qualcosa)

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-5 py-24 sm:px-8 lg:px-10">
      <StepResults
        analysis={mockAnalysis}
        eyebrow="Company - Skill Map"
        title="The skill profile"
        titleAccent="looks like this"
        resetLabel="Retry"
        continueLabel="Continue"
        onContinue={() => router.push("/analysis/company/analysis")}
        onReset={() => router.push("/analysis/company")}
      />
    </main>
  )
}
