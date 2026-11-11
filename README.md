# AniGlow

A free static anime discovery website with a built-in starter library and a live catalogue connection. Features include title search, genre/year/format filters, sorting, paginated live results, title details, available trailer embeds and a browser-local watchlist.

## Deploy
Publish the repository root as a static site. No build command is required; `index.html` is the entry point. The Git-connected Cloudflare Pages project should deploy automatically after commits to the production branch.

## Catalogue and limitations
- The site immediately displays a small curated starter library so the discovery area is not blank while the external catalogue loads or if it is temporarily unavailable.
- When available, the live catalogue uses the public Jikan API (`https://api.jikan.moe/v4`), an unofficial MyAnimeList data API. It is not affiliated with or endorsed by MyAnimeList.
- The built-in starter library is not an exhaustive list of every anime. Live results are paginated and depend on API coverage. The API can be rate-limited or temporarily unavailable.
- Poster artwork, titles, synopses and trailers remain the property of their respective rights holders. API availability does not grant AniGlow a republication licence. Remove material if requested by a rights holder.
- Trailer embeds appear only when the API provides a YouTube trailer ID. AniGlow does not host anime episodes or provide pirated streams.
- Watchlist entries are saved in the visitor's browser with localStorage and are not synced across devices.
- The community section is a clearly labelled placeholder and does not accept public posts. Shared accounts, reviews and discussions require a secure backend, authentication, moderation, reporting and privacy controls before launch.

## Privacy
The site does not currently ask visitors to create accounts or submit personal information. It requests catalogue data from Jikan and poster images from image hosts supplied by the API. Watchlist data stays in the visitor's browser. Add a full privacy policy and any required consent controls before adding analytics, advertising or accounts.
