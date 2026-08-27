import './Skills.css'

const CARDS = [
  {
    title: 'Languages',
    body: 'Portuguese (native), English (fluent), Spanish (advanced), Japanese (beginner).',
  },
  {
    title: 'Skills',
    body: 'VHDL, C#, Godot — more to come.',
  },
]

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="skills-heading">Languages &amp; Skills</h2>
        <div className="skills-grid">
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

export default Skills
