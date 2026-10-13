import { useState, useMemo } from 'react'
import { projects, categories } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectDetailModal from './ProjectDetailModal'

export default function SelectedWorks() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects
    return projects.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase())
  }, [activeCategory])

  // Get index and next/prev for modal navigation
  const currentIndex = selectedProject
    ? filteredProjects.findIndex((p) => p.id === selectedProject.id)
    : -1

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedProject(filteredProjects[currentIndex - 1])
    }
  }

  const handleNext = () => {
    if (currentIndex < filteredProjects.length - 1) {
      setSelectedProject(filteredProjects[currentIndex + 1])
    }
  }

  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-heading">
      <div className="section-meta-header">
        <span className="section-meta-number">03</span>
        <h2 className="section-meta-title" id="projects-heading">
          Selected Works
        </h2>
        <span className="section-meta-tagline">2024 — 2026 Index</span>
      </div>

      {/* Category Filter Tabs */}
      <div className="project-filters-bar" role="tablist" aria-label="Project category filters">
        {categories.map((cat) => {
          const count = cat === 'All' ? projects.length : projects.filter((p) => p.category.toLowerCase() === cat.toLowerCase()).length
          const isActive = activeCategory === cat

          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`filter-tab ${isActive ? 'filter-tab--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              <span className="filter-tab__label">{cat}</span>
              <span className="filter-tab__count">{count}</span>
            </button>
          )
        })}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      ) : (
        <div className="projects-empty-state">
          <p>No projects found in this category yet.</p>
          <button
            type="button"
            className="filter-reset-btn"
            onClick={() => setActiveCategory('All')}
          >
            Show All Projects
          </button>
        </div>
      )}

      {/* Interactive Case Study Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={currentIndex > 0}
          hasNext={currentIndex < filteredProjects.length - 1}
        />
      )}
    </section>
  )
}
