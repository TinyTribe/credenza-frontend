import { Section } from '@/components/sectional-ctn';

import { DecentralizedJobAnimation } from '../../motion/decentralized-job-animation';

export const DecentralizedJob = () => {
  return (
    <div>
      <Section
        title="Decentralized Job Marketplace"
        subtitle="Skip the middleman—get hired through trustless matching. Smart contracts match verified talent with real job postings, creating a fair, transparent, and efficient hiring process."
        animation={<DecentralizedJobAnimation />}
      />
    </div>
  );
};
