import Navbar from '@/components/layout/navbar'
import { HeroSection } from '@/components/layout/landing-page/hero'
import { MultiPanelSection } from '@/components/layout/landing-page/multi-panel-section'

const Home = () => {
  return (
    <div className='max-w-[1440px] mx-auto w-full'>
      <Navbar />
      <HeroSection />
      <div className='max-w-[1184px] mx-auto px-5 md:px-6 w-full flex flex-col gap-[50px] md:gap-[100px] lg:gap-[200px] pt-[50px] md:pt-[100px] lg:pt-[200px]'>
        <MultiPanelSection />
      </div>
    </div>
  )
}

export default Home
