import type { Metadata } from "next";
import { Motto, NextPage, PageHero, PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Products: MarSurvive, MarConnect and gateways | MarNet",
  description: "MarSurvive for scuba divers and crews at sea. MarConnect, a wristband for children and pets. MarNet gateways that tell the boat where they are.",
};

const unitDesign = [
  { t: "Made to be forgotten", d: "Embedded in the life jacket or fixed to the dive vest, so it goes on with the gear. Nothing to tap, nothing to check during a normal shift or dive." },
  { t: "Off the wrist", d: "At the chest front or on the upper arm, away from lines, nets and winches. Nothing that can catch and cause an accident." },
  { t: "Nothing to press", d: "Nobody has to find a button with cold hands in the dark. On the life jacket, contact with the sea is the trigger." },
  { t: "Light and position", d: "A bright light for the eyes in the last metres, and a position for the boat from the first second." },
];

const unitSpec = [
  ["Made for", "Scuba divers, fishermen, offshore and shipping crews"],
  ["Placement", "Life jacket at the chest front or upper arm, or the dive vest"],
  ["Activation", "Automatic on the life jacket, on contact with water"],
  ["Output", "Light and position"],
  ["Radio unit", "Low power, 433 and 868 MHz, position triangulated by gateways on the boat or on land"],
  ["Satellite unit", "Direct satellite communication, reports its own position"],
  ["Range, battery, ratings, certifications", "Published when independently verified"],
];

const unitTypes = [
  {
    k: "Radio unit",
    t: "433 / 868 MHz",
    d: "Low power radio. Gateways installed on the boat or on land hear the unit and triangulate its position between them. Light to wear, made for everyday work within reach of the gateways.",
    chips: ["Low power", "Gateway triangulation", "Boat or land gateways"],
  },
  {
    k: "Satellite unit",
    t: "Direct satellite",
    d: "The unit communicates with satellites directly and reports its own position. Made for work far from any gateway, where the nearest help may be another vessel or a shore station.",
    chips: ["No gateway needed", "Reports its own position", "Far offshore"],
  },
];

const gatewayParts = [
  { t: "Gateways", d: "Installed on the boat or on land. They listen for radio units and triangulate where a person is." },
  { t: "Ship-wide wireless", d: "Onboard wireless that carries life-saving signals across the vessel. In 2023 MarNet agreed with Synx to bring Morph Space technology into it." },
  { t: "Sensors and peer-to-peer", d: "A network of sensors, and existing machinery and equipment that can speak to each other, even on ships never built to be digital." },
  { t: "Bridge and shore", d: "Live information for the people who decide, at sea and on land." },
];

export default function ProductsPage() {
  return (
    <PageShell close={{ kicker: "See it on your vessel", title: "Talk to us about the system.", text: "Divers, crews or families. Tell us how many people, which vessel, and what the work is.", image: "/img/marnet-ship.jpg", alt: "A vessel at dusk with a glowing blue sensor network" }}>
      <PageHero
        crumb="Products"
        kicker="MarSurvive · MarConnect"
        title={<>For the ones at sea. <span className="grad">For the ones you love.</span></>}
        lead="MarSurvive is for scuba divers and everyone who works on the water. MarConnect is a wristband for children and pets. MarNet gateways tell the boat where they are."
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
            <p className="kicker reveal">For divers and crews</p>
            <h2 className="h-lg reveal d1">Worn on the gear. Heard on the bridge.</h2>
            <p className="lead reveal d2">
              A safety unit for scuba divers, fishermen and everyone who works at sea. It is embedded in the life jacket at the chest front or the upper arm, or fixed to the dive vest. When it matters, it gives light and position. Silent all day. Awake in the only minute that counts.
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
          <p className="lead reveal d2">The same unit on the same gear. The difference is how the position reaches the people who can act.</p>
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

      <section className="wrap" id="divers" style={{ paddingTop: 0 }}>
        <div className="split flip">
          <figure className="split-media reveal">
            <img src="/img/diver-surface.jpg" alt="A scuba diver at the surface at dusk with the MarSurvive unit glowing on the dive vest" />
            <span className="split-tag">For divers</span>
          </figure>
          <div className="split-copy">
            <p className="kicker reveal">Scuba diving</p>
            <h2 className="h-lg reveal d1">Coming up should not be the dangerous part.</h2>
            <p className="lead reveal d2">
              Current, swell and failing light can put a diver a long way from the boat, and a head in the waves is almost invisible from a deck. MarSurvive rides on the dive vest. At the surface it gives the boat a light to look for and a position to go to.
            </p>
            <ul className="ticks reveal d3">
              <li>Fixed to the dive vest</li>
              <li>A light that can be seen across the water</li>
              <li>Radio to the boat, or direct satellite far out</li>
            </ul>
          </div>
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

      <section className="wrap" id="marconnect">
        <div className="split">
          <figure className="split-media tall reveal">
            <img src="/img/kids-pets.jpg" alt="A child and a dog on a fjord boat, both wearing the MarConnect band with a blue light" />
            <span className="split-tag">MarConnect</span>
          </figure>
          <div className="split-copy">
            <p className="kicker reveal">For children and pets</p>
            <h2 className="h-lg reveal d1">Made for small arms and collars.</h2>
            <p className="lead reveal d2">
              Children and pets cannot raise the alarm for themselves, and a life vest does not always stay where it should on a small body. MarConnect is a wristband for children and a band for a pet’s collar. Ferries, family boats, holidays on the water. The same idea: worn in advance, found when it matters.
            </p>
            <ul className="ticks reveal d3">
              <li>A small wristband for children</li>
              <li>A collar band for dogs and other pets</li>
              <li>Light and position, heard by the same gateways</li>
            </ul>
            <figure className="side-shot reveal d3">
              <img src="/img/kids-wristband.jpg" alt="A child on a ferry deck wearing the MarConnect wristband" />
            </figure>
          </div>
        </div>
      </section>

      <section className="wrap" id="gateways" style={{ paddingTop: 0 }}>
        <div className="split flip">
          <figure className="split-media tall reveal">
            <img src="/img/gateway.jpg" alt="A MarNet gateway mounted on a fishing boat mast with signal rings" />
            <span className="split-tag">MarNet gateways</span>
          </figure>
          <div className="split-copy">
            <p className="kicker reveal">For the boat</p>
            <h2 className="h-lg reveal d1">From an analog vessel to a boat that can see its own people.</h2>
            <p className="lead reveal d2">
              MarNet gateways on the boat or on land hear the radio units and triangulate their position. Around them, a network of sensors gives decision makers live information and lets the machinery already aboard speak to itself. Existing and new vessels can be digitised without a new hull.
            </p>
          </div>
        </div>
        <div className="pillars four" style={{ marginTop: "clamp(48px, 6vw, 88px)" }}>
          {gatewayParts.map((item, index) => (
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
            <span>MarSurvive for divers and crews, MarConnect for children and pets, gateways on the boat and on land.</span>
          </li>
          <li>
            <em>Next</em>
            <strong>A ship that sees itself</strong>
            <span>Machinery and equipment sharing live data, peer to peer.</span>
          </li>
          <li>
            <em>Horizon</em>
            <strong>Autonomous operations</strong>
            <span>The foundation our network is laid for. An aim, not a feature.</span>
          </li>
        </ol>
      </section>

      <NextPage href="/journal" label="Journal" title="News, notes and partnerships." image="/img/bridge.jpg" />
    </PageShell>
  );
}
