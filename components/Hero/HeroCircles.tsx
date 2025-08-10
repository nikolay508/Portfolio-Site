import HeroCircleSVGs from '../../public/images/svg/HeroCircles.svg';
import Image from 'next/image';

export default function HeroCircles() {
  return (
    <div className="absolute right-0 top-[-14vw] z-[-1] col-span-2 opacity-60 sm:top-[-10vw] md:top-[-6vw] lg:static lg:z-0 lg:flex lg:items-center lg:justify-end lg:opacity-100">
      <div className="relative">
        <Image src={HeroCircleSVGs} alt="Decorative circles" width={520} height={520} className="hidden sm:block md:w-[560px] md:h-[560px] lg:w-[600px] lg:h-[600px]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-52 w-52 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-96 lg:w-96 xl:h-[26rem] xl:w-[26rem]">
            <Image 
              src="/images/jpeg/pfp.jpg" 
              alt="Profile Picture" 
              width={416} 
              height={416}
              className="h-full w-full object-cover select-none"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
