import type { Variants, TargetAndTransition } from 'framer-motion'

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const slideLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 36,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const slideRight: Variants = {
  hidden: {
    opacity: 0,
    x: -36,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
}

export const navbarReveal: Variants = {
  hidden: {
    opacity: 0,
    y: -18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const hoverLift: TargetAndTransition = {
  y: -8,
  scale: 1.015,
  transition: {
    duration: 0.25,
    ease: [0.22, 1, 0.36, 1],
  },
}

export const hoverSoft: TargetAndTransition = {
  y: -2,
  transition: {
    duration: 0.22,
    ease: [0.22, 1, 0.36, 1],
  },
}

export const tapPress: TargetAndTransition = {
  scale: 0.985,
}

export const floating = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3.8,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
}

export const subtlePulse = {
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2.8,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
}