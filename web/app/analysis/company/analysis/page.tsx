"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { CompanyAnalysis } from "@/components/trajecta/analysis/company"

export default function CompanyAnalysisPage() {
  const router = useRouter()

  // Se non c'è la description salvata, non dovrebbe essere possibile arrivare a questa pagina, quindi lo rimando indietro alla pagina di input
  useEffect(() => {
    const saved = sessionStorage.getItem("trajecta:company:description")
    if (!saved) router.replace("/analysis/company")
  }, [router])

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-24 sm:px-8 lg:px-10">
      <CompanyAnalysis />
    </main>
  )
}
