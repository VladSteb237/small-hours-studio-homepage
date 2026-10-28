const workshops = [
  {
    number: "01",
    title: "Print something good",
    summary: "Turn a small sketch into a print worth making room for.",
    details: [
      ["Duration", "3 hours"],
      ["Example price", "$65, materials included"],
      ["Date", "Next date to be announced"],
      ["Format", "In person at Small Hours Studio"],
    ],
    accent: "terracotta",
  },
  {
    number: "02",
    title: "A garden in a pot",
    summary: "Make a little green space, even if your yard is a windowsill.",
    details: [
      ["Duration", "2 hours"],
      ["Example price", "$45, materials included"],
      ["Date", "Next date to be announced"],
      ["Format", "In person at Small Hours Studio"],
    ],
    accent: "sage",
  },
  {
    number: "03",
    title: "Make something",
    summary: "Create a tangible item from start to finish.",
    details: [
      ["Duration", "3 hours"],
      ["Example price", "$75, materials included"],
      ["Date", "Next date to be announced"],
      ["Format", "In person at Small Hours Studio"],
    ],
    accent: "coral",
  },
];

function ArrowUpRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="arrow-icon">
      <path
        d="M3 13 13 3M5 3h8v8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WorkshopCard({ workshop }: { workshop: (typeof workshops)[number] }) {
  return (
    <article className={`workshop-card ${workshop.accent}`}>
      <div className="card-topline">
        <span className="workshop-number">{workshop.number}</span>
        <span className="card-mark" aria-hidden="true" />
      </div>
      <h3>{workshop.title}</h3>
      <p className="workshop-summary">{workshop.summary}</p>
      <dl className="workshop-details">
        {workshop.details
          .filter(([term]) => term !== "Example price")
          .map(([term, detail]) => (
            <div className="detail-row" key={term}>
              <dt>{term}</dt>
              <dd>{detail}</dd>
            </div>
          ))}
      </dl>
      <div className="workshop-price" aria-label={`${workshop.details[1][1]}`}>
        <span>Example price</span>
        <strong>{workshop.details[1][1].split(",")[0]}</strong>
        <span>materials included</span>
      </div>
    </article>
  );
}

export default function Page() {
  return (
    <main>
      <header className="site-header shell">
        <a
          className="wordmark"
          href="#top"
          aria-label="Small Hours Studio home">
          <span>Small Hours</span>
          <span>Studio</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#studio">The studio</a>
          <a href="#workshops">Workshops</a>
        </nav>
        <a className="header-link" href="#workshops">
          Find a workshop Make something <ArrowUpRight />
        </a>
      </header>

      <section className="hero shell" id="top" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" /> A community workshop space
          </p>
          <h1 id="hero-heading">
            Make time to Test Home
            <br />
            <em>make something.</em>
          </h1>
          <p className="hero-intro">
            Small Hours is a friendly studio for curious adults, including
            beginners. Come learn a new skill, work with your hands, and leave
            with something that feels like yours.
          </p>
          <a className="text-link" href="#workshops">
            Find your workshop <ArrowUpRight />
          </a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="sun-shape" />
          <div className="arch-shape">
            <span />
          </div>
          <div className="spark spark-one">✳</div>
          <div className="spark spark-two">✳</div>
          <div className="art-caption">
            Make
            <br />
            room.
          </div>
        </div>
      </section>

      <section
        className="studio-section shell"
        id="studio"
        aria-labelledby="studio-heading">
        <div className="section-label">01 / About the studio</div>
        <div className="studio-grid">
          <h2 id="studio-heading">
            A little less scrolling.
            <br />
            <em>A little more doing.</em>
          </h2>
          <div className="studio-copy">
            <p>
              There is a particular kind of joy in learning alongside other
              people. Small Hours is a place to try, tinker, and get a bit of
              ink or soil on your hands.
            </p>
            <p>
              Our small-group workshops are relaxed, practical, and made for
              real life — no experience or perfect idea required.
            </p>
          </div>
        </div>
      </section>

      <section
        className="workshops-section shell"
        id="workshops"
        aria-labelledby="workshops-heading">
        <div className="workshops-heading-row">
          <div>
            <div className="section-label">02 / Coming up</div>
            <h2 id="workshops-heading">
              Find your
              <br />
              <em>workshop.</em>
            </h2>
          </div>
          <p className="catalog-note">
            Two ways to spend
            <br className="desktop-break" /> a few good hours.
          </p>
        </div>
        <div className="workshop-grid">
          {workshops.map((workshop) => (
            <WorkshopCard key={workshop.title} workshop={workshop} />
          ))}
        </div>
        <p className="demo-note">
          Demo studio · Illustrative prices only · Dates to be announced
        </p>
      </section>

      <footer className="site-footer shell">
        <a className="wordmark" href="#top">
          <span>Small Hours</span>
          <span>Studio</span>
        </a>
        <p>Make room for making.</p>
        <a className="back-link" href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </main>
  );
}

