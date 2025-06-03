import Navbar from "@/components/navbar";
import { HeroSection } from "@/features/landing-page/hero";
import { MultiPanelSection } from "@/features/landing-page/multi-panel-section";
import  FooterSection from "@/features/landing-page/footer-section";


const Home = () => {
  return (
    <div className='max-w-[1440px] mx-auto w-full'>
      <Navbar />
      <HeroSection />
      <div className='max-w-[1184px] mx-auto px-5 md:px-6 w-full flex flex-col gap-[50px] md:gap-[100px] lg:gap-[200px] pt-[50px] md:pt-[100px] lg:pt-[200px]'>
        <MultiPanelSection />
      </div>
         <FooterSection />
    </div>
  )
}

export default Home


