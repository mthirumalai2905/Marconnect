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
    text: "Nets, weather, wet steel and short crews. Fishermen will not wear anything on the wrist that can catch in a line, so MarSurvive rides on the life jacket instead. When someone goes over in the dark, nobody may be looking at that piece of rail. The water is enough to wake the unit.",
    first: "The light and the position start the moment the unit touches the sea, not when the watch notices.",
    points: ["On the life jacket, never in the way of the work", "Wakes on contact with water", "Gateways on the boat triangulate the position"],
    line: "The ship should not need a witness.",
    image: "/img/industry-fishing.jpg",
    alt: "A trawler at night with crew hauling nets in rough sea",
  },
  {
    id: "shipping",
    title: "Global shipping",
    kicker: "02 · Crew and passengers",
    headline: "Big ships. Many people. One place that matters.",
    text: "On a large vessel, finding a person is not only an overboard problem. On long ocean crossings, far from any gateway on land, the satellite unit reports its own position, and MarNet carries information across a ship that was never built to be digital, all the way to the bridge and the shore.",
    first: "The bridge receives a position, not a sector of ocean to search by hand.",
    points: ["Direct satellite units for open ocean", "Ship-wide wireless across existing equipment", "Live information at sea and ashore"],
    line: "Safety cannot depend on experience.",
    image: "/img/industry-shipping.jpg",
    alt: "A container ship crossing open ocean at blue hour",
  },
  {
    id: "offshore",
    title: "Offshore",
    kicker: "03 · Steel to steel",
    headline: "The dangerous minute is the transfer.",
    text: "Baskets, gangways, swell and a gap of water between two structures. The unit is on the life jacket before the transfer. If the water takes someone, the light and the signal are already the start of the search.",
    first: "Search begins from a point, while the people nearby can still reach it.",
    points: ["On the life jacket for every transfer", "Wakes on contact with water", "Gateways on the vessel or the platform"],
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
            Passengers, guests who have never been cold at sea, and children, who get a wristband made for small arms. The unit does not ask how experienced the wearer is. It only has to be on before the water is.
          </p>
        </div>
      </section>

      <NextPage href="/products" label="Products" title="One for the person. One for the ship." image="/img/hero-unit.jpg" />
    </PageShell>
  );
}
