import React from 'react'

interface SectionProps {
  title: string
  subtitle: string
  animation: React.ReactNode
  isRowReverse?: boolean
}

export const Section = ({
  title,
  subtitle,
  animation,
  isRowReverse,
}: SectionProps) => {
  const isReversed = isRowReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'

  return (
    <div
      className={`max-w-[1392px] w-full mx-auto flex flex-col ${isReversed} gap-4 lg:gap-2 lg:h-[690px]`}
    >
      <div className='flex items-center justify-center h-[300px] md:h-[400px] lg:h-full w-full lg:w-1/2 rounded-2xl backdrop-blur-sm'>
        {animation}
      </div>

      <div
        className={`flex flex-col gap-3 md:gap-6 justify-center w-full lg:w-1/2 rounded-2xl backdrop-blur-sm bg-white px-4 md:px-8 lg:px-12 py-4 md:py-8 ${
          isRowReverse ? 'text-left lg:text-right' : ''
        }`}
      >
        <h1 className='text-2xl md:text-4xl lg:text-[64px] tracking-[-1.28px] font-bold text-[#020717]'>
          {title}
        </h1>
        <p className='text-sm md:text-xl text-[#747C88] leading-6 md:leading-7.5 font-normal max-md:pb-2 max-md:tracking-[0.28px]'>
          {subtitle}
        </p>
      </div>
    </div>
  )
}
