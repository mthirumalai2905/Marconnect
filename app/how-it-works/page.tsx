import type { Metadata } from "next";
import { Faq } from "@/components/faq";
import { Motto, NextPage, PageHero, PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "How it works: wear, sleep, wake, reach | MarConnect",
  description: "Marpersonnel is on the person. MarNet is on the ship. Four steps anyone can repeat, the digital fence in plain words, and privacy by design.",
};

const steps = [
  {
    title: "Wear",
    line: "Precaution is a decision you make while everyone is still safe.",
    text: "The bracelet goes on before anyone enters the water: on deck, at the start of the shift, before the transfer or the dive. It is meant to be forgotten in the best way: worn like equipment, not handled like a gadget.",
    points: ["Fastened before the risk, not after it", "Crew and passengers alike", "No training needed to be protected"],
    image: "/img/step-wear.jpg",
    alt: "Hands fastening the bracelet on a wet deck",
  },
  {
    title: "Sleep",
    line: "A life is not a data stream.",
    text: "Through an ordinary working day the bracelet stays quiet. Marpersonnel is a sleep-wake system: it does not narrate where a healthy person walks, eats or rests. Data moves when there is an emergency.",
    points: ["Silent during normal work", "Transmits in an emergency", "Privacy is behaviour, not a footer"],
    image: "/img/step-sleep.jpg",
    alt: "The bracelet resting dark on a wrist",
  },
  {
    title: "Wake",
    line: "When it matters, it speaks.",
    text: "Someone crosses the line the ship agreed is safe, or the system recognises another emergency, and the bracelet wakes. Irregular health activity can raise an alert too, without the system pretending to be a doctor.",
    points: ["Automatic man-overboard detection", "Digital fence and smart parameters", "Notice of irregular health activity"],
    image: "/img/step-wake.jpg",
    alt: "The bracelet waking with a single blue light",
  },
  {
    title: "Reach",
    line: "Location is a kindness if it arrives in time.",
    text: "The crew is alerted. MarNet carries a precise, real-time position across the vessel and on to the people who can act, at sea and ashore. Search and rescue receives a place, not a sector.",
    points: ["Crew alerted at once", "Live location for search and rescue", "Carried ship-wide by MarNet"],
    image: "/img/step-reach.jpg",
    alt: "A rescuer gripping the hand of a person in the water",
  },
];

const path = [
  { k: "01", t: "From the wrist", d: "The bracelet wakes." },
  { k: "02", t: "Through the water", d: "Rings of signal leave the person." },
  { k: "03", t: "To the hull", d: "A MarNet node hears it." },
  { k: "04", t: "Across the ship", d: "The network carries it." },
  { k: "05", t: "Onto the bridge", d: "A name. A point. A direction." },
];

export default function HowItWorksPage() {
  return (
    <PageShell close={{ kicker: "Start before the water", title: "Precaution is better than cure.", text: "Tell us about the vessel and the people on it. We’ll walk you through what the first minute could look like." }}>
      <PageHero
        crumb="How it works"
        kicker="Marpersonnel · MarNet"
        title={<>Four steps. <span className="grad">No manual required.</span></>}
        lead="Marpersonnel is on the person. MarNet is on the ship. Someone who has never been to sea should be able to repeat it."
        image="/img/ocean-signal.jpg"
        alt="Aerial view of a person in dark water with blue signal rings spreading from the wrist"
      />

      <section className="wrap">
        <div className="walk">
          {steps.map((step, index) => (
            <article className={index % 2 ? "split flip" : "split"} key={step.title}>
              <figure className="split-media reveal">
                <img src={step.image} alt={step.alt} />
                <span className="split-num">0{index + 1}</span>
              </figure>
              <div className="split-copy">
                <p className="kicker reveal">Step 0{index + 1}</p>
                <h2 className="h-lg reveal d1">{step.title}.</h2>
                <p className="split-line reveal d1">{step.line}</p>
                <p className="lead reveal d2">{step.text}</p>
                <ul className="ticks reveal d3">
                  {step.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="dark wrap" id="signal">
        <div className="head">
          <div>
            <p className="kicker reveal">The invisible part, made visible</p>
            <h2 className="h-lg reveal d1">How the signal travels.</h2>
          </div>
          <p className="lead reveal d2">A child should get it: the person is lost, the bracelet calls the boat, the boat comes.</p>
        </div>
        <ol className="path reveal d1">
          {path.map((node) => (
            <li key={node.k}>
              <span className="path-dot" />
              <em>{node.k}</em>
              <strong>{node.t}</strong>
              <span>{node.d}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="wrap" id="fence">
        <div className="split">
          <figure className="split-media reveal">
            <img src="/img/industry-fishing.jpg" alt="Crew working on a trawler deck at night" />
          </figure>
          <div className="split-copy">
            <p className="kicker reveal">The digital fence</p>
            <h2 className="h-lg reveal d1">A line the ship already agreed is safe.</h2>
            <p className="lead reveal d2">
              The ship agrees a line. Inside it, people work. Outside it, someone may be in the water. Cross that line and the alert does not wait for a witness, or for the next round of the watch.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap" id="privacy" style={{ paddingTop: 0 }}>
        <div className="split flip">
          <figure className="split-media reveal">
            <img src="/img/step-sleep.jpg" alt="The bracelet dark on a resting wrist" />
          </figure>
          <div className="split-copy">
            <p className="kicker reveal">Privacy</p>
            <h2 className="h-lg reveal d1">It sleeps until a life is at stake.</h2>
            <p className="lead reveal d2">
              We care about the person wearing the device as much as the person buying it. Marpersonnel is a sleep-wake system. It transmits when there is an emergency. Privacy is not a checkbox. It is how the product behaves.
            </p>
          </div>
        </div>
      </section>

      <Motto line="Cure begins with a shout. Precaution begins at the wrist." />

      <section className="dark wrap" id="questions">
        <div className="faq">
          <div>
            <p className="kicker reveal">Questions</p>
            <h2 className="h-lg reveal d1">Asked plainly.</h2>
          </div>
          <div className="reveal d1">
            <Faq />
          </div>
        </div>
      </section>

      <NextPage href="/industries" label="Industries" title="Fishing, shipping, offshore." image="/img/industry-offshore.jpg" />
    </PageShell>
  );
}
