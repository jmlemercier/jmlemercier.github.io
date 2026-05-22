# jmlemercier.github.io

Personal site for [Jean-Marie Lemercier](https://jmlemercier.github.io/) — applied
scientist at NVIDIA, working on diffusion models for speech and language.

## Structure

```
.
├── index.html             # About: bio, contact, experience timeline
├── publications.html      # Per-paper cards (figure + abstract + links)
├── css/style.css          # Brutalist theme, IBM Plex Mono, light + dark
├── js/theme.js            # Dark-mode toggle (persisted in localStorage)
├── assets/
│   ├── me.png             # Profile photo
│   ├── icons/             # GitHub / LinkedIn / Twitter icons
│   └── papers/<slug>/     # One folder per paper: figure + optional report.pdf
└── .nojekyll              # Skip Jekyll processing on GitHub Pages
```

The site is plain static HTML/CSS/JS — no build step.

## Local preview

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Adding a new paper

1. Drop a figure into `assets/papers/<slug>/figure.<ext>`.
2. Add an `<article class="paper-item">` block at the top of
   [`publications.html`](publications.html), copying the structure of an
   existing entry.
3. Optionally create a project repo at `<slug>` under your GitHub account and
   enable GitHub Pages — it will be served at `https://jmlemercier.github.io/<slug>/`.

## Deployment

The repo is served by [GitHub Pages](https://pages.github.com/) directly from
`master` at the root. The `.nojekyll` file tells Pages to skip Jekyll and serve
the files as-is.
