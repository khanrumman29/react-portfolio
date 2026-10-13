export default function ProjectCard({ project, onClick }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick(project)
    }
  }

  return (
    <article
      className="project-card"
      onClick={() => onClick(project)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View case study for ${project.title}`}
    >
      <div className="project-card__image-container">
        <img
          src={project.coverImage}
          alt={project.title}
          className="project-card__image"
          loading="lazy"
        />
        <div className="project-card__overlay">
          <span className="project-card__view-action">View Case Study ↗</span>
        </div>
        <div className="project-card__badge-tag">
          <span>{project.category}</span>
        </div>
      </div>

      <div className="project-card__meta">
        <div className="project-card__id">{project.id}</div>
        <div className="project-card__info">
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__summary">{project.summary}</p>
          <div className="project-card__roles">
            {project.role.slice(0, 2).map((r) => (
              <span key={r} className="project-card__role-tag">
                {r}
              </span>
            ))}
          </div>
        </div>
        <span className="project-card__year">{project.year}</span>
      </div>
    </article>
  )
}
