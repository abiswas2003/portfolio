# Adila Biswas — Personal Portfolio

Sailor Moon–inspired personal website for Adila Biswas, built with Vite, React, and TypeScript.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Scripts

- `npm run dev` — local development server
- `npm run build` — production build
- `npm run preview` — preview the production build

## Transformation intro

On first visit in a browser session, a soft Sailor Moon–inspired intro waits for **Click to transform**, then plays a short crescent / ribbon / sparkle sequence before revealing the home page. It is stored in `sessionStorage` under `adila-portfolio-intro-seen`.

To see it again: DevTools → Application → Session Storage → clear that key (or close the tab), then refresh. You can also click **Skip** to go straight to the site.
