'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import Markdown from 'react-markdown';
import RelatedProjects from './RelatedProjects';
import { Project, projectsData } from './Projects';

interface ProjectContentProps extends Project {}

export default function ProjectContent({
  title,
  date,
  imageUrl,
  tags,
  links,
  fullDescription,
  description,
  slug,
}: ProjectContentProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col gap-10">
      {/* Image + Sidebar Row */}
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
        {/* Left - Hero Image */}
        <div className="lg:col-span-2">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-900">
            {/* Loading Placeholder */}
            <div
              className={`absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300 ${
                isLoading ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="h-32 w-32 animate-pulse rounded-full bg-gray-700" />
            </div>

            {/* Project Image */}
            <Image
              src={imageUrl}
              alt={title}
              fill
              className={`object-cover transition-opacity duration-700 ${
                isLoading ? 'opacity-0' : 'opacity-100'
              }`}
              priority
              sizes="(min-width: 1280px) 60vw, (min-width: 1024px) 66vw, 100vw"
              onLoadingComplete={() => setIsLoading(false)}
            />
          </div>
        </div>

        {/* Right - Metadata */}
        <div className="h-fit lg:sticky lg:top-8">
          <div className="space-y-4 rounded-xl border border-gray-800 bg-gray-900/50 p-3 sm:p-4 lg:space-y-8 lg:p-6 backdrop-blur-sm">
            {/* Short Description */}
            <div>
              <h2 className="mb-2 text-lg font-semibold text-gray-100 lg:mb-3 lg:text-xl">Summary</h2>
              <p className="text-xs leading-relaxed text-gray-300 sm:text-sm">{description}</p>
            </div>

            {/* Project Links */}
            <div>
              <h2 className="mb-3 text-lg font-semibold text-gray-100 lg:mb-4 lg:text-xl">Project Links</h2>
              {/* Mobile: full-width buttons */}
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:hidden">
                {links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${link.title}`}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-700/50 bg-blue-900/30 px-3 py-1.5 text-xs font-medium text-blue-100 transition-colors hover:bg-blue-900/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-0"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {link.title}
                  </a>
                ))}
              </div>
              {/* Desktop: simple list */}
              <div className="hidden flex-col gap-2 lg:flex">
                {links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 transition-colors hover:text-blue-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {link.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="mb-3 text-lg font-semibold text-gray-100 lg:mb-4 lg:text-xl">Technologies</h2>
              <div className="-mx-1 flex gap-1 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="shrink-0 border border-blue-700/50 bg-blue-900/30 px-2 py-0.5 text-xs text-blue-200 transition-colors hover:border-blue-500/70 hover:bg-blue-900/50 hover:text-blue-100 lg:px-3 lg:py-1 lg:text-sm"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Title + Description */}
      <div className="mt-6 sm:mt-8">
        <div className="flex flex-wrap items-center gap-4">
          <h1 className="text-4xl font-bold text-gray-100">{title}</h1>
          <span className="text-gray-400">{date}</span>
        </div>
        <article className="prose prose-purple prose-invert mt-6 max-w-none">
          <Markdown>{fullDescription}</Markdown>
        </article>
      </div>

      {/* Related Projects */}
      <RelatedProjects
        currentProject={{
          title,
          date,
          imageUrl,
          tags,
          links,
          fullDescription,
          description,
          slug,
        }}
        allProjects={projectsData}
      />
    </div>
  );
}
