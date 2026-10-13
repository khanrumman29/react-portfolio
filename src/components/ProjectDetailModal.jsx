import { useEffect } from 'react'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'

export default function ProjectDetailModal({
  project,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}) {
  useLockBodyScroll(!!project)

  // Keyboard navigation: Escape to close, Left/Right arrow keys for navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft' && hasPrev) {
        onPrev()
      } else if (e.key === 'ArrowRight' && hasNext) {
        onNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, onPrev, onNext, hasPrev, hasNext])

  if (!project) return null

  const handleDiscussClick = () => {
    onClose()
    const contactEl = document.querySelector('#contact')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
      className="project-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="project-modal-shell"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="project-modal-header">
          <div className="project-modal-index">
            <span>PROJECT CASE STUDY</span>
            <span className="modal-id">/{project.id}</span>
          </div>

          <div className="project-modal-nav">
            <button
              type="button"
              className="modal-nav-btn"
              onClick={onPrev}
              disabled={!hasPrev}
              aria-label="Previous project"
              title="Previous project (←)"
            >
              ← PREV
            </button>
            <span className="modal-nav-divider">/</span>
            <button
              type="button"
              className="modal-nav-btn"
              onClick={onNext}
              disabled={!hasNext}
              aria-label="Next project"
              title="Next project (→)"
            >
              NEXT →
            </button>
            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close project modal"
              title="Close (Esc)"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="project-modal-body">
          {/* Hero Media Frame */}
          <div className="project-modal-hero">
            <img
              src={project.coverImage}
              alt={project.title}
              className="project-modal-image"
              loading="lazy"
            />
            <div className="project-modal-badge">
              <span className="badge-cat">{project.category}</span>
              <span className="badge-year">{project.year}</span>
            </div>
          </div>

          {/* Title & Metadata Strip */}
          <div className="project-modal-meta-strip">
            <div className="modal-title-wrap">
              <h2 id="modal-project-title" className="modal-title">
                {project.title}
              </h2>
              <p className="modal-summary">{project.summary}</p>
            </div>

            <div className="modal-specs-grid">
              <div className="spec-item">
                <span className="spec-label">CLIENT / CONTEXT</span>
                <span className="spec-value">{project.client || 'Studio Commission'}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">DISCIPLINE</span>
                <span className="spec-value">{project.category}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">TIMELINE</span>
                <span className="spec-value">{project.year}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">ROLE</span>
                <span className="spec-value">{project.role.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Narrative / Overview */}
          <div className="project-modal-narrative">
            <div className="narrative-col">
              <h3 className="narrative-heading">Creative Approach & Challenge</h3>
              <p className="narrative-body">{project.description}</p>
            </div>

            <div className="tools-col">
              <h3 className="narrative-heading">Software & Tools</h3>
              <div className="tools-pills">
                {project.tools.map((tool) => (
                  <span key={tool} className="tool-pill">
                    {tool}
                  </span>
                ))}
              </div>

              <h3 className="narrative-heading deliverables-heading">Deliverables</h3>
              <ul className="deliverables-list">
                {project.deliverables?.map((item) => (
                  <li key={item} className="deliverable-item">
                    <span className="deliverable-dot">▪</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional Production Stills */}
          {project.stills && project.stills.length > 0 && (
            <div className="project-modal-stills">
              <h3 className="narrative-heading">Production Frames & Selects</h3>
              <div className="stills-grid">
                {project.stills.map((stillUrl, idx) => (
                  <div key={idx} className="still-card">
                    <img
                      src={stillUrl}
                      alt={`${project.title} production frame ${idx + 1}`}
                      className="still-image"
                      loading="lazy"
                    />
                    <span className="still-label">FRAME SELECT #{idx + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modal Bottom CTA */}
          <div className="project-modal-cta">
            <div className="modal-cta-text">
              <h4>Interested in this visual aesthetic?</h4>
              <p>Let&apos;s discuss custom editing, motion design, or campaign formats.</p>
            </div>
            <button
              type="button"
              className="modal-cta-btn"
              onClick={handleDiscussClick}
            >
              Discuss a Similar Project →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
