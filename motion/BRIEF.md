# Motion brief — Azza Beauty product reel

## Who and where
Azza Khalil sells My Way Egypt products (perfume, body sprays and gels, skin/hair care, home products,
My Chef) to women in Egypt, mostly through WhatsApp Status, Facebook and Instagram Reels, with a WhatsApp
Business catalog. The reel shows off her product range and drives people to message her on WhatsApp.
**No prices on screen** (owner's decision) — see `FACTS.md`; price questions go to WhatsApp.

## Format
- 1080 × 1920 (9:16), 30 fps, 20–30 s, silent (music gets added in-app).
- Egyptian Arabic, RTL, addressed to a woman (`اطلبي`, `كلميني`), same voice as the site.
- Opening hook inside the first 1.5 s. Closing CTA card (`اسألي عن السعر على واتساب` + WhatsApp icon + Azza Beauty) held ≥ 3 s.
- Readability: a headline stays fully readable ≥ 2 s; a product name ≥ 1.8 s; nothing important flashes.
  Minimum on-screen text size 44 px.
- **Safe zone** (platform UI covers the rest): all text inside x 80–1000, y 260–1480.
  The bottom 420 px and top 240 px may hold only background/decoration.

## Content rules
Read `FACTS.md`. Every on-screen word, number and product name must come from it. When in doubt, leave it out.

## Technical contract (so `render.cjs` can render it frame-accurately)
- One self-contained `index.html` per piece; reference only local files (`../../fonts/…`, `../../cutouts/…`,
  `../../photos/…`, `../../../assets/…` from `motion/concepts/<id>/`). No CDNs, no network.
- `html, body` exactly 1080 × 1920, `overflow:hidden`, explicit background.
- Set `window.DURATION = <seconds>` in a script.
- Animate with CSS `@keyframes` (+ `animation-delay` for timing) or the Web Animations API. The renderer pauses
  every animation and sets `currentTime` per frame, so: **no** `setTimeout`/`setInterval`/`requestAnimationFrame`
  loops, **no** `Date.now()`/`Math.random()` at runtime (a seeded PRNG at load is fine), **no** CSS `transition`s
  for timeline motion. For JS-drawn effects (canvas particles etc.) define `window.seek = t => { … }` that draws
  the state at time `t` deterministically.
- Use `animation-fill-mode: both` so elements sit in their start state before their delay.
- Load fonts with `@font-face` from `motion/fonts/` (El Messiri variable 400–700, Tajawal 400/500/700/800/900, Lalezar).

## Render commands (run from the piece's folder)
- Stills + contact sheet: `node ../../render.cjs index.html --stills 0.3,1,2,… --stills-dir stills`
- Video: `node ../../render.cjs index.html --out preview.mp4`
- The renderer prints `PAGE ERRORS` and exits 1 if anything fails to load — fix until clean.
