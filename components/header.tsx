"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getLenis, scrollToTarget } from "./smooth-scroll";

const links = [
  { href: "/story", label: "The story" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/industries", label: "Industries" },
  { href: "/products", label: "Products" },
  { href: "/journal", label: "Journal" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const lenis = getLenis();
    if (open) {
      lenis?.stop();
      document.documentElement.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.documentElement.style.overflow = "";
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setHidden(false);
  }, [pathname]);

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 240);
        last = y;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = (event: React.MouseEvent) => {
    setOpen(false);
    if (pathname !== "/") return;
    event.preventDefault();
    scrollToTarget(0);
  };

  const toContact = (event: React.MouseEvent) => {
    event.preventDefault();
    setOpen(false);
    requestAnimationFrame(() => scrollToTarget("#contact"));
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const classes = ["header", open && "is-open", hidden && !open && "is-hidden", scrolled && "is-scrolled"]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className={classes}>
        <Link className="chip logo-chip" href="/" onClick={toTop}>
          <Mark />
          MarNet
        </Link>
        <nav className="nav-pill" aria-label="Pages">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "on" : undefined}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <a className="chip contact" href="#contact" onClick={toContact} aria-label="Contact us">
            <span className="chip-label">Contact us</span>
            <MailIcon />
          </a>
          <button
            className="chip round"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="burger" aria-hidden="true" />
          </button>
        </div>
      </header>
      <div className={open ? "menu is-open" : "menu"} aria-hidden={!open} inert={!open}>
        <nav>
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={isActive(link.href) ? "on" : undefined}
              style={{ transitionDelay: open ? `${0.08 + index * 0.05}s` : "0s" }}
            >
              <span>0{index + 1}</span>
              {link.label}
            </Link>
          ))}
          <a href="#contact" onClick={toContact} style={{ transitionDelay: open ? `${0.08 + links.length * 0.05}s` : "0s" }}>
            <span>0{links.length + 1}</span>
            Contact
          </a>
        </nav>
        <div className="menu-side">
          <img src="/img/step-wake.jpg" alt="" />
          <p>Precaution is better than cure.</p>
          <p>jakob@marconnect.no</p>
          <p>Dalevegen 19, 6230 Sykkulven, Norway</p>
        </div>
      </div>
    </>
  );
}

function Mark() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" aria-hidden="true">
      <circle cx="14" cy="14" r="12" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="14" cy="14" r="7" fill="none" stroke="#2563ff" strokeWidth="1.6" />
      <circle cx="14" cy="14" r="2.6" fill="#2563ff" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 4.5 8 9l6-4.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
