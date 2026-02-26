<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/4b0f06e4-1119-4b56-871c-7f2a22fe6052

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies: `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app: `npm run dev`

## Hostinger Deployment (manual upload)

Use these exact steps when deploying to `public_html`:

1. Build production files locally (or in CI):
   - `npm install --legacy-peer-deps`
   - `npm run build`
2. In Hostinger `public_html`, remove previously uploaded source files (`src/`, repository root `index.html`, etc.).
3. Upload the **contents of `dist/`** into `public_html` (including `index.html`, `assets/`, and `.htaccess`).
4. Confirm deployed `index.html` references built assets under `/assets/...` (not `/src/main.tsx`).
5. Hard-refresh with **Ctrl+F5** and test routes: `/`, `/about`, `/programmes`.

### Notes

- This repo now includes `public/.htaccess`, and Vite copies it into `dist/.htaccess` during build.
- The rewrite rule ensures SPA routes like `/about` and `/programmes` resolve to `index.html` on Hostinger Apache hosting.
