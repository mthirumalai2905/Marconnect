import type { Metadata } from "next";
import { Motto, NextPage, PageHero, PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Products: MarSurvive and MarNet | MarConnect",
  description: "MarSurvive sits on the life jacket and wakes in the water with light and position. MarNet gateways tell the ship. Two unit types, hardware design principles, and a wristband made for children.",
};

const unitDesign = [
  { t: "Made to be forgotten", d: "Embedded in the life jacket, so it goes on with the jacket. Nothing to tap, nothing to check during a normal shift." },
  { t: "Off the wrist", d: "At the chest front or on the upper arm, away from lines, nets and winches. Nothing that can catch and cause an accident." },
  { t: "Woken by water", d: "Contact with the sea is the trigger. Nobody has to find a button with cold hands in the dark." },
  { t: "Light and position", d: "A bright light for the eyes in the last metres, and a position for the ship from the first second." },
];

const unitSpec = [
  ["Placement", "Embedded in the life jacket, chest front or upper arm"],
  ["Activation", "Automatic on contact with water"],
  ["Output", "Light and position"],
  ["Radio unit", "Low power, 433 and 868 MHz, position triangulated by gateways on the boat or on land"],
  ["Satellite unit", "Direct satellite communication, reports its own position"],
  ["Range, battery, ratings, certifications", "Published when independently verified"],
];

const unitTypes = [
  {
    k: "Radio unit",
    t: "433 / 868 MHz",
    d: "Low power radio. MarNet gateways installed on the boat or on land hear the unit and triangulate its position between them. Light to wear, made for everyday work within reach of the gateways.",
    chips: ["Low power", "Gateway triangulation", "Boat or land gateways"],
  },
  {
    k: "Satellite unit",
    t: "Direct satellite",
    d: "The unit communicates with satellites directly and reports its own position. Made for work far from any gateway, where the nearest help may be another vessel or a shore station.",
    chips: ["No gateway needed", "Reports its own position", "Far offshore"],
  },
];

const marnetParts = [
  { t: "Gateways", d: "Installed on the boat or on land. They listen for MarSurvive radio units and triangulate where a person is." },
  { t: "Ship-wide wireless", d: "Onboard wireless that carries life-saving signals across the vessel. In 2023 MarConnect agreed with Synx to bring Morph Space technology into it." },
  { t: "Sensors and peer-to-peer", d: "A network of sensors, and existing machinery and equipment that can speak to each other, even on ships never built to be digital." },
  { t: "Bridge and shore", d: "Live information for the people who decide, at sea and on land." },
];

