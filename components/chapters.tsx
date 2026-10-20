"use client";

import { useEffect, useRef, useState } from "react";

export type Chapter = {
  tag: string;
  title: string;
  text: string;
  image: string;
  alt: string;
};

export function Chapters({ items }: { items: Chapter[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-48% 0px -48% 0px" },
    );
    refs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1081px)");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    const nodes = refs.current.filter((node): node is HTMLElement => Boolean(node));
    let frame = 0;

    const clear = () => {
      nodes.forEach((node) => {
        node.style.transform = "";
        node.style.opacity = "";
      });
    };

    const update = () => {
      frame = 0;
      if (!wide.matches || still.matches) {
        clear();
        return;
      }
      const vh = window.innerHeight;
      const center = vh / 2;
      nodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        const d = Math.max(-1.4, Math.min(1.4, (rect.top + rect.height / 2 - center) / (vh * 0.62)));
        const a = Math.abs(d);
        const scale = 1 - 0.4 * Math.min(1, a) ** 1.2;
        const tilt = -d * 26;
        const arc = (1 - Math.cos(d * 0.85)) * 150;
        node.style.transform = `perspective(1100px) translate3d(${arc.toFixed(1)}px, 0, 0) rotateX(${tilt.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
        node.style.opacity = Math.max(0.14, 1 - a * 0.62).toFixed(3);
      });
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    wide.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      wide.removeEventListener("change", schedule);
      clear();
    };
  }, []);

  return (
    <div className="chapters">
      <div className="chapters-media" aria-hidden="true">
        <div className="chapters-frame">
          {items.map((item, index) => (
            <img key={item.image + index} src={item.image} alt="" className={index === active ? "on" : undefined} decoding="async" />
          ))}
          <div className="chapters-count">
            <b>{String(active + 1).padStart(2, "0")}</b> / {String(items.length).padStart(2, "0")}
          </div>
          <div className="chapters-bar">
            <i style={{ transform: `scaleX(${(active + 1) / items.length})` }} />
          </div>
        </div>
      </div>
      <ol className="chapters-list">
        {items.map((item, index) => (
          <li
            key={item.title}
            data-index={index}
            ref={(node) => {
              refs.current[index] = node;
            }}
            className={index === active ? "on" : undefined}
          >
            <img className="chapters-inline" src={item.image} alt={item.alt} />
            <span className="chapters-tag">{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
