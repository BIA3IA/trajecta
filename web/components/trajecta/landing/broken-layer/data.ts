import type { BrokenLayerItem, BrokenLayerSectionContent } from "./types"

export const brokenLayerSectionContent: BrokenLayerSectionContent = {
  eyebrow: "Why Trajecta",
  title: "Resumes show history.",
  titleAccent: "Trajecta shows readiness.",
}

export const brokenLayerItems: [BrokenLayerItem, BrokenLayerItem] = [
  {
    label: "The old signal",
    title: "A title can hide what someone is actually ready for.",
    text: "CVs and job titles are useful, but they often miss transferable skills, recent projects, adjacent potential, and the difference between saying a skill and proving it.",
    tone: "legacy",
    badgeLabel: "Past-biased signal",
    summary: "Good for context. Weak for judging mobility, growth, or missing proof.",
  },
  {
    label: "The Trajecta signal",
    title: "Skill Identity makes potential easier to trust.",
    text: "Trajecta connects skills to evidence, then compares them with real role requirements. The result is a clearer view of fit, distance, gaps, and the next action worth taking.",
    tone: "future",
    badgeLabel: "Evidence-led signal",
    summary: "Tells you whether the gap is a missing skill or missing proof.",
  },
]
