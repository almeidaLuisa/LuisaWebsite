import { useState } from 'react'
import horsesHomepage from '../assets/horses-homepage.jpg'
import './Projects.css'

const PROJECTS = [
  {
    title: 'Familiar Places',
    tags: ['Godot 4.6.3', 'C#', '.NET'],
    image: null,
    summary: 'A Japanese-learning game built during study abroad in Kyoto.',
    description:
      'Built as lead developer with a 4-person team during study abroad in Kyoto: a first-person 2.5D cashier simulator that teaches Japanese through gameplay. Owned the player controller, UI, and dialogue systems, and coordinated the team’s Git workflow. Implemented keyboard-driven dialogue validation — LineEdit focus handling, Enter-to-submit, and full-width Japanese punctuation normalization for accurate matching — and migrated the codebase from GDScript to C#.',
    github: '#',
  },
  {
    title: 'CPU Project',
    tags: ['Quartus', 'DE10', 'VHDL'],
    image: null,
    summary: 'A CPU built and tested on a DE10 development board.',
    description:
      'TODO: add how/why this project got started and what it actually does — swap this placeholder once details are ready.',
    github: '#',
  },
  {
    title: 'Horses',
    tags: ['Hackathon', 'Flask', 'MongoDB'],
    image: horsesHomepage,
    summary: 'Hackathon project for a horse retirement sanctuary — won a MongoDB award.',
    description:
      'Built a full-stack website for the Retirement Home for Horses, a local nonprofit, at the Code for Change 2026 hackathon as part of a 4-person team — led frontend development and deployment setup on Render, and won Best Use of MongoDB. Continued on as the sole developer post-hackathon, maintaining and enhancing the site with Python (Flask), MongoDB, and HTML/CSS, managing the full development lifecycle on GitHub with organized branching, pull requests, and automatic preview deployments, and staying in ongoing contact with the nonprofit on feature requests and fixes.',
    github: '#',
  },
]

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="card project-card">
      {project.image ? (
        <img
          className="project-image"
          src={project.image}
          alt={`${project.title} screenshot`}
        />
      ) : (
        <div className="project-image-placeholder">Image</div>
      )}
      <h3>{project.title}</h3>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span className="project-tag pixel-corners" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <p>{project.summary}</p>

      {expanded && (
        <div className="project-details">
          <p>{project.description}</p>
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub Repo
            </a>
          </div>
        </div>
      )}

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
