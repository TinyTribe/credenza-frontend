'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { CheckIcon, CheckMobileIcon } from '../components/ui/icons/icons';

export const OnChainVerifiedAnimation = () => {
  const companies = ['Google', 'Microsoft', 'Starknet', 'Amazon', 'Meta'];
  const [currentCompanyIndex, setCurrentCompanyIndex] = useState(0);

  const topCarouselRef = useRef<HTMLDivElement | null>(null);
  const bottomCarouselRef = useRef<HTMLDivElement | null>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCompanyIndex((prevIndex) => (prevIndex + 1) % companies.length);
    }, 1000);

    if (topCarouselRef.current && bottomCarouselRef.current) {
      setCarouselWidth(
        topCarouselRef.current.scrollWidth - topCarouselRef.current.offsetWidth
      );
    }

    const handleResize = () => {
      if (topCarouselRef.current) {
        setCarouselWidth(
          topCarouselRef.current.scrollWidth -
            topCarouselRef.current.offsetWidth
        );
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [companies.length]);

  const cardItems = [1, 2, 3, 4, 1, 2, 3, 4];

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[8px] bg-[#FFCC84] backdrop-blur-sm md:rounded-2xl">
      <Image
        src={'/grid.svg'}
        alt="Grid Layout"
        width={692}
        height={690}
        className="absolute inset-0 h-full w-full"
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 md:gap-8">
        <motion.div
          ref={topCarouselRef}
          className="relative w-full overflow-hidden"
        >
          <motion.div
            className="flex"
            initial={{ x: 0 }}
            animate={{
              x: [-carouselWidth, 0],
              transition: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
          >
            {cardItems.map((_, index) => (
              <motion.div
                key={index}
                className="min-w-[96px] px-1 md:min-w-[190px] md:px-2"
              >
                <div className="h-[35px] rounded-[7px] border border-[#FFE8C7] bg-[rgba(255,255,255,0.32)] backdrop-blur-[3.8px] md:h-[70px] md:rounded-[14px]"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="flex items-center justify-center gap-4 overflow-hidden md:gap-8">
          <div className="h-[35px] min-w-[96px] rounded-[7px] border border-[#FFE8C7] bg-[rgba(255,255,255,0.32)] backdrop-blur-[3.8px] md:h-[70px] md:min-w-[190px] md:rounded-[14px]"></div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
            className="flex h-[62px] w-[180px] items-center justify-center gap-2 rounded-[10px] border border-[#FFE8C7] bg-[rgba(255,255,255,0.32)] px-5 shadow-[5px_9px_20.9px_0px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-[rgba(255,255,255,0.5)] hover:shadow-lg md:h-[124px] md:w-[360px] md:gap-[15px] md:rounded-[20px] md:px-10"
          >
            <div className="flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCompanyIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex w-[100px] items-center justify-center text-center md:w-[200px]"
                >
                  <div className="hidden md:block">
                    <span className="text-5xl font-bold tracking-tight text-white">
                      {companies[currentCompanyIndex]}
                    </span>
                  </div>

                  <div className="block md:hidden">
                    <span className="text-2xl font-bold tracking-tight text-white">
                      {companies[currentCompanyIndex]}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className="flex items-center"
            >
              <span className="hidden md:inline-block">
                <CheckIcon />
              </span>
              <span className="inline-block md:hidden">
                <CheckMobileIcon />
              </span>
            </motion.div>
          </motion.div>

          <div className="h-[35px] min-w-[96px] rounded-[7px] border border-[#FFE8C7] bg-[rgba(255,255,255,0.32)] backdrop-blur-[3.8px] md:h-[70px] md:min-w-[190px] md:rounded-[14px]"></div>
        </div>

        <motion.div
          ref={bottomCarouselRef}
          className="relative w-full overflow-hidden"
        >
          <motion.div
            className="flex"
            initial={{ x: 0 }}
            animate={{
              x: [0, -carouselWidth],
              transition: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
          >
            {cardItems.map((_, index) => (
              <motion.div
                key={index}
                className="min-w-[96px] px-1 md:min-w-[190px] md:px-2"
              >
                <div className="h-[35px] rounded-[7px] border border-[#FFE8C7] bg-[rgba(255,255,255,0.32)] backdrop-blur-[3.8px] md:h-[70px] md:rounded-[14px]"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
