import type { adjacentRole, emergingSkill, keyFinding, marketData, roleData, roleSuggestion } from "./types"

export const roleProfile: roleData = {
  title: "Frontend Developer",
  seniority: "Mid · Senior",
  summary:
    "Strong technical ownership, cross-functional collaboration, and the ability to communicate clearly in async environments. Weighed toward product-aware engineers who can push quality end-to-end.",
  skillGroups: [
    {
      label: "Technical",
      color: "bg-brand-primary/15 text-brand-soft border-brand-primary/20",
      skills: ["TypeScript", "React", "REST APIs", "Testing", "Performance optimization"],
    },
    {
      label: "Domain",
      color: "bg-brand-accent/10 text-brand-accent border-brand-accent/20",
      skills: ["Product thinking", "Accessibility", "Design systems"],
    },
    {
      label: "Soft skills",
      color: "bg-surface-2 text-text-secondary border-border-subtle",
      skills: ["Async communication", "Ownership mindset", "Mentoring"],
    },
  ],
}

export const marketSignals: marketData[] = [
  { label: "Market demand", value: "High", sub: "+22% YoY", up: true },
  { label: "Avg time to hire", value: "54 days", sub: "Industry benchmark" },
  { label: "Skill availability", value: "Low", sub: "-8% senior profiles", up: false },
  { label: "Companies competing", value: "23", sub: "Actively hiring now" },
]

export const roleSuggestions: roleSuggestion[] = [
  {
    type: "refine" as const,
    text: '"Testing" and "Performance optimization" appear in nearly every Frontend Developer spec at this level and won\'t help you differentiate. If these matter to you specifically, name the context - e.g. "component-level testing with Vitest" or "Core Web Vitals ownership".',
  },
  {
    type: "add" as const,
    text: "Adding CI/CD pipeline familiarity would strengthen the spec for senior candidates and align with team ownership expectations.",
  },
  {
    type: "clarify" as const,
    text: '"Performance optimization" is broad. Specifying Core Web Vitals or bundle size reduction would attract more precisely matched profiles.',
  },
]

export const keyFindings: keyFinding[] = [
  {
    type: "risk" as const,
    title: "Tight supply at this seniority level",
    body: "Mid-Senior TypeScript engineers with product sensibility are among the hardest profiles to source right now. Expect longer cycles and competing offers.",
  },
  {
    type: "insight" as const,
    title: "Soft skills are a real differentiator here",
    body: "Async communication and ownership mindset are rare to verify in traditional screening - yet they appear central to this role. Evidence-based evaluation matters more than credentials.",
  },
  {
    type: "risk" as const,
    title: "38% of similar roles stay open more than 60 days",
    body: "Roles with this combination of technical and domain expectations often stall in late-stage evaluation. Consider widening the threshold or investing in onboarding for partial fits.",
  },
]

export const emergingSkills: emergingSkill[] = [
  {
    skill: "AI-assisted development",
    horizon: "6-12 months",
    reason: "LLM tooling is becoming a baseline expectation in product-focused frontend roles.",
  },
  {
    skill: "Edge runtime & RSC",
    horizon: "12-18 months",
    reason: "Next.js App Router patterns will soon be assumed knowledge for React roles at this level.",
  },
  {
    skill: "Prompt engineering basics",
    horizon: "18-24 months",
    reason: "Product-aware engineers will increasingly interface with AI features directly.",
  },
]

export const adjacentRoles: adjacentRole[] = [
  {
    title: "Full-stack Engineer",
    overlap: 82,
    sharedSkills: ["TypeScript", "React", "API design", "Testing"],
    note: "Widest overlap - easiest adjacent pool",
  },
  {
    title: "UI Engineer",
    overlap: 71,
    sharedSkills: ["React", "Design systems", "Accessibility"],
    note: "High domain overlap, weaker backend",
  },
  {
    title: "Product Engineer",
    overlap: 64,
    sharedSkills: ["Product thinking", "React", "Ownership mindset"],
    note: "Strong on soft skills, variable technical depth",
  },
]
