import type { Metadata } from "next";
import { Chapters, type Chapter } from "@/components/chapters";
import { Motto, NextPage, PageHero, PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "The story: the one who went over the rail | MarConnect",
  description: "A scenario told so anyone can understand MarSurvive and MarNet: worn on the life jacket, awake in the water, found because the ship has a place to turn toward.",
};

const chapters: Chapter[] = [
  {
    tag: "01 · The ordinary minute",
    title: "Clipped on at the start of the shift.",
    text: "Night on a fishing boat. Gloves, boots, life jacket. On the chest strap goes a MarSurvive unit, clipped on while everyone is still safe. Nobody is thinking about it. That is the point.",
    image: "/img/step-wear.jpg",
    alt: "Gloved hands clipping the MarSurvive unit onto a life jacket on deck",
  },
  {
    tag: "02 · The work",
    title: "Hands free, on purpose.",
    text: "He hauls rope and clears the net. Nothing on his wrists to catch in a line or a winch. The unit stays dark and silent on the life jacket. It does not narrate a working day.",
    image: "/img/step-sleep.jpg",
    alt: "A fisherman hauling rope with the MarSurvive unit dark on his life jacket",
  },
  {
    tag: "03 · The loss",
    title: "The deck is one person short.",
    text: "A wave, a wet deck, a rail, and then nothing. On an old boat, this is where the cure begins: a shout, a guess, a circle drawn on dark water that all looks the same.",
    image: "/img/story-overboard.jpg",
    alt: "A fisherman in rough night water wearing a life jacket",
  },
  {
    tag: "04 · The wake",
    title: "The water switched it on.",
    text: "The second the unit touched the sea, it woke. A bright light for the eyes. A position for the ship. Not smoke, not an alarm. Contact. The only fast thing in the frame.",
    image: "/img/step-wake.jpg",
    alt: "A life jacket hitting the water with the MarSurvive unit glowing blue",
  },
  {
    tag: "05 · The bridge",
    title: "A person, not a mystery.",
    text: "Gateways on the boat triangulate the radio signal. Far from shore, a satellite unit reports on its own. The bridge receives a person and a place: a mark on the water, a direction.",
    image: "/img/bridge.jpg",
    alt: "An officer on a dark bridge looking at a single blue point on a screen",
  },
  {
    tag: "06 · The reach",
    title: "A hand at the surface.",
    text: "The boat turns toward a point, not a hope. The light guides the last metres. The story does not celebrate the hardware. It ends where every rescue should: someone pulled back aboard.",
    image: "/img/step-reach.jpg",
    alt: "A rescuer gripping the arm of a person in a life jacket with a glowing unit",
  },
];

const scenes = [
  { title: "The night watch", text: "It is dark. A deckhand goes over the side and nobody is looking at that piece of rail. The unit does not need anyone to look. The water is enough.", line: "The ship should not need a witness." },
  { title: "Far offshore", text: "Out of reach of any gateway, a satellite unit sends its position directly. The search starts from a point, not from a last known heading.", line: "Distance is not an excuse." },
  { title: "The family trip", text: "A child on a ferry deck, a small life vest, a wristband made for small arms. The same wake in the water, the same point on the bridge.", line: "Safety cannot depend on experience." },
  { title: "The analog ship", text: "The hull is old. The engines were never meant to speak. MarNet gateways give the vessel a way to hear its people and carry the information ashore.", line: "You do not need a new ship to have a smarter one." },
];

export default function StoryPage() {
  return (
    <PageShell>
      <PageHero
        crumb="The story"
        kicker="A scenario · Told plainly"
        title={<>The one who went <span className="grad">over the rail.</span></>}
        lead="One story, so anyone can understand what we build: worn on the life jacket, silent until the water, then impossible to miss."
        image="/img/story-overboard.jpg"
        alt="A fisherman in rough night water, the MarSurvive unit on his life jacket glowing blue"
        position="45% 40%"
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
            <h2 className="h-lg reveal d1">Not only fishermen.</h2>
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
