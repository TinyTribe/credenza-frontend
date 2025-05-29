'use client'

import { motion } from 'framer-motion'
import { sections } from './sections/multi-panel-section'

interface ScrollIndicatorProps {
  sections: typeof sections
  activeIndex: number
  progress: number
  className?: string
}

export const ScrollIndicator = ({
  sections,
  activeIndex,
  progress,
  className = '',
}: ScrollIndicatorProps) => {
  const totalWidth = 100
  const remainingWidth = (totalWidth - 45) / (sections.length - 1)

  return (
    <div className={`flex gap-2 ${className}`}>
      {sections.map((section, index) => {
        const isActive = index === activeIndex
        const width = isActive ? '45%' : `${remainingWidth}%`

        return (
          <motion.div
            key={section.id}
            className='h-2.5 rounded-full bg-[#EBEBEB] overflow-hidden'
            style={{ width }}
            layout
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <motion.div
              className='h-full rounded-full'
              style={{
                backgroundColor: isActive ? section.color : '#EBEBEB',
              }}
              initial={{ width: '0%' }}
              animate={{
                width: isActive ? `${progress * 100}%` : '0%',
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </motion.div>
        )
      })}
    </div>
  )
}
