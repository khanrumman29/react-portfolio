import { siteConfig } from '../data/config'

const creativePrinciples = [
  { label: '01', title: 'Intentional Rhythm', desc: 'Every frame cut has an emotional reason.' },
  { label: '02', title: 'Sonic Synchronization', desc: 'Audio and visuals breathe together seamlessly.' },
  { label: '03', title: 'High-Retention Pacing', desc: 'Hooking attention without sacrificing storytelling depth.' },
  { label: '04', title: 'Cinematic Atmosphere', desc: 'Mood, color grading, and texture that linger.' },
]

export default function About() {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) {
      const topOffset = 70
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - topOffset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <div className="section-meta-header">
        <span className="section-meta-number">01</span>
        <h2 className="section-meta-title" id="about-heading">
          About
        </h2>
        <span className="section-meta-tagline">Studio & Philosophy</span>
      </div>

      <div className="about-grid">
        {/* Left Column: Creative Narrative */}
        <div className="about-narrative">
          <p className="about-lead">
            {siteConfig.bio}
          </p>
          <p className="about-body">
            With a focus on rhythmic cutting, kinetic typography, and high-contrast editorial aesthetics,
            I partner with forward-thinking directors, creative agencies, and digital creators worldwide.
            Every timeline is treated like an immersive canvas where sound design and visual momentum work as one.
          </p>

          <div className="about-actions">
            <button
              type="button"
              className="about-btn about-btn--primary"
              onClick={() => scrollTo('#projects')}
            >
              Explore Selected Work →
            </button>
            <button
              type="button"
              className="about-btn about-btn--secondary"
              onClick={() => scrollTo('#contact')}
            >
              Get In Touch ↗
            </button>
          </div>
        </div>

        {/* Center Column: Portrait Artwork */}
        <div className="about-portrait-wrapper" aria-label="Portrait of Rumman">
          <div className="about-portrait-frame">
            <div className="about-portrait-image" />
            <div className="about-portrait-overlay">
              <span className="about-portrait-strap">BETTER</span>
              <span className="about-portrait-strap">VISION</span>
              <span className="about-portrait-strap">TOMORROW</span>
            </div>
            <div className="about-portrait-badge">
              <span>RM / STUDIO</span>
            </div>
          </div>
        </div>

        {/* Right Column: Creative Principles */}
        <div className="about-principles">
          <h3 className="about-subheading">Creative Core</h3>
          <ul className="principles-list">
            {creativePrinciples.map((item) => (
              <li key={item.label} className="principles-item">
                <span className="principles-num">{item.label}</span>
                <div className="principles-content">
                  <strong className="principles-title">{item.title}</strong>
                  <p className="principles-desc">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
