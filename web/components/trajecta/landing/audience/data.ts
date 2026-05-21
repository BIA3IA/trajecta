import { FiBriefcase, FiUsers } from "react-icons/fi"
import type { AudienceItem, AudienceSectionContent, JourneyStep } from "./types"

export const audienceSectionContent: AudienceSectionContent = {
  eyebrow: "Built for two audiences",
  title: "One intelligence engine, two",
  titleAccent: "ways to use it.",
  description:
    "Trajecta supports people planning a move and teams evaluating readiness. What changes is the decision: personal growth, hiring, or internal mobility.",
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
    summary: "Useful when you need to know what you can credibly move toward next.",
    tone: "talent",
    icon: FiUsers,
    journey: talentJourney,
  },
  {
    id: "companies",
    title: "For Companies",
    text: "Turn role expectations into structured requirements, compare candidates or internal talent with evidence, and keep decisions explainable.",
    badge: "Built for decision support",
    summary: "Useful when hiring and internal mobility need more than CV shorthand.",
    tone: "company",
    icon: FiBriefcase,
    journey: companyJourney,
  },
]
