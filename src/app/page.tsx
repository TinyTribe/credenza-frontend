import Navbar from '@/components/navbar'
import { HeroSection } from '@/components/sections/hero'
import { MultiPanelSection } from '@/components/sections/multi-panel-section'

const Home = () => {
  return (
    <div className='max-w-[1440px] mx-auto w-full'>
      <Navbar />
      <HeroSection />
      <div className='max-w-[1184px] mx-auto px-5 md:px-6 w-full flex flex-col gap-[200px] pt-[200px]'>
        <MultiPanelSection />
      </div>
    </div>
  )
}

export default Home
