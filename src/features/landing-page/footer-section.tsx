'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FooterMenu } from './footer-menu';



export default function footer() {
  return (
    <section className='mt-12 max-lg:mt-12 border-2 max-sm:gap-[5rem]'>
      
        <div className='image-container relative w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] 2xl:h-[36rem]'>
          <Image src="/footer-image.png" 
            alt="footer" 
              width={1440} 
               height={457}
                className="object-cover  h-auto max-sm:hidden lg:max-h-[456px] footer-image"
                  sizes="(max-width: 40rem) 100vw, 
                      (max-width: 48rem) 100vw, 
                      (max-width: 64rem) 100vw,
                      100vw"
                       priority
          />

          <Image src="/mobile-image.png" alt='footer-image' 
             width={876} 
             height={457} 
             className="object-fill object-center hidden max-sm:block max-sm:top-[-0.01375rem] max-sm:left-[-18.3125rem] mobile-image"
          />

          <div className='absolute top-[6.1975rem] left-32 w-[46.06rem] h-[16.25rem] gap-[2.1875rem] max-sm:w-[21.94rem] max-xl:w-[50%] max-xl:top-[3rem] max-sm:h-[24.44rem] max-sm:top-8 max-sm:justify-between flex flex-col max-sm:left-[13%] max-lg:left-[7%]'>
            <h1 className='font-bold text-[4rem]  max-xl:text-5xl max-md:text-4xl max-sm:text-[2rem]  font-satoshi leading-[5.5rem] max-xl:leading-1 tracking-[-2%] text-[#FFFFFF] min-sm:w-[21.9375rem] h-[10.76rem]'>Start Building a Secure Online Presence</h1>
            <button className='join-button rounded-[0.75rem] tracking-normal w-48 h-[3.3125rem] gap-2.5'>
              <p className='text-lg mx-auto font-bold w-full leading-7 text-[#FFFFFF]'>Join us for free</p>
            </button>
          </div>
        </div>
     
     <div className='mt-[8.125rem] max-sm:mt-[20rem] max-md:mt-[12rem] max-xl:mt-0'> 
        <div className='max-w-[74rem] max-sm:w-[80%] mt-[3.125rem] mb-[6.25rem] flex flex-col xl:flex-row justify-between rounded-4 mx-auto max-lg:px-7.5 pb-4'>
          <div className='w-[34.345rem] max-sm:w-[21.4375rem] max-sm:h-[11rem] mx-auto gap-4'>
            <Image src="/logo.svg" alt='logo' width={186} height={16} className='max-xl:mx-auto max-sm:mx-0'/> 
              <p className='w-[26.0625rem]  max-xl:w-full max-sm:w-full max-sm:text-base max-sm:text-start max-xl:text-xl max-xl:mt-[3.125rem] max-sm:mt-5 max-xl:text-center max-xl:mx-auto h-18 mt-5  
                  text-base font-normal leading-6 align-middle tracking-[2%] font-satoshi text-[#64748B]'>
                     In a decentralized world, trust is built on proof, not promises. Credenza makes your career portable, private, and cryptographically verified.
              </p>
               <div className='mt-6 ml-0'>
                  <Link href="/"> <Image src="/Ful Logos.png" alt='telegram' width={24} height={24}/> </Link>
               </div>
          </div>
             <FooterMenu />   
        </div> 
        
        <div className='w-[17.8125rem] max-h-6 mx-auto my-3.5 max-lg:my-7.5'>
          <p className='text-[#42454A] font-medium text-[1rem] tracking-[2%] font-satoshi'>© 2025 Credenza. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
