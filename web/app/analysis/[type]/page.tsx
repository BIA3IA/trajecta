"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { StepInput } from "@/components/trajecta/analysis/step-input"
import type { RoleInput } from "@/components/trajecta/analysis/types"
import { type AnalysisType, analysisConfig } from "../../_config"

export default function AnalysisInputPage() {
  const { type } = useParams<{ type: string }>()
  const router = useRouter()
  const [saved, setSaved] = useState("")

  const cfg = analysisConfig[type as AnalysisType]

  useEffect(() => {
    // If no config (no talent no company), redirect to main analysis page
    if (!cfg) {
      router.replace("/analysis")
      return
    }
    setSaved(sessionStorage.getItem(cfg.storageKey) ?? "")
  }, [cfg, router])

  if (!cfg) return null

  function handleSubmit({ description }: RoleInput) {
    sessionStorage.setItem(cfg.storageKey, description)
    router.push(`/analysis/${type}/results`)
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-5 py-24 sm:px-8 lg:px-10">
      <StepInput onSubmit={handleSubmit} initialValue={saved} {...cfg.input} />
    </main>
  )
}
