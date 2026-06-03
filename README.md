# Fil a l’Agulla - Astro Website

Improved Astro version of the Fil a l’Agulla static preview website.

## What changed

- Converted the static page into an Astro project.
- Added reusable components.
- Moved business content into `src/data/site.ts`.
- Rewrote the copy so it sounds like a real tailoring business page, not a web-design preview.
- Added quick info, concrete services, process, one placeholder review and stronger contact section.
- Kept the visual identity: soft pink, cream, handmade/tailoring style.
- Added safe reveal animations that do not hide content if JavaScript fails.
- Added a GitHub Pages workflow.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Main files to edit

```text
src/data/site.ts          Business info, links, services, gallery, review
src/styles/global.css     Colors, layout, spacing, responsive design
src/components/           Individual website sections
public/assets/img/        Images
```

## Images included

Images are stored in:

```text
public/assets/img/
```

## GitHub Pages

The included workflow deploys the built `dist/` folder using GitHub Actions.

In GitHub, go to:

```text
Settings > Pages > Source: GitHub Actions
```

The Astro config automatically detects the GitHub repository name during GitHub Actions and sets the correct `base` path for project pages.

## Hostinger

For Hostinger shared hosting:

```bash
npm run build
```

Then upload the **contents of `dist/`** to `public_html`.

## Notes before using with the real client

Update these in `src/data/site.ts`:

- Real address
- Phone number
- WhatsApp link
- Google Maps link
- Final opening hours, if needed
- Real Google reviews when available
