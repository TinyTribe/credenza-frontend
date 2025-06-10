'use client';
import Container from '@/components/container/Container';
import {
  OrganizationStepThree,
  OrganizationStepTwo,
  TalentStepOne,
  TalentStepThree,
  TalentStepTwo,
} from '@/components/ui/icons/icons';
import { AnimatePresence, motion } from 'framer-motion';
import localFont from 'next/font/local';
import { useState } from 'react';

const playfairDisplay = localFont({
  src: '../../fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf',
});

export interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface GetStartedSectionProps {
  defaultTab?: 'talent' | 'organizations';
  steps?: Step[];
  className?: string;
}

const defaultTalentSteps: Step[] = [
  {
    icon: <TalentStepOne />,
    title: 'Create Your Account',
    description:
      'Create an account and take a moment to personalize your profile.',
  },
  {
    icon: <TalentStepTwo />,
    title: 'Connect your Wallet',
    description:
      'Set up your decentralized identity with your Crypto wallet in seconds.',
  },
  {
    icon: <TalentStepThree />,
    title: 'Credentials Verification',
    description:
      'All credential verified, gets an NFT representing your ownership of that credential.',
  },
];

const defaultOrganizationSteps: Step[] = [
  {
    icon: <TalentStepTwo />,
    title: 'Connect your Wallet',
    description:
      'Add your experience, skills, and education with selective disclosure options.',
  },
  {
    icon: <OrganizationStepTwo />,
    title: 'Setup Organization',
    description:
      'Set up your decentralized identity with your StarkNet wallet in seconds.',
  },
  {
    icon: <OrganizationStepThree />,
    title: 'Verify Company Issues',
    description:
      'Collect NFT attestations from employers, schools, and community members.',
  },
];

export const HowToGetStarted = ({
  defaultTab = 'talent',
  steps,
  className = '',
}: GetStartedSectionProps) => {
  const [activeTab, setActiveTab] = useState<'talent' | 'organizations'>(
    defaultTab
  );

  const currentSteps =
    activeTab === 'talent'
      ? steps || defaultTalentSteps
      : defaultOrganizationSteps;

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const italicTextVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const stepsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.2,
        staggerChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const stepCardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.3,
      },
    },
    hover: {
      scale: 1.02,
      y: -2,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  };

  const iconVariants = {
    hidden: {
      opacity: 0,
      rotate: -10,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.1,
        ease: 'easeOut',
      },
    },
    hover: {
      rotate: 5,
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      x: -10,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.2,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Container alt >
    <div className={`flex flex-col gap-8 pt-[100px] lg:pt-[200px] ${className}`}>
      <motion.div
        className="relative mx-auto flex w-full max-w-[406px] rounded-full bg-[rgba(118,118,128,0.12)] p-[2px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        role="tablist"
        aria-label="Select user type"
      >
        <motion.div
          className="absolute bottom-[2px] top-[2px] w-[calc(50%-3px)] rounded-full border-[0.5px] border-[rgba(0,0,0,0.04)] bg-white shadow-[0px_3px_8px_0px_rgba(0,0,0,0.12),_0px_3px_1px_0px_rgba(0,0,0,0.04)]"
          animate={{
            x: activeTab === 'talent' ? '1px' : 'calc(100% + 1px)',
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
          aria-hidden="true"
        />

        <motion.div className="relative z-10 w-1/2">
          <button
            className={`min-h-[38px] w-full rounded-full border-transparent bg-transparent text-base font-medium leading-8 transition-all duration-200 md:text-[20px] ${
              activeTab === 'talent'
                ? 'text-[#004FEE]'
                : 'text-[#020717] hover:text-[#004FEE]'
            }`}
            onClick={() => setActiveTab('talent')}
            aria-selected={activeTab === 'talent'}
            aria-controls="tab-content"
            role="tab"
            tabIndex={0}
            id="talent-tab"
          >
            Talent
          </button>
        </motion.div>

        <motion.div className="relative z-10 w-1/2">
          <button
            className={`min-h-[38px] w-full rounded-full border-transparent bg-transparent text-base font-medium leading-8 transition-all duration-200 md:text-[20px] ${
              activeTab === 'organizations'
                ? 'text-[#004FEE]'
                : 'text-[#020717] hover:text-[#004FEE]'
            }`}
            onClick={() => setActiveTab('organizations')}
            aria-selected={activeTab === 'organizations'}
            aria-controls="tab-content"
            role="tab"
            tabIndex={0}
            id="organizations-tab"
          >
            Organizations
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="mx-auto flex max-w-[549px] flex-col gap-4 text-center md:gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.h1
          className="text-center text-[32px] font-bold leading-10 tracking-[-0.6px] text-[#020717] sm:text-5xl md:text-[64px] md:leading-[65px] md:tracking-[-1.28px]"
          variants={headingVariants}
        >
          How to{' '}
          <motion.span
            className={`italic text-[#014ADD] ${playfairDisplay.className}`}
            variants={italicTextVariants}
          >
            Get Started
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-sm font-normal leading-[21px] text-[#747C88] sm:text-base md:text-[20px] md:leading-[30px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          In just 3 easy steps, you&apos;ll be all set to dive into a world of
          endless possibilities!
        </motion.p>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="flex items-start gap-6 max-lg:flex-col lg:gap-4"
          variants={stepsContainerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          role="tabpanel"
          id="tab-content"
          aria-labelledby={`${activeTab}-tab`}
        >
          {currentSteps.map((step, index) => (
            <motion.div
              key={`${activeTab}-${index}`}
              className="flex min-h-[166px] w-full cursor-pointer flex-col gap-3 rounded-xl border border-[rgba(4,8,32,0.05)] bg-[#FAFAFB] p-5 transition-shadow duration-300"
              variants={stepCardVariants}
              whileHover="hover"
              role="article"
              tabIndex={0}
            >
              <div className="flex items-center gap-3">
                <motion.span variants={iconVariants}>
                  <div className="h-[40px] w-[40px] rounded-[33px] bg-[linear-gradient(145deg,_#014ADD,_#014ADD69,_#014ADD10,_#014ADD00,_#fff)] p-[1px] shadow-[inset_0px_1px_4px_rgba(0,0,0,0.12)]">
                    <div className="flex h-full w-full items-center justify-center rounded-[33px] bg-white p-2">
                      {step.icon}
                    </div>
                  </div>
                </motion.span>
                <motion.h3
                  variants={textVariants}
                  className="text-[20px] font-medium leading-[27px] text-[#020717]"
                >
                  {step.title}
                </motion.h3>
              </div>

              <motion.p
                variants={textVariants}
                className="text-base font-normal leading-6 tracking-[0.32px] text-[#747C88]"
              >
                {step.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
    </Container>
  );
};
