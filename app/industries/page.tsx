import type { Metadata } from "next";
import Link from "next/link";
import { Motto, NextPage, PageHero, PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Industries: fishing, global shipping, offshore | MarConnect",
  description: "The same two systems, one for the person and one for the ship, with a different first minute depending on the work.",
};

const industries = [
  {
    id: "fishing",
    title: "Fishing",
    kicker: "01 · A dark deck",
    headline: "The rail is where the night goes wrong.",
    text: "Nets, weather, wet steel and short crews. When someone goes over in the dark, nobody may be looking at that piece of rail. The fence is agreed before the haul. Cross it, and the crew is told without waiting for a witness.",
    first: "The alert starts the moment someone leaves the agreed line, not when the watch notices.",
    points: ["Automatic man-overboard detection", "A digital fence agreed before the haul", "A live position the boat can turn toward"],
    line: "The ship should not need a witness.",
    image: "/img/industry-fishing.jpg",
    alt: "A trawler at night with crew hauling nets in rough sea",
  },
  {
    id: "shipping",
    title: "Global shipping",
    kicker: "02 · Crew and passengers",
    headline: "Big ships. Many people. One place that matters.",
    text: "On a large vessel, finding a person is not only an overboard problem. In an emergency the bracelet gives a precise, live location, and MarNet carries it across a ship that was never built to be digital, all the way to the bridge and the shore.",
    first: "The bridge receives a name and a position, not a sector of ocean or a deck to search by hand.",
    points: ["Real-time location of crew and passengers", "Ship-wide wireless across existing equipment", "Live information at sea and ashore"],
    line: "Safety cannot depend on experience.",
    image: "/img/industry-shipping.jpg",
    alt: "A container ship crossing open ocean at blue hour",
  },
  {
    id: "offshore",
    title: "Offshore",
    kicker: "03 · Steel to steel",
    headline: "The dangerous minute is the transfer.",
    text: "Baskets, gangways, swell and a gap of water between two structures. The bracelet is on before the transfer. If the water takes someone, the waking signal is already the start of the search.",
    first: "Search begins from a point, while the people nearby can still reach it.",
    points: ["Worn before every transfer", "Wakes in an emergency", "Position shared with those who can act"],
    line: "The best rescue starts before the panic.",
    image: "/img/industry-offshore.jpg",
    alt: "A personnel transfer basket swinging between a platform and a supply vessel",
  },
];

export default function IndustriesPage() {
  return (
    <PageShell close={{ kicker: "Your operation", title: "Tell us about the vessel.", text: "Fishing, shipping or offshore. We’ll talk about the first minute on your deck, and how the people on it can be found.", image: "/img/industry-shipping.jpg", alt: "A container ship at blue hour" }}>
      <PageHero
        crumb="Industries"
        kicker="Three doors, one system"
        title={<>Built for the <span className="grad">hard work</span> at sea.</>}
        lead="Fishing, global shipping and offshore buy for different reasons. The same two systems answer them all: one for the person, one for the ship."
        image="/img/industry-shipping.jpg"
        alt="A container ship crossing open ocean at blue hour"
      />

      <nav className="jump reveal" aria-label="Industries on this page">
        {industries.map((item, index) => (
          <Link key={item.id} href={`#${item.id}`}>
            <em>0{index + 1}</em>
            {item.title}
          </Link>
        ))}
      </nav>

      {industries.map((item, index) => (
        <section className={index === 1 ? "industry dark" : "industry"} id={item.id} key={item.id}>
          <div className="industry-media reveal-img">
            <img src={item.image} alt={item.alt} />
            <span className="industry-name">{item.title}</span>
          </div>
          <div className="industry-copy">
            <p className="kicker reveal">{item.kicker}</p>
            <h2 className="h-md reveal d1">{item.headline}</h2>
            <p className="lead reveal d2">{item.text}</p>
            <div className="first reveal d2">
              <span>The first minute</span>
              <p>{item.first}</p>
            </div>
            <ul className="ticks reveal d3">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <q className="industry-line reveal d3">{item.line}</q>
          </div>
        </section>
      ))}

      <Motto line="Hope is not a search pattern. A position is." />

      <section className="wrap" style={{ paddingTop: 0 }}>
        <div className="note reveal">
          <p className="kicker">Also aboard</p>
          <p>
            Divers, passengers, guests who have never been cold at sea. The bracelet does not ask how experienced the wearer is. It only has to be on before the water is.
          </p>
        </div>
      </section>

      <NextPage href="/products" label="Products" title="One for the person. One for the ship." image="/img/hero-bracelet.jpg" />
    </PageShell>
  );
}
