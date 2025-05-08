'use client'

import { useEffect, useState } from 'react'

interface TypewriterTextProps {
  text: string
  speed?: number
  delay?: number
}

export const TypewriterText = ({
  text,
  speed = 100,
  delay = 1000,
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index])
        setIndex(index + 1)
      } else {
        setTimeout(() => {
          setDisplayedText('')
          setIndex(0)
        }, delay)
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [index, text, speed, delay])

  return (
    <p className='text-white text-[16px] font-medium leading-[24px] tracking-[0.32px] whitespace-nowrap overflow-hidden'>
      {displayedText}
    </p>
  )
}
