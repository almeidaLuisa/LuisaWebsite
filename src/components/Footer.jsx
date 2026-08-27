import linkedinLogo from '../assets/linkedin-logo.png'
import githubLogo from '../assets/github-logo.png'
import devpostLogo from '../assets/devpost-logo.png'
import './Footer.css'

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lu%C3%ADsa-almeida-quintella-975706232/',
    logo: linkedinLogo,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/almeidaLuisa',
    logo: githubLogo,
  },
  {
    label: 'Devpost',
    href: 'https://devpost.com/almeidaLuisa',
    logo: devpostLogo,
  },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {year} Luisa Almeida Quintella</p>
        <div className="footer-links">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              className="social-icon"
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              title={link.label}
            >
              <img src={link.logo} alt="" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
