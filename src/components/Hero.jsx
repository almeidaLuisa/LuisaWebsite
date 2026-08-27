import WaveDivider from './WaveDivider'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow hero-glow-accent" aria-hidden="true" />
      <div className="hero-glow hero-glow-gold" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-text hero-enter">
          <p className="hero-eyebrow pixel-corners">
            Computer Engineering Student
          </p>
          <h1>
            Welcome, I'm Luisa{' '}
            <span className="accent-text">Almeida Quintella</span>
          </h1>
          <p className="hero-subline">
            University of Florida, expected graduation May 2028. Studied
            abroad at Kyoto University (Summer 2026, 4.0 GPA). Open to
            hardware / FPGA internships — including opportunities outside the
            US.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary pixel-corners" href="#contact">
              Message Me
            </a>
            <a
              className="btn btn-ghost pixel-corners"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="hero-photo hero-enter hero-enter-delay">
          <div className="hero-photo-ring">
            <div className="hero-photo-placeholder">Photo</div>
          </div>
        </div>
      </div>

      <WaveDivider color="var(--bg-elevated)" />
    </section>
  )
}

export default Hero
