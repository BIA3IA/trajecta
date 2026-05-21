import { FiBriefcase, FiUsers } from "react-icons/fi"
import type { AudienceItem, AudienceSectionContent, JourneyStep } from "./types"

export const audienceSectionContent: AudienceSectionContent = {
  eyebrow: "Built for two audiences",
  title: "One intelligence engine,",
  titleAccent: "two ways to use it.",
  description:
    "Whether you're planning a transition or evaluating someone else's, Trajecta gives you the same thing: evidence over assumption. Because whether the decision is yours or about you, it should be based on something real.",
}

const talentJourney: JourneyStep[] = [
  {
    id: "talent-identity",
    title: "Build Skill Identity",
    text: "Turn experience, projects, certifications, and goals into a clearer skill profile.",
  },
  {
    id: "talent-fit",
    title: "Compare target roles",
    text: "See which roles are realistic and what is still missing.",
  },
  {
    id: "talent-action",
    title: "Close the right gap",
    text: "Know whether to learn a skill or build proof for one you already have.",
  },
]

const companyJourney: JourneyStep[] = [
  {
    id: "company-roles",
    title: "Structure roles",
    text: "Turn job descriptions into clearer skill and readiness expectations.",
  },
  {
    id: "company-compare",
    title: "Compare evidence",
    text: "Measure fit, distance, and adjacent capability beyond keyword history.",
  },
  {
    id: "company-decide",
    title: "Support decisions",
    text: "Use explanations and gap breakdowns to support human decisions.",
  },
]

export const audienceCards: AudienceItem[] = [
  {
    id: "talents",
    title: "For Talents",
    text: "Turn scattered experience into a Skill Identity, compare it with target roles, and focus on the proof that makes the next move credible.",
    badge: "Built for career transitions",
    tone: "talent",
    icon: FiUsers,
    journey: talentJourney,
  },
  {
    id: "companies",
    title: "For Companies",
    text: "Turn role expectations into structured requirements, compare candidates or internal talent with evidence, and keep decisions explainable.",
    badge: "Built for decision support",
    tone: "company",
    icon: FiBriefcase,
    journey: companyJourney,
  },
]
