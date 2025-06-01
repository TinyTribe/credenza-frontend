import Image from 'next/image';

export const DecentralizedJobAnimation = () => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[8px] bg-[#84FF8C] backdrop-blur-sm md:rounded-2xl">
      <Image
        src={'/animation-image.svg'}
        alt="Animation Image"
        width={692}
        height={690}
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
};
