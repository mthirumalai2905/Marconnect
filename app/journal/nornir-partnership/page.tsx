import type { Metadata } from "next";
import Link from "next/link";
import { NextPage, PageHero, PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "MarConnect signs a cooperation agreement with Nornir | MarConnect",
  description: "MarConnect will use Nornir HIVE technology in onboard wireless communication, including life-saving sensor technology.",
};

export default function NornirArticlePage() {
  return (
    <PageShell
      close={{
        kicker: "Partnerships",
        title: "Building something for the sea?",
        text: "We work with partners who make ships safer and smarter. Tell us what you are building.",
        image: "/img/marnet-ship.jpg",
        alt: "A vessel at dusk with a glowing blue network across its hull",
      }}
    >
      <PageHero
        crumb="Nornir partnership"
        parent={{ href: "/journal", label: "Journal" }}
        kicker="Partnership · 31 March 2023"
        title={<>MarConnect signs a cooperation agreement with <span className="grad">Nornir.</span></>}
        lead="HIVE technology comes to MarConnect’s onboard wireless communication and its life-saving sensors."
        image="/img/marnet-ship.jpg"
        alt="A vessel at dusk with a glowing blue sensor network across its hull"
      />

      <article className="wrap article">
        <div className="article-meta reveal">
          <span>By Jakob Otilius Flovikholm</span>
          <span>31 March 2023</span>
          <span>4 min read</span>
        </div>

        <p className="article-lead reveal d1">
          MarConnect has entered into an agreement with the Norwegian IoT network provider Nornir to use their HIVE technology in onboard wireless communication, including life-saving sensor technology.
        </p>

        <h2 className="reveal">What it means for MarNet</h2>
        <p className="reveal">
          MarNet uses an advanced sensor network so that people at sea and on land get live information. It also enables peer-to-peer communication across existing systems, machinery and equipment.
        </p>
        <p className="reveal">
          That matters because most of the world’s fleet was never built to be digital. With MarNet, existing and new ships can be digitised, and over time the same foundation can support autonomous shipping.
        </p>

        <figure className="article-figure reveal">
          <img src="/img/bridge.jpg" alt="An officer on a dark ship bridge looking at a single blue point on a screen" />
          <figcaption>Live information on the bridge, carried across the vessel by MarNet. Illustrative.</figcaption>
        </figure>

        <h2 className="reveal">What it means for Marpersonnel</h2>
        <p className="reveal">
          Marpersonnel is designed to streamline QHSSE work and reduce cost. Crew carry highly sensitive sensors, and the aim is simple: to reduce how serious an accident becomes when it happens, whether that is man overboard, fire or a similar event.
        </p>
        <p className="reveal">
          Looking further ahead, the two companies see room to explore artificial intelligence in the work together. That is a direction for the future, not a feature of the product today.
        </p>

        <blockquote className="pull big reveal">
          <p>“Nornir is an invaluable partner for MarConnect, as their HIVE technology enables our delivery of products and services with high reliability, precision and efficiency.”</p>
          <cite>Jakob Flovikholm, MarConnect</cite>
        </blockquote>

        <blockquote className="pull big reveal">
          <p>“MarConnect’s innovative solutions for a safer and more efficient maritime industry are inspiring and something we at Nornir are proud to be able to make our contribution to. This collaboration highlights Nornir HIVE’s versatility, even in a very demanding and challenging sector.”</p>
          <cite>Paal Kristian Levang, Nornir</cite>
        </blockquote>

        <div className="article-about">
          <div className="reveal">
            <h3>About Nornir</h3>
            <p>Nornir is the Norwegian company behind Nornir HIVE, a network that brings data and devices together across protocols.</p>
          </div>
          <div className="reveal d1">
            <h3>About MarConnect</h3>
            <p>
              MarConnect develops technology for maritime efficiency and safety. The work is the move from analog tools to digital and automated operations in fishing, global shipping and offshore.
            </p>
          </div>
        </div>

        <div className="article-foot reveal">
          <Link className="link-arrow" href="/journal">
            Back to the journal <b>←</b>
          </Link>
          <Link className="link-arrow" href="/products#marnet">
            Read about MarNet <b>→</b>
          </Link>
        </div>
      </article>

      <NextPage href="/products" label="Products" title="One for the person. One for the ship." image="/img/hero-bracelet.jpg" />
    </PageShell>
  );
}
