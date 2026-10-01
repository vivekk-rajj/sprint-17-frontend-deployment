const stats = [
  { label: 'Build readiness', value: '100%' },
  { label: 'Performance target', value: '90+' },
  { label: 'Accessibility target', value: '90+' },
  { label: 'Deploy target', value: 'Vercel' },
];

const features = [
  {
    title: 'Production build first',
    text: 'This app is structured around strict type checking and a clean production build pipeline for Vercel deployments.',
  },
  {
    title: 'Performance-focused UI',
    text: 'Layouts, typography, and asset strategy are tuned for fast first render and strong Lighthouse scores.',
  },
  {
    title: 'Accessible semantics',
    text: 'The interface uses clear headings, landmark regions, and strong contrast to satisfy accessibility expectations.',
  },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="hero">
        <nav className="topbar" aria-label="Main navigation">
          <div className="brand" aria-label="Sprint 17 Frontend Deployment">
            Sprint 17
          </div>
          <div className="nav-links" aria-label="Site links">
            <a href="#features">Features</a>
            <a href="#checklist">Checklist</a>
            <a href="#launch">Launch</a>
          </div>
        </nav>

        <div className="hero-copy">
          <p className="eyebrow">Production release pipeline</p>
          <h1>Ready for deployment, built for speed.</h1>
          <p className="lead">
            This frontend is purpose-built for a public production deployment. It emphasizes clean build output,
            responsive UI, and Lighthouse-friendly performance tuning.
          </p>
          <div className="cta-row">
            <a className="primary-btn" href="#launch">
              View launch checklist
            </a>
            <a className="secondary-btn" href="#features">
              Explore features
            </a>
          </div>
        </div>

        <div className="hero-panel" aria-label="Build quality summary">
          <p className="panel-label">Deployment readiness</p>
          <div className="stat-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section id="features" className="content-section" aria-labelledby="features-heading">
        <div className="section-heading">
          <p className="eyebrow">Core requirements</p>
          <h2 id="features-heading">What the deployment build includes</h2>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="checklist" className="content-section checklist" aria-labelledby="checklist-heading">
        <div className="section-heading narrow">
          <p className="eyebrow">Launch checklist</p>
          <h2 id="checklist-heading">Sprint 17 production requirements</h2>
        </div>

        <ul className="check-list">
          <li>Run a strict production build with <code>npm run build</code>.</li>
          <li>Resolve all TypeScript and lint issues before deployment.</li>
          <li>Map environment variables through the Vercel dashboard.</li>
          <li>Ship the app to a live Vercel public URL.</li>
          <li>Run a Lighthouse audit targeting 90+ in performance and accessibility.</li>
          <li>Keep the DOM semantic, responsive, and free from heavy blocking assets.</li>
        </ul>
      </section>

      <section id="launch" className="content-section launch" aria-labelledby="launch-heading">
        <div className="section-heading narrow">
          <p className="eyebrow">Production handoff</p>
          <h2 id="launch-heading">Vercel-ready deployment status</h2>
        </div>

        <div className="launch-box">
          <p>
            The app is configured as a production-lean Next.js frontend, with a deployable structure ready for Vercel.
            Use the repository settings in Vercel to add environment variables and trigger the first production deployment.
          </p>
        </div>
      </section>
    </main>
  );
}
