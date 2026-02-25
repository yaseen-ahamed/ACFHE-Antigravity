<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/4b0f06e4-1119-4b56-871c-7f2a22fe6052

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Hostinger Git Deployment

Use these exact build/publish settings in Hostinger:

1. Build command sequence:
   - `npm install`
   - `npm run build`
2. Publish directory (website root): `dist`
3. If deploying manually by file upload, upload only the contents of `dist/` (do not upload `src/` or the project root `index.html`).
4. After deployment, hard-refresh with **Ctrl+F5** and confirm in the browser Network tab that JS files are served from `/assets/...`.
