import Image from 'next/image';
import Container from './container/Container';
import React from 'react'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-[1000] bg-white py-[32px]">
      <Container alt>
        <div className="w-full">
          <div className="flex items-center justify-between">
            <Image src="/logo.svg" alt="flash" width={186} height={17} className='w-[180px] h-[15px] md:w-[186px] md:h-[17px]' />
            <div className=" rounded-full bg-[linear-gradient(260.03deg,_#012877_14.16%,_#3B7AF9_31.93%,_#012877_48.6%,_#3B7AF9_64.15%,_#012877_79.33%,_#3B7AF9_90.81%)] p-0.5 shadow-lg">
              <button className="flex items-center justify-center rounded-full bg-white px-4 py-2 md:px-8 md:py-3 text-sm md:text-[18px] font-bold leading-none text-[#012877] transition duration-200 ease-in-out">
                Connect
              </button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
