import { useState, useEffect } from 'react'
import { navigationItems } from '../data/navigation'
import { siteConfig } from '../data/config'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useLockBodyScroll(mobileMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const topOffset = 70
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - topOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <a className="site-brand" href="#home" aria-label="Rumman home" onClick={(e) => handleNavClick(e, '#home')}>
          <span className="site-brand__name">{siteConfig.name}</span>
          <span className="site-brand__tagline">
            Motion design
            <br />
            Video editing
            <br />
            Visual storytelling
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="site-nav hidden md:grid" aria-label="Main navigation">
          {navigationItems.map(({ label, href }) => (
            <a
              className="site-nav__link"
              href={href}
              key={label}
              onClick={(e) => handleNavClick(e, href)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Status Indicator & Mobile Toggle */}
        <div className="site-header__actions">
          <span
            className="site-status"
            aria-label={siteConfig.availabilityText}
            title={siteConfig.availabilityText}
          >
            <span className="site-status__dot" />
            <span className="site-status__pulse" />
          </span>

          <button
            type="button"
            className="mobile-nav-toggle md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </header>

      {/* Accessible Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          role="presentation"
        >
          <div
            id="mobile-navigation"
            className="mobile-menu-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-menu-drawer__header">
              <span className="site-brand__name">{siteConfig.name}</span>
              <button
                type="button"
                className="mobile-menu-close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                ✕
              </button>
            </div>

            <nav className="mobile-menu-drawer__nav" aria-label="Mobile navigation">
              {navigationItems.map(({ label, href }, index) => (
                <a
                  key={label}
                  href={href}
                  className="mobile-menu-drawer__link"
                  onClick={(e) => handleNavClick(e, href)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="mobile-menu-index">0{index + 1}</span>
                  <span className="mobile-menu-label">{label}</span>
                  <span className="mobile-menu-arrow">→</span>
                </a>
              ))}
            </nav>

            <div className="mobile-menu-drawer__footer">
              <div className="mobile-menu-status">
                <span className="site-status__dot" />
                <span>{siteConfig.availabilityText}</span>
              </div>
              <a href={`mailto:${siteConfig.email}`} className="mobile-menu-email">
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}