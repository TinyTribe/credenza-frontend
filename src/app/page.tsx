import Navbar from '@/components/navbar'
import { DecentralizedJob } from '@/components/sections/decentralized-job'
import { HeroSection } from '@/components/sections/hero'
import { OnChainVerified } from '@/components/sections/on-chain-verified'
import { VerifiableNft } from '@/components/sections/verifiable-nft'

const Home = () => {
  return (
    <div className='px-5 md:px-6 max-w-[1390px] mx-auto w-full flex flex-col gap-2 py-2'>
      <Navbar />
      <HeroSection />
      <VerifiableNft />
      <OnChainVerified />
      <DecentralizedJob />
    </div>
  )
}

export default Home
