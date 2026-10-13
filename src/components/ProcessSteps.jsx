import { processSteps } from '../data/process'

export default function ProcessSteps() {
  return (
    <section className="process-section" id="process" aria-labelledby="process-heading">
      <div className="section-meta-header">
        <span className="section-meta-number">05</span>
        <h2 className="section-meta-title" id="process-heading">
          How I Work
        </h2>
        <span className="section-meta-tagline">Four-Step Creative Workflow</span>
      </div>

      <div className="process-timeline">
        {processSteps.map((step, idx) => (
          <div key={step.step} className="process-card">
            <div className="process-card__header">
              <span className="process-card__number">{step.step}</span>
              <span className="process-card__progress-line" />
              <span className="process-card__phase">PHASE 0{idx + 1}</span>
            </div>

            <h3 className="process-card__title">{step.name}</h3>
            <h4 className="process-card__headline">{step.headline}</h4>
            <p className="process-card__desc">{step.description}</p>

            <ul className="process-card__details">
              {step.details.map((item) => (
                <li key={item} className="process-card__item">
                  <span className="process-bullet">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
