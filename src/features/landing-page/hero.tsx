'use client';

import { Button } from '@/components/ui/button';
import IconCarousel from '@/motion/animated-scroll';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import {
  containerVariants,
  floatingAnimation,
  itemVariants,
  rotatingFloatingAnimation,
} from '@/motion/variants';

export function HeroSection() {
  return (
    <section className="w-full rounded-2xl bg-white px-4 py-12 md:px-8 md:py-20 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between lg:flex-row">
        <motion.div
          className="mb-12 w-full pr-0 max-md:mb-0 md:mb-0 md:pr-8 lg:w-[45%] xl:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="mb-6 mt-4 text-3xl font-bold leading-tight text-[#020717] sm:text-5xl md:text-6xl lg:mt-0 lg:text-7xl"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            Own Your Professional Identity
          </motion.h1>
          <motion.p
            className="mb-8 max-w-xl text-lg text-[#747c88] md:text-xl"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            Join our decentralized resume platform to showcase your skills,
            connect with employers, and get verified credentials. Enjoy a
            secure, intermediary-free experience!
          </motion.p>
          <motion.div
            className="flex gap-2 max-[375px]:flex-col md:gap-4"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <Button
              asChild
              size="lg"
              className="bg-[#004fee] px-8 text-white hover:bg-[#0040d0]"
            >
              <Link href="#">Join us for free</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#cfcfcf] px-8 text-[#1f1f1f]"
            >
              <Link href="#">Learn more</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto aspect-square min-h-[310px] w-full max-w-[533px] sm:min-h-[400px] lg:w-1/2 xl:min-h-[520px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="absolute right-[15%] top-[10%] h-4 w-4 rounded-full bg-[#84b5ff]"
            animate={floatingAnimation}
          />
          <motion.div
            className="absolute bottom-[5%] right-[5%] h-6 w-6 rounded-full bg-[#84b5ff]"
            animate={floatingAnimation}
          />
          <motion.div
            animate={rotatingFloatingAnimation}
            className="absolute left-[10%] top-[40%] h-6 w-6 rotate-45 transform bg-[#ffcc84]"
            style={{ borderRadius: '30%' }}
          />

          {/* Green block */}
          <motion.div
            className="absolute left-[16%] top-[6%] w-[41%]"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute -right-4 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#84FF8C] p-2.5"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            >
              <Image src="/sparkles.svg" alt="spark" width={30} height={30} />
            </motion.div>
            <Image
              src="/green-bg.png"
              alt="Person"
              width={230}
              height={285}
              className="h-full w-full object-contain"
            />
          </motion.div>

          {/* Orange block */}
          <motion.div
            className="absolute right-0 top-[16.8%] w-[40%]"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/orange-bg.svg"
              alt="Person"
              width={203}
              height={242}
              className="h-full w-full object-contain"
            />
            <motion.div
              className="absolute -bottom-[40%] left-[10%] flex h-[30%] w-[20%] items-center justify-center overflow-hidden rounded-[13px] bg-[#FFCC84]"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{
                  filter: ['brightness(1)', 'brightness(1.3)', 'brightness(1)'],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="flex h-full w-full items-center justify-center"
              >
                <Image src="/flash.svg" alt="flash" width={38} height={40} />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Blue block */}
          <motion.div
            className="absolute bottom-0 left-0 w-[60%]"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="rounded-4xl absolute -left-3 -top-[8%] flex h-14 w-14 items-center justify-center overflow-hidden bg-[#84B5FF] p-1 md:p-4"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="flex h-full w-full items-center justify-center"
              >
                <Image src="/globe.svg" alt="globe" width={54} height={54} />
              </motion.div>
            </motion.div>
            <Image
              src="/blue-bg.png"
              alt="Person using laptop"
              width={314}
              height={217}
              className="h-full w-full object-contain"
            />
          </motion.div>

          {/* Icon Carousel */}
          <motion.div
            className="absolute right-[35%] top-[53%] z-10 h-[30px] w-[25%] rounded-full bg-[#004FEE] p-1 shadow-md sm:h-[40px] md:top-[54%]"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <IconCarousel />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
