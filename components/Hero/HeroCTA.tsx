import HeroCircles from './HeroCircles';
import { Badge } from '@/components/ui/badge';
import { SocialsMenu } from './SocialsMenu';

export default function HeroCTA() {
  return (
    <div className="relative z-40 mt-12 grid grid-cols-1 gap-6 sm:mt-8 lg:grid-cols-3 xl:mx-auto xl:max-w-[1440px]">
      <div className="grid grid-cols-1 items-center justify-center gap-4 px-2 sm:px-4 md:px-6 lg:gap-3 lg:pl-10 xl:pl-0">
        <div className="mx-auto w-full lg:mx-0">
          <div
            className="flex flex-nowrap items-center justify-center gap-2 sm:gap-3 lg:justify-start"
            aria-label="Roles"
          >
            <Badge className="border-white/15 bg-white/10 text-white/90 backdrop-blur-sm hover:bg-white/20 px-3 py-0.5 text-sm sm:text-base sm:px-3 sm:py-1">
              Software Engineer
            </Badge>
            <Badge className="border-white/15 bg-white/10 text-white/90 backdrop-blur-sm hover:bg-white/20 px-3 py-0.5 text-sm sm:text-base sm:px-3 sm:py-1">
              Lecturer
            </Badge>
            <Badge className="border-white/15 bg-white/10 text-white/90 backdrop-blur-sm hover:bg-white/20 px-3 py-0.5 text-sm sm:text-base sm:px-3 sm:py-1">
              Student
            </Badge>
          </div>
        </div>
        <div className="hero-gradient-text mt-4 px-1 text-center text-[10vw] font-bold leading-[11vw] sm:mt-0 sm:px-0 lg:text-left lg:text-[4vw] lg:leading-[5vw] xl:text-[4.5vw] xl:leading-tight">
          Hello, I am Nikolay Todorov
        </div>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-0 sm:grid-cols-2 sm:justify-center sm:gap-4 lg:justify-start">
          <a
            href="https://cal.com/nikolay-todorov"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full grid place-items-center rounded-full bg-white py-3 text-center text-sm text-black shadow-cta transition-all hover:bg-transparent hover:text-white hover:shadow-alt-cta sm:py-4 xl:px-6 xl:py-3 xl:text-lg"
          >
            Book a Call
          </a>
          <SocialsMenu />
        </div>
      </div>
      <HeroCircles />
    </div>
  );
}
