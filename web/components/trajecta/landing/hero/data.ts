import { FiCompass, FiLayers, FiTarget } from "react-icons/fi"
import type { ProfileCardProps } from "@/components/blocks/profile-card/types"
import type { HintProps } from "@/components/ui/hint"

export const heroContent = {
  eyebrow: "Career intelligence built around real skill evidence",
  titleLead: "Don't match titles.",
  titleBridge: "Match",
  titleAccent: "trajectories.",
  description:
    "Trajecta helps people and teams understand fit, potential, and next steps by looking at skill evidence, role requirements, and the type of gap that determines the right action.",
  cta: {
    href: "/analysis",
    label: "Try Trajecta in 5 Minutes",
  },
} as const

export const heroHighlights = ["Map transferable skills", "Measure role fit", "Turn gaps into proof"] as const

export const previewCardContent: ProfileCardProps = {
  eyebrow: "Skill intelligence layer",
  title: "What Trajecta sees behind a profile",
  tabs: [
    { id: "skill-identity", label: "Skill identity", active: true },
    { id: "role-fit", label: "Role fit" },
    { id: "gap-analysis", label: "Gap analysis" },
  ],
  metrics: [
    { label: "Evidence confidence", value: "82%" },
    { label: "Role fit score", value: "74%" },
    { label: "Distance to target", value: "Low" },
  ],
  signals: [
    {
      label: "Verified strength",
      title: "Dashboarding and business reporting",
      detail: "Project evidence supports data visualization, stakeholder reporting, and analytical communication",
      value: 86,
      icon: FiLayers,
    },
    {
      label: "Target role",
      title: "Junior Data Analyst",
      detail: "Role profile weighs SQL, dashboarding, business reasoning, and communication",
      value: 74,
      icon: FiTarget,
    },
    {
      label: "Main gap type",
      title: "SQL evidence gap",
      detail: "The likely skill is adjacent, but the profile needs a concrete project to prove it",
      value: 58,
      icon: FiCompass,
    },
  ],
}

export const previewHints: HintProps[] = [
  {
    position: "bottom-right",
    label: "Next action",
    value: "Build SQL proof",
  },
  {
    position: "top-right",
    label: "Decision context",
    value: "Junior Data Analyst",
  },
]
