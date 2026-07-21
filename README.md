# Adnan — Portfolio Website

A gaming-themed, scroll-animated personal portfolio built with plain HTML, CSS, and JavaScript (GSAP + ScrollTrigger for animation).

## Folder structure

```
portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
├── images/
│   └── my-photo.jpg        ← your About Me photo
└── videos/
    ├── about-button.mp4    ← plays inside the "About Me" hero button
    └── projects-button.mp4 ← plays inside the "View Projects" hero button
```

## 1. Run it locally

You don't need to install anything to view it, but a local server is recommended
so the video/image paths and fonts load correctly:

- **Easiest:** open `index.html` directly by double-clicking it (works, but some
  browsers restrict video autoplay/loading from local files).
- **Recommended (VS Code):** install the "Live Server" extension, right-click
  `index.html`, choose "Open with Live Server".
- **Recommended (Python installed):** open a terminal in the `portfolio` folder
  and run:
  ```
  python -m http.server 8000
  ```
  then open `http://localhost:8000` in your browser.

## 2. Replace your photo and videos

- Put your own photo at `images/my-photo.jpg` (same filename = no code changes needed).
- Put your own short looping clips at `videos/about-button.mp4` and
  `videos/projects-button.mp4`. Keep them short (a few seconds), muted-friendly,
  and not too busy — they play small and subtle behind the button text.
- If you use different filenames, update the `src="..."` paths in `index.html`
  (search for `✏️` comments — every editable spot is marked with one).

## 3. Change the hero text

Open `index.html`, find the `<!-- SECTION 1 — HERO -->` block, and edit:
- `<h1 class="hero__title">` — the main heading
- `<p class="hero__subtitle">` — the line under it
- `<p class="hero__desc">` — the paragraph

## 4. Change the About text

Find `<!-- SECTION 2 — ABOUT ME -->`. Edit the `profile__name`, `profile__role`,
`profile__bio` paragraph, and the three `stat` rows (label + value pairs).

## 5. Edit projects

Find `<!-- SECTION 4 — PROJECTS -->`. Each project lives inside one
`<article class="mission-card">...</article>` block. Copy/paste a whole block
to add a new project, or edit the title, description, tools line, status text,
and the `href="#"` link.

## 6. Edit skills

Find `<!-- SECTION 3 — SKILLS -->`. Each skill is a `.skill-node` block with a
`data-level="80"` attribute (0–100) that controls how full its bar animates to.

## 7. Edit contact links

Find `<!-- SECTION 5 — CONTACT -->`. Replace the `mailto:`, GitHub, and
LinkedIn `href` values, and the résumé button's `href` (point it at your
resume file, e.g. `resume.pdf`, placed in this same folder).

## Troubleshooting

- **Changes not showing up?** Hard-refresh the browser: `Ctrl+Shift+R`
  (Windows/Linux) or `Cmd+Shift+R` (Mac). Browsers cache CSS/JS aggressively.
- **Video not playing?** Make sure the file is actually an `.mp4` and the path
  in `index.html` matches the real filename exactly (case-sensitive).
- **Fonts/animations not loading?** Make sure you have an internet connection —
  fonts and GSAP are loaded from CDNs in `index.html`.
- **Nothing appears at all / blank page?** Open your browser's DevTools
  (F12) → Console tab, and check for a red error message — it usually points
  straight at the problem (often a typo in a file path).
