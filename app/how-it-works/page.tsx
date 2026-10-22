import type { Metadata } from "next";
import { Faq } from "@/components/faq";
import { Motto, NextPage, PageHero, PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "How it works: wear, work, wake, reach | MarConnect",
  description: "MarSurvive is on the life jacket. MarNet is on the ship. Four steps anyone can repeat, two ways to send a position, and why the unit stays off the wrist.",
};

const steps = [
  {
    title: "Wear",
    line: "Precaution is a decision you make while everyone is still safe.",
    text: "The MarSurvive unit is embedded in the life jacket, at the front of the chest or on the upper arm. It goes on with the jacket at the start of the shift, before the transfer, before anyone is near the rail. Worn like equipment, not handled like a gadget.",
    points: ["Part of the life jacket, not an extra", "Chest front or upper arm", "No training needed to be protected"],
    image: "/img/step-wear.jpg",
    alt: "Gloved hands clipping the MarSurvive unit onto a life jacket on deck",
  },
  {
    title: "Work",
    line: "Nothing on the wrist. Nothing to catch.",
    text: "Fishermen and deck crew work with their hands, among lines, nets and winches. A device on the wrist can snag and turn into an accident of its own. On the life jacket, the unit stays out of the way, dark and silent, through an ordinary working day.",
    points: ["Hands and wrists stay free", "Nothing to catch in a line or winch", "Silent during normal work"],
    image: "/img/step-sleep.jpg",
    alt: "A fisherman hauling rope with the MarSurvive unit dark on his life jacket",
  },
  {
    title: "Wake",
    line: "The water is the trigger.",
    text: "The moment the unit comes into contact with water, it wakes. It switches on a light that can be seen in the dark and starts sending its position. Nobody has to press a button while fighting the sea.",
    points: ["Activates on contact with water", "Light for the eyes", "Position for the ship"],
    image: "/img/step-wake.jpg",
    alt: "A life jacket hitting the water with the MarSurvive unit glowing blue",
  },
  {
    title: "Reach",
    line: "Location is a kindness if it arrives in time.",
    text: "The crew is alerted. The bridge sees a position, not a sector, and the light guides the last metres. The same position can be shared with search and rescue, at sea and ashore.",
    points: ["Crew alerted at once", "A position for search and rescue", "A light to guide the final approach"],
    image: "/img/step-reach.jpg",
    alt: "A rescuer gripping the arm of a person in a life jacket with a glowing unit",
  },
];

const path = [
  { k: "01", t: "From the life jacket", d: "Water wakes the unit." },
  { k: "02", t: "Light and signal", d: "A light for the eyes, a signal for the ship." },
  { k: "03", t: "To a gateway or satellite", d: "433 / 868 MHz radio, or direct satellite." },
  { k: "04", t: "A position", d: "Gateways triangulate. Satellite units report their own." },
  { k: "05", t: "Onto the bridge", d: "A person. A point. A direction." },
];

const units = [
  {
    k: "Radio unit",
    t: "Low power, 433 and 868 MHz.",
    d: "Gateways installed on the boat or on land hear the unit. Its position is triangulated from the gateways, so the ship knows where to turn without the unit having to carry heavy electronics.",
  },
  {
    k: "Satellite unit",
    t: "Direct satellite communication.",
    d: "For work far from any gateway. The unit talks to satellites directly and reports its position on its own, wherever the vessel is.",
  },
];

export default function HowItWorksPage() {
  return (
    <PageShell close={{ kicker: "Start before the water", title: "Precaution is better than cure.", text: "Tell us about the vessel and the people on it. We’ll walk you through what the first minute could look like." }}>
      <PageHero
        crumb="How it works"
        kicker="MarSurvive · MarNet"
        title={<>Four steps. <span className="grad">No manual required.</span></>}
        lead="MarSurvive is on the life jacket. MarNet is on the ship. Someone who has never been to sea should be able to repeat it."
        image="/img/ocean-signal.jpg"
        alt="Aerial view of a man in a life jacket in dark water, the unit on his chest glowing with signal rings"
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
          <p className="lead reveal d2">A child should get it: the person falls in, the life jacket calls the boat, the boat comes.</p>
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

      <section className="wrap" id="units">
        <div className="split">
          <figure className="split-media reveal">
            <img src="/img/units.jpg" alt="The two MarSurvive units side by side: the radio unit and the satellite unit" />
          </figure>
          <div className="split-copy">
            <p className="kicker reveal">Two unit types</p>
            <h2 className="h-lg reveal d1">Gateway radio, or straight to the sky.</h2>
            <dl className="spec plain reveal d2">
              {units.map((unit) => (
                <div key={unit.k}>
                  <dt>{unit.k}</dt>
                  <dd>
                    <strong>{unit.t}</strong> {unit.d}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="wrap" id="gateways" style={{ paddingTop: 0 }}>
        <div className="split flip">
          <figure className="split-media reveal">
            <img src="/img/gateway.jpg" alt="A MarNet gateway mounted on a fishing boat mast" />
          </figure>
          <div className="split-copy">
            <p className="kicker reveal">Gateways</p>
            <h2 className="h-lg reveal d1">The boat listens for its people.</h2>
            <p className="lead reveal d2">
              MarNet gateways are installed on the boat or on land. When a radio unit wakes, several gateways hear it and the position is triangulated between them. The vessel needs no new hull and no new bridge to know where its people are.
            </p>
          </div>
        </div>
      </section>

      <Motto line="Cure begins with a shout. Precaution begins with the life jacket." />

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
