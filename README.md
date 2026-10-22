# Pranit Harish Rai — Portfolio

A responsive, dark portfolio foundation built with React, TypeScript, Vite, Tailwind CSS, React Router, and Motion.

## Requirements

- Node.js 20+ (recommended: Node 22 or newer)
- npm

## Start locally

```bash
npm install
npm run dev
```

Vite prints a local URL (usually `http://localhost:5173`). Open it in a browser.

## Build and preview

```bash
npm run build
npm run preview
```

The production build is written to `dist/`.

## Project structure

- `src/data/content.ts` — central typed portfolio content, profile links, and clearly labeled placeholders.
- `src/App.tsx` — shared layout, navigation, footer, routes, and page shells.
- `src/styles.css` — Tailwind import, design tokens, responsive styles, and accessibility states.
- `public/resume.pdf` — the downloadable resume used by the Home and Resume pages.

The central data file contains the verified portfolio content and explicit placeholders for details that are not configured yet. LinkedIn is configured; GitHub and competitive-programming profile URLs remain unavailable and are shown as non-clickable placeholders. Keep employer project descriptions at the current high level unless public wording is approved. Replace `public/resume.pdf` with an updated approved resume when needed.
