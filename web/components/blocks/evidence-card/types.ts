export type skillEvidence =
  | {
      kind: "certification"
      title: string // Meta Front-End Developer Certificate
      subtitle: string // Meta / Coursera
      year: number
      coveredSkills: string[]
    }
  | {
      kind: "experience"
      title: string // Senior Frontend Developer
      subtitle: string // Acme Corp - 3 years"
      coveredSkills: string[]
    }
  | {
      kind: "project"
      title: string // OpenUI component library
      subtitle: string // short description
      url?: string
      coveredSkills: string[]
    }
