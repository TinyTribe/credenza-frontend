'use client'

import { DecentralizedJobAnimation } from '@/motions/decentralized-job-animation'
import { OnChainVerifiedAnimation } from '@/motions/onchain-verified-animation'
import VerifiableNftAnimation from '@/motions/verifiable-nft-animation'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
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
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const activeIndexRef = useRef(0)

  useEffect(() => {
    activeIndexRef.current = activeIndex
  }, [activeIndex])

  useEffect(() => {
    const duration = 1800
    const updateInterval = 200
    const increment = updateInterval / duration

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment
        if (newProgress >= 1) {
          const nextIndex = (activeIndexRef.current + 1) % sections.length
          setActiveIndex(nextIndex)
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
  }, [])

  return (
    <div className='w-full relative overflow-hidden'>
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
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
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
  )
}
