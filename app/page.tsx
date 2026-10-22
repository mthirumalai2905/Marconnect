import Link from "next/link";
import { ContactClose } from "@/components/contact-close";
import { Faq } from "@/components/faq";
import { SiteFooter } from "@/components/site-footer";
import { Header } from "@/components/header";
import { RevealObserver } from "@/components/reveal";
import { ScrollFill } from "@/components/scroll-fill";
import { UseCases } from "@/components/use-cases";

const lines = [
  ["Life is the most valuable thing there is.", "MarConnect"],
  ["Precaution is better than cure.", "MarConnect"],
  ["The unit is on the life jacket before anyone is in the water.", "MarConnect"],
  ["Their Morph Space technology enables our delivery with high reliability, precision and efficiency.", "Jakob Flovikholm, 2023"],
  ["This collaboration highlights Synx Morph Space’s versatility, even in a very demanding sector.", "Paal Kristian Levang, Synx"],
  ["Find them while it still matters.", "MarConnect"],
];

const steps = [
  { title: "Wear", image: "/img/step-wear.jpg", alt: "Gloved hands clipping the MarSurvive unit onto a life jacket on deck", text: "Clipped to the life jacket at the chest or upper arm. Hands and wrists stay free." },
  { title: "Work", image: "/img/step-sleep.jpg", alt: "A fisherman hauling rope, the MarSurvive unit dark on his life jacket", text: "Dark and silent through the shift. Nothing on the wrist to catch on a line or a winch." },
  { title: "Wake", image: "/img/step-wake.jpg", alt: "A life jacket hitting the water, the MarSurvive unit glowing blue", text: "Water contact wakes it. A light for the eyes, a position for the ship." },
  { title: "Reach", image: "/img/step-reach.jpg", alt: "A rescuer gripping the arm of a person in a life jacket with a glowing unit", text: "The crew is alerted. Search and rescue gets a live position. The boat turns." },
];

const benefits = [
  "Embedded in the life jacket, worn at the chest or upper arm",
  "Wakes automatically on contact with water",
  "A light the rescuers can see in the dark",
  "A position the ship and search and rescue can act on",
  "Radio units on 433 and 868 MHz, located by gateways on the boat or on land",
  "Satellite units that report their position directly, far from any gateway",
  "Nothing on the wrist to snag during hands-on work",
  "A wristband version made for children",
];