export default function ProductsPage() {
  return (
    <PageShell close={{ kicker: "See it on your vessel", title: "Talk to us about the system.", text: "One for the person, one for the ship. Tell us how many people, which vessel, and what the work is.", image: "/img/marnet-ship.jpg", alt: "A vessel at dusk with a glowing blue sensor network" }}>
      <PageHero
        crumb="Products"
        kicker="The system"
        title={<>One for the person. <span className="grad">One for the ship.</span></>}
        lead="MarSurvive finds the person. MarNet tells the ship. Together, the difference between a guess and a place."
        image="/img/hero-unit.jpg"
        alt="The MarSurvive unit on the chest strap of a life jacket with a single blue light"
        position="67% 46%"
      />

      <section className="wrap" id="marsurvive">
        <div className="split">
          <figure className="split-media tall reveal">
            <img src="/img/hero-unit.jpg" alt="The MarSurvive unit on a life jacket, water on its surface" style={{ objectPosition: "67% 46%" }} />
            <span className="split-tag">MarSurvive</span>
          </figure>
          <div className="split-copy">
            <p className="kicker reveal">For the person</p>
            <h2 className="h-lg reveal d1">Worn on the life jacket. Heard on the bridge.</h2>
            <p className="lead reveal d2">
              A safety unit embedded in the life jacket, at the chest front or the upper arm. When it comes into contact with water it gives light and position. Silent all day. Awake in the only minute that counts.
            </p>
            <dl className="spec reveal d3">
              {unitSpec.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="wrap" id="units" style={{ paddingTop: 0 }}>
        <div className="head">
          <div>
            <p className="kicker reveal">Two unit types</p>
            <h2 className="h-lg reveal d1">Gateway radio, or straight to the sky.</h2>
          </div>
          <p className="lead reveal d2">The same life jacket, the same wake in the water. The difference is how the position reaches the people who can act.</p>
        </div>
        <figure className="wide-media reveal-img">
          <img src="/img/units.jpg" alt="The MarSurvive radio unit and satellite unit side by side" />
        </figure>
        <div className="pillars two" style={{ marginTop: "clamp(32px, 4vw, 56px)" }}>
          {unitTypes.map((unit, index) => (
            <article className={`pillar reveal d${index}`} key={unit.k}>
              <span className="pillar-num">{unit.k}</span>
              <h3>{unit.t}</h3>
              <p>{unit.d}</p>
              <ul className="chips">
                {unit.chips.map((chip) => (
                  <li key={chip}>{chip}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="dark wrap" id="design">
        <div className="head">
          <div>
            <p className="kicker reveal">Hardware design</p>
            <h2 className="h-lg reveal d1">Small, exact, and out of the way.</h2>
          </div>
          <p className="lead reveal d2">The ocean is large. The device should not be. Every design decision serves one moment and stays out of the way of every other.</p>
        </div>
        <div className="design">
          <figure className="design-media reveal">
            <img src="/img/step-wake.jpg" alt="The MarSurvive unit waking with a blue light as the life jacket hits the water" />
          </figure>
          <div className="pillars two">
            {unitDesign.map((item, index) => (
              <article className={`pillar on-dark reveal d${index % 4}`} key={item.t}>
                <span className="pillar-num">0{index + 1}</span>
                <h3>{item.t}</h3>
                <p>{item.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Motto line="Silent all day. Awake in the only minute that counts." dark />

      <section className="wrap" id="kids">
        <div className="split">
          <figure className="split-media reveal">
            <img src="/img/kids-wristband.jpg" alt="A child on a ferry deck wearing a small MarConnect wristband" />
            <span className="split-tag">For children</span>
          </figure>
          <div className="split-copy">
            <p className="kicker reveal">The wristband</p>
            <h2 className="h-lg reveal d1">Made for small arms.</h2>
            <p className="lead reveal d2">
              Children do not haul nets or work winches, and a life vest does not always stay where it should on a small body. For them there is a wristband version. Ferries, family boats, holidays on the water. The same idea: worn in advance, awake in the water.
            </p>
            <p className="lead reveal d3">
              For crew and fishermen, the unit belongs on the life jacket. That is where it stays out of the way of the work.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap" id="marnet" style={{ paddingTop: 0 }}>
        <div className="split flip">
          <figure className="split-media tall reveal">
            <img src="/img/gateway.jpg" alt="A MarNet gateway mounted on a fishing boat mast with signal rings" />
            <span className="split-tag">MarNet</span>
          </figure>
          <div className="split-copy">
            <p className="kicker reveal">For the ship</p>
            <h2 className="h-lg reveal d1">From an analog vessel to a ship that can see its own people.</h2>
            <p className="lead reveal d2">
              Gateways on the boat or on land hear MarSurvive radio units and triangulate their position. Around them, a network of sensors gives decision makers live information and lets the machinery already aboard speak to itself. Existing and new ships can be digitised without a new hull.
            </p>
          </div>
        </div>
        <div className="pillars four" style={{ marginTop: "clamp(48px, 6vw, 88px)" }}>
          {marnetParts.map((item, index) => (
            <article className={`pillar reveal d${index % 4}`} key={item.t}>
              <span className="pillar-num">0{index + 1}</span>
              <h3>{item.t}</h3>
              <p>{item.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap together" style={{ paddingTop: 0 }}>
        <div className="head">
          <div>
            <p className="kicker reveal">Together</p>
            <h2 className="h-lg reveal d1">A path, not a promise.</h2>
          </div>
          <p className="lead reveal d2">Safer ships today. More automated operations over time. We say what exists now, and we call the horizon a horizon.</p>
        </div>
        <ol className="horizon reveal d1">
          <li className="now">
            <em>Now</em>
            <strong>People who can be found</strong>
            <span>MarSurvive on the life jacket, MarNet gateways on the boat and on land.</span>
          </li>
          <li>
            <em>Next</em>
            <strong>A ship that sees itself</strong>
            <span>Machinery and equipment sharing live data, peer to peer.</span>
          </li>
          <li>
            <em>Horizon</em>
            <strong>Autonomous operations</strong>
            <span>The foundation MarNet is laid for. An aim, not a feature.</span>
          </li>
        </ol>
      </section>

      <NextPage href="/journal" label="Journal" title="News, notes and partnerships." image="/img/bridge.jpg" />
    </PageShell>
  );
}
