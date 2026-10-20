import type { Metadata } from "next";
import { Motto, NextPage, PageHero, PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Products: Marpersonnel and MarNet | MarConnect",
  description: "Marpersonnel finds the person. MarNet tells the ship. Capabilities, hardware design principles, and how the two systems work together.",
};

const braceletDesign = [
  { t: "Made to be forgotten", d: "Worn like equipment, not handled like a gadget. Nothing to tap, nothing to check during a normal shift." },
  { t: "One light", d: "A single point that wakes in an emergency. Not a screen asking for attention. A signal that means one thing." },
  { t: "Sleep-wake by design", d: "Silence is the default state of the hardware. Transmission is reserved for the minute that counts." },
  { t: "Built for the working wrist", d: "Designed around wet hands, gloves, salt and cold. The conditions crews actually work in." },
];

const braceletSpec = [
  ["Location", "Precise, real-time location in an emergency"],
  ["Man overboard", "Automatic detection with an alert to the crew"],
  ["Digital fence", "Smart parameters around a line the ship agrees is safe"],
  ["Health", "A notice when health activity is irregular"],
  ["Transmission", "Sleep-wake. Data moves in an emergency"],
  ["Range, battery, ratings, certifications", "Published when independently verified"],
];

const marnetParts = [
  { t: "Sensors", d: "A network of sensors gives systems and decision makers the information they need, live." },
  { t: "Ship-wide wireless", d: "Onboard wireless that carries life-saving signals across the vessel. In 2023 MarConnect agreed with Nornir to bring HIVE technology into it." },
  { t: "Peer-to-peer", d: "Existing systems, machinery and equipment can speak to each other, even on ships that were never built to be digital." },
  { t: "Bridge and shore", d: "Live information for the people who decide, at sea and on land." },
];

export default function ProductsPage() {
  return (
    <PageShell close={{ kicker: "See it on your vessel", title: "Talk to us about the system.", text: "One for the person, one for the ship. Tell us how many people, which vessel, and what the work is.", image: "/img/marnet-ship.jpg", alt: "A vessel at dusk with a glowing blue sensor network" }}>
      <PageHero
        crumb="Products"
        kicker="The system"
        title={<>One for the person. <span className="grad">One for the ship.</span></>}
        lead="Marpersonnel finds the person. MarNet tells the ship. Together, the difference between a guess and a place."
        image="/img/hero-bracelet.jpg"
        alt="The Marpersonnel bracelet with a single blue light"
        position="66% 45%"
      />

      <section className="wrap" id="marpersonnel">
        <div className="split">
          <figure className="split-media tall reveal">
            <img src="/img/hero-bracelet.jpg" alt="The Marpersonnel bracelet, water on its surface" style={{ objectPosition: "67% 45%" }} />
            <span className="split-tag">Marpersonnel</span>
          </figure>
          <div className="split-copy">
            <p className="kicker reveal">For the person</p>
            <h2 className="h-lg reveal d1">Worn on the wrist. Heard on the bridge.</h2>
            <p className="lead reveal d2">
              A smart bracelet for crew and passengers. In an emergency it gives a precise, live location, detects man overboard, and can alert the crew to irregular health activity. Silent all day. Awake in the only minute that counts.
            </p>
            <dl className="spec reveal d3">
              {braceletSpec.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="dark wrap" id="design">
        <div className="head">
          <div>
            <p className="kicker reveal">Hardware design</p>
            <h2 className="h-lg reveal d1">Small, exact, and quiet.</h2>
          </div>
          <p className="lead reveal d2">The ocean is large. The device should not be. Every design decision serves one moment and stays out of the way of every other.</p>
        </div>
        <div className="design">
          <figure className="design-media reveal">
            <img src="/img/step-wake.jpg" alt="Close view of the bracelet waking with a single light" />
          </figure>
          <div className="pillars two">
            {braceletDesign.map((item, index) => (
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

      <section className="wrap" id="marnet">
        <div className="split flip">
          <figure className="split-media tall reveal">
            <img src="/img/marnet-ship.jpg" alt="A vessel at dusk with a glowing blue sensor network across its hull" />
            <span className="split-tag">MarNet</span>
          </figure>
          <div className="split-copy">
            <p className="kicker reveal">For the ship</p>
            <h2 className="h-lg reveal d1">From an analog vessel to a ship that can see its own people.</h2>
            <p className="lead reveal d2">
              A shipboard network of sensors. MarNet gives decision makers live information and lets the machinery already aboard speak to itself. Existing and new ships can be digitised without a new hull.
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
            <span>Marpersonnel on the wrist, MarNet across the vessel.</span>
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
