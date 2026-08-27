import { useState } from 'react'
import './Projects.css'

const PROJECTS = [
  {
    title: 'Familiar Places',
    tags: ['Godot 4.6.3', 'C#', '.NET'],
    summary: 'A Japanese-learning game built during study abroad in Kyoto.',
    details:
      'Full description coming soon — screenshots and gameplay details will be added here.',
  },
  {
    title: 'CPU Project',
    tags: ['Quartus', 'DE10', 'VHDL'],
    summary: 'A CPU built and tested on a DE10 development board.',
    details:
      'Full write-up coming soon — architecture details and design decisions will be added here.',
  },
  {
    title: 'Horses',
    tags: ['Hackathon', 'MongoDB'],
    summary: 'Hackathon project that won a MongoDB award.',
    details:
      'Full write-up coming soon — problem statement, stack, and outcome will be added here.',
  },
]

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="card project-card">
      <div className="project-image-placeholder">Image</div>
      <h3>{project.title}</h3>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span className="project-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <p>{project.summary}</p>
      {expanded && <p className="project-details">{project.details}</p>}
      <button
        type="button"
        className="project-toggle"
        onClick={() => setExpanded((prev) => !prev)}
      >
        {expanded ? 'Show less' : 'Click for more'}
      </button>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="projects-heading">Projects</h2>
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
