import { contactMailto } from "@/lib/site"

export const footerLinks: {
  label: string
  href: string
}[] = [
  { label: "Talk to us", href: contactMailto },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
]
