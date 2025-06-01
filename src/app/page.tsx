import Navbar from '@/components/navbar';
import { DecentralizedJob } from '@/features/landing-page/decentralized-job';
import { HeroSection } from '@/features/landing-page/hero';
import { OnChainVerified } from '@/features/landing-page/on-chain-verified';
import { TrustlessCredenza } from '@/features/landing-page/trustless-credenza';
import { VerifiableNft } from '@/features/landing-page/verifiable-nft';

const Home = () => {
  return (
    <div className="mx-auto flex w-full max-w-[1390px] flex-col gap-2 px-5 py-2 md:px-6">
      <Navbar />
      <HeroSection />
      <TrustlessCredenza />
      <VerifiableNft />
      <OnChainVerified />
      <DecentralizedJob />
    </div>
  );
};

export default Home;
