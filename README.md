# SMVEC – School of Physiotherapy

React + Vite website for the School of Physiotherapy, Sri Manakula Vinayagar
Engineering College (SMVEC).

> **Note:** This project was reconstructed from the production build in `dist/`
> (no source maps were available). All page content, routes, components, and
> form logic were recovered from the minified bundle; component and file names
> were re-created by hand.

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build → dist/
```

## Stack

- React 19 + Vite
- react-router-dom 7 (routes: `/`, `/about-us`, `/faculty`, `/admission`,
  `/success`, `/already-enquired`, `/programee/bpt`)
- MUI (admission enquiry form fields)
- axios (enquiry + OTP API at `https://agribackend.vercel.app`)

## Project layout

- `src/pages/` – one component per route
- `src/components/` – Header, Footer, Hero, EnquiryForm (OTP flow), etc.
- `src/components/Icons.jsx` – icons recovered as inline SVG (originally from
  react-icons; exact paths preserved)
- `src/data/` – states/cities and course lists used by the enquiry form
- `src/scss/` – **original SCSS source** (recovered intact from `dist/assets/scss`).
  Not wired into the build; the compiled stylesheet is served instead (below).
- `public/assets/main.css` – the compiled site stylesheet, linked from
  `index.html`. Its image URLs are relative to `/assets/`, so it must stay at
  that path. To switch to SCSS compilation, install `sass`, import
  `src/scss/main.scss` from `src/main.jsx`, fix the relative `url(img/...)`
  paths, and remove the `<link>` from `index.html`.
- `public/assets/` – images, fonts, videos, PDFs (BoS documents,
  faculty list), and legacy template JS from the original site.

## Notes recovered from the build

- `/faculty` is intercepted by an inline script in `index.html` that redirects
  to `/assets/doc/faculty-list.pdf` before React loads (the React Faculty page
  at `src/pages/Faculty.jsx` still exists behind it).
- The enquiry form captures UTM parameters from the query string and requires
  OTP verification before submitting.
- `public/_redirects` (Netlify) and `public/.htaccess` (Apache) handle SPA
  fallback routing in production.
