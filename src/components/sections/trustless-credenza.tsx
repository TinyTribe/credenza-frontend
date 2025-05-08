'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { TypewriterText } from '../typewriter-text'

export const TrustlessCredenza = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.8,
      },
    },
  }

  const contentContainerVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const listItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const imageContainerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delayChildren: 0.5,
      },
    },
  }

  const notificationVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 1.2,
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className='w-full flex max-lg:flex-col gap-4 xl:gap-[73px] bg-white pl-16 pr-6 rounded-[8px] md:rounded-2xl'
      whileInView={{ boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.08)' }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        variants={contentContainerVariants}
        className={`flex flex-col gap-3 md:gap-6 justify-center max-w-[608px] w-full py-[50px]`}
      >
        <div className='flex flex-col gap-3'>
          <motion.h1
            variants={itemVariants}
            className='text-2xl md:text-4xl lg:text-[64px] tracking-[-1.28px] font-bold text-[#020717] max-md:leading-[36px]'
          >
            Trustless Credenza Ecosystem
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className='text-sm md:text-xl text-[#747C88] leading-6 md:leading-7.5 font-normal max-md:pb-2 max-md:tracking-[0.28px]'
          >
            Credenza creates a direct connection between credential issuers and
            talents, removing intermediaries and ensuring authenticity through
            cryptographic verification.
          </motion.p>
        </div>

        <motion.ul className='flex flex-col gap-6' variants={containerVariants}>
          <motion.li
            variants={listItemVariants}
            className='flex gap-3 items-center font-medium text-[#3E4146] text-[20px] leading-7'
            custom={0}
          >
            <motion.span
              className='w-1.5 h-1.5 bg-[#B0B0B0] rounded-[2px]'
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.8, duration: 0.3 }}
            ></motion.span>
            Verified talent pool
          </motion.li>
          <motion.li
            variants={listItemVariants}
            className='flex gap-3 items-center font-medium text-[#3E4146] text-[20px] leading-7'
            custom={1}
          >
            <motion.span
              className='w-1.5 h-1.5 bg-[#B0B0B0] rounded-[2px]'
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 1.0, duration: 0.3 }}
            ></motion.span>
            Build your personal presences
          </motion.li>
          <motion.li
            variants={listItemVariants}
            className='flex gap-3 items-center font-medium text-[#3E4146] text-[20px] leading-7'
            custom={2}
          >
            <motion.span
              className='w-1.5 h-1.5 bg-[#B0B0B0] rounded-[2px]'
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 1.2, duration: 0.3 }}
            ></motion.span>
            Find dream job
          </motion.li>
        </motion.ul>
      </motion.div>

      <motion.div
        variants={imageContainerVariants}
        className='relative rounded-[6.7px] md:rounded-[12px] py-6'
      >
        <Image
          src='/job.svg'
          alt='Job offer'
          width={623}
          height={471}
          className='w-full h-full'
        />
        <motion.div
          variants={notificationVariants}
          className='absolute top-1/2 left-[10%] -translate-y-1/2 inline-flex items-center justify-center gap-[10px] rounded-[5px] border border-white/25 bg-white/25 px-[14px] py-[12px] backdrop-blur-[2.5px]'
          whileHover={{
            scale: 1.05,
          }}
        >
          <Image
            src='/notification-bing.svg'
            alt='Notification Icon'
            width={24}
            height={24}
          />
          <TypewriterText text="You've got a job offer" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
