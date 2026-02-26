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

## Blank white page on Hostinger (most common cause)

If your domain shows a blank page, it usually means the **source project** was uploaded instead of the **built output**.

### Why this happens
- The project root `index.html` loads `/src/main.tsx` for development.
- Hostinger cannot execute TypeScript/TSX modules directly in production.
- Result: browser JS error + white page.

### Fix (exact)
1. Locally run:
   - `npm install --legacy-peer-deps`
   - `npm run build`
2. Open `dist/`.
3. Delete everything inside `public_html/` (except files you intentionally keep).
4. Upload **only the contents inside `dist/`** into `public_html/`.
   - `public_html/index.html` must be the one from `dist/`.
   - `public_html/assets/...` must exist.
   - `public_html/src/` should **not** exist.
5. Ensure `public_html/.htaccess` exists (copied from `public/.htaccess`).
6. Hard refresh with `Ctrl+F5` and test:
   - `https://acfhe.com/`
   - `https://acfhe.com/about`

### Quick browser check
Open DevTools → Console and Network.
- If you see failures for `/src/main.tsx`, `/src/...`, or MIME/module errors, deployment is using source files, not `dist`.
