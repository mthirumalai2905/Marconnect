import type { Metadata } from "next";
import Link from "next/link";
import { Motto, NextPage, PageHero, PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Journal: news and notes | MarConnect",
  description: "Partnerships, explainers and notes on rescue, shipboard wireless and what MarConnect is building next.",
};

const notes = [
  {
    tag: "Explainer",
    title: "The digital fence, in human words.",
    text: "A line the ship already agreed is safe. Cross it, and the alert starts.",
    href: "/how-it-works#fence",
    image: "/img/industry-fishing.jpg",
  },
  {
    tag: "Privacy",
    title: "Why the bracelet sleeps.",
    text: "Ordinary life stays on the wrist. An emergency does not.",
    href: "/how-it-works#privacy",
    image: "/img/step-sleep.jpg",
  },
  {
    tag: "Scenario",
    title: "The diver who did not come up.",
    text: "One story, told so anyone can see the idea, and labelled honestly as a scenario.",
    href: "/story",
    image: "/img/diver-signal.jpg",
  },
  {
    tag: "Hardware",
    title: "Small, exact, and quiet.",
    text: "The design principles behind the Marpersonnel bracelet.",
    href: "/products#design",
    image: "/img/step-wake.jpg",
  },
];

export default function JournalPage() {
  return (
    <PageShell close={{ kicker: "Stay close to the work", title: "We write rarely. We answer always.", text: "Questions about a vessel, a partnership or a story you think we should tell. A person reads every message." }}>
      <PageHero
        crumb="Journal"
        kicker="News & notes"
        title={<>Notes from <span className="grad">the water.</span></>}
        lead="Partnerships, explainers and what we are building next. One rule: we only publish what is true."
        image="/img/bridge.jpg"
        alt="An officer on a dark ship bridge looking at a single blue point on a screen"
      />

      <section className="wrap">
        <article className="feature">
          <figure className="feature-media reveal">
            <img src="/img/marnet-ship.jpg" alt="A vessel at dusk with a glowing blue network across its hull" />
          </figure>
          <div className="feature-copy">
            <div className="post-meta reveal"><b>Partnership</b>31 March 2023</div>
            <h2 className="h-md reveal d1">MarConnect signs a cooperation agreement with Nornir.</h2>
            <p className="reveal d2">
              MarConnect has entered into an agreement with the Norwegian IoT network provider Nornir to use their HIVE technology in onboard wireless communication, including life-saving sensor technology.
            </p>
            <p className="reveal d2">
              MarNet uses a sensor network so people at sea and on land get live information, and enables peer-to-peer communication across existing systems, machinery and equipment. That means existing and new ships can be digitised and, over time, support autonomous shipping.
            </p>
            <blockquote className="pull reveal d3">
              <p>“Their HIVE technology enables our delivery of products and services with high reliability, precision and efficiency.”</p>
              <cite>Jakob Flovikholm, MarConnect · 2023</cite>
            </blockquote>
            <blockquote className="pull reveal d3">
              <p>“This collaboration highlights Nornir HIVE’s versatility, even in a very demanding and challenging sector.”</p>
              <cite>Paal Kristian Levang, Nornir · 2023</cite>
            </blockquote>
            <Link className="btn btn-blue reveal d3" href="/journal/nornir-partnership">
              Read the full article <span className="ar">→</span>
            </Link>
          </div>
        </article>
      </section>

      <section className="wrap" style={{ paddingTop: 0 }}>
        <div className="head">
          <div>
            <p className="kicker reveal">Explainers</p>
            <h2 className="h-lg reveal d1">Read in two minutes.</h2>
          </div>
        </div>
        <div className="notes">
          {notes.map((note, index) => (
            <Link className={`post reveal d${index % 4}`} href={note.href} key={note.title}>
              <div className="post-img"><img src={note.image} alt="" /></div>
              <div className="post-body">
                <div className="post-meta"><b>{note.tag}</b></div>
                <h3>{note.title}</h3>
                <p>{note.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Motto line="We build the difference between a guess and a place." dark />

      <NextPage href="/story" label="The story" title="The diver who did not come up." image="/img/diver-signal.jpg" />
    </PageShell>
  );
}
