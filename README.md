# AniGlow

Self-contained static anime discovery website. The current build does not call third-party catalogue APIs, image CDNs, font services, analytics or streaming websites.

## Included
- Curated starter catalogue of anime titles from 1986–2025, searchable by title, genre, year and format.
- Original CSS poster-style artwork generated locally from title, year and genre. These are not copied official covers.
- Local anime detail panels, short editorial summaries and browser-local watchlist.
- Curated sections for popular picks, recent-era selections and classics. They are not live charts or release schedules.
- Responsive mobile and desktop layout.

## Legal and accuracy
- AniGlow does not host episodes, scrape streaming services, copy reviews or reproduce official poster art.
- Descriptions are original short editorial summaries.
- The displayed scores are illustrative design values, not verified audience ratings; do not represent them as factual rankings.
- There are no live release alerts, user accounts, user reviews or comments in this prototype.
- Watchlist data stays in the visitor's browser.
- Official key art may only be added if AniGlow obtains a suitable licence or permission.

## Deploy
Publish the repository root as a static site. No build command is required. index.html is the entry point. Cloudflare Pages should use production branch main, blank build command and repository root as output directory.
