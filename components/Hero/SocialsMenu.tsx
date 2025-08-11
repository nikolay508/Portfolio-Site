"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import GithubLogo from "@/public/images/svg/Github-Logo.svg";
import LinkedinLogo from "@/public/images/svg/LinkedIn-Logo.svg";
import YouTubeLogo from "@/public/images/svg/Youtube-Logo.svg";

interface SocialLink {
  name: string;
  href: string;
  icon: any;
}

const socialLinks: SocialLink[] = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@n_todorov508",
    icon: YouTubeLogo,
  },
  {
    name: "GitHub",
    href: "https://github.com/nikolay508",
    icon: GithubLogo,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/n-todorov508",
    icon: LinkedinLogo,
  },
];

export function SocialsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!rootRef.current) return;
      const target = event.target as Node;
      if (!rootRef.current.contains(target)) setIsOpen(false);
    }
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      setIsOpen(false);
      buttonRef.current?.focus();
    }
  }

  return (
    <div ref={rootRef} className="relative grid w-full place-items-center">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full grid place-items-center rounded-full bg-transparent py-3 text-center text-sm text-white shadow-alt-cta transition-all hover:bg-white hover:text-black hover:shadow-cta sm:py-4 xl:px-6 xl:py-3 xl:text-lg"
      >
        My Socials
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-label="Social links"
          tabIndex={-1}
          onKeyDown={handleKeyDown}
          className="absolute top-full mt-2 w-max rounded-2xl border border-white/15 bg-white/10 p-2 backdrop-blur-md shadow-lg z-50"
        >
          <div className="flex items-center gap-2">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className="group grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 transition-all hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                aria-label={item.name}
              >
                <Image
                  src={item.icon}
                  alt={`${item.name} logo`}
                  width={26}
                  height={26}
                  className="transition-transform duration-200 group-hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


