'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import SVGGradientBg from '../SVGGradientBg';
import GithubLogo from '../../../public/images/svg/Github-Logo.svg';
import InstagramLogo from '../../../public/images/svg/Instagram-Logo.svg';
import LinkedinLogo from '../../../public/images/svg/LinkedIn-Logo.svg';
import TiktokLogo from '../../../public/images/svg/Tiktok-Logo.svg';
import TwitterLogo from '../../../public/images/svg/X-Twitter-Logo.svg';
import YouTubeLogo from '../../../public/images/svg/Youtube-Logo.svg';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="mx-auto max-w-[1440px]">
      <header className={clsx(
        "inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled 
          ? "fixed" 
          : "absolute"
      )}>
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-4 sm:p-6 lg:px-8"
        >
          <div className="hidden lg:flex lg:flex-1"></div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-10 w-10 text-white" />
            </button>
          </div>
          <div className="hidden gap-2 rounded-full bg-white/20 px-3 py-2 text-white backdrop-blur-sm lg:flex lg:w-full lg:flex-1 lg:items-center lg:justify-center lg:gap-x-6">
            {/* Desktop Mobile menu */}
            {navMenu.map((item) => (
              <span key={item.name} onClick={() => setActiveNavItem(item.name)}>
                <Link
                  className={clsx({
                    'flex-2 relative rounded-full px-4 py-1 transition-all':
                      true,
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
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-bg-default px-4 py-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="relative z-50">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">0xAquaWolf</span>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/png/aquawolf-logo.png"
                      alt="Logo"
                      width={28}
                      height={28}
                    />
                    <div className="text-lg font-semibold text-white">
                      0xAquaWolf
                    </div>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon
                    aria-hidden="true"
                    className="h-10 w-10 text-white"
                  />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6 text-center">
                    {navMenu.map((item) => (
                      <Link
                        key={item.name + 1}
                        href={item.href}
                        onClick={(e) => {
                          const targetId = getTargetIdByName(item.name);
                          if (pathname === '/') {
                            if (item.name === 'Home') {
                              e.preventDefault();
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            } else if (targetId) {
                              e.preventDefault();
                              scrollToId(targetId);
                            }
                          } else if (targetId) {
                            try {
                              sessionStorage.setItem('scrollTarget', targetId);
                            } catch {}
                          }
                          setMobileMenuOpen(false);
                          setActiveNavItem(item.name);
                        }}
                        className="-mx-3 block rounded-lg px-3 py-3 text-2xl font-normal leading-7 text-white transition-all hover:bg-gray-50/20"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  {/* Seperator */}
                  <div className="flex flex-1 items-center justify-center">
                    <div className="h-[2px] w-[70vw] bg-white/100"></div>
                  </div>
                  {/* Social Links */}
                  <div className="mt-10 grid gap-10">
                    <div className="align-center flex flex-1 justify-center gap-10">
                      <a
                        href="https://twitter.com/0xAquaWolf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={TwitterLogo}
                          alt="X/Twitter Logo"
                          width={50}
                          height={50}
                        />
                      </a>
                      <a
                        className="grid items-center"
                        href="https://www.youtube.com/@0xAquaWolf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={YouTubeLogo}
                          alt="YouTube Logo"
                          width={50}
                          height={50}
                        />
                      </a>
                      <a
                        href="https://github.com/0xAquaWolf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={GithubLogo}
                          alt="Github Logo"
                          width={50}
                          height={50}
                        />
                      </a>
                    </div>
                    <div className="align-center flex justify-center gap-10">
                      <a
                        href="https://www.instagram.com/_0xAquaWolf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid items-center"
                      >
                        <Image
                          src={InstagramLogo}
                          alt="Instagram Logo"
                          width={50}
                          height={50}
                        />
                      </a>
                      <a
                        href="https://www.tiktok.com/@0xAquaWolf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={TiktokLogo}
                          alt="TikTok Logo"
                          width={50}
                          height={50}
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/0xAquaWolf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid items-center"
                      >
                        <Image
                          src={LinkedinLogo}
                          alt="Linkedin Logo"
                          width={50}
                          height={50}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <SVGGradientBg />
          </DialogPanel>
        </Dialog>
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
