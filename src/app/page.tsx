import  FooterSection from "@/features/landing-page/footer-section";
import Navbar from '@/components/navbar';
import { HeroSection } from '@/features/landing-page/hero';
import { HowToGetStarted } from '@/features/landing-page/how-to-get-started';
import { MultiPanelSection } from '@/features/landing-page/multi-panel-section';
import { MultiPanelSectionHeader } from '@/features/landing-page/multi-panel-section-header';

import { OrganizationsAndTalentSection } from '@/features/landing-page/organizations-and-talent';
const Home = () => {
  return (
    <div className="mx-auto w-full max-w-[1440px]">
      <Navbar />
      <HeroSection />
      <div className="mx-auto flex w-full max-w-[1184px] flex-col gap-[100px] px-5 pt-[100px] md:px-6 lg:gap-[200px] lg:pt-[200px]">
        <MultiPanelSectionHeader />
        <MultiPanelSection />
        <HowToGetStarted />
        <OrganizationsAndTalentSection />
      </div>
         <FooterSection />
    </div>
  );
};

export default Home;
