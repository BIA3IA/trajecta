import Link from "next/link"
import { useState } from "react"
import { FiArrowRight } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import type { InputProps } from "./types"

export function StepInput({
  onSubmit,
  eyebrow,
  title,
  titleAccent,
  description,
  label,
  placeholder,
  submitLabel,
}: InputProps) {
  const [value, setValue] = useState("")

  const canSubmit = value.trim().length > 20

  function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    if (canSubmit) onSubmit({ description: value.trim() })
  }

  return (
    <div className="reveal-up flex w-full flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="typo-section-eyebrow">{eyebrow}</p>
        <h1 className="typo-display-lg">
          {title} <span className="text-brand-gradient">{titleAccent}</span>
        </h1>
        <p className="typo-body-lg max-w-2xl text-text-secondary">{description}</p>
      </div>

      <Card className="w-full max-w-2xl p-8">
        <div className="card-glow-overlay card-glow-brand group-hover:opacity-100" />
        <div className="card-top-line card-top-line-brand" />

        <form onSubmit={handleSubmit} className="relative flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="step-input-field" className="typo-label text-text-secondary">
              {label}
            </label>
            <Textarea
              id="step-input-field"
              placeholder={placeholder}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              rows={8}
            />
          </div>

          <div className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/analysis">
                <FiArrowRight className="rotate-180 transition-transform duration-200 ease-out" aria-hidden />
                Go Back
              </Link>
            </Button>
            <Button type="submit" variant="gradient" disabled={!canSubmit}>
              <span className="relative z-10">{submitLabel}</span>
              <FiArrowRight
                className="relative z-10 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                aria-hidden
              />
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
