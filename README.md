# AniGlow

Self-contained static anime discovery website. The current build does not call third-party catalogue APIs, image CDNs, font services, analytics or streaming websites.

## Included
- Curated anime catalogue from 1986–2025, searchable by title, genre, year and format.
- Original CSS poster-style artwork generated locally from title, year and genre. These are not copied official covers.
- Local anime detail panels with short editorial summaries and related-title recommendations.
- Browser-local watchlist and responsive mobile/desktop layout.
- Curated collections are editorial groupings, not live charts, schedules or release alerts.

## Legal and accuracy
- AniGlow does not host episodes, scrape streaming services, copy reviews or reproduce official poster art.
- Descriptions are original short editorial summaries.
- No audience scores, user reviews or comments are fabricated. The community section will only show real, moderated contributions once a consent-based community system exists.
- There are no live release alerts or user accounts in this prototype. Watchlist data stays in the visitor's browser.
- Official key art may only be added if AniGlow obtains a suitable licence or permission.

## Deploy
Publish the repository root as a static site. No build command is required. index.html is the entry point. Cloudflare Pages should use production branch main, blank build command and repository root as output directory.
