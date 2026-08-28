import openToWorkLogo from '../assets/open-to-work.png'
import './Status.css'

function Status() {
  return (
    <section id="status" className="status">
      <div className="container">
        <h2 className="status-heading">Status</h2>
        <div className="card status-banner">
          <img className="status-banner-icon" src={openToWorkLogo} alt="" />
          <div className="status-banner-text">
            <h3>Open to Opportunities</h3>
            <p>
              F-1 visa holder, CPT-eligible for summer internships, and open to
              relocating internationally for the right opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Status
