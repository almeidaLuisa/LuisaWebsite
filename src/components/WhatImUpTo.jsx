import './WhatImUpTo.css'

const CARDS = [
  {
    title: 'Current Coursework',
    body: 'Microprocessor Applications, Digital Design, and Circuits 1 — building toward embedded systems and hardware design.',
  },
  {
    title: 'Open to Opportunities',
    body: 'F-1 visa holder, CPT-eligible for summer internships, and open to relocating internationally for the right opportunity.',
  },
  {
    title: 'Part-Time Job — Computer Lab Assistant',
    body: 'Student Government Print Lab, University of Florida. Handle one-on-one tech troubleshooting and equipment operation in a high-traffic facility, ~15 hrs/week.',
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
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatImUpTo
