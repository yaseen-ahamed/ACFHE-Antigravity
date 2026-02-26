#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SOURCE_HTACCESS="$ROOT_DIR/public/.htaccess"
BUILD_HTACCESS="$ROOT_DIR/dist/.htaccess"

if [[ ! -f "$SOURCE_HTACCESS" ]]; then
  echo "❌ Missing source file: public/.htaccess"
  exit 1
fi

if [[ ! -f "$BUILD_HTACCESS" ]]; then
  echo "❌ Missing built file: dist/.htaccess"
  echo "Run: npm run build"
  exit 1
fi

if cmp -s "$SOURCE_HTACCESS" "$BUILD_HTACCESS"; then
  echo "✅ dist/.htaccess matches public/.htaccess"
else
  echo "❌ dist/.htaccess does not match public/.htaccess"
  echo "Diff:"
  diff -u "$SOURCE_HTACCESS" "$BUILD_HTACCESS" || true
  exit 1
fi

if rg -q "RewriteCond %\{REQUEST_FILENAME\} -f" "$BUILD_HTACCESS" \
  && rg -q "RewriteCond %\{REQUEST_FILENAME\} -d" "$BUILD_HTACCESS" \
  && rg -q "RewriteRule \. /index\.html \[L\]" "$BUILD_HTACCESS"; then
  echo "✅ Rewrite checks present (-f, -d, fallback to /index.html)"
else
  echo "❌ Expected rewrite rules were not found in dist/.htaccess"
  exit 1
fi

echo
echo "Manual Hostinger checks to complete after deployment:"
echo "1) Confirm public_html/.htaccess exists and equals dist/.htaccess."
echo "2) Ensure Apache rewrite support is enabled in Hostinger (if configurable)."
echo "3) Open https://<your-domain>/about directly in the browser URL bar."
echo "   - Expected: React app content renders (not Hostinger 404)."
echo "4) If it still fails, inspect Hostinger Apache access/error logs for rewrite/module errors."
