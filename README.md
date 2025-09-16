# Alt_Red — React + Vite Portfolio (Starter)

Edgy, sleek, outgoing personal portfolio for **Alt_Red**. Built with **React + Vite + Tailwind** and deployed via **GitHub Pages**.

## Quickstart
```bash
# Node 18+ recommended
npm install
npm run dev           # http://localhost:5173
npm run build
npm run preview
```

## Deploy to GitHub Pages
1) Create a GitHub repo (e.g., `alt-red-portfolio`) and push this project.
2) Update `vite.config.js` `base` if you use **Project Pages**:
   - User/org or custom domain root → `base: ''` (default here).
   - Project Pages → `base: '/<REPO_NAME>/'` (e.g., `'/alt-red-portfolio/'`). 
3) Enable Actions and push. The included workflow builds and deploys to the `gh-pages` branch.
4) In **Settings → Pages**, set **Source** to **Deploy from a branch** → `gh-pages`.
5) Deep links work via a `404.html` fallback in the workflow.

## Content Model (`/src/data/projects.json`)
Each project:
```json
{
  "title": "ShelfLife",
  "slug": "shelflife",
  "blurb": "Inventory insights with Flask + React/Vite and GCP.",
  "tags": ["Web", "Data"],
  "tech": ["React", "Vite", "Flask", "GCP"],
  "youtubeId": "dQw4w9WgXcQ",
  "images": ["/assets/img/shelflife-1.jpg", "/assets/img/shelflife-2.jpg"],
  "repoUrl": "https://github.com/you/shelflife",
  "demoUrl": ""
}
```
Add/modify items and they’ll render automatically.

## Pages
- `/` Home (hero, featured, WIP teaser)
- `/projects` Gallery + filters/search
- `/projects/:slug` Project detail (YouTube + screenshots + tech badges + links)
- `/about` Informal resume + **Download Resume** (from `/public/resume.pdf`)
- `/work-in-progress` Upcoming/personal/freelance items
- `/contact` Mailto + socials

## Theming
Tailwind tokens under `altred.*` in `tailwind.config.js`:
- primary `#D7263D`, crimson `#B3122E`, charcoal `#0F1115`, ink `#171A1F`, off `#F6F7F9`, gray `#A3A8B3`, neon `#FF3B3B`

## Accessibility
- Focus rings visible; keyboard navigation across all controls.
- Contrast-tested red usage; prefers-reduced-motion respected.

## License
MIT
