'use client'

import { motion } from 'framer-motion'

interface SectionPanelProps {
  section: {
    id: string
    title: string
    subtitle: string
    animation: React.ReactNode
    color: string
  }
  isActive: boolean
  activeIndex: number
  progress: number
}

export const SectionPanel = ({ section, isActive }: SectionPanelProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 0.8,
      },
    },
  }

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: 'beforeChildren',
      },
    },
  }

  const animationContainerVariants = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 20,
        duration: 0.2,
      },
    },
  }

  const titleVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        type: 'spring',
        stiffness: 100,
        damping: 3,
      },
    },
  }

  const subtitleVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
        delay: 0.1,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      initial='hidden'
      animate={isActive ? 'visible' : 'hidden'}
      variants={containerVariants}
      className='w-full flex flex-col lg:flex-row gap-4 lg:gap-[50px] py-1'
      transition={{ duration: 1 }}
    >
      <motion.div
        variants={animationContainerVariants}
        className='flex items-center justify-center h-[350px] md:h-[400px] lg:h-[548px] w-full lg:max-w-[692px] rounded-[8px] md:rounded-2xl backdrop-blur-sm overflow-hidden'
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.4 }}
      >
        {section.animation}
      </motion.div>

      <motion.div
        variants={textContainerVariants}
        className='flex flex-col gap-3 md:gap-6 w-full lg:max-w-[442px] rounded-2xl backdrop-blur-sm bg-white max-sm:px-4 max-md:px-8 max-lg:px-12 max-md:py-4 max-lg:py-8'
      >
        <motion.h1
          variants={titleVariants}
          className='text-2xl md:text-3xl lg:text-[40px] xl:tracking-[-1.28px] font-bold text-[#020717] lg:mt-10'
        >
          {section.title}
        </motion.h1>
        <motion.p
          variants={subtitleVariants}
          className='text-sm md:text-xl text-[#747C88] leading-6 md:leading-7.5 font-normal max-md:pb-2 max-md:tracking-[0.28px]'
        >
          {section.subtitle}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
