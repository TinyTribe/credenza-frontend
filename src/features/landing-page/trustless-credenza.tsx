'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { TypewriterText } from '@/components/typewriter-text';
export const TrustlessCredenza = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.8,
      },
    },
  };

  const contentContainerVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delayChildren: 0.5,
      },
    },
  };

  const notificationVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 1.2,
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="flex w-full gap-[13px] rounded-2xl bg-white max-lg:flex-col-reverse lg:pr-6 xl:gap-[73px] xl:pl-6 2xl:pl-16"
      whileInView={{ boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.08)' }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        variants={contentContainerVariants}
        className={`flex w-full max-w-full flex-col justify-center gap-3 px-4 pb-7.5 md:gap-6 md:p-6 lg:max-w-[608px] xl:py-[50px]`}
      >
        <div className="flex flex-col gap-3">
          <motion.h1
            variants={itemVariants}
            className="text-2xl font-bold text-[#020717] max-md:leading-[36px] md:text-4xl lg:text-[64px] xl:tracking-[-1.28px]"
          >
            Trustless Credenza Ecosystem
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-sm leading-6 font-normal text-[#747C88] max-md:tracking-[0.28px] md:text-xl md:leading-7.5"
          >
            Credenza creates a direct connection between credential issuers and
            talents, removing intermediaries and ensuring authenticity through
            cryptographic verification.
          </motion.p>
        </div>

        <motion.ul
          className="flex flex-col gap-3 md:gap-6"
          variants={containerVariants}
        >
          <motion.li
            variants={listItemVariants}
            className="flex items-center gap-3 text-sm leading-6 font-medium text-[#3E4146] max-sm:tracking-[0.28px] md:text-[20px] md:leading-7"
            custom={0}
          >
            <motion.span
              className="h-1.5 w-1.5 rounded-[2px] bg-[#B0B0B0]"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.8, duration: 0.3 }}
            ></motion.span>
            Verified talent pool
          </motion.li>
          <motion.li
            variants={listItemVariants}
            className="flex items-center gap-3 text-sm leading-6 font-medium text-[#3E4146] max-sm:tracking-[0.28px] md:text-[20px] md:leading-7"
            custom={1}
          >
            <motion.span
              className="h-1.5 w-1.5 rounded-[2px] bg-[#B0B0B0]"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 1.0, duration: 0.3 }}
            ></motion.span>
            Build your personal presences
          </motion.li>
          <motion.li
            variants={listItemVariants}
            className="flex items-center gap-3 text-sm leading-6 font-medium text-[#3E4146] max-sm:tracking-[0.28px] md:text-[20px] md:leading-7"
            custom={2}
          >
            <motion.span
              className="h-1.5 w-1.5 rounded-[2px] bg-[#B0B0B0]"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 1.2, duration: 0.3 }}
            ></motion.span>
            Find dream job
          </motion.li>
        </motion.ul>
      </motion.div>

      <motion.div
        variants={imageContainerVariants}
        className="relative h-[265px] w-full overflow-hidden rounded-[7px] md:h-[400px] md:rounded-[12px] lg:my-auto lg:h-full lg:py-6"
      >
        <Image
          src="/job.svg"
          alt="Job offer"
          width={623}
          height={471}
          className="h-[265px] w-full rounded-t-2xl rounded-b-[6.7px] object-cover md:h-[400px] md:rounded-[12px] lg:h-full"
        />
        <motion.div
          variants={notificationVariants}
          className="absolute top-1/2 left-[10%] inline-flex -translate-y-1/2 items-center justify-center gap-2 rounded-[2.8px] border border-white/25 bg-white/25 px-[7.8px] py-[6.7px] backdrop-blur-[1.4px] md:gap-[10px] md:rounded-[5px] md:border-white/25 md:px-[14px] md:py-[12px] md:backdrop-blur-[2.5px]"
          whileHover={{
            scale: 1.05,
          }}
        >
          <Image
            src="/notification-bing.svg"
            alt="Notification Icon"
            width={24}
            height={24}
            className="h-3.5 w-3.5 sm:h-6 sm:w-6"
          />
          <div className="text-[9px] leading-[13.5px] font-medium tracking-[0.18px] text-white sm:text-base sm:leading-[24px] sm:tracking-[0.32px]">
            <TypewriterText text="You've got a job offer" />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
