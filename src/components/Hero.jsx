import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-eyebrow">Computer Engineering Student</p>
          <h1>
            Welcome, I'm Luisa{' '}
            <span className="accent">Almeida Quintella</span>
          </h1>
          <p className="hero-subline">
            University of Florida, expected graduation May 2028. Studied
            abroad at Kyoto University (Summer 2026, 4.0 GPA). Open to
            hardware / FPGA internships — including opportunities outside the
            US.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#contact">
              Message Me
            </a>
            <a
              className="btn btn-ghost"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="hero-photo-placeholder">Photo</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
