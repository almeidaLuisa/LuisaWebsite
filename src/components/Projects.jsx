import { useState } from 'react'
import familiarMart from '../assets/familiar-mart.jpg'
import horsesHomepage from '../assets/horses-homepage.jpg'
import worldwideInternships from '../assets/worldwide-internships.jpg'
import './Projects.css'

const PROJECTS = [
  {
    title: 'FamiliarMart',
    tags: ['Godot 4.6.3', 'C#', '.NET'],
    image: familiarMart,
    summary: 'A Japanese-learning game built during study abroad in Kyoto.',
    description:
      'Built as lead developer with a 4-person team during study abroad in Kyoto: a first-person 2.5D cashier simulator that teaches Japanese through gameplay. Owned the player controller, UI, and dialogue systems, and coordinated the team’s Git workflow. Implemented keyboard-driven dialogue validation — LineEdit focus handling, Enter-to-submit, and full-width Japanese punctuation normalization for accurate matching — and migrated the codebase from GDScript to C#.',
    github: 'https://github.com/matilde-gillia/Familiar_Mart',
  },
  {
    title: 'Worldwide Internships',
    tags: ['Web App', 'Render'],
    image: worldwideInternships,
    summary:
      'A personal tracker for computer engineering internships outside the US.',
    description:
      'Built to organize my own search for hardware/CpE internships abroad — a running, editable table of companies outside the US with a track record of hiring international students, filtered by target regions and citizenship/visa eligibility. Every cell is editable in place, with edits, statuses, and added rows autosaved in the browser, plus CSV export for backing up the list.',
    github: 'https://github.com/almeidaLuisa/Worldwide_Internships.git',
    live: 'https://worldwide-internships-lkya.onrender.com/',
  },
  {
    title: 'Retirement Home for Horses',
    tags: ['Hackathon', 'Flask', 'MongoDB'],
    image: horsesHomepage,
    summary: 'Hackathon project for a horse retirement sanctuary — won a MongoDB award.',
    description:
      'Built a full-stack website for the Retirement Home for Horses, a local nonprofit, at the Code for Change 2026 hackathon as part of a 4-person team — led frontend development and deployment setup on Render, and won Best Use of MongoDB (see more on my Devpost page, linked at the bottom of this site). Continued on as the sole developer post-hackathon, maintaining and enhancing the site with Python (Flask), MongoDB, and HTML/CSS, managing the full development lifecycle on GitHub with organized branching, pull requests, and automatic preview deployments, and staying in ongoing contact with the nonprofit on feature requests and fixes.',
    github: 'https://github.com/almeidaLuisa/Horse_Retirement_Alachua',
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
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer">
                Live Site
              </a>
            )}
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
