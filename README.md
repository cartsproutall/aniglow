# AniGlow

Self-contained static manga discovery website. The current build does not call third-party catalogue APIs, image CDNs, font services, analytics or streaming websites.

## Included
- Curated starter manga catalogue across multiple decades, searchable by title, author, genre and publication year.
- Original CSS cover-style artwork generated locally. These are not copied official manga covers.
- Original short editorial descriptions, author information and related-title recommendations.
- Browser-local reading list, responsive mobile/desktop layout, and a directory of established digital manga platforms.
- Per-title community comment form stored locally in the visitor's browser; comments are not public or synchronised between visitors.
- Curated collections are editorial groupings, not live sales charts, publication schedules or chapter-release alerts.

## Legal and accuracy
- AniGlow does not host manga scans, full chapters or unauthorised downloads.
- Visitors should use authorised publisher or distributor platforms to read manga.
- Descriptions are original short editorial summaries, not official publisher copy.
- No audience scores, user reviews or comments are fabricated. The community section will only show real, moderated contributions once a consent-based community system exists.
- Reading-platform links lead to provider websites; title availability, chapter access, subscriptions and regional restrictions must be checked with each provider.
- Manga volume/chapter order is not fabricated; publisher editions determine their own numbering. Seasons are generally an anime/TV classification, not a standard manga structure.
- There are no live publication alerts or user accounts in this prototype. Reading-list data stays in the visitor's browser.
- Official cover art may only be added if AniGlow obtains a suitable licence or written permission for advertising-supported website display.

## Deploy
Publish the repository root as a static site. No build command is required. index.html is the entry point. Cloudflare Pages should use production branch main, blank build command and repository root as output directory.
