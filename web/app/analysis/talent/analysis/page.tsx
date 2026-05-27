"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { TalentAnalysis } from "@/components/trajecta/analysis/talent"

export default function TalentAnalysisPage() {
  const router = useRouter()

  // Se non c'è la description salvata, non dovrebbe essere possibile arrivare a questa pagina, quindi lo rimando indietro alla pagina di input
  useEffect(() => {
    const saved = sessionStorage.getItem("trajecta:talent:description")
    if (!saved) router.replace("/analysis/talent")
  }, [router])

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-24 sm:px-8 lg:px-10">
      <TalentAnalysis />
    </main>
  )
}
