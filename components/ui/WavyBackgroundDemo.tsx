'use client';
import React from 'react';
import { WavyBackground } from '../ui/wavy-background';

export function WavyBackgroundDemo() {
  return (
    <WavyBackground
      backgroundFill="#08080e"
      speed="slow"
      blur={8}
      waveOpacity={0.45}
      className="relative mx-auto max-w-6xl px-4 py-16 pb-28 sm:px-6 sm:py-20 sm:pb-40 lg:px-8"
    >
      <p className="inter-var mx-auto max-w-4xl bg-gradient-to-r from-white to-[#B17DE8] bg-clip-text pb-2 text-center text-xl text-transparent sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl">
        You can&apos;t connect the dots looking forward, you can only connect them looking backwards.
      </p>
      <p className="inter-var mt-3 text-center text-sm font-light text-white/80 sm:mt-4 sm:text-base md:text-lg">
        - Steve Jobs
      </p>
    </WavyBackground>
  );
}
