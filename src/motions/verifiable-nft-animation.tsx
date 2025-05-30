'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function VerifiableNftAnimation() {
  const [pulses, setPulses] = useState([1, 2, 3])

  useEffect(() => {
    const interval = setInterval(() => {
      setPulses((prev) => {
        const newId = Math.max(...prev) + 1
        return [...prev.slice(-2), newId]
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='bg-[#84B5FF] h-full w-full rounded-[8px] md:rounded-2xl backdrop-blur-sm relative overflow-hidden'>
      <Image
        src={'/wall.svg'}
        alt='Wall layout'
        width={906}
        height={311}
        className='absolute inset-0 w-full h-full sm:h-3/4 lg:h-full sm:my-auto sm:object-cover lg:object-contain'
      />

      <div className='absolute inset-0 flex items-center justify-center'>
        {pulses.map((id) => (
          <motion.div
            key={id}
            className='absolute'
            initial={{ opacity: 0.7, scale: 1 }}
            animate={{
              opacity: [0.7, 0],
              scale: [1, 2.2],
            }}
            transition={{
              duration: 3,
              ease: 'easeOut',
              times: [0, 1],
              repeat: 3,
            }}
          >
            <Image
              src={'/shield-pulse.svg'}
              alt='Shield pulse'
              width={308}
              height={362}
              className='max-md:w-[154px] max-md:h-[184px] max-w-[308px] max-h-[362px]'
            />
          </motion.div>
        ))}
      </div>

      <div className='absolute inset-0 flex items-center justify-center'>
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <Image
            src={'/shield.svg'}
            alt='Shield Logo'
            width={135}
            height={160}
            className='w-[69px] h-[81px] md:w-[135px] md:h-[160px]'
          />
        </motion.div>
      </div>
    </div>
  )
}
