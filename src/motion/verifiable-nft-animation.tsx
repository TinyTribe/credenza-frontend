'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function VerifiableNftAnimation() {
  const [pulses, setPulses] = useState([1, 2, 3]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulses((prev) => {
        const newId = Math.max(...prev) + 1;
        return [...prev.slice(-2), newId];
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[8px] bg-[#84B5FF] backdrop-blur-sm md:rounded-2xl">
      <Image
        src={'/wall.svg'}
        alt="Wall layout"
        width={906}
        height={311}
        className="absolute inset-0 h-full w-full sm:my-auto sm:h-3/4 sm:object-cover lg:h-full lg:object-contain"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        {pulses.map((id) => (
          <motion.div
            key={id}
            className="absolute"
            initial={{ opacity: 0.7, scale: 1 }}
            animate={{
              opacity: [0.7, 0],
              scale: [1, 2.2],
            }}
            transition={{
              duration: 3,
              ease: 'easeOut',
              times: [0, 1],
              repeat: 3,
            }}
          >
            <Image
              src={'/shield-pulse.svg'}
              alt="Shield pulse"
              width={308}
              height={362}
              className="max-h-[362px] max-w-[308px] max-md:h-[184px] max-md:w-[154px]"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <Image
            src={'/shield.svg'}
            alt="Shield Logo"
            width={135}
            height={160}
            className="h-[81px] w-[69px] md:h-[160px] md:w-[135px]"
          />
        </motion.div>
      </div>
    </div>
  );
}
