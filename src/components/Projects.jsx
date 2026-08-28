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
      'Built as lead developer with a 4-person team during study abroad in Kyoto: a first-person 2.5D cashier simulator that teaches Japanese through gameplay. Owned the player controller, UI, and dialogue systems, and coordinated the team’s Git workflow. Implemented keyboard-driven dialogue validation, including LineEdit focus handling, Enter-to-submit, and full-width Japanese punctuation normalization for accurate matching, and migrated the codebase from GDScript to C#.',
    github: 'https://github.com/matilde-gillia/Familiar_Mart',
  },
  {
    title: 'Worldwide Internships',
    tags: ['Web App', 'Render'],
    image: worldwideInternships,
    summary:
      'A personal tracker for computer engineering internships outside the US.',
    description:
      'Built to organize my own search for hardware/CpE internships abroad: a running, editable table of companies outside the US with a track record of hiring international students, filtered by target regions and citizenship/visa eligibility. Every cell is editable in place, with edits, statuses, and added rows autosaved in the browser, plus CSV export for backing up the list.',
    github: 'https://github.com/almeidaLuisa/Worldwide_Internships.git',
    live: 'https://worldwide-internships-lkya.onrender.com/',
  },
  {
    title: 'Retirement Home for Horses',
    tags: ['Hackathon', 'Flask', 'MongoDB'],
    image: horsesHomepage,
    summary: 'Hackathon project for a horse retirement sanctuary, won Best Use of MongoDB.',
    description:
      'Built a full-stack website for the Retirement Home for Horses, a local nonprofit, at the Code for Change 2026 hackathon as part of a 4-person team. Led frontend development and deployment setup on Render, and won Best Use of MongoDB (see the Devpost submission below). Continued on as the sole developer post-hackathon, maintaining and enhancing the site with Python (Flask), MongoDB, and HTML/CSS, managing the full development lifecycle on GitHub with organized branching, pull requests, and automatic preview deployments, and staying in ongoing contact with the nonprofit on feature requests and fixes.',
    github: 'https://github.com/almeidaLuisa/Horse_Retirement_Alachua',
    devpost: 'https://devpost.com/software/idk-tmf2e8',
  },
  {
    title: 'Print Lab Status Monitor',
    tags: ['VHDL', 'ESP32', 'UART', 'SNMP', 'Quartus'],
    comingSoon: true,
    summary:
      'A hardware + networking system to give real-time visibility into printer status and queue length at my job in the Student Government Print Lab, since the printers aren’t connected to or visible from the help desk. Combines an ESP32 for network status polling with a DE10 FPGA for a physical status display, built in VHDL.',
    description: (
      <>
        <p>
          The Print Lab’s printers aren’t visible from the help desk computer,
          making it hard to know if a job printed successfully, how many jobs
          are queued, or if a printer is jammed without physically walking
          over. This project solves that with a two-part system:
        </p>
        <ul className="project-bullets">
          <li>
            An ESP32 microcontroller polls each printer’s status over the
            network using SNMP (a standard protocol supported across printer
            brands), pulling queue length, print status, and error/jam flags
          </li>
          <li>
            A DE10 FPGA receives this data over UART and drives a physical
            display at the help desk: a 7-segment display for queue count and
            status LEDs (green for normal, yellow for jobs queued, red for
            errors)
          </li>
          <li>
            The UART receiver and display logic are implemented from scratch in
            VHDL
          </li>
        </ul>
        <p>
          This project pairs low-level hardware design with practical
          networking to solve a real problem I encounter at work.
        </p>
      </>
    ),
  },
]

/* stands in for the missing screenshot: a chip outline nodding at the
   FPGA/ESP32 side of the build */
function UpcomingGraphic() {
  return (
    <svg
      className="project-upcoming-graphic"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <rect x="18" y="18" width="28" height="28" rx="4" />
      <rect x="27" y="27" width="10" height="10" rx="1.5" />
      <path d="M26 18V10M32 18V10M38 18V10M26 46v8M32 46v8M38 46v8" />
      <path d="M18 26h-8M18 32h-8M18 38h-8M46 26h8M46 32h8M46 38h8" />
    </svg>
  )
}

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`card project-card${
        project.comingSoon ? ' project-card-upcoming' : ''
      }`}
    >
      {project.image ? (
        <img
          className="project-image"
          src={project.image}
          alt={`${project.title} screenshot`}
        />
      ) : (
        <div className="project-image-placeholder">
          {project.comingSoon ? <UpcomingGraphic /> : 'Image'}
        </div>
      )}
      {project.comingSoon && (
        <span className="project-badge pixel-corners">Coming Soon</span>
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
          {typeof project.description === 'string' ? (
            <p>{project.description}</p>
          ) : (
            project.description
          )}
          {(project.github || project.live || project.devpost) && (
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub Repo
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Site
                </a>
              )}
              {project.devpost && (
                <a href={project.devpost} target="_blank" rel="noreferrer">
                  Devpost
                </a>
              )}
            </div>
          )}
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
