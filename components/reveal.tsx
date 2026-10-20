"use client";

import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".reveal, .reveal-img");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 },
    );
    items.forEach((item) => {
      if (item.getBoundingClientRect().top < window.innerHeight) {
        item.classList.add("in");
      } else {
        observer.observe(item);
      }
    });
    return () => observer.disconnect();
  }, []);

  return null;
}
