import HeroCircleSVGs from '../../public/images/svg/HeroCircles.svg';
import Image from 'next/image';

export default function HeroCircles() {
  return (
    <div className="relative z-0 mt-8 flex justify-center sm:absolute sm:right-0 sm:top-[-10vw] sm:z-[-1] sm:mt-0 sm:opacity-60 md:top-[-6vw] lg:static lg:z-0 lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:opacity-100">
      <div className="relative">
        <Image src={HeroCircleSVGs} alt="Decorative circles" width={520} height={520} className="hidden sm:block md:w-[560px] md:h-[560px] lg:w-[600px] lg:h-[600px]" />
        <div className="relative mx-auto sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:mx-0">
          <div className="h-52 w-52 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-96 lg:w-96 xl:h-[26rem] xl:w-[26rem] mx-auto sm:mx-0">
            <Image 
              src="/images/pfp.jpg" 
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
