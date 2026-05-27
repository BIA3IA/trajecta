import type { Variants } from "framer-motion"

// Primary easing curve - smooth deceleration, used everywhere
export const ease = [0.22, 1, 0.36, 1] as const

// Spring-like overshoot - use for icons, badges, small pop-ins
export const spring = [0.34, 1.56, 0.64, 1] as const

// Reusable fade + slide-up variant (use with motion.div initial="hidden" animate="show")
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
}

// Stagger container - wrap a list of fadeUp children
export function staggerContainer(staggerChildren = 0.1, delayChildren = 0): Variants {
  return {
    hidden: {},
    show: { transition: { staggerChildren, delayChildren } },
  }
}

// Slide in from a side - for before/after reveals
export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
}

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
}
