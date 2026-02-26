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
4. Run `./scripts/verify-spa-rewrite.sh` locally before uploading to ensure `dist/.htaccess` is present and matches `public/.htaccess`.
5. After deployment, verify `public_html/.htaccess` exists on Hostinger and contains:
   - existing file pass-through check (`RewriteCond %{REQUEST_FILENAME} -f`)
   - existing directory pass-through check (`RewriteCond %{REQUEST_FILENAME} -d`)
   - SPA fallback rewrite (`RewriteRule . /index.html [L]`)
6. In Hostinger panel, ensure Apache rewrite support is enabled (if configurable for your plan/environment).
7. Test a direct client-side route such as `https://<your-domain>/about` in the browser URL bar.
   - Expected: app content renders.
   - Not expected: Hostinger 404 page.
8. If direct routes still fail, check Hostinger access/error logs for rewrite or module issues (`mod_rewrite`, denied overrides, missing `.htaccess` parsing, etc.).
9. Hard-refresh with **Ctrl+F5** and confirm in the browser Network tab that JS files are served from `/assets/...`.
