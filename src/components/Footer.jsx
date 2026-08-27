import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {year} Luisa Almeida Quintella</p>
        <div className="footer-links">
          {/* TODO: replace with your actual profile URLs */}
          <a href="#" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
