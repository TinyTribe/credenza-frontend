'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import IconCarousel from '../ui/animated-scroll'

export function HeroSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const floatingAnimation = {
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

  return (
    <section className='w-full px-4 md:px-8 lg:px-16 py-12 md:py-20'>
      <div className='max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between'>
        {/* Left Column - Text Content */}
        <motion.div
          className='w-full lg:w-[45%] xl:w-1/2 mb-12 md:mb-0 pr-0 md:pr-8'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className='text-[#020717] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Own Your Professional Identity
          </motion.h1>
          <motion.p
            className='text-[#747c88] text-lg md:text-xl max-w-xl mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Join our decentralized resume platform to showcase your skills,
            connect with employers, and get verified credentials. Enjoy a
            secure, intermediary-free experience!
          </motion.p>
          <motion.div
            className='flex flex-wrap gap-4'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              asChild
              size='lg'
              className='bg-[#004fee] hover:bg-[#0040d0] text-white rounded-full px-8'
            >
              <Link href='#'>Join us for free</Link>
            </Button>
            <Button
              asChild
              variant='outline'
              size='lg'
              className='border-[#cfcfcf] text-[#1f1f1f] rounded-full px-8'
            >
              <Link href='#'>Learn more</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column - Image Collage */}
        <motion.div
          className='w-full lg:w-1/2 max-w-[533px] aspect-square relative min-h-[350px] sm:min-h-[400px] h-full xl:min-h-[520px] mx-auto'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {/* Decorative elements */}
          <motion.div
            animate={floatingAnimation}
            className='absolute top-[10%] right-[15%] w-4 h-4 rounded-full bg-[#84b5ff]'
          ></motion.div>
          <motion.div
            animate={floatingAnimation}
            className='absolute bottom-[5%] right-[5%] w-6 h-6 rounded-full bg-[#84b5ff]'
          ></motion.div>
          <motion.div
            animate={{
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
            }}
            className='absolute top-[40%] left-[10%] w-6 h-6 bg-[#ffcc84] transform rotate-45'
            style={{ borderRadius: '30%' }}
          ></motion.div>

          {/* Green rectangle with person - Top right */}
          <motion.div
            variants={itemVariants}
            className='absolute top-[6%] left-[16%] w-[41%] h-auto'
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className='absolute -top-3 -right-4 p-2.5 bg-[#84FF8C] rounded-full flex items-center justify-center'
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
                transition: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                },
              }}
            >
              <Image src='/sparkles.svg' alt='spark' width={30} height={30} />
            </motion.div>
            <Image
              src='/green-bg.png'
              alt='Professional in white clothing'
              width={230}
              height={285}
              className='object-contain w-full h-full'
            />
          </motion.div>

          {/* Orange rectangle with person - Right side */}
          <motion.div
            variants={itemVariants}
            className='absolute top-[16.8%] right-[0%] w-[40%] h-auto'
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src='/orange-bg.png'
              alt='Professional person'
              width={203}
              height={242}
              className='object-contain w-full h-full'
            />

            <motion.div
              variants={itemVariants}
              className='absolute -bottom-[40%] left-[10%] w-[20%] h-[30%] rounded-[13px]
bg-[#FFCC84] flex items-center justify-center overflow-hidden'
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{
                  filter: ['brightness(1)', 'brightness(1.3)', 'brightness(1)'],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                }}
                className='w-full h-full flex items-center justify-center'
              >
                <Image src='/flash.svg' alt='flash' width={38} height={40} />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Blue rectangle with person using laptop - Middle/bottom */}
          <motion.div
            variants={itemVariants}
            className='absolute left-0 bottom-0 w-[60%] h-auto'
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              variants={itemVariants}
              className='absolute -top-[8%] -left-3 bg-[#84B5FF] p-4 rounded-4xl flex items-center justify-center overflow-hidden'
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }} // smooth continuous rotation
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className='w-full h-full flex items-center justify-center'
              >
                <Image src='/globe.svg' alt='globe' width={54} height={54} />
              </motion.div>
            </motion.div>
            <Image
              src='/blue-bg.png'
              alt='Person using laptop'
              width={314}
              height={217}
              className='object-contain w-full h-full'
            />
          </motion.div>

          {/* Chain/connection icon */}
          <motion.div
            variants={itemVariants}
            className='absolute top-[54%] right-[35%] bg-[#004FEE] w-[25%] h-[30px] sm:h-[40px]  rounded-l-full rounded-r-full p-1 shadow-md z-10'
            whileHover={{ scale: 1.05 }}
          >
            <IconCarousel />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
