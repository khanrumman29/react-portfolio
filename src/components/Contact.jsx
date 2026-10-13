import { useState } from 'react'
import { siteConfig } from '../data/config'
import { services } from '../data/services'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'Video Editing',
    timeline: 'Within 2-4 weeks',
    message: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState('')

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(siteConfig.email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
      } else {
        // Fallback
        const textArea = document.createElement('textarea')
        textArea.value = siteConfig.email
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
      }
    } catch (err) {
      console.warn('Clipboard copy notice:', err)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
    if (formError) setFormError('')
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setFormError('Please fill out your name, email, and project details.')
      return
    }

    // Honest mailto fallback handler as recommended in PRD Section 6.10
    const subject = encodeURIComponent(`Project Inquiry: ${formState.projectType} — ${formState.name}`)
    const body = encodeURIComponent(
      `Hi Rumman,\n\nName: ${formState.name}\nEmail: ${formState.email}\nProject Type: ${formState.projectType}\nTimeline: ${formState.timeline}\n\nProject Overview:\n${formState.message}\n`
    )

    // Trigger user's mail client
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`

    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
    }, 8000)
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="section-meta-header">
        <span className="section-meta-number">07</span>
        <h2 className="section-meta-title" id="contact-heading">
          Contact
        </h2>
        <span className="section-meta-tagline">Start a Conversation</span>
      </div>

      <div className="contact-hero">
        <div className="contact-statement">
          <h3 className="contact-headline">
            LET&apos;S
            <br />
            CREATE
            <br />
            SOMETHING <span className="script-accent">NEXT.</span>
          </h3>
          <p className="contact-subhead">
            Have a brand film, social reel, kinetic motion project, or commercial edit in mind?
            I collaborate with directors, agencies, and creators worldwide.
          </p>

          <div className="contact-quick-actions">
            <a
              href={`mailto:${siteConfig.email}`}
              className="contact-action-btn contact-action-btn--primary"
            >
              Email Directly ↗
            </a>
            <button
              type="button"
              className="contact-action-btn contact-action-btn--secondary"
              onClick={handleCopyEmail}
            >
              {copied ? '✓ Copied to Clipboard!' : 'Copy Email Address 📋'}
            </button>
          </div>

          <div className="contact-availability-card">
            <span className="availability-pulse-indicator" />
            <div className="availability-text">
              <strong>{siteConfig.availabilityText}</strong>
              <small>Currently scheduling projects & collaborations</small>
            </div>
          </div>
        </div>

        {/* Project Inquiry Form */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <div className="form-header">
              <span className="form-legend">PROJECT INQUIRY FORM</span>
              <span className="form-note">Direct to Inbox</span>
            </div>

            {formError && <div className="form-alert form-alert--error">{formError}</div>}
            {formSubmitted && (
              <div className="form-alert form-alert--success">
                ✓ Launching your mail client with prefilled details for <strong>{siteConfig.email}</strong>.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="contact-name">Your Name / Company *</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="e.g. Alex Vance or Studio Eleven"
                value={formState.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email Address *</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="your.email@domain.com"
                value={formState.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-service-select">Project Type</label>
                <select
                  id="contact-service-select"
                  name="projectType"
                  value={formState.projectType}
                  onChange={handleInputChange}
                >
                  {services.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Complete Production">Complete Production</option>
                  <option value="Other Creative Request">Other Creative Request</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contact-timeline">Timeline</label>
                <select
                  id="contact-timeline"
                  name="timeline"
                  value={formState.timeline}
                  onChange={handleInputChange}
                >
                  <option value="Urgent (1-2 weeks)">Urgent (1-2 weeks)</option>
                  <option value="Within 2-4 weeks">Within 2-4 weeks)</option>
                  <option value="Next Month">Next Month</option>
                  <option value="Flexible / Exploring">Flexible / Exploring</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Project Overview & References *</label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                placeholder="Tell me about the footage, estimated deliverables, mood, or creative references..."
                value={formState.message}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit" className="form-submit-btn">
              Send Project Inquiry →
            </button>
          </form>
        </div>
      </div>

      {/* Quick Contact & Social Strip */}
      <div className="contact-bar" id="contact-bar" aria-label="Direct contact bar">
        <span className="contact-bar__label">Direct</span>
        <a href={`mailto:${siteConfig.email}`} className="contact-bar__link">
          {siteConfig.email}
        </a>
        <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} className="contact-bar__link">
          {siteConfig.phone}
        </a>
        <div className="contact-bar__socials">
          {siteConfig.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill-link"
            >
              {social.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