export default function HomePage() {
  const loop = [...lines, ...lines];

  return (
    <>
      <Header />
      <RevealObserver />
      <main id="content">
        {/* Hero */}
        <section className="hero" id="top">
          <div className="hero-media" aria-hidden="true">
            <div className="hero-frame">
              <img src="/img/hero-unit.jpg" alt="" />
              <div className="pulse">
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="kicker reveal">MarSurvive · MarNet</p>
              <h1 className="h-xl reveal d1">
                Life is the most <span className="grad">valuable</span> thing at sea.
              </h1>
              <p className="hero-sub reveal d2">
                Precaution is better than cure. MarSurvive sits on the life jacket before anyone goes near the rail. If they go in, it lights up and tells the ship exactly where they are.
              </p>
              <div className="hero-cta reveal d3">
                <Link className="btn btn-light" href="/how-it-works">
                  See how it works <span className="ar">→</span>
                </Link>
                <Link className="btn btn-glass" href="/story">
                  Read the overboard story
                </Link>
              </div>
            </div>
            <div className="hero-foot reveal d3">
              <div>
                <strong>On the life jacket</strong>
                Chest or upper arm
              </div>
              <div>
                <strong>Wakes in water</strong>
                Light and position
              </div>
              <div>
                <strong>Radio or satellite</strong>
                Two unit types
              </div>
              <div className="scroll-cue">
                <i />
                Scroll
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mission">
          <ScrollFill text="A unit that waits. A signal that wakes in the water. A ship that turns toward a person, not a guess." />
          <Link className="link-arrow reveal d1" href="/story">
            Discover our mission <b>→</b>
          </Link>
        </section>

        <section className="marquee" aria-label="What we stand for">
          <div className="marquee-track">
            {loop.map(([quote, source], index) => (
              <p className="quote" key={`${source}-${index}`}>
                <q>{quote}</q>
                <span>{source}</span>
              </p>
            ))}
          </div>
        </section>

        {/* Signal */}
        <section className="signal dark reveal-img" aria-labelledby="signal-title">
          <img src="/img/ocean-signal.jpg" alt="Aerial view of a person in a life jacket in dark water, blue signal rings spreading from the unit on the chest" />
          <div className="signal-copy">
            <p className="kicker reveal">The invisible part, made visible</p>
            <h2 id="signal-title" className="h-lg reveal d1">
              The sea all looks the same. <br />
              <span className="grad">A signal does not.</span>
            </h2>
            <p className="lead reveal d2">
              When someone goes in, the ocean gives nothing back. MarSurvive does. The moment it touches water it lights up and sends a position, and the ship knows a person and a place.
            </p>
            <div className="signal-tags reveal d3">
              <span className="tag-glass"><b>01</b>From the life jacket</span>
              <span className="tag-glass"><b>02</b>To a gateway or satellite</span>
              <span className="tag-glass"><b>03</b>Onto the bridge</span>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="dark wrap" id="story">
          <div className="story">
            <figure className="story-media reveal" style={{ margin: 0 }}>
              <img src="/img/story-overboard.jpg" alt="A fisherman in rough night water, the MarSurvive unit on his life jacket glowing blue" />
              <span className="badge">Scenario</span>
              <div className="live">
                <span className="live-dot" />
                <div>
                  <strong>Signal received</strong>
                  Position sent to the bridge
                </div>
              </div>
            </figure>
            <div className="story-copy">
              <p className="kicker reveal">The one who went over the rail</p>
              <h2 className="h-md reveal d1">Worn before the water. Awake inside it.</h2>
              <p className="reveal d2">
                It is night on a fishing boat. A wave, a wet deck, a rail, and then nothing. On his life jacket is a MarSurvive unit, clipped on at the start of the shift and forgotten in the best way. Precaution doesn’t look like drama. It looks like a small box on a strap.
              </p>
              <p className="reveal d2">
                On an old boat, this is where the cure begins: a shout, a guess, a circle drawn on dark water. Here, the unit woke the second it touched the sea.
              </p>
              <ol className="timeline reveal d3">
                <li><em>Before</em><span><strong>Clipped on.</strong>While everyone is still safe.</span></li>
                <li><em>Overboard</em><span><strong>The deck is one person short.</strong>The clock starts.</span></li>
                <li><em>Signal</em><span><strong>Light and position.</strong>The ship hears a person.</span></li>
                <li><em>Turn</em><span><strong>The boat goes to a point.</strong>Not a hope.</span></li>
              </ol>
              <Link className="btn btn-glass reveal d3" href="/story" style={{ marginTop: 32 }}>
                Read the full story <span className="ar">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="wrap" id="how">
          <div className="head">
            <div>
              <p className="kicker reveal">How it works</p>
              <h2 className="h-lg reveal d1">Four steps.<br />No manual required.</h2>
            </div>
            <div className="head-side">
              <p className="lead reveal d2">Someone who has never been to sea should be able to repeat it. A captain should trust it’s the same idea, said plainly.</p>
              <Link className="link-arrow reveal d3" href="/how-it-works">
                The full walkthrough <b>→</b>
              </Link>
            </div>
          </div>
          <div className="steps">
            {steps.map((step, index) => (
              <article className={`step reveal d${index % 4}`} key={step.title}>
                <img src={step.image} alt={step.alt} />
                <span className="step-num">0{index + 1}</span>
                <div className="step-body">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Bridge */}
        <section className="bridge dark reveal-img" aria-labelledby="bridge-title">
          <img src="/img/bridge.jpg" alt="An officer on a dark ship bridge looking at a screen showing one blue location point" />
          <div className="bridge-inner">
            <div>
              <p className="kicker reveal">On the bridge</p>
              <h2 id="bridge-title" className="h-lg reveal d1">A place, not a rumour.</h2>
              <p className="lead reveal d2">Gateways on the boat or on land triangulate the radio signal. Satellite units report on their own. Either way, the people who can act see one point on the water.</p>
            </div>
            <div className="bridge-stats reveal d3">
              <div className="stat"><strong>Alert</strong><span>The crew is told at once</span></div>
              <div className="stat"><strong>Locate</strong><span>A position, not a sector</span></div>
              <div className="stat"><strong>Reach</strong><span>Search and rescue can act</span></div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="wrap" id="industries">
          <UseCases />
        </section>

        {/* Products */}
        <section className="wrap" id="products" style={{ paddingTop: 0 }}>
          <div className="head">
            <div>
              <p className="kicker reveal">The system</p>
              <h2 className="h-lg reveal d1">One for the person.<br />One for the ship.</h2>
            </div>
            <p className="lead reveal d2">MarSurvive finds the person. MarNet tells the ship. Together, the difference between a guess and a place.</p>
          </div>
          <div className="products">
            <article className="product reveal">
              <img src="/img/hero-unit.jpg" alt="The MarSurvive unit on the chest strap of a life jacket" style={{ objectPosition: "68% 50%" }} />
              <div>
                <span className="label">MarSurvive</span>
                <h3>The person.</h3>
              </div>
              <div>
                <p>A safety unit embedded in the life jacket. On contact with water it gives light and position. Choose a low-power radio unit or a unit with direct satellite communication.</p>
                <ul>
                  <li>Wakes in water</li>
                  <li>Light and position</li>
                  <li>433 / 868 MHz radio</li>
                  <li>Direct satellite</li>
                </ul>
                <Link className="btn btn-light" href="/products#marsurvive">Explore MarSurvive <span className="ar">→</span></Link>
              </div>
            </article>
            <article className="product reveal d1">
              <img src="/img/gateway.jpg" alt="A MarNet gateway on the mast of a fishing vessel at blue hour" />
              <div>
                <span className="label">MarNet</span>
                <h3>The ship.</h3>
              </div>
              <div>
                <p>Gateways and sensors across the vessel. MarNet hears the radio units, places them on the water, and gives decision makers live data at sea and ashore.</p>
                <ul>
                  <li>Gateways</li>
                  <li>Triangulated position</li>
                  <li>Sensor network</li>
                  <li>Peer-to-peer</li>
                </ul>
                <Link className="btn btn-glass" href="/products#marnet">Explore MarNet <span className="ar">→</span></Link>
              </div>
            </article>
          </div>
        </section>

        {/* Benefits */}
        <section className="wrap" style={{ paddingTop: 0 }}>
          <div className="benefits">
            <div className="benefits-side">
              <p className="kicker reveal">What it does</p>
              <h2 className="h-md reveal d1">Said without a brochure.</h2>
              <p className="lead reveal d2" style={{ marginTop: 18 }}>What the system does, stated plainly. Range, battery life and certifications appear when they’re verified.</p>
              <img className="reveal d2" src="/img/units.jpg" alt="The MarSurvive radio unit and satellite unit side by side" />
            </div>
            <ul className="checks">
              {benefits.map((item) => (
                <li className="reveal" key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="dark wrap" id="questions">
          <div className="faq">
            <div>
              <p className="kicker reveal">Questions</p>
              <h2 className="h-lg reveal d1">Frequently asked.</h2>
              <p className="lead reveal d2" style={{ marginTop: 18 }}>Plain answers. If yours isn’t here, a person will answer it.</p>
            </div>
            <div className="reveal d1">
              <Faq />
            </div>
          </div>
        </section>

        {/* Journal */}
        <section className="wrap" id="journal">
          <div className="head">
            <div>
              <p className="kicker reveal">Journal</p>
              <h2 className="h-lg reveal d1">News &amp; stories.</h2>
            </div>
            <Link className="link-arrow reveal d2" href="/journal">
              All entries <b>→</b>
            </Link>
          </div>
          <div className="journal">
            <Link className="post reveal" href="/journal/synx-partnership">
              <div className="post-img"><img src="/img/marnet-ship.jpg" alt="" style={{ objectPosition: "50% 45%" }} /></div>
              <div className="post-body">
                <div className="post-meta"><b>Partnership</b>31 March 2023</div>
                <h3>MarConnect signs a cooperation agreement with Synx.</h3>
                <p>Morph Space technology comes to the onboard wireless and the life-saving sensors.</p>
              </div>
            </Link>
            <Link className="post small reveal d1" href="/industries">
              <div className="post-img"><img src="/img/industry-fishing.jpg" alt="" /></div>
              <div className="post-body">
                <div className="post-meta"><b>From Norway</b>Sykkulven</div>
                <h3>Built for fishing, shipping and offshore.</h3>
                <p>Moving hard maritime work from analog tools to digital, automated operations.</p>
              </div>
            </Link>
          </div>
        </section>

        <ContactClose />
      </main>

      <SiteFooter />
    </>
  );
}
