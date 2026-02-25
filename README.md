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

## SPA routing fallback for BrowserRouter

Because the app uses `BrowserRouter`, direct requests to routes like `/about` and `/programmes` must be rewritten to `index.html` by your web server.

### Apache (.htaccess)

A ready-to-use `.htaccess` is included at `public/.htaccess` and will be copied to the publish root during build. It serves existing files/folders as-is and rewrites unknown paths to `/index.html`.

### Nginx-like config

Use a fallback in your server block:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```
