# 🎬 Movie Watchlist — Project Quest

A single-page app: search real shows from an API, build a personal watchlist, mark them watched, rate them, and have it all survive a page refresh.

**Stack:** HTML + one JS file. **API:** TVmaze (no key needed).

---

## How We Work

- I build each stage myself. Claude reviews, points out bugs, I fix them. **No code handed to me.**
- One stage at a time, tested before moving on.
- Bring design questions anytime ("should this be a method or standalone?") — that thinking is half the point.

---

## Stage 1 — Search & Display

- [ ] Input + button. User types a title.
- [ ] Fetch from TVmaze: `https://api.tvmaze.com/search/shows?q=TITLE`
- [ ] Render each result as a **card**: poster, title, year (premiered), and an **"Add"** button.
- [ ] Handle shows with **no image** (skip or use a placeholder).

## Stage 2 — `Show` Class & Watchlist

- [ ] Write a `Show` class.
  - **Properties:** `id`, `title`, `year`, `poster`, `watched` (default `false`), `rating` (default `null`)
  - **Methods:** `toggleWatched()`, `setRating(n)`
- [ ] Clicking **"Add"** → create a `Show` instance → push into a `watchlist` array → render in a separate **"My List"** section.
- [ ] Block **duplicates** (check the `id`).

## Stage 3 — Interactions

Each list item needs:
- [ ] **Mark Watched / Unwatch** toggle
- [ ] Set a **rating 1–5**
- [ ] **Remove** button

All three update the actual `Show` instance (via its methods), then re-render.

## Stage 4 — Persistence

- [ ] Watchlist survives refresh.
- [ ] Save to **localStorage** on every change (`JSON.stringify`).
- [ ] On page open, **load** and rebuild `Show` instances (`JSON.parse`).

## Stage 5 — Stats

- [ ] A live line: **total count**, **how many watched**, **average rating** of rated shows.
- [ ] Computed with array methods (`filter`, `reduce`).

---

## Skills This Exercises

`classes` · `array-of-objects` · `DOM creation` · `events` · `async/API` · `JSON` · `localStorage` · `filter/reduce`

---

### Progress

- [ ] Stage 1
- [ ] Stage 2
- [ ] Stage 3
- [ ] Stage 4
- [ ] Stage 5
