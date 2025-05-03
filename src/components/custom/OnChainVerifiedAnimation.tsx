'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { CheckIcon, CheckMobileIcon } from '../icons/icons'

export const OnChainVerifiedAnimation = () => {
  const companies = ['Google', 'Microsoft', 'Starknet', 'Amazon', 'Meta']
  const [currentCompanyIndex, setCurrentCompanyIndex] = useState(0)

  const topCarouselRef = useRef<HTMLDivElement | null>(null)
  const bottomCarouselRef = useRef<HTMLDivElement | null>(null)
  const [carouselWidth, setCarouselWidth] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCompanyIndex((prevIndex) => (prevIndex + 1) % companies.length)
    }, 3000)

    if (topCarouselRef.current && bottomCarouselRef.current) {
      setCarouselWidth(
        topCarouselRef.current.scrollWidth - topCarouselRef.current.offsetWidth,
      )
    }

    const handleResize = () => {
      if (topCarouselRef.current) {
        setCarouselWidth(
          topCarouselRef.current.scrollWidth -
            topCarouselRef.current.offsetWidth,
        )
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [companies.length])

  const cardItems = [1, 2, 3, 4, 1, 2, 3, 4]

  return (
    <div className='bg-[#FFCC84] h-full w-full rounded-[8px] md:rounded-2xl backdrop-blur-sm relative overflow-hidden'>
      <Image
        src={'/grid.svg'}
        alt='Grid Layout'
        width={692}
        height={690}
        className='absolute inset-0 w-full h-full'
      />

      <div className='flex flex-col items-center justify-center h-full gap-4 md:gap-8 relative z-10'>
        <motion.div
          ref={topCarouselRef}
          className='overflow-hidden relative w-full'
        >
          <motion.div
            className='flex'
            initial={{ x: 0 }}
            animate={{
              x: [-carouselWidth, 0],
              transition: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
          >
            {cardItems.map((_, index) => (
              <motion.div
                key={index}
                className='px-1 md:px-2 min-w-[96px] md:min-w-[190px]'
              >
                <div className='h-[35px] md:h-[70px] rounded-[7px] md:rounded-[14px] border border-[#FFE8C7] bg-[rgba(255,255,255,0.32)] backdrop-blur-[3.8px]'></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className='flex items-center justify-center gap-4 md:gap-8 overflow-hidden'>
          <div className='min-w-[96px] md:min-w-[190px] h-[35px] md:h-[70px] rounded-[7px] md:rounded-[14px] border border-[#FFE8C7] bg-[rgba(255,255,255,0.32)] backdrop-blur-[3.8px]'></div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
            className='px-5 md:px-10 flex gap-2 md:gap-[15px] items-center justify-center rounded-[10px] md:rounded-[20px] border border-[#FFE8C7] bg-[rgba(255,255,255,0.32)] backdrop-blur-sm shadow-[5px_9px_20.9px_0px_rgba(0,0,0,0.05)] w-[180px] md:w-[360px] h-[62px] md:h-[124px]'
          >
            <div className='flex items-center'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentCompanyIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className='w-[100px] md:w-[200px] flex items-center justify-center text-center'
                >
                  <div className='hidden md:block'>
                    <span className='text-white text-5xl font-bold tracking-tight'>
                      {companies[currentCompanyIndex]}
                    </span>
                  </div>

                  <div className='block md:hidden'>
                    <span className='text-white text-2xl font-bold tracking-tight'>
                      {companies[currentCompanyIndex]}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className='flex items-center'
            >
              <span className='hidden md:inline-block'>
                <CheckIcon />
              </span>
              <span className='inline-block md:hidden'>
                <CheckMobileIcon />
              </span>
            </motion.div>
          </motion.div>

          <div className='min-w-[96px] md:min-w-[190px] h-[35px] md:h-[70px] rounded-[7px] md:rounded-[14px] border border-[#FFE8C7] bg-[rgba(255,255,255,0.32)] backdrop-blur-[3.8px]'></div>
        </div>

        <motion.div
          ref={bottomCarouselRef}
          className='overflow-hidden relative w-full'
        >
          <motion.div
            className='flex'
            initial={{ x: 0 }}
            animate={{
              x: [0, -carouselWidth],
              transition: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
          >
            {cardItems.map((_, index) => (
              <motion.div
                key={index}
                className='px-1 md:px-2 min-w-[96px] md:min-w-[190px]'
              >
                <div className='h-[35px] md:h-[70px] rounded-[7px] md:rounded-[14px] border border-[#FFE8C7] bg-[rgba(255,255,255,0.32)] backdrop-blur-[3.8px]'></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
