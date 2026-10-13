import { siteConfig } from '../data/config'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__main">
        <div className="site-footer__brand-col">
          <span className="site-footer__brand-title">{siteConfig.name}</span>
          <span className="site-footer__brand-role">
            Motion Design / Video Editing / Visual Storytelling
          </span>
          <p className="site-footer__location">
            Operating Worldwide · {siteConfig.location}
          </p>
        </div>

        <div className="site-footer__links-col">
          <span className="site-footer__heading">Navigation</span>
          <div className="site-footer__nav-grid">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#showreel">Showreel</a>
            <a href="#projects">Selected Works</a>
            <a href="#services">Services</a>
            <a href="#process">How I Work</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="site-footer__social-col">
          <span className="site-footer__heading">Social Connect</span>
          <div className="site-footer__social-links">
            {siteConfig.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__social-item"
              >
                <span>{social.label}</span>
                <span className="social-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>

        <div className="site-footer__action-col">
          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
          >
            <span className="top-arrow">↑</span>
            <span>BACK TO TOP</span>
          </button>
          <span className="site-footer__mark" title="Creative infinity mark">
            0∞
          </span>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p className="site-footer__copy">
          © {currentYear} {siteConfig.name}. All creative rights reserved.
        </p>
        <p className="site-footer__tag">
          Crafted with editorial typography and deliberate motion.
        </p>
      </div>
    </footer>
  )
}
