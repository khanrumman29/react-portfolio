import { siteConfig } from '../data/config'

function CameraArtwork() {
  return (
    <svg
      className="hero-camera"
      viewBox="0 0 620 520"
      role="img"
      aria-labelledby="camera-title"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="camera-title">Illustration of a red motion-picture camera</title>
      <defs>
        <linearGradient id="camera-red" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fa3931" />
          <stop offset=".48" stopColor="#d81115" />
          <stop offset="1" stopColor="#780b10" />
        </linearGradient>
        <linearGradient id="camera-dark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#494744" />
          <stop offset=".48" stopColor="#131312" />
          <stop offset="1" stopColor="#050505" />
        </linearGradient>
        <linearGradient id="camera-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4e1718" />
          <stop offset=".35" stopColor="#08090a" />
          <stop offset=".72" stopColor="#211c1b" />
          <stop offset="1" stopColor="#070707" />
        </linearGradient>
      </defs>
      <ellipse cx="310" cy="481" rx="245" ry="24" fill="#25211d" opacity=".15" />
      <path d="M147 411h339l69 109H69z" fill="url(#camera-dark)" />
      <path d="M196 399h237l17 71H170z" fill="#252321" />
      <path d="M215 424h194l9 59H201z" fill="#a6a197" opacity=".18" />
      <path d="M151 222c0-78 64-141 143-141h58c61 0 110 49 110 110v91H151z" fill="url(#camera-red)" stroke="#780b10" strokeWidth="7" />
      <path d="M177 204c0-56 45-102 101-102h81c47 0 85 38 85 85v34H177z" fill="#f3483d" opacity=".72" />
      <path d="M214 116c29-22 62-31 95-31h40c31 0 61 14 80 38l-16 13H202z" fill="#ff6655" opacity=".55" />
      <path d="M188 223h253v188H188z" fill="url(#camera-red)" stroke="#710a0d" strokeWidth="8" />
      <path d="M203 239h94v124h-94z" fill="#bd1015" stroke="#ff5348" strokeWidth="3" />
      <path d="M212 251h77v6h-77zm0 13h55v4h-55zm0 8h43v4h-43z" fill="#f4eee2" opacity=".9" />
      <text x="214" y="307" fill="#fff7eb" fontSize="17" fontFamily="Arial, sans-serif" fontWeight="700">FRAME</text>
      <text x="214" y="328" fill="#fff7eb" fontSize="17" fontFamily="Arial, sans-serif" fontWeight="700">FORM</text>
      <path d="M306 252h74v122h-74z" fill="#8d0c10" stroke="#f54137" strokeWidth="4" />
      <circle cx="343" cy="309" r="48" fill="url(#camera-dark)" stroke="#f45a4c" strokeWidth="6" />
      <circle cx="343" cy="309" r="35" fill="url(#camera-glass)" stroke="#77726b" strokeWidth="4" />
      <circle cx="343" cy="309" r="23" fill="#111315" stroke="#1b1c1b" strokeWidth="7" />
      <circle cx="343" cy="309" r="11" fill="#180e10" />
      <path d="M337 299a13 13 0 0 1 13 4" fill="none" stroke="#d38d7b" strokeWidth="3" opacity=".8" />
      <path d="M391 228h81l31 22v115l-31 20h-81z" fill="url(#camera-red)" stroke="#75090e" strokeWidth="7" />
      <path d="M468 241h82l38 23v85l-38 24h-82z" fill="url(#camera-dark)" stroke="#ef302b" strokeWidth="8" />
      <path d="M489 255h55l27 16v57l-27 17h-55z" fill="url(#camera-glass)" stroke="#55504a" strokeWidth="4" />
      <ellipse cx="520" cy="299" rx="14" ry="30" fill="#160e10" opacity=".85" />
      <path d="M497 271l34-9" stroke="#e3b5a2" strokeWidth="3" opacity=".55" />
      <path d="M156 277c-30 3-52 23-53 50l-3 59c-1 24 13 43 37 49l51-2V223l-39 10z" fill="url(#camera-red)" stroke="#710a0d" strokeWidth="7" />
      <circle cx="136" cy="337" r="15" fill="#211e1a" stroke="#f3564a" strokeWidth="5" />
      <path d="M137 353c-28 28-17 53 9 68l27 9" fill="none" stroke="#22201c" strokeWidth="9" />
      <path d="M215 387h203v28H215z" fill="#b90c12" />
      <circle cx="235" cy="399" r="5" fill="#f4c080" />
      <circle cx="258" cy="399" r="5" fill="#181715" />
      <circle cx="286" cy="399" r="5" fill="#181715" />
      <path d="M198 182h33m-17-17v34m152-19h28" stroke="#591015" strokeWidth="7" strokeLinecap="round" />
      <path d="M231 87v-20h77v17m29 0V61h58v35" fill="none" stroke="#262321" strokeWidth="10" strokeLinejoin="round" />
      <path d="M239 67h63m44 0h40" stroke="#aaa59b" strokeWidth="3" opacity=".65" />
      <path d="M120 447c31-25 66-31 103-22l36 95H67zm336-24c42-11 81 0 111 31l26 66H441z" fill="#cf1318" />
      <path d="M130 459c21-18 43-24 69-18m291 2c23-7 46-4 66 9" fill="none" stroke="#ff564b" strokeWidth="7" opacity=".65" />
      <text x="340" y="393" fill="#f6eee0" fontSize="7" fontFamily="Arial, sans-serif" letterSpacing="1.2">GOOD STORIES MOVE PEOPLE</text>
    </svg>
  )
}

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) {
      const topOffset = 70
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - topOffset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <h1 className="hero-title" id="hero-title">
        {siteConfig.name}
      </h1>

      <div className="hero-stage">
        <div className="hero-intro">
          <p className="hero-intro__headline">
            Ideas
            <br />
            in motion.
            <br />
            Stories
            <br />
            that last.
          </p>
          <span className="hero-rule" />
          <p className="hero-intro__services">
            Motion design
            <br />
            Video editing
            <br />
            Visual storytelling
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="hero-btn hero-btn--primary"
              onClick={() => scrollTo('#projects')}
            >
              Explore Projects →
            </button>
            <button
              type="button"
              className="hero-btn hero-btn--secondary"
              onClick={() => scrollTo('#showreel')}
            >
              Watch Showreel ◎
            </button>
          </div>
        </div>

        <CameraArtwork />

        <aside className="hero-note" aria-label="Motion lives here">
          <span>
            Motion
            <br />
            lives
            <br />
            here.
          </span>
        </aside>

        <div className="hero-stamp" aria-label="Create and inspire">
          <span>Create</span>
          <span className="hero-stamp__globe" aria-hidden="true">
            ◎
          </span>
          <span>Inspire</span>
        </div>

        <div className="hero-outro">
          <p>A creative studio for a more expressive world.</p>
          <span className="hero-rule" />
          <p className="hero-outro__established">Est. {siteConfig.establishedYear}</p>
        </div>
      </div>
    </section>
  )
}