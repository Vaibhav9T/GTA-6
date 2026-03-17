# GTA VI Inspired Landing Page

A React and Vite single-page experience inspired by GTA VI promotional visuals. The project uses GSAP-driven motion, layered image composition, and custom typography to create a dramatic intro sequence and animated landing screen.

## What This Project Does

This app renders a stylized game landing page with:

- An animated SVG mask intro that reveals the scene through a large `VI` mark
- Layered parallax motion tied to mouse movement
- A cinematic hero section with background, sky, character, and branding assets
- A second promotional content section with themed typography and a call-to-action button

## Why It Is Useful

This project is useful if you want a compact example of:

- Building a motion-heavy React UI without a large component tree
- Combining GSAP with React through `@gsap/react`
- Using Tailwind CSS utilities for fast layout styling
- Structuring a game or campaign landing page around static assets in `public/`

It also works as a starting point for portfolio work, frontend animation experiments, or themed promotional microsites.

## Tech Stack

- React 19
- Vite 6
- GSAP and `@gsap/react`
- Tailwind CSS 4
- Remix Icon

## Project Structure

```text
src/
	App.jsx        # landing page layout and GSAP animations
	main.jsx       # React entry point
	index.css      # Tailwind import and custom font setup
public/
	*.png          # hero, background, and branding assets
	pricedown.otf  # themed display font
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install and Run

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal, usually:

```text
http://localhost:5173
```

### Production Build

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

## Example Development Flow

```bash
git clone <your-repo-url>
cd GTAVI-main
npm install
npm run dev
```

## How It Works

The main experience lives in `src/App.jsx`:

- A GSAP timeline animates the intro mask and reveals the main content
- Conditional rendering waits until the intro finishes before showing the landing page
- Additional GSAP animations scale and rotate scene layers into place
- Mouse movement shifts foreground and background elements to simulate depth

## Customization Notes

Common edits you may want to make:

- Replace placeholder copy in the second section with real marketing text
- Swap the images in `public/` for your own artwork
- Update the browser title and favicon in `index.html`
- Connect the `Download Now` button to a real destination

## Where To Get Help

- Open an issue in this repository for bugs or feature requests
- Use pull requests for proposed changes
- If you are adapting the project, review `src/App.jsx` first because most behavior is defined there

## Maintainers And Contributions

This repository does not currently declare named maintainers in project metadata. It is effectively maintained by the repository owner and any contributors who submit updates.

If you want to contribute:

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Run `npm run lint`.
5. Open a pull request with a clear summary.

## Status

This is a frontend-only project. There is no backend, authentication flow, or API integration in the current codebase.
