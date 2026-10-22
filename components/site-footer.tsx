import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer dark">
      <div className="footer-top">
        <div>
          <div className="footer-brand">MarConnect</div>
          <p>Life is the most valuable thing at sea. Norwegian technology for the oldest risk on the water.</p>
        </div>
        <div>
          <h4>Products</h4>
          <Link href="/products#marsurvive">MarSurvive</Link>
          <Link href="/products#marnet">MarNet</Link>
          <Link href="/how-it-works">How it works</Link>
        </div>
        <div>
          <h4>Company</h4>
          <Link href="/story">The story</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/journal">Journal</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="mailto:jakob@marconnect.no">jakob@marconnect.no</a>
          <a href="tel:+4799168460">+47 991 68 460</a>
          <address>Dalevegen 19, 6230 Sykkulven</address>
        </div>
      </div>
      <div className="wordmark" aria-hidden="true">MarConnect</div>
      <div className="fine">
        <span>© {new Date().getFullYear()} MarConnect AS</span>
        <span>Imagery is illustrative. The overboard story is a scenario.</span>
      </div>
    </footer>
  );
}
