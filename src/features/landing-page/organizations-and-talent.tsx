'use client';
import Container from '@/components/container/Container';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.6,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 0.6,
      ease: 'backOut',
    },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  tap: { scale: 0.95 },
};

export const OrganizationsAndTalentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Container alt>
      <motion.div
        ref={ref}
        className="flex flex-col gap-4 pt-[100px] lg:gap-6 lg:pt-[200px]"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Desktop Organizations Section */}
        <motion.div
          className="hidden min-h-[500px] rounded-2xl md:block lg:min-h-[600px] xl:min-h-[650px]"
          style={{
            backgroundImage: "url('/organization.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="my-8 ml-8 flex h-[420px] w-full max-w-[400px] flex-col justify-between lg:my-10 lg:ml-12 lg:h-[520px] lg:max-w-[465px] xl:my-12 xl:ml-16 xl:h-[570px] xl:max-w-[520px]">
            <motion.div
              className="flex flex-col gap-6 lg:gap-[27px]"
              variants={itemVariants}
            >
              <motion.h3
                className="text-sm font-bold uppercase text-[#F0F0F0] lg:text-base"
                variants={itemVariants}
              >
                For Organizations
              </motion.h3>
              <motion.h1
                className="text-[36px] font-semibold leading-[42px] tracking-[-0.8px] text-white lg:text-[56px] lg:leading-[60px] lg:tracking-[-1.12px] xl:text-[64px] xl:leading-[69px] xl:tracking-[-1.28px]"
                variants={itemVariants}
              >
                Easily Assess Candidates for Hire
              </motion.h1>
              <motion.ul className="space-y-3 text-sm font-normal text-[#F0F0F0] lg:space-y-4 lg:text-base">
                {[
                  'Post jobs to Find the best fit for your company',
                  'Verify talents credibility with ease',
                  'Checkmate fake employee or Ex.',
                ].map((text, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3"
                    variants={listItemVariants}
                    custom={i}
                  >
                    <span className="size-1 flex-shrink-0 bg-white"></span>
                    {text}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <Link href={'/'}>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  className="flex min-h-[48px] w-full max-w-[150px] gap-2.5 rounded-xl border-2 border-[#CFCFCF] text-[16px] font-bold leading-7 text-white transition-colors duration-300 hover:bg-white/10 hover:text-white lg:min-h-[54px] lg:max-w-[168px] lg:text-[18px]"
                  variant="outline"
                  size="sm"
                >
                  Post a Job
                  <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>

        {/* Mobile Organizations Section */}
        <motion.div
          className="-mx-6 block min-h-[600px] sm:min-h-[680px] md:hidden"
          style={{
            backgroundImage: "url('/organization-mobile.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          variants={itemVariants}
        >
          <div className="mx-4 mt-8 w-full max-w-[280px] sm:mx-6 sm:mt-10 sm:max-w-[340px]">
            <motion.div
              className="flex flex-col gap-6 sm:gap-[27px]"
              variants={itemVariants}
            >
              <motion.h3
                className="text-sm font-bold uppercase text-[#F0F0F0] sm:text-base"
                variants={itemVariants}
              >
                For Organizations
              </motion.h3>
              <motion.h1
                className="text-[28px] font-semibold leading-[34px] tracking-[-0.56px] text-white sm:text-[36px] sm:leading-[42px] sm:tracking-[-0.72px]"
                variants={itemVariants}
              >
                Easily Assess Candidates for Hire
              </motion.h1>
              <motion.ul className="space-y-3 text-sm font-normal text-[#F0F0F0] sm:space-y-4 sm:text-base">
                {[
                  'Post jobs to Find the best fit for your company',
                  'Verify talents credibility with ease',
                  'Checkmate fake employee or Ex.',
                ].map((text, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3"
                    variants={listItemVariants}
                    custom={i}
                  >
                    <span className="size-1 flex-shrink-0 bg-white"></span>
                    {text}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <Link href={'/'}>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  className="mt-8 flex min-h-10 w-full max-w-[140px] gap-2.5 rounded-full border border-[#CFCFCF] text-sm font-bold leading-7 text-white transition-colors duration-300 hover:bg-white/10 hover:text-white sm:mt-10 sm:min-h-12 sm:max-w-[168px] sm:text-base"
                  variant="outline"
                  size="sm"
                >
                  Post a Job
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>

        {/* Desktop Talent Section */}
        <motion.div
          className="hidden min-h-[500px] justify-end rounded-2xl md:flex lg:min-h-[600px] xl:min-h-[650px]"
          style={{
            backgroundImage: "url('/talent.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="my-8 mr-6 flex h-[420px] w-full max-w-[400px] flex-col justify-between lg:my-10 lg:mr-8 lg:h-[520px] lg:max-w-[465px] xl:my-12 xl:mr-6 xl:h-[570px] xl:max-w-[520px]">
            <motion.div
              className="flex flex-col gap-6 lg:gap-[27px]"
              variants={itemVariants}
            >
              <motion.h3
                className="text-sm font-bold uppercase text-[#F0F0F0] lg:text-base"
                variants={itemVariants}
              >
                For Talent
              </motion.h3>
              <motion.h1
                className="text-[36px] font-semibold leading-[42px] tracking-[-0.8px] text-white lg:text-[56px] lg:leading-[60px] lg:tracking-[-1.12px] xl:text-[64px] xl:leading-[69px] xl:tracking-[-1.28px]"
                variants={itemVariants}
              >
                Showcase Trustworthy Identity
              </motion.h1>
              <motion.ul className="space-y-3 text-sm font-normal text-[#F0F0F0] lg:space-y-4 lg:text-base">
                {[
                  'Add verifiable credentials',
                  'Find job with zero-cost or middle man',
                  'Work with verified clients worldwide',
                ].map((text, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3"
                    variants={listItemVariants}
                    custom={i}
                  >
                    <span className="size-1 flex-shrink-0 bg-white"></span>
                    {text}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <Link href={'/'}>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  className="flex min-h-[48px] w-full max-w-[240px] gap-2.5 rounded-xl border-2 border-[#CFCFCF] text-[16px] font-bold leading-7 text-white transition-colors duration-300 hover:bg-white/10 hover:text-white lg:min-h-[54px] lg:max-w-[282px] lg:text-[18px]"
                  variant="outline"
                  size="sm"
                >
                  Explore Opportunities
                  <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>

        {/* Mobile Talent Section */}
        <motion.div
          className="-mx-6 block min-h-[600px] sm:min-h-[680px] md:hidden"
          style={{
            backgroundImage: "url('/talent-mobile.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          variants={itemVariants}
        >
          <div className="mx-4 mt-8 w-full max-w-[280px] sm:mx-6 sm:mt-10 sm:max-w-[340px]">
            <motion.div
              className="flex flex-col gap-6 sm:gap-[27px]"
              variants={itemVariants}
            >
              <motion.h3
                className="text-sm font-bold uppercase text-[#F0F0F0] sm:text-base"
                variants={itemVariants}
              >
                For Talent
              </motion.h3>
              <motion.h1
                className="text-[28px] font-semibold leading-[34px] tracking-[-0.56px] text-white sm:text-[36px] sm:leading-[42px] sm:tracking-[-0.72px]"
                variants={itemVariants}
              >
                Showcase Trustworthy Identity
              </motion.h1>
              <motion.ul className="space-y-3 text-sm font-normal text-[#F0F0F0] sm:space-y-4 sm:text-base">
                {[
                  'Add verifiable credentials',
                  'Find job with zero-cost or middle man',
                  'Work with verified clients worldwide',
                ].map((text, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3"
                    variants={listItemVariants}
                    custom={i}
                  >
                    <span className="size-1 flex-shrink-0 bg-white"></span>
                    {text}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <Link href={'/'}>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  className="mt-8 flex min-h-10 w-full max-w-[200px] gap-2.5 rounded-full border border-[#CFCFCF] text-sm font-bold leading-7 text-white transition-colors duration-300 hover:bg-white/10 hover:text-white sm:mt-10 sm:min-h-12 sm:max-w-[241px] sm:text-base"
                  variant="outline"
                  size="sm"
                >
                  Explore Opportunities
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
};
