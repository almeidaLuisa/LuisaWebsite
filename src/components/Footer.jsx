import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {year} Luisa Almeida Quintella</p>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/lu%C3%ADsa-almeida-quintella-975706232/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/almeidaLuisa"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://devpost.com/almeidaLuisa"
            target="_blank"
            rel="noreferrer"
          >
            Devpost
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
