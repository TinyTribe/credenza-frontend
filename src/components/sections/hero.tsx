'use client'

import { Button } from '@/components/ui/button'
import IconCarousel from '@/motions/animated-scroll'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import {
  containerVariants,
  floatingAnimation,
  itemVariants,
  rotatingFloatingAnimation,
} from '@/motions/variants'

export function HeroSection() {
  return (
    <section className='w-full px-4 md:px-8 lg:px-16 py-12 md:py-20 bg-white rounded-2xl'>
      <div className='max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between'>
        <motion.div
          className='w-full lg:w-[45%] xl:w-1/2 max-[375px]:mb-0 mb-12 md:mb-0 pr-0 md:pr-8'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className='text-[#020717] text-3xl mt-4 lg:mt-0 sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6'
            initial='hidden'
            animate='visible'
            variants={itemVariants}
          >
            Own Your Professional Identity
          </motion.h1>
          <motion.p
            className='text-[#747c88] text-lg md:text-xl max-w-xl mb-8'
            initial='hidden'
            animate='visible'
            variants={itemVariants}
          >
            Join our decentralized resume platform to showcase your skills,
            connect with employers, and get verified credentials. Enjoy a
            secure, intermediary-free experience!
          </motion.p>
          <motion.div
            className='flex max-[375px]:flex-col gap-2 md:gap-4'
            initial='hidden'
            animate='visible'
            variants={itemVariants}
          >
            <Button
              asChild
              size='lg'
              className='bg-[#004fee] hover:bg-[#0040d0] text-white px-8'
            >
              <Link href='#'>Join us for free</Link>
            </Button>
            <Button
              asChild
              variant='outline'
              size='lg'
              className='border-[#cfcfcf] text-[#1f1f1f] px-8'
            >
              <Link href='#'>Learn more</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className='w-full lg:w-1/2 max-w-[533px] aspect-square relative min-h-[310px] sm:min-h-[400px] xl:min-h-[520px] mx-auto'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.div
            className='absolute top-[10%] right-[15%] w-4 h-4 rounded-full bg-[#84b5ff]'
            animate={floatingAnimation}
          />
          <motion.div
            className='absolute bottom-[5%] right-[5%] w-6 h-6 rounded-full bg-[#84b5ff]'
            animate={floatingAnimation}
          />
          <motion.div
            animate={rotatingFloatingAnimation}
            className='absolute top-[40%] left-[10%] w-6 h-6 bg-[#ffcc84] transform rotate-45'
            style={{ borderRadius: '30%' }}
          />

          {/* Green block */}
          <motion.div
            className='absolute top-[6%] left-[16%] w-[41%]'
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className='absolute -top-3 -right-4 p-2.5 bg-[#84FF8C] w-10 h-10 rounded-full flex items-center justify-center'
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            >
              <Image src='/sparkles.svg' alt='spark' width={30} height={30} />
            </motion.div>
            <Image
              src='/green-bg.png'
              alt='Person'
              width={230}
              height={285}
              className='object-contain w-full h-full'
            />
          </motion.div>

          {/* Orange block */}
          <motion.div
            className='absolute top-[16.8%] right-0 w-[40%]'
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src='/orange-bg.svg'
              alt='Person'
              width={203}
              height={242}
              className='object-contain w-full h-full'
            />
            <motion.div
              className='absolute -bottom-[40%] left-[10%] w-[20%] h-[30%] rounded-[13px] bg-[#FFCC84] flex items-center justify-center overflow-hidden'
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{
                  filter: ['brightness(1)', 'brightness(1.3)', 'brightness(1)'],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className='w-full h-full flex items-center justify-center'
              >
                <Image src='/flash.svg' alt='flash' width={38} height={40} />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Blue block */}
          <motion.div
            className='absolute left-0 bottom-0 w-[60%]'
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className='absolute -top-[8%] -left-3 bg-[#84B5FF] h-14 w-14 p-1 md:p-4 rounded-4xl flex items-center justify-center overflow-hidden'
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
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

          {/* Icon Carousel */}
          <motion.div
            className='absolute md:top-[54%] top-[53%] right-[35%] bg-[#004FEE] w-[25%] h-[30px] sm:h-[40px] rounded-full p-1 shadow-md z-10'
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <IconCarousel />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
