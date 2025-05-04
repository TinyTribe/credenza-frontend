// motions/variants.ts
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const floatingAnimation = {
  y: ['-5px', '5px'],
  transition: {
    y: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  },
}

export const rotatingFloatingAnimation = {
  ...floatingAnimation,
  rotate: [0, 360],
  transition: {
    ...floatingAnimation.transition,
    rotate: {
      duration: 20,
      repeat: Number.POSITIVE_INFINITY,
      ease: 'linear',
    },
  },
}
