import MainLayout from '../layouts/MainLayout'
import SelectedWorks from '../components/SelectedWorks'

export default function Projects() {
  return (
    <MainLayout>
      <div style={{ paddingTop: '2rem' }}>
        <SelectedWorks />
      </div>
    </MainLayout>
  )
}
