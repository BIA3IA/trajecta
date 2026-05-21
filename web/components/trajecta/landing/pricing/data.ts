import { contactMailto } from "@/lib/site"
import type { SegmentedControlOption } from "../shared/segmented-control"
import type { PricingAudience, PricingContent } from "./types"

export const pricingAudienceOptions: SegmentedControlOption<PricingAudience>[] = [
  { value: "talents", label: "Talents" },
  { value: "companies", label: "Companies" },
]

export const pricingContent: Record<PricingAudience, PricingContent> = {
  talents: {
    eyebrow: "For talent users",
    title: "Free for clarity.",
    titleAccent: "Pro for deeper guidance.",
    description:
      "The free layer helps people understand their Skill Identity and realistic next roles. Pro is for users who want deeper gap analysis, roadmap guidance, and career support when a move becomes active.",
    plans: [
      {
        id: "talents-free",
        name: "Free",
        label: "Clarity layer",
        description: "For talents in transition who need clarity on their options before committing to a paid plan.",
        priceLabel: "€0",
        note: "/ month",
        cta: "Try it now",
        href: `${contactMailto}?subject=Trajecta%20Talent%20Waitlist`,
        features: [
          "Skill Identity from CV, projects, and certifications",
          "Basic Gap Analysis",
          "Basic Roadmap",
          "Basic Company Match",
        ],
      },
      {
        id: "talents-pro",
        name: "Pro",
        label: "Guidance layer",
        description: "For talents actively targeting a role and ready to turn skill gaps into a structured plan.",
        priceLabel: "€12",
        note: "/ month",
        cta: "Get Pro",
        href: `${contactMailto}?subject=Trajecta%20Talent%20Pro`,
        highlighted: true,
        features: [
          "Everything in Free",
          "Full Gap Analysis",
          "Full Roadmap to build stronger proof",
          "Full Company Match",
          "Live Market View",
          "AI career agent for deeper guidance",
        ],
      },
    ],
  },

  companies: {
    eyebrow: "For companies",
    title: "Free to validate.",
    titleAccent: "Pro to scale decisions.",
    description:
      "Companies can start free to test Trajecta on one role, then move to Pro when role-fit, shortlisting, and internal mobility become a recurring workflow.",
    plans: [
      {
        id: "companies-free",
        name: "Free",
        label: "Validation layer",
        description: "For companies testing whether structured skill signals improve a hiring or mobility decision.",
        priceLabel: "€0",
        note: "/ month",
        cta: "Try it now",
        href: `${contactMailto}?subject=Trajecta%20Company%20Intro`,
        features: [
          "Role Definition — build weighted skill requirements",
          "Basic Talent Pool View",
          "Basic Gap Analysis",
        ],
      },
      {
        id: "companies-pro",
        name: "Pro",
        label: "Operating layer",
        description: "For companies running hiring, shortlisting, and internal mobility as a recurring workflow.",
        priceLabel: "€199",
        note: "/ month",
        cta: "Get Pro",
        href: `${contactMailto}?subject=Trajecta%20Company%20Demo`,
        highlighted: true,
        features: [
          "Everything in Free",
          "Full Talent Pool View — ranked by trajectory fit",
          "Full Gap Analysis by requirement",
          "Live Market View — track how skill availability shifts",
          "Shortlist and export workflow",
          "Matching quality feedback loop",
        ],
      },
    ],
  },
}
