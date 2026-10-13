import { tools, capabilities } from '../data/capabilities'

export default function Capabilities() {
  return (
    <section className="capabilities-section" id="capabilities" aria-labelledby="capabilities-heading">
      <div className="section-meta-header">
        <span className="section-meta-number">06</span>
        <h2 className="section-meta-title" id="capabilities-heading">
          Capabilities & Tools
        </h2>
        <span className="section-meta-tagline">Craft & Technical Toolkit</span>
      </div>

      <div className="capabilities-split">
        {/* Core Craft Capabilities */}
        <div className="capabilities-left">
          <h3 className="capabilities-subheading">Core Craft Strengths</h3>
          <div className="capabilities-list">
            {capabilities.map((cap, idx) => (
              <div key={cap.title} className="capability-card">
                <span className="capability-index">0{idx + 1}</span>
                <div className="capability-body">
                  <h4 className="capability-title">{cap.title}</h4>
                  <p className="capability-desc">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Software Suite */}
        <div className="capabilities-right">
          <h3 className="capabilities-subheading">Software Environment</h3>
          <div className="tools-grid">
            {tools.map((t) => (
              <div key={t.name} className="tool-card">
                <div className="tool-card__top">
                  <span className="tool-dot" />
                  <span className="tool-category">{t.category}</span>
                </div>
                <h4 className="tool-name">{t.name}</h4>
                <p className="tool-note">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
