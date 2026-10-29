import { notFound } from "next/navigation";
import { workshops } from "../../../lib/workshops";

export function generateStaticParams() {
  return workshops.map((workshop) => ({ slug: workshop.slug }));
}

export default async function WorkshopPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const workshop = workshops.find((item) => item.slug === slug);

  if (!workshop) {
    notFound();
  }

  return (
    <main>
      <header className="site-header shell">
        <a className="wordmark" href="/" aria-label="Small Hours Studio home">
          <span>Small Hours</span>
          <span>Studio</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="/#studio">The studio</a>
          <a href="/#workshops">Workshops</a>
        </nav>
        <a className="header-link" href="/#workshops">
          Find a workshop <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section
        className={`workshop-detail shell ${workshop.accent}`}
        aria-labelledby="workshop-title">
        <a className="back-link workshop-back-link" href="/#workshops">
          <span aria-hidden="true">←</span> Back to workshops
        </a>
        <div className="workshop-detail-grid">
          <div>
            <p className="section-label">{workshop.number} / Workshop</p>
            <h1 id="workshop-title">{workshop.title}</h1>
            <p className="workshop-detail-summary">{workshop.summary}</p>
          </div>
          <div className="workshop-detail-copy">
            <p>{workshop.description}</p>
            <p>
              <strong>Hosted by</strong>
              <br />
              {workshop.host}
            </p>
          </div>
        </div>
        <dl className="workshop-details workshop-detail-facts">
          {workshop.details.map(([term, detail]) => (
            <div className="detail-row" key={term}>
              <dt>{term}</dt>
              <dd>{detail}</dd>
            </div>
          ))}
        </dl>
        <p className="demo-note">
          Demo studio · Illustrative prices only · Dates to be announced
        </p>
      </section>

      <footer className="site-footer shell">
        <a className="wordmark" href="/" aria-label="Small Hours Studio home">
          <span>Small Hours</span>
          <span>Studio</span>
        </a>
        <p>Make room for making.</p>
        <a className="back-link" href="/#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </main>
  );
}
