# elmagoct.github.io

User-site repo. Its only job is redirecting old project URLs after a rename:

- `/brophy-uav-dashboard/...` -> `/brophy-fpv-club/...` (renamed 2026-10-12)

`redirect.js` holds the map. Explicit pages exist for the main paths (they return 200);
`404.html` catches every other old deep link (posters PDFs, data.json, anything).
Project repos (brophy-fpv-club, brophy-aviators, ...) take precedence at their own paths.

Do NOT recreate a repo named `brophy-uav-dashboard`: the kiosks' git clones still use
GitHub's rename redirect to push to brophy-fpv-club.
