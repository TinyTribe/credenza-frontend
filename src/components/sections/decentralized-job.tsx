import { DecentralizedJobAnimation } from '../../motions/decentralized-job-animation'
import { Section } from '../sectional-ctn'

export const DecentralizedJob = () => {
  return (
    <div>
      <Section
        title='Decentralized Job Marketplace'
        subtitle='Skip the middleman—get hired through trustless matching. Smart contracts match verified talent with real job postings, creating a fair, transparent, and efficient hiring process.'
        animation={<DecentralizedJobAnimation />}
      />
    </div>
  )
}
