# Luisa's Personal Portfolio

A one-page personal portfolio site built to signal to employers — especially in hardware / FPGA
recruiting — that I'm a Computer Engineering student open to internships, including
international opportunities. Light, green-forward visual identity with clean typography and a
minimal, dependency-light stack.

**Live site:** _add your deployed URL here once live_

---

## Tech stack

- **React 19** + **Vite 5** — fast dev server, static production build
- **Plain CSS** (per-component stylesheets, no CSS framework) — kept dependencies minimal on purpose
- No backend, no database, no analytics

The whole app builds to static files, so it deploys cleanly to **Cloudflare Pages**, **GitHub
Pages**, **Netlify**, or any static host.

## Project structure

```
LuisaWebsite/
├── public/                 # static assets served as-is (favicon, resume.pdf when added)
├── src/
│   ├── assets/              # images used by components
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   └── ...              # more sections added incrementally
│   ├── App.jsx              # composes the page from section components
│   ├── main.jsx             # React entry point
│   └── index.css            # global theme: CSS variables, resets, typography
├── index.html                # Vite HTML entry point
├── vite.config.js
└── package.json
```

## Design direction

- **Light theme**, pale sage-tinted background (not stark white) with white cards lifted by soft
  shadows rather than borders
- **Forest/emerald green** as the primary accent for buttons, links, nav highlights, and the name
  highlight in the hero; a brighter **kelly/lime green** reserved for hover states and small pop
  accents
- A small **warm gold** touch used sparingly (badge text, part of the name's gradient) — a subtle
  nod to a Brazilian palette without literal flag imagery
- A retro pixel font and stepped "8-bit" corners used sparingly on buttons, badges, and tags for a
  bit of personality without undercutting the professional read
- Clean sans-serif type (Inter), generous whitespace, soft rounded corners on cards and buttons
- Professional-first: this needs to read well to hardware recruiters, personal flair is secondary

Theme tokens live in [`src/index.css`](src/index.css) as CSS custom properties (`--bg`, `--card`,
`--accent`, `--gold`, etc.) — change the palette in one place and it propagates everywhere.

## Sections

| Section | Status | Notes |
|---|---|---|
| Hero | ✅ built | Name, university/study-abroad summary, internship availability, real headshot, CTAs |
| What I'm up to | ✅ built | Coursework, leadership (TLDP), visa/relocation availability |
| Projects | ✅ built | Familiar Places (Godot/C#), Worldwide Internships (personal tracker), Horses (hackathon) — each expands to a full write-up with GitHub/live links |
| Contact | ✅ built | See privacy notes below — no custom backend, no data storage |

## Getting started

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

Requires Node 20+.

## Adding your own content

- **Photo:** drop an image into `src/assets/` and import it in `Hero.jsx` (already wired up with
  the current headshot).
- **Resume:** `public/resume.pdf` is already in place and linked from the Navbar and Hero buttons —
  replace the file to update it, no code changes needed.
- **Project screenshots:** add images under `src/assets/`, import them in `Projects.jsx`, and set
  the `image` field on the relevant project entry (`null` shows the placeholder box instead).
- **Project links:** each project entry in `Projects.jsx` has a `github` field and an optional
  `live` field — set `live` to show a "Live Site" link alongside "GitHub Repo" in the expanded
  view.

## Privacy & data handling

This site is designed to be safe to link publicly (e.g. from LinkedIn) with no ongoing liability:

- **No visitor data is stored anywhere I control.** There is no backend, no database, and no
  server-side code that logs, stores, or forwards form submissions.
- **No tracking or analytics** are included by default. If analytics are ever added, it will be a
  privacy-respecting option (e.g. Cloudflare Web Analytics) added explicitly, not silently.
- **Contact form**, when built, will either be a `mailto:` link or submit through a third-party
  form delivery service (e.g. Formspree, Web3Forms) using an API key stored in a git-ignored
  `.env` file — never hardcoded into the frontend.
- **No third-party personal data** (photos, profiles, content) is scraped or embedded without
  explicit permission.
- **All images/icons are either mine or open-license.** Placeholder boxes are used for anything
  not yet supplied; UI icons, if added, come from open-source sets (e.g. Lucide, Heroicons).

If a secret/API key is ever required (e.g. for a form service), it will be documented here along
with where to obtain it — it will never be committed to this repository.

## Deployment

Any static host works since `npm run build` produces a self-contained `dist/` folder.

**Cloudflare Pages**
- Build command: `npm run build`
- Build output directory: `dist`

**GitHub Pages**
- Build with `npm run build`, then deploy the `dist/` folder (e.g. via the `gh-pages` package or
  a GitHub Actions workflow) to the `gh-pages` branch.

**Render**
- A [`render.yaml`](render.yaml) blueprint is included: build command `npm install && npm run
  build`, publish directory `dist`.
- In the Render dashboard: New → Static Site → connect this GitHub repo → Render reads
  `render.yaml` automatically. Every push to `main` auto-redeploys.

## License

Personal project — content and design are original work; not licensed for reuse.
