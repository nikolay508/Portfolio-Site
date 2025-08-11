import React from 'react';
import Image from 'next/image';
import DreamshotLogo from '@/public/images/png/dreamshot.png';
import SoftUniLogo from '@/public/images/png/softuni.png';
import YoutubeLogo from '@/public/images/svg/Youtube-Logo.svg';

export default function Letter() {
  return (
    <div className="relative px-3 sm:px-5 lg:px-0">
      <h2 className="text-transparent">My Story</h2>
      <div className="relative">
        {/* Side Logos (decorative) */}
        <div
          className="pointer-events-none absolute inset-y-0 -left-16 z-20 hidden select-none md:flex flex-col items-center justify-center gap-6"
          style={{ animation: 'subtle-float 9.5s ease-in-out infinite' }}
        >
          <div className="relative -translate-y-6 md:-translate-y-8">
            <div className="absolute -inset-6 -z-10 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.35),transparent_60%)] blur-2xl" />
            <Image
              src={SoftUniLogo}
              alt="SoftUni logo"
              width={120}
              height={120}
              className="w-16 rounded-xl opacity-80 drop-shadow-[0_0_24px_rgba(59,130,246,0.45)] rotate-[-10deg] md:w-20 lg:w-24 xl:w-28 object-contain"
            />
          </div>
          <div className="relative translate-y-6 md:translate-y-8 lg:translate-y-10 left-[2px] md:left-[3px]">
            <div className="absolute -inset-6 -z-10 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.35),transparent_60%)] blur-2xl" />
            <Image
              src={YoutubeLogo}
              alt="YouTube logo"
              width={120}
              height={120}
              className="w-16 opacity-90 drop-shadow-[0_0_28px_rgba(239,68,68,0.5)] rotate-[3deg] md:w-[4rem] lg:w-[5rem] xl:w-[6rem] object-contain"
            />
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 -right-16 z-20 hidden select-none md:flex items-center justify-end"
          style={{ animation: 'subtle-float 8s ease-in-out infinite' }}
        >
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,0.35),transparent_60%)] blur-2xl" />
            <Image
              src={DreamshotLogo}
              alt="Dreamshot logo"
              width={120}
              height={120}
              className="w-16 rounded-xl opacity-80 drop-shadow-[0_0_24px_rgba(250,204,21,0.45)] rotate-[10deg] md:w-20 lg:w-24 xl:w-28 object-contain"
            />
          </div>
        </div>
        {/* Letter Bottom */}
        <div className="absolute inset-0 z-10 -rotate-1 transform-gpu rounded-lg bg-letter-middle lg:-rotate-2"></div>
        {/* Letter Middle */}
        <div className="absolute left-1 right-1 top-1 bottom-1 z-20 -rotate-1 transform-gpu rounded-lg bg-letter-bottom sm:left-2 sm:right-2 sm:top-2 sm:bottom-2 lg:left-3 lg:right-3 lg:top-10 lg:bottom-3 lg:rotate-3"></div>
        {/* Letter Top */}
        <div className="relative z-30 -rotate-1 transform-gpu rounded-lg bg-letter-top shadow-letter-top lg:rotate-2 lg:rounded-xl">
          <article className="space-y-4 p-4 text-sm text-white/80 sm:text-base lg:space-y-5 lg:p-5 lg:px-24 lg:py-14 lg:text-2xl">
            <p>Hi, I am Nikolay. <span className="font-semibold text-white/90">Quick story time.</span></p>
            <p>
              I tried programming for the first time in high school and, honestly, it didn&apos;t
              spark much at the start. But the more I learned, the more I saw the
              possibilities: building solutions to real problems, helping early
              coders find their footing, and give small charities the chance of more visibility.
            </p>
            <p>
              After graduating, I went all in. I started working as a back‑end
              developer building games at <span className="text-yellow-400">Dreamshot</span>,
              kept developing my own ideas, and spent time teaching fundamentals to
              students from <span className="text-blue-400">SoftUni</span> and additionally on <span className="text-red-400">YouTube</span> - showing them the craft, the mindset, and the joy of
              building incredible things.
            </p>
            <p>
              As I mentioned I also volunteer my skills to small nonprofit and charity projects,
              shipping simple, effective sites that help them reach people faster and
              make a bigger impact.
            </p>
            <p className="font-semibold text-white/90">Today, I split my time between:</p>
            <ul className="list-disc pl-5 sm:pl-6">
              <li>Back‑end game development at <span className="text-yellow-400">Dreamshot</span></li>
              <li>Designing and building my own ideas</li>
              <li>Volunteering for charities in need</li>
              <li>Teaching and mentoring at <span className="text-blue-400">SoftUni</span></li>
              <li>Adding more value with tutorials on <span className="text-red-400">YouTube</span></li>
            </ul>
            <p>
              <span className="font-semibold text-white/90">What drives me is simple:</span>  I am inspired and motivated to work
              relentlessly to help move the world in a better direction.<br/>
              This is the path I am on for the years ahead.
            </p>
            <p>Building something meaningful? <br/>I&apos;d love to connect!</p><br/>
            <div className="mb-8 font-handwriting text-3xl sm:mb-10 sm:text-4xl lg:text-6xl">
              <div className="text-white">Nikolay Todorov</div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
