import Image from 'next/image'
import {
  CheckIcon,
  CheckMobileIcon,
  GoogleIcon,
  GoogleMobileIcon,
} from '../icons/icons'

export const OnChainVerifiedAnimation = () => {
  return (
    <div className='bg-[#FFCC84] h-full w-full rounded-[8px] md:rounded-2xl backdrop-blur-sm relative overflow-hidden'>
      <Image
        src={'/grid.svg'}
        alt='Grid Layout'
        width={692}
        height={690}
        className='absolute inset-0 w-full h-full'
      />

      <div className='flex flex-col items-center justify-center h-full gap-4 md:gap-8 relative z-10 '>
        <div className='flex gap-4 md:gap-8 items-center overflow-hidden'>
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className='min-w-[96px] md:min-w-[190px] h-[35px] md:h-[70px] rounded-[7px] md:rounded-[14px]  border border-[#FFE8C7] bg-[rgba(255,255,255,0.32)] backdrop-blur-[3.8px] '
            ></div>
          ))}
        </div>

        <div className='flex items-center justify-center gap-4 md:gap-8 overflow-hidden'>
          <div className='min-w-[96px] md:min-w-[190px] h-[35px] md:h-[70px] rounded-[7px] md:rounded-[14px]  border border-[#FFE8C7] bg-[rgba(255,255,255,0.32)] backdrop-blur-[3.8px] '></div>
          <div className='px-5 md:px-10 flex gap-[15px] md:gap-[31px] items-center justify-center rounded-[10px] md:rounded-[20px] border border-[#FFE8C7] bg-[rgba(255,255,255,0.32)] backdrop-blur-sm shadow-[5px_9px_20.9px_0px_rgba(0,0,0,0.05)] w-fit h-[62px] md:h-[124px]'>
            <div className='pt-2 md:pt-4'>
              <span className='hidden md:inline-block'>
                <GoogleIcon />
              </span>
              <span className='inline-block md:hidden'>
                <GoogleMobileIcon />
              </span>
            </div>
            <div>
              <span className='hidden md:inline-block'>
                <CheckIcon />
              </span>
              <span className='inline-block md:hidden'>
                <CheckMobileIcon />
              </span>
            </div>
          </div>
          <div className='min-w-[96px] md:min-w-[190px] h-[35px] md:h-[70px] rounded-[7px] md:rounded-[14px]  border border-[#FFE8C7] bg-[rgba(255,255,255,0.32)] backdrop-blur-[3.8px] '></div>
        </div>

        <div className='flex gap-4 md:gap-8 items-center overflow-hidden'>
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className='min-w-[96px] md:min-w-[190px] h-[35px] md:h-[70px] rounded-[7px] md:rounded-[14px]  border border-[#FFE8C7] bg-[rgba(255,255,255,0.32)] backdrop-blur-[3.8px] '
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
