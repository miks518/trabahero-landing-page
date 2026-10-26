# Trabahero Landing Page

Landing page for **Trabahero** - a free Chrome extension that scans job postings for scam signals, verifies the employer behind them with cited public sources, and matches jobs to a resume. Built for Filipino job seekers.

Static site: Vite + React 19 + TypeScript + Tailwind CSS.

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to dist/
npm run lint      # oxlint
```

Deployed to GitHub Pages by `.github/workflows/deploy.yml` on push to `main`.

## What the page describes

The copy tracks the current extension (v0.5.0): element-picker screenshot scan, severity-flagged posting analysis, the two-stage 0–100 risk score, Tavily employer verification with sources, offer analysis for postings with no employer, resume matching against locally stored scans, and the offline failsafe. The backend stack is FastAPI → OpenRouter models + Tavily search.

Keep it in step with the product: no invented statistics, no guarantees, no claims the extension does not make.

## Tech Stack

- **Vite** - build tool
- **React 19** + TypeScript
- **Tailwind CSS 3** - PostCSS plugin
- **Google Fonts** - Inter, Hanken Grotesk, Material Symbols

Built by Janzel Garcia, Georich Mikko Yuzon, Denzel Capulong, John Uriel Garcia, Princess Myr Manquil, and Neil Andrei Manuntag.
