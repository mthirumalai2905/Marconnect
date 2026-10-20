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
  ["The bracelet is on before the water is.", "MarConnect"],
  ["Their HIVE technology enables our delivery with high reliability, precision and efficiency.", "Jakob Flovikholm, 2023"],
  ["This collaboration highlights Nornir HIVE’s versatility, even in a very demanding sector.", "Paal Kristian Levang, Nornir"],
  ["Find them while it still matters.", "MarConnect"],
];

const steps = [
  { title: "Wear", image: "/img/step-wear.jpg", alt: "A fisherman fastening the bracelet on a wet deck", text: "Fastened while the day is ordinary. The safe moment is while everyone is still on deck." },
  { title: "Sleep", image: "/img/step-sleep.jpg", alt: "A crew member on deck with the bracelet dark on his wrist", text: "It does not narrate a healthy working day. A life is not a data stream." },
  { title: "Wake", image: "/img/step-wake.jpg", alt: "A wrist in dark water with blue signal rings spreading from the bracelet", text: "Man overboard, or an emergency the system recognises, and the bracelet speaks." },
  { title: "Reach", image: "/img/step-reach.jpg", alt: "A rescuer gripping the hand of a person in the water", text: "The crew is alerted. Search and rescue gets a live location. The boat turns." },
];

