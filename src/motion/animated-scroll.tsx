'use client';
import Slider from 'react-slick';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { LogoIcon } from '@/components/ui/icons/icons';
const IconCarousel = () => {
  const [current, setCurrent] = useState(0);

  const icons = [0, 1, 2, 3, 4, 5];

  const settings = {
    infinite: true,
    slidesToShow: 5,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    arrows: false,
    centerPadding: '0px',
    beforeChange: (_: number, next: number) => setCurrent(next),
  };

  const mod = (n: number, m: number) => ((n % m) + m) % m;

  return (
    <div className="h-full w-full">
      <Slider {...settings}>
        {icons.map((_, i) => {
          const isActive = mod(i, icons.length) === mod(current, icons.length);
          return (
            <div key={i}>
              <div className="flex h-fit items-center justify-center overflow-hidden p-1">
                <motion.div
                  animate={
                    isActive
                      ? { scale: [1, 1.2, 1], y: [-2, 2, -2] }
                      : { scale: 1, y: 0 }
                  }
                  transition={
                    isActive
                      ? { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
                      : { duration: 0.3 }
                  }
                >
                  <LogoIcon
                    className="h-4 w-4 md:h-6 md:w-6"
                    fill={isActive ? 'white' : 'gray'}
                  />
                </motion.div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default IconCarousel;
