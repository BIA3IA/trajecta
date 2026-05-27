import type { marketData, roleData, roleSuggestion } from "./types"

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
    text: '"Testing" and "Performance optimization" appear in nearly every Frontend Developer spec at this level and won\'t help you differentiate. If these matter to you specifically, name the context — e.g. "component-level testing with Vitest" or "Core Web Vitals ownership".',
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
