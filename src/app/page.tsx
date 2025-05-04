import Navbar from '@/components/navbar'
import { DecentralizedJob } from '@/components/sections/DecentralizedJob'
import { HeroSection } from '@/components/sections/hero'
import { OnChainVerified } from '@/components/sections/OnChainVerified'

import React from 'react'

const Home = () => {
  return (
    <div className='px-5 md:px-6 max-w-[1390px] mx-auto w-full flex flex-col gap-2 py-2'>
      <Navbar />
      <HeroSection />
      <OnChainVerified />
      <DecentralizedJob />
    </div>
  )
}

export default Home
