'use client';

import { useEffect } from 'react';

export function ScrollToTop(): null {
  useEffect(() => {
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo({ top: 0, left: 0 });
    root.style.scrollBehavior = previousScrollBehavior;
  }, []);

  return null;
}


