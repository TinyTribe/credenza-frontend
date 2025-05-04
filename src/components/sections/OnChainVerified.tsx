import { OnChainVerifiedAnimation } from '../../motions/onchain-verified-animation'
import { Section } from '../SectionalCtn'

export const OnChainVerified = () => {
  return (
    <div>
      <Section
        title='On-Chain Verified Organizations'
        subtitle="Get hired companies that are verified on credenza. Only authenticated organizations can issue credentials or post jobs, so you know you're dealing with legit entities."
        animation={<OnChainVerifiedAnimation />}
        isRowReverse={true}
      />
    </div>
  )
}
