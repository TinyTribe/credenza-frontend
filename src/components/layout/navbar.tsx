import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <header className='flex justify-between mb-1 items-center px-16 py-4 rounded-[16px] border border-white/60 bg-white/70 backdrop-blur-[24.65px]'>
      <Image src='/logo.svg' alt='flash' width={186} height={17} />
    </header>
  )
}

export default Navbar
