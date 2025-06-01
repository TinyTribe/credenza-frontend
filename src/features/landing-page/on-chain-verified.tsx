import { OnChainVerifiedAnimation } from '@/motion/onchain-verified-animation';
import { Section } from '@/components/sectional-ctn';

export const OnChainVerified = () => {
  return (
    <div>
      <Section
        title="On-Chain Verified Organizations"
        subtitle="Get hired companies that are verified on credenza. Only authenticated organizations can issue credentials or post jobs, so you know you're dealing with legit entities."
        animation={<OnChainVerifiedAnimation />}
        isRowReverse={true}
      />
    </div>
  );
};
