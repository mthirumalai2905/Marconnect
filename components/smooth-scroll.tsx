"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

let instance: Lenis | null = null;

export function getLenis() {
  return instance;
}

export function scrollToTarget(target: string | number) {
  if (instance) {
    instance.scrollTo(target, { duration: 1.4 });
    return;
  }
  if (typeof target === "number") {
    window.scrollTo({ top: target, behavior: "smooth" });
  } else {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  }
}

export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.075,
      wheelMultiplier: 0.9,
      smoothWheel: true,
      anchors: { offset: 0 },
    });
    instance = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      instance = null;
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      instance?.scrollTo(0, { immediate: true, force: true });
      return;
    }
    const timer = window.setTimeout(() => scrollToTarget(hash), 120);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
