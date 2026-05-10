# borck.consulting

Source for [borck.consulting](https://borck.consulting) — a private consulting practice for AI literacy, governance, and data sovereignty in regulated Australian small businesses.

Astro 5, plain CSS, deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev    # → http://localhost:4321
npm run build  # → ./dist
npm run preview
```

## Structure

```
src/
  layouts/Base.astro        # Site shell (topbar, footer, page wrapper)
  pages/
    index.astro             # Home
    services.astro          # Services and pricing
    about.astro             # Bio, books, framework provenance, disclosure
    contact.astro           # Booking + form + email
    legal.astro             # Privacy + terms + data-handling commitment
    writing/
      index.astro           # Essay index
      [...slug].astro       # Individual essay route
  content/essays/*.md       # Long-form essay content collection
  content.config.ts         # Content collection schema
  styles/global.css         # All styles (light theme, sage accent)
public/
  CNAME                     # GitHub Pages custom domain
  favicon.svg
.github/workflows/deploy.yml # Auto-deploy on push to main
```

## Pre-launch checklist

- [ ] Replace Cal.com placeholder URL in `src/pages/contact.astro` once Cal.com is configured
- [ ] Replace Formspree placeholder ID in `src/pages/contact.astro` once form provider is set up
- [ ] Replace book cover placeholders in `src/pages/about.astro` with real cover images (currently shows title text on a panel)
- [ ] Confirm Diagnostic price (currently AU$1,500 fixed in `src/pages/services.astro`)
- [ ] Verify essay content one final time against Curtin firewall (no reuse of teaching materials)
- [ ] Confirm GitHub Pages source is set to "GitHub Actions" in repo Settings → Pages
- [ ] Configure DNS A/CNAME records pointing `borck.consulting` to GitHub Pages
- [ ] Lodge Curtin Disclosure of Relationships and Interests **before** site goes public
- [ ] Bind PI insurance before first paid engagement

See `~/Projects/local-ai/docs/superpowers/specs/2026-05-09-borck-consulting-launch-design.md` and the corresponding plan file for the full launch sequence.
