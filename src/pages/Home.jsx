import MainLayout from '../layouts/MainLayout'
import Hero from '../components/Hero'
import Statement from '../components/Statement'
import About from '../components/About'
import Showreel from '../components/Showreel'
import SelectedWorks from '../components/SelectedWorks'
import Services from '../components/Services'
import ProcessSteps from '../components/ProcessSteps'
import Capabilities from '../components/Capabilities'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Statement />
      <About />
      <Showreel />
      <SelectedWorks />
      <Services />
      <ProcessSteps />
      <Capabilities />
      <Contact />
    </MainLayout>
  )
}
