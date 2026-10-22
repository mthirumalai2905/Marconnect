"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const cases = [
  {
    slug: "fishing",
    title: "Fishing",
    image: "/img/industry-fishing.jpg",
    alt: "A trawler at night with crew hauling nets in rough sea",
    note: "A dark deck. A rail. A person who should still be on it.",
    body: "The unit rides on the life jacket, not the wrist, so it never catches in a net. If someone goes over, it wakes in the water and the crew is told without waiting for a witness.",
  },
  {
    slug: "diving",
    title: "Diving",
    image: "/img/diver-surface.jpg",
    alt: "A scuba diver at the surface at dusk with the MarSurvive unit glowing on the dive vest",
    note: "A head at the surface. A boat that is too far away.",
    body: "MarSurvive rides on the dive vest. If a diver comes up away from the boat, in current or poor light, the boat gets a light to look for and a position to go to.",
  },
  {
    slug: "shipping",
    title: "Global shipping",
    image: "/img/industry-shipping.jpg",
    alt: "A container ship crossing open ocean at blue hour",
    note: "Crew and passengers. A place, not a rumour.",
    body: "A crew member in the water is a light and a position. Far from land, the satellite unit reports on its own, even from a ship that was never built to be digital.",
  },
  {
    slug: "offshore",
    title: "Offshore",
    image: "/img/industry-offshore.jpg",
    alt: "A personnel transfer basket swinging between a platform and a supply vessel",
    note: "The minute between steel and steel.",
    body: "The unit is on the life jacket before the transfer. If the water takes someone, the signal is already the start of the search.",
  },
];

const HOVER_INTENT_MS = 160;

export function UseCases() {
  const [active, setActive] = useState(0);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const choose = (index: number) => {
    window.clearTimeout(timer.current);
    setActive(index);
  };

  const intend = (index: number) => (event: React.PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setActive(index), HOVER_INTENT_MS);
  };

  const cancel = () => window.clearTimeout(timer.current);

  return (
    <div className="cases">
      <figure className="case-visual reveal" style={{ margin: 0 }}>
        {cases.map((item, index) => (
          <img
            key={item.slug}
            src={item.image}
            alt={index === active ? item.alt : ""}
            aria-hidden={index !== active}
            className={index === active ? "on" : undefined}
            decoding="async"
          />
        ))}
        <figcaption className="case-caption">
          {cases.map((item, index) => (
            <div key={item.slug} className={index === active ? "on" : undefined} aria-hidden={index !== active}>
              <strong>{item.title}</strong>
              <span>{item.note}</span>
            </div>
          ))}
        </figcaption>
      </figure>
      <div className="case-list reveal d1" onPointerLeave={cancel}>
        <p className="kicker">Industries</p>
        <h2 className="h-md">What is your operation?</h2>
        {cases.map((item, index) => (
          <button
            key={item.slug}
            className={index === active ? "case-btn is-on" : "case-btn"}
            onClick={() => choose(index)}
            onPointerEnter={intend(index)}
            onFocus={() => choose(index)}
            aria-pressed={index === active}
          >
            <em>0{index + 1}</em>
            <strong>{item.title}</strong>
            <span className="case-body">
              <span>{item.body}</span>
            </span>
          </button>
        ))}
        <div className="case-actions">
          <Link className="btn btn-blue" href="/industries">
            Explore industries <span className="ar">→</span>
          </Link>
          <a className="link-quiet" href="#contact">Discuss your vessel</a>
        </div>
      </div>
    </div>
  );
}
