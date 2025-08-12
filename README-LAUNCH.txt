DegenRewards — Launch Notes

1) Upload ALL files from degenrewards-main-READY-LAUNCH.zip to your site root.
2) Upload ALL files from degenrewards-main-IMAGES-LAUNCH.zip to the SAME ROOT (/images/... must resolve).
3) In Search Console: verify property and submit /sitemap.xml.

Recommended server/CDN security headers (configure in host/CDN):
- Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: geolocation=(), microphone=(), camera=()

Caching (safe defaults):
- /assets/*.css, /assets/*.js, /images/* : Cache-Control: public, max-age=31536000, immutable
- HTML files: Cache-Control: no-cache

If you need help wiring these on your host (Nginx, Cloudflare, Netlify, Vercel), ping me.
