'use client'

import { DecentralizedJobAnimation } from '@/motions/decentralized-job-animation'
import { OnChainVerifiedAnimation } from '@/motions/onchain-verified-animation'
import VerifiableNftAnimation from '@/motions/verifiable-nft-animation'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { ScrollIndicator } from '../scroll-indicator'
import { SectionPanel } from '../sectional-panel'

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
      'Get hired companies that are verified on credenza. Only authenticated organizations can issue credentials or post jobs, so you know you’re dealing with legit entities.',
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
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    if (!isInView) return

    const duration = 10000
    const updateInterval = 50
    const increment = updateInterval / duration

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment
        if (newProgress >= 1) {
          setActiveIndex((current) => (current + 1) % sections.length)
          return 0
        }
        return newProgress
      })
    }, updateInterval)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isInView])

  return (
    <div ref={containerRef} className='w-full relative overflow-hidden'>
      <div className='relative'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeIndex}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{
              type: 'tween',
              ease: 'easeInOut',
              duration: 0.6,
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

      <div className='lg:hidden mt-8 flex justify-center'>
        <ScrollIndicator
          sections={sections}
          activeIndex={activeIndex}
          progress={progress}
        />
      </div>
    </div>
  )
}
