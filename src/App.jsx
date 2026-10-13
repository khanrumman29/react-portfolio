import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Statement from './components/Statement'
import About from './components/About'
import Showreel from './components/Showreel'
import SelectedWorks from './components/SelectedWorks'
import Services from './components/Services'
import ProcessSteps from './components/ProcessSteps'
import Capabilities from './components/Capabilities'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="portfolio-shell">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Statement />
        <About />
        <Showreel />
        <SelectedWorks />
        <Services />
        <ProcessSteps />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}