'use client';

import { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const inActiveStyle = 'text-white/80 hover:bg-white/40 hover:text-white';
const activeStyle = 'bg-gradient-to-b from-white/40 to-[#2F2D2D]/20 text-white';

interface NavItem {
  name: string;
  href: string;
  isActive: boolean;
}

export default function Menu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [navMenu, setNavMenu] = useState<NavItem[]>([
    { name: 'Home', href: '/', isActive: true },
    { name: 'Reviews', href: '/', isActive: false },
    { name: 'My Story', href: '/', isActive: false },
    { name: 'Projects', href: '/', isActive: false },
  ]);

  function getTargetIdByName(name: string): string | null {
    if (name === 'Reviews') return 'reviews';
    if (name === 'My Story') return 'my-story';
    if (name === 'Projects') return 'projects';
    return null;
  }

  function getNameByTargetId(id: string): string | null {
    if (id === 'reviews') return 'Reviews';
    if (id === 'my-story') return 'My Story';
    if (id === 'projects') return 'Projects';
    return null;
  }

  function scrollToId(targetId: string) {
    const headerOffset = 100;
    const element = document.getElementById(targetId);
    if (!element) return;
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const offsetTop = Math.max(elementTop - headerOffset, 0);
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  }

  const setActiveNavItem = (selectedName: string) => {
    setNavMenu((prevNavMenu) =>
      prevNavMenu.map((item) => ({
        ...item,
        isActive: item.name === selectedName,
      })),
    );
  };

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 100);

      if (pathname !== '/') return;

      const headerOffset = 100;
      const scrollPositionWithOffset = (window.scrollY || 0) + headerOffset + 1;
      const sectionIds = ['reviews', 'my-story', 'projects'];

      let nextActive: string = 'Home';
      let bestOffset = -1;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const elementTop = el.getBoundingClientRect().top + window.scrollY;
        if (elementTop <= scrollPositionWithOffset && elementTop > bestOffset) {
          bestOffset = elementTop;
          const name = getNameByTargetId(id);
          if (name) nextActive = name;
        }
      }

      setActiveNavItem(nextActive);
    }

    window.addEventListener('scroll', handleScroll);
    // Initialize on mount to set correct active link
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <div className="mx-auto max-w-[1440px]">
      <header className={clsx(
        "inset-x-0 top-0 z-[999] pointer-events-auto transition-all duration-300",
        isScrolled 
          ? "fixed" 
          : "absolute"
      )}>
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-4 sm:p-6 lg:px-8"
        >
          <div className="hidden lg:flex lg:flex-1"></div>
          <div className="flex w-full max-w-[92%] mx-auto flex-nowrap items-center justify-center gap-1 whitespace-nowrap rounded-full bg-white/20 px-2 py-1.5 text-sm text-white backdrop-blur-sm overflow-x-hidden sm:max-w-full sm:gap-2 sm:px-3 sm:py-2 lg:w-full lg:flex-1 lg:justify-center lg:gap-x-6 lg:text-base">
            {/* Desktop Mobile menu */}
            {navMenu.map((item) => (
              <span key={item.name} onClick={() => setActiveNavItem(item.name)}>
                <Link
                  className={clsx({
                    'relative rounded-full px-3 py-1 text-sm transition-all whitespace-nowrap sm:px-3 sm:text-sm md:px-4 md:text-base': true,
                    [activeStyle]: item.isActive,
                    [inActiveStyle]: !item.isActive,
                  })}
                  href={item.href}
                  onClick={(e) => {
                    const targetId = getTargetIdByName(item.name);
                    if (pathname === '/') {
                      if (item.name === 'Home') {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        return;
                      }
                      if (targetId) {
                        e.preventDefault();
                        scrollToId(targetId);
                        return;
                      }
                    } else if (targetId) {
                      // Navigate to home, then scroll on load without hash
                      try {
                        sessionStorage.setItem('scrollTarget', targetId);
                      } catch {}
                    }
                  }}
                >
                  {item.name}
                </Link>
              </span>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1"></div>

        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
