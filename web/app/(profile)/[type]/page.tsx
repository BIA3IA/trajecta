"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"
import { CompanyAnalysis } from "@/components/trajecta/profile/company"
import { TalentAnalysis } from "@/components/trajecta/profile/talent"
import { type AnalysisType, analysisConfig } from "../../_config"

const components: Record<AnalysisType, React.ComponentType> = {
  talent: TalentAnalysis,
  company: CompanyAnalysis,
}

export default function ProfilePage() {
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

  const Component = components[type as AnalysisType]

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-24 sm:px-8 lg:px-10">
      <Component />
    </main>
  )
}
