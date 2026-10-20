import Link from "next/link";
import { ContactClose } from "./contact-close";
import { Header } from "./header";
import { RevealObserver } from "./reveal";
import { ScrollFill } from "./scroll-fill";
import { SiteFooter } from "./site-footer";

type HeroProps = {
  crumb: string;
  parent?: { href: string; label: string };
  kicker: string;
  title: React.ReactNode;
  lead: string;
  image: string;
  alt: string;
  position?: string;
};

export function PageShell({ children, close }: { children: React.ReactNode; close?: React.ComponentProps<typeof ContactClose> }) {
  return (
    <>
      <Header />
      <RevealObserver />
      <main id="content">
        {children}
        <ContactClose {...close} />
      </main>
      <SiteFooter />
    </>
  );
}

export function PageHero({ crumb, parent, kicker, title, lead, image, alt, position }: HeroProps) {
  return (
    <section className="page-hero dark reveal-img" id="top">
      <img src={image} alt={alt} style={position ? { objectPosition: position } : undefined} />
      <div className="page-hero-inner">
        <nav className="crumbs reveal" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          {parent && (
            <>
              <Link href={parent.href}>{parent.label}</Link>
              <span aria-hidden="true">/</span>
            </>
          )}
          <span aria-current="page">{crumb}</span>
        </nav>
        <p className="kicker reveal d1">{kicker}</p>
        <h1 className="h-xl page-title reveal d1">{title}</h1>
        <p className="page-lead reveal d2">{lead}</p>
      </div>
    </section>
  );
}

export function Motto({ line, by = "MarConnect", dark = false }: { line: string; by?: string; dark?: boolean }) {
  return (
    <section className={dark ? "motto dark" : "motto"}>
      <ScrollFill className="motto-line" text={line} />
      <p className="motto-by reveal">{by}</p>
    </section>
  );
}

export function NextPage({ href, label, title, image }: { href: string; label: string; title: string; image: string }) {
  return (
    <section className="wrap next-wrap">
      <Link className="next-page reveal" href={href}>
        <img src={image} alt="" />
        <span className="next-label">Next · {label}</span>
        <span className="next-title">
          {title} <b>→</b>
        </span>
      </Link>
    </section>
  );
}
