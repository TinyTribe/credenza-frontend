import { HeroSection } from '@/components/sections/hero'

import { DecentralizedJob } from '@/components/layout/DecentralizedJob'
import { OnChainVerified } from '@/components/layout/OnChainVerified'
import React from 'react'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className='bg-[#F4F4F4]'>
        <div className='flex flex-col gap-2 py-2'>
          <OnChainVerified />
          <DecentralizedJob />
        </div>
      </div>
    </div>
  )
}

export default Home
