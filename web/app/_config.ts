import type { ProfileAnalysis } from "@/components/trajecta/analysis/types"

export type AnalysisType = "talent" | "company"

export const analysisConfig = {
  talent: {
    storageKey: "trajecta:talent:description",
    mockAnalysis: {
      seniority: "Mid - Senior",
      summary:
        "You have a strong technical background with experience in TypeScript and React, combined with a product mindset and proven async collaboration skills. Your ownership mindset and cross-functional work are clear differentiators.",
      skillGroups: [
        { label: "Technical", skills: ["TypeScript", "React", "Next.js", "REST APIs", "Testing"] },
        { label: "Domain", skills: ["Product thinking", "Design systems", "Accessibility"] },
        { label: "Soft skills", skills: ["Async communication", "Ownership mindset", "Mentoring"] },
      ],
      certifications: ["Meta Front-End Developer Certificate", "WCAG Accessibility Specialist"],
    } satisfies ProfileAnalysis,
    input: {
      eyebrow: "Talent - Self Analysis",
      title: "Describe yourself to see ",
      titleAccent: "your skill profile",
      description: "The more detail you provide, the more precise the skill map Trajecta builds.",
      label: "Your description",
      placeholder:
        "Describe your responsibilities, required skills, experience level, team context, and anything else that defines your role and expertise…",
      submitLabel: "Analyze myself",
    },
    results: {
      eyebrow: "Talent - Skill Map",
      title: "Your skill profile",
      titleAccent: "looks like this",
    },
  },
  company: {
    storageKey: "trajecta:company:description",
    mockAnalysis: {
      seniority: "Mid - Senior",
      summary:
        "The role requires strong technical depth and ownership mindset, with the ability to collaborate cross-functionally and communicate clearly in async environments.",
      skillGroups: [
        {
          label: "Technical",
          skills: ["TypeScript", "React", "REST APIs", "Testing", "Git", "Performance optimization"],
        },
        { label: "Domain", skills: ["Product thinking", "API design", "Accessibility", "Design systems"] },
        {
          label: "Soft skills",
          skills: ["Async communication", "Cross-functional collaboration", "Ownership mindset", "Mentoring"],
        },
      ],
      certifications: ["No strict requirements", "AWS or GCP experience is a plus"],
    } satisfies ProfileAnalysis,
    input: {
      eyebrow: "Company - Role Analysis",
      title: "Describe the role",
      titleAccent: "you're hiring for",
      description: "The more detail you provide, the more precise the skill map Trajecta builds.",
      label: "Role description",
      placeholder:
        "Describe the responsibilities, required skills, experience level, team context, and anything else that defines this role…",
      submitLabel: "Analyze role",
    },
    results: {
      eyebrow: "Company - Skill Map",
      title: "The skill profile",
      titleAccent: "looks like this",
    },
  },
} satisfies Record<
  AnalysisType,
  {
    storageKey: string
    mockAnalysis: ProfileAnalysis
    input: {
      eyebrow: string
      title: string
      titleAccent: string
      description: string
      label: string
      placeholder: string
      submitLabel: string
    }
    results: { eyebrow: string; title: string; titleAccent: string }
  }
>
