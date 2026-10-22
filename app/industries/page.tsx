import type { Metadata } from "next";
import Link from "next/link";
import { Motto, NextPage, PageHero, PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Industries: fishing, diving, global shipping, offshore | MarNet",
  description: "MarSurvive for divers and crews, MarConnect for children and pets, with a different first minute depending on the work.",
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
    id: "diving",
    title: "Diving",
    kicker: "02 · The surface",
    headline: "The dive ends where the boat cannot see.",
    text: "Current, swell and failing light. A diver can come up a long way from where they went down, and a head in the waves is almost invisible from a deck. MarSurvive rides on the dive vest, so the boat gets a light to look for and a position to go to.",
    first: "The boat steers toward a position instead of scanning the swell.",
    points: ["Worn on the dive vest", "A light that can be seen at the surface", "Radio to the boat, or direct satellite far out"],
    line: "Coming up should not be the dangerous part.",
    image: "/img/diver-surface.jpg",
    alt: "A scuba diver at the surface at dusk with the MarSurvive unit glowing on the dive vest",
  },
  {
    id: "shipping",
    title: "Global shipping",
    kicker: "03 · Crew and passengers",
    headline: "Big ships. Many people. One place that matters.",
    text: "On a large vessel, finding a person is not only an overboard problem. On long ocean crossings, far from any gateway on land, the satellite unit reports its own position to the bridge and the shore, even from a ship that was never built to be digital.",
    first: "The bridge receives a position, not a sector of ocean to search by hand.",
    points: ["Direct satellite units for open ocean", "Ship-wide wireless across existing equipment", "Live information at sea and ashore"],
    line: "Safety cannot depend on experience.",
    image: "/img/industry-shipping.jpg",
    alt: "A container ship crossing open ocean at blue hour",
  },
  {
    id: "offshore",
    title: "Offshore",
    kicker: "04 · Steel to steel",
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
    <PageShell close={{ kicker: "Your operation", title: "Tell us about the vessel.", text: "Fishing, diving, shipping or offshore. We’ll talk about the first minute on your deck, and how the people on it can be found.", image: "/img/industry-shipping.jpg", alt: "A container ship at blue hour" }}>
      <PageHero
        crumb="Industries"
        kicker="Four doors, one idea"
        title={<>Built for the <span className="grad">hard work</span> at sea.</>}
        lead="Fishing, diving, global shipping and offshore buy for different reasons. The same idea answers them all: worn in advance, found when it matters."
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
            Passengers, guests who have never been cold at sea, and families. Children and pets get MarConnect, a band made for small arms and collars. Nobody has to be experienced. The band only has to be on before the water is.
          </p>
        </div>
      </section>

      <NextPage href="/products" label="Products" title="For the ones at sea. For the ones you love." image="/img/hero-unit.jpg" />
    </PageShell>
  );
}
