'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function footer() {
  return (
    <section className='mt-[48px] max-lg:mt-[48px]'>
      
        <div className='image-container relative'>
            <Image src="/footer-image.png" 
          alt="footer" 
          width={1440} 
          height={457}
          className="w-full footer-image max-sm:hidden"/>

          <Image src="/mobile-image.png" alt='footer-image' width={876} height={457} className="max-sm:top-[-0.22px;] max-sm:left: [-293px] hidden max-sm:block mobile-image"/>

          <div className='absolute bottom-[99px] left-[128px] w-[737px] h-[260] gap-[99px] max-lg:w-[351px] max-lg:h-[391px] max-lg:top-[32.78px] max-sm:justify-between max-sm:left-[13%] max-lg:left-[7%]'>
            <h1 className='font-[700] text-[64px] font-[Satoshi] leading-[100%] tracking-[-2%] text-[#FFFFFF] max-lg:text-[32px] min-sm:w-[351px]'>Start Building a Secure Online Presence</h1>
            <button className='join-button mt-[32px] rounded-[12px] tracking-normal w-[190px] h-[53] gap-[10px] max-lg:mt-[77%]'>
              <p className='text-[18px] mx-[auto] font-[700] w-[fit-content] leading-[28px] text-[#FFFFFF]'>Join us for free</p>
            </button>
          </div>
        </div>
     
     <div className='mt-[130px]'> 
        <div className='max-w-[1184px]
         mt-[50px] mb-[100px] flex flex-col lg:flex-row justify-between 
         rounded-[16px] mx-auto max-lg:px-[30px]
          pb-[16px]' >

          <div className=''>
          <Image src="/logo.svg"
          alt='logo'
          width={186}
          height={16} 
          className='max-lg:mx-auto max-sm:mx-0'
          /> 
    
          <p className='max-w-[417px] max-lg:w-[670px] 
          max-sm:w-[100%] max-sm:text-[16px]
           max-sm:text-start max-lg:text-xl max-lg:mt-[50px] 
           max-lg:text-center max-lg:mx-auto h-[72] mt-[20px] 
           text-[16px] font-[400] leading-[24px] align-middle tracking-[2%]
            font-[Satoshi] text-[#64748B]'>
            In a decentralized world, trust is built on proof, not promises.
            Credenza makes your career portable, private, and cryptographically verified.
          </p>
           
            <div className='mt-[25px] max-lg:ml-[1220px] max-sm:ml-2'>
              <Link href="">
                <Image src="/Ful Logos.png" 
                alt='telegram'
                width={24}
                height={24}/>
              </Link>
            </div>
          </div>
       

          <div className='max-w-[550px] flex flex-col lg:flex-row leading-[24px] gap-[104px] justify-between max-lg:mx-auto max-lg:mt-[60px]'>
            <ul className='text-[16px] leading-[37px] gap-[16px] max-lg:text-center align-middle tracking-[2%] font-[500] font-[Satoshi] text-[#42454A]'>
              <Link href="#"><li>How It Works</li></Link>
              <Link href="#"><li>Job Marketplace</li></Link>
              <Link href="$"><li>About Us</li></Link>
              <Link href="#"> <li>Blog</li></Link> 
            </ul>

            <ul className='text-[16px] leading-[35px] max-lg:text-center gap-[16px] align-middle tracking-[2%] font-[500] font-[Satoshi] text-[#42454A]'>
              <Link href="#"><li>Help Center</li></Link>
              <Link href="#"><li>FAQ</li></Link>
              <Link href="#"><li>Contact Us</li></Link>
            </ul>

            <ul className='text-[16px] leading-[35px] max-lg:text-center gap-[16px] align-middle tracking-[2%] font-[500] font-[Satoshi] text-[#42454A]'>
              <Link href="#"><li>Terms of Service</li></Link>
              <Link href="#"><li>Privacy Policy</li></Link>
            </ul>
          </div>
        </div>  
        
        <div className='w-full max-w-[285px] max-h-[24px] mx-auto my-[14px] max-lg:my-[30px]'>
          <p className='text-[#42454A] font-[500] text-[16px] tracking-[2%] align-middle font-[Satoshi]'>© 2025 Credenza. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
