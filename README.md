# AniGlow

A free static anime discovery website with live search, genre/year/format filters, sorting, paginated results, title details, available trailer embeds and a browser-local watchlist.

## Deploy
Publish the repository root as a static site. No build command is required; `index.html` is the entry point.

## Data and limitations
- Catalogue data comes from the public Jikan API (`https://api.jikan.moe/v4`), an unofficial MyAnimeList data API. It is not affiliated with or endorsed by MyAnimeList.
- Results are paginated and depend on API coverage. The API can be rate-limited or temporarily unavailable; AniGlow does not claim to list every anime ever made.
- Poster artwork, titles, synopses and trailers remain the property of their respective rights holders. API availability does not grant AniGlow a republication licence. Remove material if requested by a rights holder.
- Trailer embeds appear only when the API provides a YouTube trailer ID. AniGlow does not host anime episodes or provide pirated streams.
- Watchlist entries are saved in the visitor's browser with localStorage and are not synced across devices.
- The community section is a placeholder and does not accept public posts. Shared accounts, reviews and discussions require a secure backend, authentication, moderation, reporting and privacy controls before launch.

## Privacy
The site does not currently ask visitors to create accounts or submit personal information. It requests catalogue data from Jikan and poster images from the image hosts supplied by the API. Watchlist data stays in the visitor's browser. Add a full privacy policy and any required consent controls before adding analytics, advertising or accounts.
