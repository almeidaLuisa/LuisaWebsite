import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo">
          L.A.Q.
        </a>

        <nav className="navbar-links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <a
            className="btn btn-ghost pixel-corners"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <a className="btn btn-primary pixel-corners" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
