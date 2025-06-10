// 'use client';
// import Container from '@/components/container/Container';
// import Image from 'next/image';
// import Link from 'next/link';
// import { FooterMenu } from './footer-menu';

// export default function footer() {
//   return (
//     <section className="pt-[100px] max-sm:gap-[5rem] lg:pt-[200px]">
//       <div className="image-container relative h-64 w-full sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] 2xl:h-[36rem]">
//         <Image
//           src="/footer-image.png"
//           alt="footer"
//           width={100}
//           height={100}
//           className="footer-image object-cover max-sm:hidden lg:max-h-[456px] w-full h-full"
//           sizes="(max-width: 40rem) 100vw, 
//                       (max-width: 48rem) 100vw, 
//                       (max-width: 64rem) 100vw,
//                       100vw"
//           priority
//         />

//         <Image
//           src="/mobile-image.png"
//           alt="footer-image"
//           width={876}
//           height={457}
//           className="mobile-image hidden object-fill object-center max-sm:left-[-18.3125rem] max-sm:top-[-0.01375rem] max-sm:block"
//         />

//         <Container alt>
//           <div className="absolute top-[6.1975rem] flex h-[16.25rem] w-[46.06rem] flex-col gap-[2.1875rem] max-xl:top-[3rem] max-xl:w-[50%] max-lg:left-[7%] max-sm:left-[13%] max-sm:top-8 max-sm:h-[24.44rem] max-sm:w-[21.94rem] max-sm:justify-between">
//             <h1 className="font-satoshi max-xl:leading-1 min-sm:w-[21.9375rem] h-[10.76rem] text-[4rem] font-bold leading-[5.5rem] tracking-[-2%] text-[#FFFFFF] max-xl:text-5xl max-md:text-4xl max-sm:text-[2rem]">
//               Start Building a Secure Online Presence
//             </h1>
//             <button className="join-button h-[3.3125rem] w-48 gap-2.5 rounded-[0.75rem] tracking-normal">
//               <p className="mx-auto w-full text-lg font-bold leading-7 text-[#FFFFFF]">
//                 Join us for free
//               </p>
//             </button>
//           </div>
//         </Container>
//       </div>

//       <div className="mt-[8.125rem] max-xl:mt-0 max-md:mt-[12rem] max-sm:mt-[20rem]">
//         <div className="rounded-4 max-lg:px-7.5 mx-auto mb-[6.25rem] mt-[3.125rem] flex max-w-[74rem] flex-col justify-between pb-4 max-sm:w-[80%] xl:flex-row">
//           <div className="mx-auto w-[34.345rem] gap-4 max-sm:h-[11rem] max-sm:w-[21.4375rem]">
//             <Image
//               src="/logo.svg"
//               alt="logo"
//               width={186}
//               height={16}
//               className="max-xl:mx-auto max-sm:mx-0"
//             />
//             <p className="h-18 font-satoshi mt-5 w-[26.0625rem] align-middle text-base font-normal leading-6 tracking-[2%] text-[#64748B] max-xl:mx-auto max-xl:mt-[3.125rem] max-xl:w-full max-xl:text-center max-xl:text-xl max-sm:mt-5 max-sm:w-full max-sm:text-start max-sm:text-base">
//               In a decentralized world, trust is built on proof, not promises.
//               Credenza makes your career portable, private, and
//               cryptographically verified.
//             </p>
//             <div className="ml-0 mt-6">
//               <Link href="/">
//                 {' '}
//                 <Image
//                   src="/Ful Logos.png"
//                   alt="telegram"
//                   width={24}
//                   height={24}
//                 />{' '}
//               </Link>
//             </div>
//           </div>
//           <FooterMenu />
//         </div>

//         <div className="max-lg:my-7.5 mx-auto my-3.5 max-h-6 w-[17.8125rem]">
//           <p className="font-satoshi text-[1rem] font-medium tracking-[2%] text-[#42454A]">
//             © 2025 Credenza. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
