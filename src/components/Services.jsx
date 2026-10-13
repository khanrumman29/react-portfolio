import { services } from '../data/services'

export default function Services() {
  const handleInquire = (serviceTitle) => {
    const contactEl = document.querySelector('#contact')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' })
      // Preselect service in contact form if input exists
      const selectEl = document.querySelector('#contact-service-select')
      if (selectEl) {
        selectEl.value = serviceTitle
      }
    }
  }

  return (
    <section className="services-section" id="services" aria-labelledby="services-heading">
      <div className="section-meta-header">
        <span className="section-meta-number">04</span>
        <h2 className="section-meta-title" id="services-heading">
          Services
        </h2>
        <span className="section-meta-tagline">Capabilities & Offerings</span>
      </div>

      <div className="services-grid">
        {services.map((s) => (
          <article key={s.number} className="service-card">
            <div className="service-card__top">
              <span className="service-card__num">{s.number}</span>
              <span className="service-card__highlight">{s.highlight}</span>
            </div>

            <h3 className="service-card__title">{s.title}</h3>
            <p className="service-card__tagline">{s.tagline}</p>
            <p className="service-card__desc">{s.description}</p>

            <div className="service-card__deliverables">
              <span className="deliverables-heading">Deliverables Include:</span>
              <ul className="service-deliverables-list">
                {s.deliverables.map((item) => (
                  <li key={item} className="service-deliverables-item">
                    <span className="service-bullet">▪</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="service-card__bottom">
              <button
                type="button"
                className="service-inquire-btn"
                onClick={() => handleInquire(s.title)}
              >
                Inquire for {s.title} →
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
