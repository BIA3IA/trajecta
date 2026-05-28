"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"
import { StepResults } from "@/components/trajecta/analysis/step-results"
import { type AnalysisType, analysisConfig } from "../../../_config"

export default function AnalysisResultsPage() {
  const { type } = useParams<{ type: string }>()
  const router = useRouter()

  const cfg = analysisConfig[type as AnalysisType]

  useEffect(() => {
    if (!cfg) {
      router.replace("/analysis")
      return
    }
    const saved = sessionStorage.getItem(cfg.storageKey)
    if (!saved) router.replace(`/analysis/${type}`)
  }, [cfg, type, router])

  if (!cfg) return null

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-5 py-24 sm:px-8 lg:px-10">
      <StepResults
        analysis={cfg.mockAnalysis}
        {...cfg.results}
        resetLabel="Retry"
        continueLabel="Continue"
        onContinue={() => router.push(`/${type}`)}
        onReset={() => router.push(`/analysis/${type}`)}
      />
    </main>
  )
}
