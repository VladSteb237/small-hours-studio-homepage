export default function NotFound() {
  return (
    <main>
      <section className="not-found shell" aria-labelledby="not-found-heading">
        <p className="section-label">Workshop not found</p>
        <h1 id="not-found-heading">That workshop isn&apos;t here.</h1>
        <p>Try the catalog to find something good to make.</p>
        <a className="text-link" href="/#workshops">Back to workshops <span aria-hidden="true">↗</span></a>
      </section>
    </main>
  );
}
