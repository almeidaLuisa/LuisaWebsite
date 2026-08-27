# Luisa's Personal Portfolio

A one-page personal portfolio site built to signal to employers — especially in hardware / FPGA
recruiting — that I'm a Computer Engineering student open to internships, including
international opportunities. Dark, green-forward visual identity with clean typography and a
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

- **Dark theme**, deep forest/emerald green backgrounds and cards
- **Kelly/lime green** as the accent color for links, buttons, and highlights
- A small **warm gold** touch used sparingly (e.g. the hero eyebrow text) — a subtle nod to a
  Brazilian palette without literal flag imagery
- Clean sans-serif type, generous whitespace, soft rounded corners on cards and buttons
- Professional-first: this needs to read well to hardware recruiters, personal flair is secondary

Theme tokens live in [`src/index.css`](src/index.css) as CSS custom properties (`--bg`, `--card`,
`--accent`, `--gold`, etc.) — change the palette in one place and it propagates everywhere.

## Sections

| Section | Status | Notes |
|---|---|---|
| Hero | ✅ built | Name, university/study-abroad summary, internship availability, photo placeholder, CTAs |
| What I'm up to | 🚧 planned | Coursework, leadership (TLDP), visa/relocation availability |
| Projects | 🚧 planned | Familiar Places (Godot/C#), CPU project (VHDL/DE10), Horses (hackathon) |
| Contact | 🚧 planned | See privacy notes below — no custom backend, no data storage |

## Getting started

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

Requires Node 20+.

## Adding your own content

- **Photo:** drop your image into `src/assets/` and swap it into `Hero.jsx` in place of the
  placeholder box.
- **Resume:** add `resume.pdf` to the `public/` directory — the Navbar and Hero buttons already
  link to `/resume.pdf`.
- **Project screenshots:** add images under `src/assets/` once the Projects section is built.

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

## License

Personal project — content and design are original work; not licensed for reuse.
