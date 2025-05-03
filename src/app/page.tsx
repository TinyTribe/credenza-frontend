import { DecentralizedJob } from '@/components/layout/decentralized-job'
import { OnChainVerified } from '@/components/layout/on-chain-verified'
import React from 'react'

const Home = () => {
  return (
    <div className='bg-[#F4F4F4]'>
      <div className='flex flex-col gap-2 py-2'>
        <OnChainVerified />
        <DecentralizedJob />
      </div>
    </div>
  )
}

export default Home
