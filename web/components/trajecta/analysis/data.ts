import { FiBriefcase, FiUser } from "react-icons/fi"
import type { Role, RoleData } from "./types"

export const roles: RoleData[] = [
  {
    id: "talent" as Role,
    icon: FiUser,
    title: "Talent",
    features: [
      "See what skills you actually have",
      "Measure distance to your target role",
      "Get a concrete next action",
    ],
  },
  {
    id: "company" as Role,
    icon: FiBriefcase,
    title: "Company",
    features: [
      "Build a clear skill profile for your open role",
      "See exactly what gaps candidates bring",
      "Make evidence-based hiring decisions",
    ],
  },
]
