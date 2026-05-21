import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/lib/site"
import { footerLinks } from "./data"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mx-auto w-full max-w-350 border-white/6 border-t px-5 py-10 sm:px-8 lg:px-10">
      <div className="card-top-line card-top-line-brand" />

      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <Image src="/favicon.ico" alt={siteConfig.name} width={32} height={32} className="size-8 object-contain" />
          <div>
            <p className="typo-wordmark text-text-primary">{siteConfig.name}</p>
            <p className="typo-body-sm mt-1 text-text-muted">Don't match titles, match trajectories.</p>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {footerLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.label}
                href={link.href}
                className="typo-body-sm text-text-muted transition-colors duration-200 hover:text-text-primary"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="typo-body-sm text-text-muted transition-colors duration-200 hover:text-text-primary"
              >
                {link.label}
              </a>
            )
          )}
        </nav>
      </div>

      <p className="typo-body-sm mt-8 border-white/6 border-t pt-5 text-text-muted">
        © {currentYear} {siteConfig.name}.
      </p>
    </footer>
  )
}
