'use client';

import { motion } from 'framer-motion';
import localFont from 'next/font/local';
import Image from 'next/image';

const playfairDisplay = localFont({
  src: '../../fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf',
});

const features = [
  {
    icon: '/feature-1',
    feature: 'Talent Showcase',
  },
  {
    icon: '/feature-2',
    feature: 'Verified Credentials',
  },
  {
    icon: '/feature-3',
    feature: 'Decentralized Hiring',
  },
];

export const MultiPanelSectionHeader = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

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

  const featuresContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const featureCardVariants = {
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
    <motion.div
      className="mx-auto flex w-full max-w-[924px] flex-col gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <motion.h1
        className="text-center text-[30px] font-bold leading-10 tracking-[-0.6px] text-[#020717] md:text-[64px] md:leading-[65px] md:tracking-[-1.28px]"
        variants={headingVariants}
      >
        Verified Digital Credentials <br />
        <motion.span
          className={`italic text-[#014ADD] ${playfairDisplay.className}`}
          variants={italicTextVariants}
        >
          Revolutionize the Talent Market
        </motion.span>
      </motion.h1>

      <motion.div
        className="flex items-center gap-[30px] max-md:flex-col md:gap-3"
        variants={featuresContainerVariants}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex w-full cursor-pointer items-center gap-3 rounded-xl border border-[rgba(4,8,32,0.05)] bg-[#FAFAFB] p-5 text-[20px] font-medium leading-[27px] text-[#020717] max-md:flex-col"
            variants={featureCardVariants}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          >
            <motion.span variants={iconVariants}>
              <Image
                src={`${feature.icon}.svg`}
                alt={feature.feature}
                width={40}
                height={40}
                priority
              />
            </motion.span>
            <motion.span variants={textVariants}>{feature.feature}</motion.span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
