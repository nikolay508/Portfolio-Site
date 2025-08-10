import HeroCircles from './HeroCircles';

export default function HeroCTA() {
  return (
    <div className="relative z-40 mt-6 grid grid-cols-1 gap-6 sm:mt-8 lg:grid-cols-3 xl:mx-auto xl:max-w-[1440px]">
      <div className="grid grid-cols-1 items-center justify-center gap-4 px-2 sm:px-4 md:px-6 lg:gap-3 lg:pl-10 xl:pl-0">
        <div className="mx-auto h-10 w-full max-w-sm rounded-full bg-blue-800 sm:max-w-md lg:mx-0 lg:h-12 xl:h-14 xl:w-96">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-b from-white/40 to-[#2F2D2D]/20 px-3 py-0 text-xs text-white/80 sm:text-sm lg:px-4 lg:py-1 lg:text-base xl:px-6 xl:py-2 xl:text-lg">
          Software Engineer | Lecturer | Student
          </div>
        </div>
        <div className="hero-gradient-text px-1 text-center text-[10vw] font-bold leading-[11vw] sm:px-0 lg:text-left lg:text-[4vw] lg:leading-[5vw] xl:text-[4.5vw] xl:leading-tight">
          Hello, I am Nikolay Todorov
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:justify-center sm:gap-4 lg:justify-start">
          <a
            href="https://cal.com/0xaquawolf/discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="grid place-items-center rounded-full bg-white py-3 text-center text-sm text-black shadow-cta transition-all hover:bg-transparent hover:text-white hover:shadow-alt-cta sm:py-4 xl:px-6 xl:py-3 xl:text-lg"
          >
            Book a Call
          </a>
          <a
            href="https://github.com/nikolay508"
            target="_blank"
            rel="noopener noreferrer"
            className="grid place-items-center rounded-full py-3 text-center text-sm text-white shadow-alt-cta transition-all hover:bg-white hover:text-black hover:shadow-cta sm:py-4 xl:px-8 xl:py-3 xl:text-lg"
          >
            My GitHub
          </a>
        </div>
      </div>
      <HeroCircles />
    </div>
  );
}
