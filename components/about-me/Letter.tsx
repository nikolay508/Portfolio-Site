import React from 'react';
import Image from 'next/image';
import AquaWolfPFP from '@/public/images/svg/aquawolf-pfp.svg';

export default function Letter() {
  return (
    <div className="relative px-3 sm:px-5 lg:px-0">
      <h2 className="text-transparent">My Story</h2>
      <div className="relative">
        {/* Letter Bottom */}
        <div className="absolute left-0 top-0 z-10 h-full w-full -rotate-1 rounded-lg bg-letter-middle lg:-rotate-2"></div>
        {/* Letter Middle */}
        <div className="absolute left-1 top-1 z-20 h-[98%] w-[98%] -rotate-1 rounded-lg bg-letter-bottom sm:left-2 sm:top-2 lg:left-3 lg:top-10 lg:h-[95%] lg:w-[98%] lg:rotate-3"></div>
        {/* Letter Top */}
        <div className="relative z-30 -rotate-1 rounded-lg bg-letter-top shadow-letter-top lg:rotate-2 lg:rounded-xl">
          <article className="space-y-4 p-4 text-sm text-white/80 sm:text-base lg:space-y-5 lg:p-5 lg:px-24 lg:py-14 lg:text-2xl">
            <p>Hi, I am Nikolay. Quick story time.</p>
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
              students from <span className="text-blue-400">SoftUni</span> - showing them the craft, the mindset, and the joy of
              building.
            </p>
            <p>
              As I mentioned I also volunteer my skills to small nonprofit and charity projects,
              shipping simple, effective sites that help them reach people faster and
              make a bigger impact.
            </p>
            <p className="font-semibold text-white/90">Today, I split my time between:</p>
            <ul className="list-disc pl-5 sm:pl-6">
              <li>Back‑end game development at <span className="text-yellow-400">Dreamshot</span></li>
              <li>Designing and building my own product ideas</li>
              <li>Volunteer work for small charities</li>
              <li>Teaching and mentoring at <span className="text-blue-400">SoftUni</span></li>
            </ul>
            <p>
              What drives me is simple: I&apos;m inspired and motivated to work
              relentlessly to help move the world in a better direction—one practical,
              useful build at a time. That&apos;s the path I&apos;m on for the years ahead.
            </p>
            <p>Building something meaningful? I&apos;d love to connect.</p><br/>
            <div className="mb-8 font-handwriting text-3xl sm:mb-10 sm:text-4xl lg:text-6xl">
              <div className="text-white">Nikolay Todorov</div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
