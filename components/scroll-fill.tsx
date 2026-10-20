"use client";

import { useEffect, useRef } from "react";

type Props = { text: string; className?: string };

export function ScrollFill({ text, className }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLElement>(".fill-word"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      spans.forEach((span) => span.style.setProperty("--p", "1"));
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.9;
      const end = vh * 0.35 - rect.height * 0.5;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      const total = progress * spans.length;
      spans.forEach((span, i) => {
        span.style.setProperty("--p", Math.min(1, Math.max(0, total - i)).toFixed(3));
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <p ref={ref} className={className ? `scroll-fill ${className}` : "scroll-fill"} aria-label={text}>
      {words.map((word, i) => (
        <span className="fill-word" aria-hidden="true" key={i}>
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
