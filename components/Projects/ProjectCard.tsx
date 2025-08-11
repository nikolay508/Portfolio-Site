'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  tags: string[];
  slug: string;
  links: Array<{ title: string; url: string }>;
}

export default function ProjectCard({
  title,
  description,
  date,
  imageUrl,
  tags,
  slug,
  links,
}: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link href={`/projects/${slug}`} className="h-full">
      <div className="group relative h-full">
        {/* Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-violet-500/20 via-blue-500/10 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        />

        <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-900/60 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-gray-900/40 transition-transform duration-300 group-hover:-translate-y-1">
          {/* Media */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-800">
            {/* Loading shimmer */}
            <div
              className={`absolute inset-0 z-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 ${
                isLoading ? 'animate-pulse' : 'opacity-0'
              } transition-opacity`}
            />

            <Image
              src={imageError ? '/images/dreamshot.png' : imageUrl}
              alt={title}
              fill
              sizes="(min-width: 1280px) 33vw, (min-width: 1024px) 50vw, 100vw"
              className={`object-cover object-top transition-transform duration-700 ${
                isLoading ? 'scale-105' : 'scale-100'
              } group-hover:scale-105`}
              onLoadingComplete={() => setIsLoading(false)}
              onError={() => setImageError(true)}
              priority
            />

            {/* Overlay gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="flex h-full flex-col gap-4 p-5 sm:p-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold tracking-tight text-gray-100 sm:text-xl">
                {title}
              </h3>
              <p className="line-clamp-2 text-sm leading-relaxed text-gray-400 sm:text-base">
                {description}
              </p>
            </div>

            <div className="mt-auto">
              {/* Tags */}
              <div className="-mx-1 flex flex-wrap gap-2 px-1">
                {tags.slice(0, 3).map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="border border-blue-700/50 bg-blue-900/30 text-blue-100 hover:bg-blue-900/50"
                  >
                    {tag}
                  </Badge>
                ))}
                {tags.length > 3 ? (
                  <Badge
                    variant="outline"
                    className="border-white/20 text-gray-300"
                  >
                    +{tags.length - 3}
                  </Badge>
                ) : null}
              </div>

              {/* Footer */}
              <div className="mt-4 border-t border-white/10 pt-4 flex items-center justify-between text-xs text-gray-400">
                <span className="hidden sm:inline">{date}</span>
                <span className="inline-flex items-center gap-1 text-blue-300 transition-colors group-hover:text-blue-200">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
