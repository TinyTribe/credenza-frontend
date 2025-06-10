'use client';
import localFont from 'next/font/local';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../components/ui/button';
import Image from 'next/image';
import Container from '@/components/container/Container';
import { award, briefcase } from '../../../public';

const playfairDisplay = localFont({
  src: '../../fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf',
});

const heroData = [
  {
    id: 1,
    name: 'Mariam Ishaq',
    role: 'Community Leader',
    icon: award,
    image: '/woman.svg',
    backgroundStyle: {
      borderRadius: '12px',
      background:
        'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.18) 100%), #FFCC84',
    },
    badgeText: 'Credentials Verified',
    badgeCount: '24',
  },
  {
    id: 2,
    name: 'Min Sung Lee',
    role: 'Human Resource',
    icon: briefcase,
    image: '/employer.svg',
    backgroundStyle: {
      borderRadius: '12px',
      background:
        'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.17) 100%), #84B5FF',
    },
    badgeText: 'Credentials Issued',
    badgeCount: '48',
  },
  {
    id: 3,
    name: 'Patrick Crossdale',
    role: 'Developer',
    icon: award,
    image: '/developer.svg',
    backgroundStyle: {
      borderRadius: '12px',
      background:
        'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.17) 100%), #84FF8C',
    },
    badgeText: 'Credentials Verified',
    badgeCount: '12',
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentData = heroData[currentSlide];

  return (
    <div className="relative min-h-screen w-full bg-[url('/bg-blur.png')] bg-cover bg-top">
      <Container alt>
        <div className="flex min-h-screen flex-col items-center justify-center py-8 lg:flex-row lg:items-center lg:justify-between lg:py-0">
          <div className="flex w-full max-w-lg flex-col items-start gap-6 text-center lg:w-[32.9375rem] lg:gap-8 lg:text-left">
            <div className="flex w-full flex-col items-start gap-4 lg:gap-6">
              <h1 className="w-full text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-[5rem] lg:leading-[5rem]">
                <span className="font-sans font-bold text-[#020717]">
                  Trust Starts with
                </span>
                <span className="font-bold text-[#020717]">
                  &nbsp;
                </span>
                <span
                  className={`font-['Playfair_Display',Helvetica] font-bold italic text-[#014add] ${playfairDisplay.className}`}
                >
                  Verifiable Credentials
                </span>
              </h1>

              <p className="w-full font-['Satoshi-Regular',Helvetica] text-base leading-6 text-[#212121] sm:text-lg sm:leading-7 lg:text-xl">
                Join our platform to publish and verify your job experience and
                credentials securely on the blockchain, showcasing your verified
                status to potential employers.
              </p>
            </div>

            <Button className="h-auto w-full rounded-[2.625rem] px-6 py-4 sm:w-auto sm:px-8 sm:py-5 [background:linear-gradient(176deg,rgba(0,79,238,1)_0%,rgba(0,52,155,1)_100%)]">
              <span className="font-['Satoshi-Bold',Helvetica] text-base font-bold leading-6 text-white sm:text-lg sm:leading-7">
                Join us for free
              </span>
            </Button>
          </div>

          <div className="relative mt-12 h-64 w-80 rounded-xl sm:h-80 sm:w-96 lg:mt-0 lg:h-[25.625rem] lg:w-[26.1875rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`bg-${currentData.id}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="absolute inset-0"
                style={currentData.backgroundStyle}
              />
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.img
                key={`img-${currentData.id}`}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="absolute bottom-0 left-2 w-auto max-w-[80%] h-full lg:h-max lg:max-w-[100%]  sm:left-3 lg:left-[0.6875rem]"
                alt={`${currentData.role} profile`}
                src={currentData.image}
              />
            </AnimatePresence>

            {/* Badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`badge-${currentData.id}`}
                initial={{ opacity: 0, y: 0, scale: 1 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0,
                  ease: [0.4, 0, 0.2, 1],
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                }}
              >
                <div
                  className={`flex items-center ${
                    currentData.id === 2
                      ? 'absolute bottom-3 left-3 inline-flex h-auto w-max items-center gap-2 rounded-[0.3125rem] border border-solid border-[#f4f4f440] bg-green-500 px-3 py-2 shadow-[4px_4px_14px_#00000040] backdrop-blur-[10.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10.5px)_brightness(100%)] sm:bottom-4 sm:left-4 sm:gap-2.5 sm:px-[0.875rem] sm:py-3 lg:bottom-5 lg:left-5'
                      : 'absolute bottom-3 right-3 inline-flex h-auto w-max items-center gap-2 rounded-[0.3125rem] border border-solid border-[#f4f4f440] bg-[#ffffff40] px-3 py-2 shadow-[4px_4px_14px_#00000040] backdrop-blur-[10.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10.5px)_brightness(100%)] sm:bottom-4 sm:right-4 sm:gap-2.5 sm:px-[0.875rem] sm:py-3 lg:bottom-5 lg:right-5'
                  }`}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5,
                      type: 'spring',
                      stiffness: 200,
                      damping: 14,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2 },
                    }}
                    className="flex-shrink-0"
                  >
                    <Image 
                      src={currentData.icon} 
                      alt="icon" 
                      className="h-4 w-4 sm:h-5 sm:w-5 lg:h-auto lg:w-auto"
                    />
                  </motion.div>

                  <div className="flex w-fit gap-1 text-sm text-white sm:gap-[7px] sm:text-base">
                    <motion.span
                      key={`count-${currentData.id}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.5,
                        type: 'spring',
                        stiffness: 150,
                      }}
                      className="font-['Satoshi-Bold',Helvetica] font-bold leading-5 sm:leading-6"
                    >
                      {currentData.badgeCount}
                    </motion.span>

                    <motion.span
                      key={`text-${currentData.id}`}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.6,
                        type: 'spring',
                        stiffness: 150,
                      }}
                      className="font-['Satoshi-Regular',Helvetica] leading-5 tracking-[0.05px] sm:leading-6"
                    >
                      {currentData.badgeText}
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`name-${currentData.id}`}
                initial={{ x: -20, opacity: 0, scale: 0.95 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: -20, opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  delay: 0.05,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="absolute -left-4 bottom-24 flex flex-col items-start rounded-[0.3125rem] border border-solid border-[#f4f4f440] bg-[#ffffffab] px-3 py-2 shadow-[4px_4px_14px_#00000026] backdrop-blur-[10.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10.5px)_brightness(100%)] sm:-left-6 sm:bottom-32 sm:px-[0.875rem] sm:py-3 lg:-left-10 lg:bottom-40"
              >
                <div className="w-fit whitespace-nowrap text-xs font-medium leading-4 tracking-[0.01em] text-[#2b2b2b] sm:text-sm sm:leading-[1.125rem]">
                  {currentData.name}
                </div>
                <div className="w-fit whitespace-nowrap text-xs font-normal leading-3 tracking-[0.01em] text-[#6a6464] sm:leading-4">
                  {currentData.role}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </div>
  );
};