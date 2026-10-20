import type { Metadata } from "next";
import { Chapters, type Chapter } from "@/components/chapters";
import { Motto, NextPage, PageHero, PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "The story: the diver who did not come up | MarConnect",
  description: "A scenario told so anyone can understand Marpersonnel and MarNet: worn in advance, awake in the water, found because the ship has a place to turn toward.",
};

const chapters: Chapter[] = [
  {
    tag: "01 · The ordinary minute",
    title: "Fastened on deck.",
    text: "The sea is quiet. The diver checks the mask, the air, the line. On the wrist goes a Marpersonnel bracelet, fastened while everyone is still safe. Nobody is thinking about it. That is the point.",
    image: "/img/step-wear.jpg",
    alt: "Hands fastening the bracelet on a wet deck",
  },
  {
    tag: "02 · The quiet",
    title: "Asleep, on purpose.",
    text: "Below the surface the bracelet stays dark. It does not narrate a healthy working day. No trail of an ordinary dive. A life is not a data stream.",
    image: "/img/step-sleep.jpg",
    alt: "The bracelet resting dark on a wrist",
  },
  {
    tag: "03 · The loss",
    title: "The surface stays empty.",
    text: "The diver does not come up on time. On an old ship, this is where the cure begins: a shout, a guess, a circle drawn on water that all looks the same.",
    image: "/img/ocean-signal.jpg",
    alt: "A small figure in a wide dark ocean",
  },
  {
    tag: "04 · The wake",
    title: "The bracelet has already woken.",
    text: "From the wrist, a signal spreads. Rings of light through the water. Not smoke, not lightning, not an alarm. Contact. The only fast thing in the frame.",
    image: "/img/diver-signal.jpg",
    alt: "A diver in deep blue water with signal rings leaving the wrist",
  },
  {
    tag: "05 · The bridge",
    title: "A person, not a mystery.",
    text: "MarNet carries the signal across the vessel. The bridge does not receive a rumour. It receives a person and a place: a mark on the water, a direction.",
    image: "/img/bridge.jpg",
    alt: "An officer on a dark bridge looking at a single blue point on a screen",
  },
  {
    tag: "06 · The reach",
    title: "Two hands at the surface.",
    text: "The boat turns toward a point, not a hope. The film does not celebrate the hardware. It ends where every rescue should: someone pulled back aboard.",
    image: "/img/step-reach.jpg",
    alt: "A rescuer gripping the hand of a person in the water",
  },
];

const scenes = [
  { title: "The watch", text: "It is dark. A deckhand goes over the side and nobody is looking at that piece of rail. The fence notices before the next round of the watch.", line: "The ship should not need a witness." },
  { title: "The passenger", text: "A guest is not trained for weather. The water takes them anyway. The same bracelet, the same wake, the same point on the bridge.", line: "Safety cannot depend on experience." },
  { title: "The health alert", text: "Someone is still on board, and something about them is no longer ordinary. The system can notify the crew without naming a diagnosis.", line: "Some emergencies never reach the rail." },
  { title: "The analog ship", text: "The hull is old. The engines were never meant to speak. MarNet gives the vessel a way to carry live information to the bridge and the shore.", line: "You do not need a new ship to have a smarter one." },
];

export default function StoryPage() {
  return (
    <PageShell>
      <PageHero
        crumb="The story"
        kicker="A scenario · Told plainly"
        title={<>The diver who did <span className="grad">not come up.</span></>}
        lead="One story, so anyone can understand what we build: worn in advance, silent until needed, then impossible to miss."
        image="/img/diver-signal.jpg"
        alt="A scuba diver in deep blue water with blue signal rings leaving the wrist"
        position="60% 40%"
      />

      <section className="wrap intro">
        <p className="intro-lead reveal">
          The sea all looks the same. That is the problem every search has always had. This is what changes when the person in the water was carrying the answer before anything went wrong.
        </p>
      </section>

      <section className="wrap chapters-wrap" style={{ paddingTop: 0 }}>
        <Chapters items={chapters} />
      </section>

      <Motto dark line="Life is the most valuable thing there is. Precaution is better than cure." />

      <section className="wrap">
        <div className="head">
          <div>
            <p className="kicker reveal">The same truth, other scenes</p>
            <h2 className="h-lg reveal d1">Not only divers.</h2>
          </div>
          <p className="lead reveal d2">Same four beats every time: the ordinary minute, the loss, the wake, the reach. Only the first second changes.</p>
        </div>
        <div className="pillars four">
          {scenes.map((scene, index) => (
            <article className={`pillar reveal d${index % 4}`} key={scene.title}>
              <span className="pillar-num">0{index + 1}</span>
              <h3>{scene.title}</h3>
              <p>{scene.text}</p>
              <q>{scene.line}</q>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap note-wrap" style={{ paddingTop: 0 }}>
        <div className="note reveal">
          <p className="kicker">Our standard</p>
          <p>
            We would rather show a rescue than a slogan. Until a customer gives us a story we may tell, we show the scenario honestly, as a scenario. Imagery on this page is illustrative.
          </p>
        </div>
      </section>

      <NextPage href="/how-it-works" label="How it works" title="Four steps. No manual required." image="/img/step-wake.jpg" />
    </PageShell>
  );
}
