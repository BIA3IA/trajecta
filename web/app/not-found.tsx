import Link from "next/link"
import { AnimatedGradientText } from "@/components/trajecta/landing/shared/animated-gradient-text"
import { Button } from "@/components/ui/button"
import { gradientButtonClassName } from "@/lib/styles"

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-start justify-center gap-6 px-5 py-24 sm:px-8 lg:px-10">
      <p className="typo-section-eyebrow">404 - Page not found</p>

      <h1 className="typo-display-lg text-balance text-text-primary">
        This page does not exist
        <AnimatedGradientText> in the Trajecta layer.</AnimatedGradientText>
      </h1>

      <p className="typo-body-lg max-w-2xl text-text-secondary">
        The link may be outdated, broken, or pointing to a page that has been moved.
      </p>

      <Button asChild className={gradientButtonClassName}>
        <Link href="/">
          <span className="relative z-10">Back to home</span>
        </Link>
      </Button>
    </main>
  )
}
