import FooterSection from '@/features/landing-page/footer-section';
import Navbar from '@/components/navbar';
import { Hero } from '@/features/landing-page/hero';
import { HowToGetStarted } from '@/features/landing-page/how-to-get-started';
import { MultiPanelSection } from '@/features/landing-page/multi-panel-section';
import { MultiPanelSectionHeader } from '@/features/landing-page/multi-panel-section-header';

import { OrganizationsAndTalentSection } from '@/features/landing-page/organizations-and-talent';
const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <MultiPanelSectionHeader />
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mx-auto flex w-full max-w-[1184px] flex-col gap-[100px] px-5 md:px-6 lg:gap-[200px]">
          <MultiPanelSection />
        </div>
      </div>
      <HowToGetStarted />
      <OrganizationsAndTalentSection />
      <FooterSection />
    </main>
  );
};

export default Home;
