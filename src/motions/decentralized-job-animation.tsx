import Image from 'next/image'

export const DecentralizedJobAnimation = () => {
  return (
    <div className='bg-[#84FF8C] h-full w-full rounded-[8px] md:rounded-2xl backdrop-blur-sm relative overflow-hidden'>
      <Image
        src={'/animation-image.svg'}
        alt='Animation Image'
        width={692}
        height={690}
        className='absolute inset-0 w-full h-full'
      />
    </div>
  )
}
