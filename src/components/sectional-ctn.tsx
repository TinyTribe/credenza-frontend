'use client'

import { motion, useInView } from 'framer-motion'
import React from 'react'

interface SectionProps {
  title: string
  subtitle: string
  animation: React.ReactNode
  isRowReverse?: boolean
}

export const Section = ({
  title,
  subtitle,
  animation,
  isRowReverse,
}: SectionProps) => {
  const isReversed = isRowReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
      x: isRowReverse ? -30 : 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 20,
        duration: 0.8,
      },
    },
  }

  const titleVariants = {
    hidden: {
      opacity: 0,
      x: isRowReverse ? 20 : -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        type: 'spring',
        stiffness: 100,
        damping: 15,
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
        duration: 0.6,
        delay: 0.3,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={`w-full flex flex-col ${isReversed} gap-4 lg:gap-2 lg:h-[650px]`}
      whileInView={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)' }}
      transition={{ duration: 1 }}
    >
      <motion.div
        variants={animationContainerVariants}
        className='flex items-center justify-center h-[350px] md:h-[400px] lg:h-full w-full lg:w-1/2 rounded-[8px] md:rounded-2xl backdrop-blur-sm'
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        {animation}
      </motion.div>

      <motion.div
        variants={textContainerVariants}
        className={`flex flex-col gap-3 md:gap-6 justify-center w-full lg:w-1/2 rounded-2xl backdrop-blur-sm bg-white px-4 md:px-8 lg:px-12 py-4 md:py-8 ${
          isRowReverse ? 'text-left lg:text-right' : ''
        }`}
      >
        <motion.h1
          variants={titleVariants}
          className='text-2xl md:text-4xl lg:text-[64px] xl:tracking-[-1.28px] font-bold text-[#020717]'
        >
          {title}
        </motion.h1>
        <motion.p
          variants={subtitleVariants}
          className='text-sm md:text-xl text-[#747C88] leading-6 md:leading-7.5 font-normal max-md:pb-2 max-md:tracking-[0.28px]'
        >
          {subtitle}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
