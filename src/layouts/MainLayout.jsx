import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout({ children }) {
  return (
    <div className="portfolio-shell">
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  )
}
