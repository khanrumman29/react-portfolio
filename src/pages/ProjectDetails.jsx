import MainLayout from '../layouts/MainLayout'
import { projects } from '../data/projects'
import ProjectDetailModal from '../components/ProjectDetailModal'

export default function ProjectDetails({ project = projects[0], onClose = () => {} }) {
  return (
    <MainLayout>
      <ProjectDetailModal
        project={project}
        onClose={onClose}
        onPrev={() => {}}
        onNext={() => {}}
        hasPrev={false}
        hasNext={false}
      />
    </MainLayout>
  )
}
