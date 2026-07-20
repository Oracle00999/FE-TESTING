import portiqShip from './assets/portiq-ship.png'

const buildLabel = import.meta.env.VITE_RELEASE_LABEL ?? 'Not configured'
const apiUrl = import.meta.env.VITE_API_URL ?? 'Not configured'

const capabilities = [
  { label: 'Framework', value: 'React + Vite' },
  { label: 'Web server', value: 'Nginx' },
  { label: 'Delivery', value: 'Portiq VPS' },
  { label: 'Build variable', value: buildLabel },
  { label: 'API target', value: apiUrl },
]

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Portiq frontend check home">
        <img src={portiqShip} alt="" />
        <span>Portiq</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/status">Status</a>
      </nav>
    </header>
  )
}

function HomePage() {
  return (
    <>
      <main className="hero">
        <img className="hero-ship" src={portiqShip} alt="Portiq container ship mark" />
        <div className="hero-content">
          <p className="eyebrow"><span /> Frontend release 003</p>
          <h1>Shipped from React.<br />Running on Portiq.</h1>
          <p className="hero-copy">
            A lightweight frontend built to cross the full deployment route from GitHub to a connected VPS.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="/status">View deployment</a>
            <a className="secondary-action" href="https://github.com" rel="noreferrer" target="_blank">GitHub</a>
          </div>
        </div>
        <p className="release-stamp">FE / 003</p>
      </main>

      <section className="manifest" aria-labelledby="manifest-title">
        <div>
          <p className="section-kicker">Release manifest</p>
          <h2 id="manifest-title">Everything made the crossing.</h2>
        </div>
        <div className="manifest-grid">
          {capabilities.map((item, index) => (
            <article key={item.label}>
              <span>0{index + 1}</span>
              <p>{item.label}</p>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function StatusPage() {
  return (
    <main className="status-page">
      <div className="status-mark">
        <span className="pulse" />
        <span>Live</span>
      </div>
      <h1>Frontend deployment confirmed.</h1>
      <p>
        React rendered this route successfully through Portiq's Nginx SPA fallback.
      </p>
      <dl>
        {capabilities.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
      <a className="primary-action" href="/">Return home</a>
    </main>
  )
}

function App() {
  const isStatusPage = window.location.pathname === '/status'

  return (
    <div className="app-shell">
      <Header />
      {isStatusPage ? <StatusPage /> : <HomePage />}
      <footer>
        <span>Portiq frontend check</span>
        <span>Built with Vite</span>
      </footer>
    </div>
  )
}

export default App
