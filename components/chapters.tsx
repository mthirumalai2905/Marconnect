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