// const workshops = [
//   {
//     number: '01',
//     title: 'Print something good',
//     summary: 'Turn a small sketch into a print worth making room for.',
//     details: [
//       ['Duration', '3 hours'],
//       ['Example price', '$65, materials included'],
//       ['Date', 'Next date to be announced'],
//       ['Format', 'In person at Small Hours Studio'],
//     ],
//     accent: 'terracotta',
//   },
//   {
//     number: '02',
//     title: 'A garden in a pot',
//     summary: 'Make a little green space, even if your yard is a windowsill.',
//     details: [
//       ['Duration', '2 hours'],
//       ['Example price', '$45, materials included'],
//       ['Date', 'Next date to be announced'],
//       ['Format', 'In person at Small Hours Studio'],
//     ],
//     accent: 'sage',
//   },
// ]

// function ArrowUpRight() {
//   return (
//     <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="arrow-icon">
//       <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   )
// }

// function WorkshopCard({ workshop }: { workshop: (typeof workshops)[number] }) {
//   return (
//     <article className={`workshop-card ${workshop.accent}`}>
//       <div className="card-topline">
//         <span className="workshop-number">{workshop.number}</span>
//         <span className="card-mark" aria-hidden="true" />
//       </div>
//       <h3>{workshop.title}</h3>
//       <p className="workshop-summary">{workshop.summary}</p>
//       <dl className="workshop-details">
//         {workshop.details.map(([term, detail]) => (
//           <div className="detail-row" key={term}>
//             <dt>{term}</dt>
//             <dd>{detail}</dd>
//           </div>
//         ))}
//       </dl>
//     </article>
//   )
// }

// export default function Page() {
//   return (
//     <main>
//       <header className="site-header shell">
//         <a className="wordmark" href="#top" aria-label="Small Hours Studio home">
//           <span>Small Hours</span>
//           <span>Studio</span>
//         </a>
//         <nav aria-label="Main navigation">
//           <a href="#studio">The studio</a>
//           <a href="#workshops">Workshops</a>
//         </nav>
//         <a className="header-link" href="#workshops">
//           Find a workshop <ArrowUpRight />
//         </a>
//       </header>

//       <section className="hero shell" id="top" aria-labelledby="hero-heading">
//         <div className="hero-copy">
//           <p className="eyebrow"><span className="eyebrow-dot" /> A community workshop space</p>
//           <h1 id="hero-heading">Make time to<br /><em>make something.</em></h1>
//           <p className="hero-intro">Small Hours is a friendly studio for curious adults, including beginners. Come learn a new skill, work with your hands, and leave with something that feels like yours.</p>
//           <a className="text-link" href="#workshops">Find your workshop <ArrowUpRight /></a>
//         </div>
//         <div className="hero-art" aria-hidden="true">
//           <div className="sun-shape" />
//           <div className="arch-shape"><span /></div>
//           <div className="spark spark-one">✳</div>
//           <div className="spark spark-two">✳</div>
//           <div className="art-caption">Make<br />room.</div>
//         </div>
//       </section>

//       <section className="studio-section shell" id="studio" aria-labelledby="studio-heading">
//         <div className="section-label">01 / About the studio</div>
//         <div className="studio-grid">
//           <h2 id="studio-heading">A little less scrolling.<br /><em>A little more doing.</em></h2>
//           <div className="studio-copy">
//             <p>There is a particular kind of joy in learning alongside other people. Small Hours is a place to try, tinker, and get a bit of ink or soil on your hands.</p>
//             <p>Our small-group workshops are relaxed, practical, and made for real life — no experience or perfect idea required.</p>
//           </div>
//         </div>
//       </section>

//       <section className="workshops-section shell" id="workshops" aria-labelledby="workshops-heading">
//         <div className="workshops-heading-row">
//           <div>
//             <div className="section-label">02 / Coming up</div>
//             <h2 id="workshops-heading">Find your<br /><em>workshop.</em></h2>
//           </div>
//           <p className="catalog-note">Two ways to spend<br className="desktop-break" /> a few good hours.</p>
//         </div>
//         <div className="workshop-grid">
//           {workshops.map((workshop) => <WorkshopCard key={workshop.title} workshop={workshop} />)}
//         </div>
//         <p className="demo-note">Demo studio · Illustrative prices only · Dates to be announced</p>
//       </section>

//       <footer className="site-footer shell">
//         <a className="wordmark" href="#top"><span>Small Hours</span><span>Studio</span></a>
//         <p>Make room for making.</p>
//         <a className="back-link" href="#top">Back to top <span aria-hidden="true">↑</span></a>
//       </footer>
//     </main>
//   )
// }
