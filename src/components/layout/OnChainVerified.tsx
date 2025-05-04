import { OnChainVerifiedAnimation } from '../custom/OnChainVerifiedAnimation'
import { Section } from '../custom/SectionalCtn'

export const OnChainVerified = () => {
  return (
    <div className='px-5 md:px-6'>
      <Section
        title='On-Chain Verified Organizations'
        subtitle="Get hired companies that are verified on credenza. Only authenticated organizations can issue credentials or post jobs, so you know you're dealing with legit entities."
        animation={<OnChainVerifiedAnimation />}
        isRowReverse={true}
      />
    </div>
  )
}
