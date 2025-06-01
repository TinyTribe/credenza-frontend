'use client'

import { DecentralizedJobAnimation } from '@/motions/decentralized-job-animation'
import { OnChainVerifiedAnimation } from '@/motions/onchain-verified-animation'
import VerifiableNftAnimation from '@/motions/verifiable-nft-animation'
import { AnimatePresence, motion } from 'framer-motion'
import type React from 'react'
import { useEffect, useRef, useState } from 'react'
import { ScrollIndicator } from '../../custom/scroll-indicator'
import { SectionPanel } from '../../custom/sectional-panel'

interface SectionProps {
  id: string
  title: string
  subtitle: string
  animation: React.ReactNode
  color: string
}

export const sections: SectionProps[] = [
  {
    id: 'verifiable-nft',
    title: 'Verifiable NFT Credentials',
    subtitle:
      'Highlight your achievements with secure digital credentials. Your milestones are NFTs, owned and verifiable by you—no central authority required.',
    animation: <VerifiableNftAnimation />,
    color: '#014ADD',
  },
  {
    id: 'on-chain-verified',
    title: 'On-Chain Verified Organizations',
    subtitle:
      "Get hired companies that are verified on credenza. Only authenticated organizations can issue credentials or post jobs, so you know you're dealing with legit entities.",
    animation: <OnChainVerifiedAnimation />,
    color: '#FFCC84',
  },
  {
    id: 'decentralized-job',
    title: 'Decentralized Job Marketplace',
    subtitle:
      'Skip the middleman—get hired through trustless matching. Smart contracts match verified talent with real job postings, creating a fair, transparent, and efficient hiring process.',
    animation: <DecentralizedJobAnimation />,
    color: '#84FF8C',
  },
]

export const MultiPanelSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !stickyRef.current) return

      const container = containerRef.current
      const containerRect = container.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      const containerTop = containerRect.top
      const containerHeight = containerRect.height

      const scrollEnd = containerHeight - viewportHeight

      let scrollProgress = 0

      if (containerTop <= 0 && containerTop >= -scrollEnd) {
        const scrolledDistance = Math.abs(containerTop)
        scrollProgress = Math.min(scrolledDistance / Math.max(scrollEnd, 1), 1)
      } else if (containerTop < -scrollEnd) {
        scrollProgress = 1
      }

      const totalSections = sections.length
      const sectionProgress = scrollProgress * totalSections
      const currentSectionIndex = Math.min(
        Math.floor(sectionProgress),
        totalSections - 1,
      )

      const withinSectionProgress = sectionProgress - currentSectionIndex

      setActiveIndex(currentSectionIndex)
      setProgress(Math.min(withinSectionProgress, 1))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollHeight = `${100 + sections.length * 50}vh`

  return (
    <div
      ref={containerRef}
      className='w-full relative'
      style={{
        height: scrollHeight,
      }}
    >
      <div
        ref={stickyRef}
        className='sticky top-0 w-full'
        style={{ height: '100vh' }}
      >
        <div className='h-full flex items-center'>
          <div className='w-full relative'>
            <div className='hidden lg:block absolute top-1 right-0 z-20 lg:max-w-[442px] w-full'>
              <ScrollIndicator
                sections={sections}
                activeIndex={activeIndex}
                progress={progress}
              />
            </div>

            <div className='relative'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={activeIndex}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{
                    type: 'tween',
                    ease: 'easeInOut',
                    duration: 0.2,
                  }}
                  className='w-full'
                >
                  <SectionPanel
                    section={sections[activeIndex]}
                    isActive={true}
                    activeIndex={activeIndex}
                    progress={progress}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className='lg:hidden mt-4 max-lg:max-w-11/12 mx-auto'>
              <ScrollIndicator
                sections={sections}
                activeIndex={activeIndex}
                progress={progress}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
