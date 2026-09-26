# Yangzin Chuskit — Portfolio

A single-page React portfolio with a custom cursor and scroll-triggered
reveal animations. Built with Vite.

## 1. Edit your content

- `src/components/Hero.jsx` — name, tagline, GitHub/LinkedIn links
- `src/components/Work.jsx` — edit `CLIENT_PROJECTS` and `PUBLIC_PROJECTS`
  at the top of the file. Client projects show without links (just a
  "Client project" badge); public projects show live demo + code links.
- `src/components/Experience.jsx` — your work history
- `src/components/Contact.jsx` — contact details
- `src/components/HardworkSection.jsx` — swap the three demo components
  in `DEMOS` for your own, or edit the demos directly in
  `src/components/demos/`

## Design notes

- **Theme**: black (`#0A0A0A`) + orange (`#FF5A1F`) accent, set as CSS
  variables at the top of `src/index.css` — change them there to retheme
  the whole site.
- **Cursor** (`src/components/Cursor.jsx`): a small dot plus a blended
  ring that magnetically snaps toward any element with `data-cursor`, and
  morphs into a text label (e.g. "View", "Play") when the attribute has a
  value other than `"hover"`.
- **Magnetic buttons**: `src/hooks/useMagnetic.js` — attach via
  `data-magnetic` to any element; it eases toward the pointer when nearby.
- **The Hardwork Section**: an expandable gallery. Each demo is its own
  component in `src/components/demos/` (particle canvas, SVG blob morph,
  scroll-driven panels) — copy that pattern to add more.

## 2. Run it locally (optional, to preview changes)

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

## 4. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/log in with GitHub
2. Click **Add New → Project**
3. Select your `portfolio` repo
4. Vercel auto-detects Vite — just click **Deploy**
5. You'll get a live URL like `yangzin-portfolio.vercel.app`

Every time you `git push`, Vercel redeploys automatically.
