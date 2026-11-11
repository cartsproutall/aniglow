# AniGlow

A free static anime discovery site with live title search, genre/year/format filters, sorting, paginated catalogue results, title details, available trailer embeds, and a browser-local watchlist.

## Live sections
- **Discover:** queries the Jikan anime catalogue on demand. Search and filters work against the live API and results are paginated; this is not a hand-entered two-title list or a local download of the entire catalogue.
- **Currently airing:** loads the current-season catalogue from Jikan.
- **Today's episode schedule:** loads anime listed for broadcast on the current weekday. This is a published schedule, not confirmation that a particular streaming service has released an episode.
- **Upcoming:** loads upcoming anime entries from Jikan.
- Live seasonal/schedule sections refresh when the page loads, when the visitor presses Refresh, and every 30 minutes while the page remains open.
- A small built-in starter set appears immediately and remains available if the API is temporarily unavailable.

## Deploy
This is a static site. Publish the repository root; no framework build step is needed. `index.html` is the entry point. For Cloudflare Pages Git integration, use production branch `main`, leave the build command blank, and set the build output directory to the repository root (`/`). Cloudflare Pages Git integration automatically deploys commits pushed to the connected production branch.

## Data limitations
- Catalogue and schedule data come from the public Jikan API (`https://api.jikan.moe/v4`), an unofficial MyAnimeList data API. It is not affiliated with or endorsed by MyAnimeList.
- Jikan is a third-party catalogue/schedule source, not a universal episode-delivery tracker. AniGlow cannot truthfully guarantee instant notification of every episode release or verify that an episode is playable on a particular service. The current episode section shows published broadcast schedules only.
- API coverage, rate limits and uptime are outside AniGlow's control. The full catalogue is queried on demand and paginated; it is not mirrored in this repository.
- Poster artwork, titles, synopses and trailers remain the property of their respective rights holders. API availability does not grant AniGlow a republication licence. Remove material if requested by a rights holder.
- Trailer embeds appear only when the API provides a YouTube trailer ID. AniGlow does not host anime episodes or provide pirated streams.
- Watchlist entries are saved in the visitor's browser with localStorage and are not synced across devices.
- The community section is a placeholder. Public accounts, posts and discussions require a secure backend, authentication, moderation, reporting and privacy controls.

## Privacy
The site does not currently ask visitors to create accounts or submit personal information. It requests catalogue and schedule data from Jikan and poster images from image hosts supplied by the API. Watchlist data stays in the visitor's browser. Add a full privacy policy and any required consent controls before adding analytics, advertising or accounts.
