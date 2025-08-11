'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollResetOnNav(): JSX.Element | null {
  const pathname = usePathname();

  // Disable browser history scroll restoration (iOS Safari often restores an offset)
  useEffect(() => {
    if ('scrollRestoration' in history) {
      const previous = history.scrollRestoration as 'auto' | 'manual';
      history.scrollRestoration = 'manual';
      return () => {
        history.scrollRestoration = previous;
      };
    }
  }, []);

  // Force top on route change
  useEffect(() => {
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';

    // Multiple attempts to handle mobile address bar/layout shifts
    const scrollNow = () => window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      scrollNow();
      setTimeout(scrollNow, 0);
      setTimeout(scrollNow, 50);
    });

    // Restore smooth behavior after we are at the top
    const restore = () => {
      root.style.scrollBehavior = previousScrollBehavior;
    };
    const timeoutId = setTimeout(restore, 150);
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}


