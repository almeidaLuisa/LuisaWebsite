import { useState } from 'react'
import familiarMart from '../assets/familiar-mart.jpg'
import horsesHomepage from '../assets/horses-homepage.jpg'
import printLabProject from '../assets/printLabProject.jpeg'
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
    tags: ['PowerShell', 'SNMP', 'VHDL', 'ESP32', 'UART', 'Quartus'],
    image: printLabProject,
    inProgress: true,
    summary:
      'A monitoring system that gives the help desk real-time visibility into printer queues and status at my job in the Student Government Print Lab, where the printers aren’t visible from the desk. A PowerShell service polls the Windows print server for live queue counts, per-job detail, and printer state, with SNMP filling in device-level data for standalone printers. An embedded display layer on an ESP32 and DE10 FPGA is in progress.',
    description: (
      <>
        <p>
          The Print Lab’s printers aren’t visible from the help desk computer,
          making it hard to know if a job printed successfully, how many jobs
          are queued, or if a printer is jammed without physically walking
          over. The working core of the system is a software data layer, with a
          physical display still in development:
        </p>
        <ul className="project-bullets">
          <li>
            A PowerShell service running on the help desk PC (no admin rights
            required) polls the Windows print server directly, pulling live
            queue counts, per-job information, and printer status for every
            server-managed printer at once
          </li>
          <li>
            The poller flags new jobs and errors in real time, with color-coded
            status and distinct audible alerts — one sound for a new job,
            another for an error
          </li>
          <li>
            SNMP complements this for standalone printers that aren’t on the
            print server, reporting device status, error/jam flags, and
            toner/tray levels that the print server doesn’t expose
          </li>
          <li>
            In progress: an ESP32 on wired Ethernet feeding a DE10 FPGA over
            UART, driving physical status indicators written from scratch in
            VHDL
          </li>
        </ul>
        <p>
          The hardest and most interesting part turned out to be the data layer
          rather than the hardware: the same physical printer shows up under
          different names and network paths depending on which lab computer you
          ask, and only jobs routed through the print server are centrally
          visible. Untangling that mapping is what made a single, accurate view
          of the lab possible.
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
        project.inProgress ? ' project-card-upcoming' : ''
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
          {project.inProgress ? <UpcomingGraphic /> : 'Image'}
        </div>
      )}
      {project.inProgress && (
        <span className="project-badge pixel-corners">In Progress</span>
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
