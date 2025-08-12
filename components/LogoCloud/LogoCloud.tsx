import Image from 'next/image';
import TailwindCSSLogo from '@/public/images/svg/Tailwind-Logo.svg';
import ReactLogo from '@/public/images/svg/react-logo.svg';
import TypescriptLogo from '@/public/images/svg/TS-Logo.svg';
import NextJsLogo from '@/public/images/svg/nextjs.svg';
import JavascriptLogo from '@/public/images/svg/javascript.svg';
import NodejsLogo from '@/public/images/svg/nodejs.svg';
import ExpressLogo from '@/public/images/svg/express.svg';
import MongoDbLogo from '@/public/images/svg/mongodb.svg';
import PostgresqlLogo from '@/public/images/svg/postgresql.svg';
import SupabaseLogo from '@/public/images/svg/supabase.svg';
import DockerLogo from '@/public/images/svg/docker.svg';
import JestLogo from '@/public/images/svg/jest.svg';

export const logos = [
  // From screenshot (now with real icons)
  { src: JavascriptLogo, alt: 'JavaScript Logo', name: 'JavaScript', width: 34, height: 34 },
  { src: TypescriptLogo, alt: 'TypeScript Logo', name: 'TypeScript', width: 34, height: 34 },
  { src: TailwindCSSLogo, alt: 'Tailwind CSS Logo', name: 'Tailwind CSS', width: 34, height: 34 },
  { src: ReactLogo, alt: 'React Logo', name: 'React', width: 34, height: 34 },
  { src: NextJsLogo, alt: 'Next.js Logo', name: 'Next.js', width: 34, height: 34 },
  { src: NodejsLogo, alt: 'Node.js Logo', name: 'Node.js', width: 34, height: 34 },
  { src: ExpressLogo, alt: 'Express Logo', name: 'Express', width: 34, height: 34 },
  { src: MongoDbLogo, alt: 'MongoDB Logo', name: 'MongoDB', width: 34, height: 34 },
  { src: PostgresqlLogo, alt: 'PostgreSQL Logo', name: 'PostgreSQL', width: 34, height: 34 },
  { src: SupabaseLogo, alt: 'Supabase Logo', name: 'Supabase', width: 34, height: 34 },
  { src: JestLogo, alt: 'Jest Logo', name: 'Jest', width: 34, height: 34 },
  { src: DockerLogo, alt: 'Docker Logo', name: 'Docker', width: 34, height: 34 },
];

interface LogoProps {
  src?: string | string[];
  alt?: string | string[];
  name: string;
  width?: number | number[];
  height?: number | number[];
}

const Logo = ({ src, alt, name, width = 30, height = 30 }: LogoProps) => (
  <div className="flex items-center gap-2 self-center lg:items-center lg:gap-2">
    {src ? (
      Array.isArray(src) ? (
        <div className="flex items-center gap-2">
          <div className="flex w-[60px] items-center justify-center">
            <Image
              src={src[0]}
              alt={(Array.isArray(alt) ? alt[0] : alt) || name}
              width={Array.isArray(width) ? width[0] : width}
              height={Array.isArray(height) ? height[0] : height}
              className="scale-150 invert [&>path]:fill-white"
            />
          </div>
          <Image
            src={src[1]}
            alt={(Array.isArray(alt) ? alt[1] : alt) || name}
            width={Array.isArray(width) ? width[1] : width}
            height={Array.isArray(height) ? height[1] : height}
          />
        </div>
      ) : (
        <div className="flex w-[60px] items-center justify-center">
          <Image
            src={src}
            alt={(alt as string) || name}
            width={width as number}
            height={height as number}
          />
        </div>
      )
    ) : (
      <div className="flex w-[60px] items-center justify-center">
        <div className="h-6 w-10 rounded bg-white/10" />
      </div>
    )}
    {name && <div className="text-sm font-semibold lg:text-base">{name}</div>}
  </div>
);

export const LogoList = ({ startIndex = 0 }: { startIndex?: number }) => (
  <div className="flex items-center">
    {Array.from({ length: 2 }, (_, i) =>
      logos.map((logo, index) => (
        <div
          key={`logo-${startIndex}-${i}-${index}`}
          className="inline-flex items-center px-6"
        >
          <Logo {...logo} />
        </div>
      )),
    ).flat()}
  </div>
);

export default function LogoCloud() {
  return (
    <div className="relative z-40 mx-auto -mb-12 mt-16 flex flex-col gap-3 text-white sm:-mb-16 sm:mt-20 md:-mb-20 lg:mb-0 lg:mt-24 lg:max-w-[1080px] lg:gap-6">
      <h2 className="mx-auto mb-3 w-full px-6 text-center text-sm sm:px-8 lg:mb-0 lg:max-w-none lg:px-0 lg:text-xl">
        Leveraging state-of-the-art technologies
      </h2>

      <div
        className="relative flex w-full overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 15%, black 85%, transparent 100%)',
        }}
      >
        <div className="flex animate-marquee-scroll whitespace-nowrap py-4 sm:py-6">
          {Array.from({ length: 2 }, (_, i) => (
            <LogoList key={`list-1-${i}`} startIndex={i} />
          ))}
        </div>
        <div
          className="flex animate-marquee-scroll whitespace-nowrap py-4 sm:py-6"
          style={{ animationDelay: '-20s' }}
          aria-hidden="true"
        >
          {Array.from({ length: 2 }, (_, i) => (
            <LogoList key={`list-2-${i}`} startIndex={i + 2} />
          ))}
        </div>
      </div>

      <p className="mx-auto w-full max-w-xs text-center text-xs opacity-70 sm:max-w-[250px] sm:text-sm lg:max-w-none">
        Staying ahead of the curve and surfing the waves of innovation
      </p>
    </div>
  );
}
