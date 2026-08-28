import volleyballLogo from '../assets/shpe-volleyball.png'
import './WhatImUpTo.css'

const CARDS = [
  {
    title: 'Current Coursework',
    body: 'Microprocessor Applications, Digital Design, and Circuits 1, building toward embedded systems and hardware design.',
  },
  {
    title: 'Android Mobile App Director, SHPE',
    body: 'Leading the Android mobile app initiative for SHPE this semester, guiding development and mentoring members building the app.',
  },
  {
    title: 'Open to Opportunities',
    body: 'F-1 visa holder, CPT-eligible for summer internships, and open to relocating internationally for the right opportunity.',
  },
  {
    title: 'Part-Time Job: Computer Lab Assistant',
    body: 'Student Government Print Lab, University of Florida. Handle one-on-one tech troubleshooting and equipment operation in a high-traffic facility, ~15 hrs/week.',
  },
  {
    title: 'Retirement Home for Horses (Pro Bono)',
    body: 'Continuing on as the sole developer for a local horse sanctuary’s website on the side, maintaining and improving it pro bono.',
  },
  {
    title: 'SHPE Athletics: Co-Rec Volleyball',
    body: 'Playing co-rec volleyball with the SHPE athletics team in the Fall intramural league on weekends.',
    icon: volleyballLogo,
  },
]

const UPCOMING_EVENTS = [
  {
    title: 'SHPE 2027 National Convention',
    body: (
      <>
        Heading to Indianapolis for the{' '}
        <a
          href="https://shpe.org/engage/events/national-convention/"
          target="_blank"
          rel="noreferrer"
        >
          SHPE National Convention
        </a>
        .
      </>
    ),
  },
  {
    title: 'SwampHacks',
    body: 'Preparing for SwampHacks, a hackathon at UF, where I plan to design a hardware project with embedded systems.',
  },
]

function WhatImUpTo() {
  return (
    <section id="about" className="up-to">
      <div className="container">
        <h2 className="up-to-heading">What I'm up to</h2>
        <div className="up-to-grid">
          {CARDS.map((card) => (
            <div className="card" key={card.title}>
              <div className="card-title-row">
                {card.icon && (
                  <img className="card-icon" src={card.icon} alt="" />
                )}
                <h3>{card.title}</h3>
              </div>
              <p>{card.body}</p>
            </div>
          ))}
        </div>

        <h3 className="up-to-subheading">Upcoming Events</h3>
        <div className="up-to-grid">
          {UPCOMING_EVENTS.map((event) => (
            <div className="card" key={event.title}>
              <h3>{event.title}</h3>
              <p>{event.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatImUpTo
