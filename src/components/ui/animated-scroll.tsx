'use client'
import Slider from 'react-slick'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { LogoIcon } from '../icon'
const IconCarousel = () => {
  const [current, setCurrent] = useState(1)

  const icons = [0, 1, 2, 3, 4, 5]

  const settings = {
    infinite: true,
    slidesToShow: 5,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    arrows: false,
    centerPadding: '0px',
    beforeChange: (_: number, next: number) => setCurrent(next),
  }

  const mod = (n: number, m: number) => ((n % m) + m) % m

  return (
    <div className='w-full h-full'>
      <Slider {...settings}>
        {icons.map((_, i) => {
          const isActive = mod(i, icons.length) === mod(current, icons.length)
          return (
            <div key={i}>
              <div className='flex justify-center items-center p-1 h-fit overflow-hidden'>
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
                    className='w-6 h-6'
                    fill={isActive ? 'white' : 'gray'}
                  />
                </motion.div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default IconCarousel
