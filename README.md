# borck.consulting

Source for [borck.consulting](https://borck.consulting), a private consulting practice for AI literacy, governance, and data sovereignty in regulated Australian small businesses.

Astro 5, plain CSS, deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev    # http://localhost:4321
npm run build  # ./dist
npm run preview
```

## Structure

```
src/
  layouts/Base.astro        # Site shell, SEO, schema, desktop and mobile nav
  pages/
    index.astro             # Home
    services.astro          # Services and pricing
    about.astro             # Bio, books, framework provenance, disclosure
    evidence.astro          # Public evidence and field notes
    contact.astro           # Email contact path
    legal.astro             # Privacy, terms, data-handling commitment
    writing/
      index.astro           # Essay index
      [...slug].astro       # Individual essay route
  content/essays/*.md       # Long-form essay content collection
  content.config.ts         # Content collection schema
  styles/global.css         # All styles, light theme, mobile rules
public/
  CNAME                     # GitHub Pages custom domain
  favicon.svg
  og.svg                    # Social card source
  og.png                    # Social card
  robots.txt
.github/workflows/deploy.yml # Auto-deploy on push to main
```

## Contact

The site uses email only: `michael@borck.dev`. There is no booking service or contact form.

## Pre-launch checklist

- [x] Curtin Disclosure of Relationships and Interests lodged
- [ ] Professional indemnity insurance bound
- [x] Contact path uses `michael@borck.dev`
- [x] GitHub Pages source set to "GitHub Actions"
- [x] DNS points `borck.consulting` to GitHub Pages
- [x] Sitemap, robots, canonical tags, OG image, and `ProfessionalService` schema
- [ ] Replace book cover placeholders in `src/pages/about.astro` with real cover images
- [ ] Confirm Diagnostic price (currently AU$1,500 fixed in `src/pages/services.astro`)
- [ ] Verify essay content one final time against Curtin firewall (no reuse of teaching materials)
