import type { skillEvidence } from "@/components/ui/evidence-card/types"
import type { keyFinding } from "@/components/ui/finding-card/types"
import type { marketData } from "@/components/ui/market-card/types"
import type { roleMatch } from "@/components/ui/role-card/types"
import type { emergingSkill } from "@/components/ui/skill-timeline/types"
import type { suggestion } from "@/components/ui/suggestions-card/types"
import type { profileData } from "../../overview/types"

export const talentProfile: profileData = {
  title: "Marco Rossi",
  subtitle: "Frontend Developer",
  seniority: "Senior",
  summary:
    "Strong execution track record across product-focused environments. Combines deep React expertise with a product mindset and proven async collaboration skills. Positioned well for roles that require both technical depth and cross-functional ownership.",
  skillGroups: [
    {
      label: "Technical",
      color: "bg-brand-primary/15 text-brand-soft border-brand-primary/20",
      skills: ["TypeScript", "React", "Next.js", "REST APIs", "Testing"],
      verifiedSkills: ["React", "TypeScript", "Testing"],
    },
    {
      label: "Domain",
      color: "bg-brand-accent/10 text-brand-accent border-brand-accent/20",
      skills: ["Product thinking", "Design systems", "Accessibility"],
      verifiedSkills: ["Accessibility", "Design systems"],
    },
    {
      label: "Soft skills",
      color: "bg-surface-2 text-text-secondary border-border-subtle",
      skills: ["Async communication", "Mentoring"],
      verifiedSkills: ["Ownership mindset", "Mentoring"],
    },
  ],
}

export const evidence: skillEvidence[] = [
  {
    kind: "certification",
    title: "Meta Front-End Developer Certificate",
    subtitle: "Meta / Coursera",
    year: 2023,
    coveredSkills: ["React", "TypeScript", "Testing"],
  },
  {
    kind: "certification",
    title: "WCAG Accessibility Specialist",
    subtitle: "IAAP",
    year: 2024,
    coveredSkills: ["Accessibility"],
  },
  {
    kind: "experience",
    title: "Senior Frontend Developer",
    subtitle: "Acme Corp · 3 years",
    coveredSkills: ["React", "TypeScript", "Design systems", "Mentoring"],
  },
  {
    kind: "project",
    title: "OpenUI - component library",
    subtitle: "Open source React component library with full accessibility support",
    url: "https://github.com/marcorossi/openui",
    coveredSkills: ["React", "TypeScript", "Accessibility", "Design systems"],
  },
]

export const marketSignals: marketData[] = [
  { label: "Demand for your profile", value: "High", sub: "+22% YoY", up: true },
  { label: "Avg time to offer", value: "18 days", sub: "For your seniority" },
  { label: "Competing candidates", value: "Low", sub: "Scarce at this level", up: true },
  { label: "Avg salary range", value: "€65–80k", sub: "Market benchmark" },
]

export const keyFindings: keyFinding[] = [
  {
    type: "insight",
    title: "Your stack is in high demand",
    body: "TypeScript + React at senior level with product sensibility is one of the most sought-after combinations right now. You are in a strong negotiating position.",
  },
  {
    type: "insight",
    title: "Soft skills are a real differentiator",
    body: "Async communication and ownership mindset are rare to verify but central to what companies want. Being able to demonstrate these concretely gives you an edge over equally-technical candidates.",
  },
  {
    type: "risk",
    title: "AI tooling gap may become visible soon",
    body: "LLM-assisted development is quickly becoming a baseline expectation. Candidates who can show fluency with AI tooling in their workflow will stand out in the next 6-12 months.",
  },
]

export const emergingSkills: emergingSkill[] = [
  {
    skill: "AI-assisted development",
    horizon: "6-12 months",
    reason:
      "LLM tooling in day-to-day dev workflows is becoming a baseline expectation for product-focused frontend roles.",
  },
  {
    skill: "Edge runtime & RSC",
    horizon: "12-18 months",
    reason: "Next.js App Router and server component patterns will soon be assumed knowledge at your level.",
  },
  {
    skill: "Prompt engineering basics",
    horizon: "18-24 months",
    reason: "Product-aware engineers will increasingly be expected to interface with AI features directly.",
  },
]

export const fitRoles: roleMatch[] = [
  {
    title: "Senior Frontend Engineer",
    match: 94,
    sharedSkills: ["TypeScript", "React", "Product thinking", "Ownership mindset"],
    note: "No significant gaps - strong direct match",
  },
  {
    title: "Product Engineer",
    match: 81,
    sharedSkills: ["React", "Product thinking", "Design systems", "Async communication"],
    note: "Backend integration exposure would strengthen fit",
  },
  {
    title: "Tech Lead (Frontend)",
    match: 68,
    sharedSkills: ["Mentoring", "Ownership mindset", "TypeScript", "React"],
    note: "Formal leadership experience and org-wide communication scope",
  },
]

export const skillSuggestions: suggestion[] = [
  {
    type: "learn",
    text: "AI-assisted development (Cursor, Copilot, LLM APIs) is becoming a baseline expectation in product-focused frontend roles within 6–12 months. Start integrating it into your daily workflow now.",
  },
  {
    type: "deepen",
    text: 'Next.js App Router and React Server Components are moving from "nice to have" to assumed knowledge at your level. Deepening here will prevent this from becoming a visible gap.',
  },
  {
    type: "certify",
    text: "A recognized accessibility certification (e.g. CPACC or WAS) would make your existing accessibility skills verifiable - rare and high-signal for product companies.",
  },
]