const benefits = [
  "Precise, real-time location of people in an emergency",
  "Automatic man-overboard detection, with an alert to the crew",
  "A digital fence agreed before anyone is in the water",
  "A notice when health activity is irregular",
  "Sleep-wake transmission, silent until it matters",
  "A live position search and rescue can act on",
  "Sensors and peer-to-peer links across equipment already aboard",
  "A practical path from analog ships to automated operations",
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
              <img src="/img/hero-bracelet.jpg" alt="" />
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
              <p className="kicker reveal">Marpersonnel · MarNet</p>
              <h1 className="h-xl reveal d1">
                Life is the most <span className="grad">valuable</span> thing at sea.
              </h1>
              <p className="hero-sub reveal d2">
                Precaution is better than cure. A bracelet on the wrist before anyone enters the water, and a ship that already knows where to turn if they do.
              </p>
              <div className="hero-cta reveal d3">
                <Link className="btn btn-light" href="/how-it-works">
                  See how it works <span className="ar">→</span>
                </Link>
                <Link className="btn btn-glass" href="/story">
                  Watch the diver’s story
                </Link>
              </div>
            </div>
            <div className="hero-foot reveal d3">
              <div>
                <strong>Man overboard</strong>
                Detected automatically
              </div>
              <div>
                <strong>Real-time location</strong>
                In an emergency
              </div>
              <div>
                <strong>Sleep-wake</strong>
                Silent until it matters
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
          <ScrollFill text="A bracelet that sleeps. A signal that wakes. A ship that turns toward a person, not a guess." />
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
          <img src="/img/ocean-signal.jpg" alt="Aerial view of a person in dark ocean water with blue signal rings spreading from the wrist" />
          <div className="signal-copy">
            <p className="kicker reveal">The invisible part, made visible</p>
            <h2 id="signal-title" className="h-lg reveal d1">
              The sea all looks the same. <br />
              <span className="grad">A signal does not.</span>
            </h2>
            <p className="lead reveal d2">
              When someone goes in, the ocean gives nothing back. Marpersonnel does. From the wrist, a pulse reaches the ship, and the ship knows a person and a place.
            </p>
            <div className="signal-tags reveal d3">
              <span className="tag-glass"><b>01</b>From the wrist</span>
              <span className="tag-glass"><b>02</b>Across the water</span>
              <span className="tag-glass"><b>03</b>Onto the bridge</span>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="dark wrap" id="story">
          <div className="story">
            <figure className="story-media reveal" style={{ margin: 0 }}>
              <img src="/img/diver-signal.jpg" alt="A scuba diver in deep blue water with the bracelet emitting blue signal rings" />
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
              <p className="kicker reveal">The diver who did not come up</p>
              <h2 className="h-md reveal d1">Worn before the water. Awake inside it.</h2>
              <p className="reveal d2">
                A diver leaves the stern. The water is clear, then it is not. On the wrist is a Marpersonnel bracelet, fastened on deck and forgotten in the best way. Precaution doesn’t look like drama. It looks like a band.
              </p>
              <p className="reveal d2">
                They don’t surface on time. On an old ship, this is where the cure begins: a shout, a guess, a circle drawn on water. Here, the bracelet has already woken.
              </p>
              <ol className="timeline reveal d3">
                <li><em>Before</em><span><strong>Fastened.</strong>While everyone is still safe.</span></li>
                <li><em>Missing</em><span><strong>The surface stays empty.</strong>The clock starts.</span></li>
                <li><em>Signal</em><span><strong>Rings leave the wrist.</strong>The ship hears a person.</span></li>
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
              <p className="lead reveal d2">MarNet carries the signal across the vessel and to the people who can act, at sea and ashore.</p>
            </div>
            <div className="bridge-stats reveal d3">
              <div className="stat"><strong>Alert</strong><span>The crew is told at once</span></div>
              <div className="stat"><strong>Locate</strong><span>A live position, not a sector</span></div>
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
            <p className="lead reveal d2">Marpersonnel finds the person. MarNet tells the ship. Together, the difference between a guess and a place.</p>
          </div>
          <div className="products">
            <article className="product reveal">
              <img src="/img/hero-bracelet.jpg" alt="The Marpersonnel bracelet" style={{ objectPosition: "68% 50%" }} />
              <div>
                <span className="label">Marpersonnel</span>
                <h3>The person.</h3>
              </div>
              <div>
                <p>A smart bracelet for crew and passengers. Precise location in an emergency, automatic man-overboard detection, and a notice if health activity is irregular.</p>
                <ul>
                  <li>Man overboard</li>
                  <li>Real-time location</li>
                  <li>Health alert</li>
                  <li>Sleep-wake privacy</li>
                </ul>
                <Link className="btn btn-light" href="/products#marpersonnel">Explore Marpersonnel <span className="ar">→</span></Link>
              </div>
            </article>
            <article className="product reveal d1">
              <img src="/img/marnet-ship.jpg" alt="A vessel at dusk with a glowing blue sensor network across its hull" />
              <div>
                <span className="label">MarNet</span>
                <h3>The ship.</h3>
              </div>
              <div>
                <p>A shipboard network of sensors. Live data for decision makers at sea and ashore, and peer-to-peer links across machinery that was never digital.</p>
                <ul>
                  <li>Sensor network</li>
                  <li>Real-time data</li>
                  <li>Peer-to-peer</li>
                  <li>Path to autonomy</li>
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
              <p className="lead reveal d2" style={{ marginTop: 18 }}>Every line here is already public. Range, battery life and certifications appear when they’re verified.</p>
              <img className="reveal d2" src="/img/step-wear.jpg" alt="Hands fastening the bracelet on deck" />
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
            <a className="post reveal" href="https://www.marconnect.no/post/marconnect-signs-cooperation-agreement-with-nornir">
              <div className="post-img"><img src="/img/marnet-ship.jpg" alt="" style={{ objectPosition: "50% 45%" }} /></div>
              <div className="post-body">
                <div className="post-meta"><b>Partnership</b>31 March 2023</div>
                <h3>MarConnect signs a cooperation agreement with Nornir.</h3>
                <p>HIVE technology comes to the onboard wireless and the life-saving sensors.</p>
              </div>
            </a>
            <article className="post small reveal d1">
              <div className="post-img"><img src="/img/industry-fishing.jpg" alt="" /></div>
              <div className="post-body">
                <div className="post-meta"><b>From Norway</b>Sykkulven</div>
                <h3>Built for fishing, shipping and offshore.</h3>
                <p>Moving hard maritime work from analog tools to digital, automated operations.</p>
              </div>
            </article>
          </div>
        </section>

        <ContactClose />
      </main>

      <SiteFooter />
    </>
  );
}
