# Sprint 17 Frontend Deployment

This repository is prepared for a production-grade frontend build that is deployment-ready for Vercel.

## Objective

Deliver a polished and performant frontend experience that satisfies the Sprint 17 Track A production requirements:

- Complete a strict production build with `npm run build`
- Keep the app responsive and accessible
- Prepare environment variables for Vercel deployment
- Optimize for Lighthouse performance and accessibility targets
- Maintain a clean, deployable Next.js structure

## Project setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the app locally:
   ```bash
   npm run dev
   ```

3. Run the production build:
   ```bash
   npm run build
   ```

4. Start the production server:
   ```bash
   npm start
   ```

## Deployment notes

- This app is designed for Vercel deployment.
- Add all public environment variables in the Vercel dashboard.
- For a production deployment, configure project settings and trigger a new deploy from the main branch.
- The starter app is optimized for a minimal, fast, accessible landing page and is ready to be extended with your real product features.

## Lighthouse goals

Target metrics:

- Performance: 90+
- Accessibility: 90+

Keep the app lightweight, semantic, and efficient by avoiding unnecessary client-side libraries and large media files.

## Repository status

This repo provides the deployable frontend baseline and production-ready structure for the sprint deliverable.
