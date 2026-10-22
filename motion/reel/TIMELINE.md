# Azza Beauty — final reel timeline

`motion/reel/index.html` · 1080 × 1920 · 30 fps · **27.0 s** · silent · RTL Egyptian Arabic.
Base: the KINETIC concept (bold Lalezar/Tajawal two-tone type, eyebrow pills, overshoot pops, varied wipes),
finished with LUXE details: lit radial gradients, a vignette, a static film-grain tile, gold-foil text with a
moving sheen, seeded gold dust, contact shadows and floor reflections under the bottles, glass light sweeps,
and a gold light edge on every wipe. All four brand colours are used: pink (S1, S6), cream/blush (S2, S5),
gold (S3, S7) and plum (S4, S8).

Each scene is revealed by a 0.56 s wipe that starts at its start time. A gold light edge rides the wipe
line or circle, and the outgoing scene scales to 0.93 and darkens underneath it. The incoming content is
already animating while the wipe runs, so no frame shows an empty slab.

| # | Start–end (s) | Wipe in | On-screen copy (exact) | Assets |
|---|---|---|---|---|
| S1 Hook | 0.00–2.60 | (none; legible at frame 0) | `أجمل` (gold foil) / `تشكيلة` · `برفانات وعناية ومنتجات للبيت` | cutouts/boom.png, tender.png, cavalier.png |
| S2 Tender | 2.60–5.40 | diagonal, right to left | pill `عطور رجالي وحريمي` · `برفانات` · pill `برفان تندر` \| `Tender` | cutouts/tender.png (1.9×; the flyer fragment on its right edge is clipped and the faint clear cap is removed by an alpha curve) |
| S3 Men's | 5.40–8.60 | iris from the pedestal | `برفانات` / `رجالي` · `BOOM` `Cavalier` `ELITE` (gold) · `اختاري اللي يناسبك` | cutouts/boom.png (soft alpha fringe tightened), cavalier.png, elite.png in a dark arched niche on a lit pedestal |
| S4 Men's set | 8.60–11.80 | diagonal, left to right | `الطقم الرجالي` (gold foil) · `بوم وإسنشيال وساعة` · `هدية شيك للزوج والأخ والابن،` / `وأطقم كاملة.` (gold foil) | photos/menset-clean.png at 920 px wide (x 80–1000) in a black, gold-framed window: the MY WAY heading is uncropped and the watch is at x ≈ 845–925; floor reflection below |
| S5 Home | 11.80–14.60 | upward, tilted | pill `منتجات البيت` · `سيكرت جاردن` / `نسيم الحدائق` · label `عطري بيتك وهدومك` | cutouts/secret-garden-top.png (1.7×) rising out of a lit cream plinth with gold rims. It is shown alone, and october-pair.png is not used |
| S6 Care | 14.60–17.80 | diagonal, right to left | pill `عناية بالبشرة والشعر` · polaroid signature `Azza Beauty` · `فيرا` / `VERA` / `جل الصبار فيرا` / `لجميع أنواع البشرة` · `كليوباترا` / `Cleopatra` / `كليوباترا للتطويل` | photos/vera-cleopatra.jpg (stamp-free version) as a taped, tilted (−2.5°) polaroid with pink tape |
| S7 More | 17.80–21.60 | downward, tilted | `وكمان…` · `اسبريهات حريمي ورجالي` / `اسبري معطر للجسم` · `مسكا` / `جل معطر للجسم` · `مجموعات شامبو وشاور وماسك` · `ماي شيف` | type only, with gold rules and diamonds and a thin bronze frame |
| S8 End card | 21.60–27.00 | iris from the centre | `Azza Beauty` ("Beauty" in gold foil) · `عزة خليل · فريق ماي واي مصر` · `اسألي عن السعر` · green WhatsApp pill `على واتساب` · `شوفي الكتالوج على واتساب` · ♥ `عائلة واحدة` ♥ · `حساب مستقل لعضوة في ماي واي مصر،` / `وليس الحساب الرسمي للشركة` (44 px, muted) | Lit shelf: boom-gel.png, cavalier.png, tender.png, secret-garden.png (0.7×), elite.png, boom.png; WhatsApp icon (inline SVG); hearts (inline SVG) |

## Readability (measured frame by frame)

The measurement takes the first frame from which each line stays in its final position with opacity ≥ 0.95,
and counts until the next wipe starts.

- Headlines: `أجمل/تشكيلة` is legible from frame 0 and holds 2.6 s · `برفانات` (S2) 2.2 s · `برفانات/رجالي` 2.5–2.8 s ·
  `الطقم الرجالي` 2.6 s · `سيكرت جاردن` 2.4 s · `عناية بالبشرة والشعر` 2.7 s · `وكمان…` 3.2 s.
- Product names: `برفان تندر | Tender` 2.0 s · `BOOM/Cavalier/ELITE` 2.4–2.6 s · `فيرا/كليوباترا` 2.5 s ·
  `VERA/Cleopatra` 2.4 s · list items 2.8–3.4 s.
- Sub-lines: every one holds 2.0 s or longer. `عطري بيتك وهدومك` holds 2.0 s after its right-to-left label wipe
  ends at 12.58 s, and `كليوباترا للتطويل` holds 2.2 s.
- End card: the CTA, pill, catalog line and disclaimer reach their final positions by about 22.5 s and hold
  4.5 s. The pill's single sheen pass ends at 23.35 s. After that only the soft green glow behind the pill
  breathes, and it stays inside x ≈ 190–890.

## Safe zone

Every text run's ink box was measured in the settled frame of each scene (canvas text metrics combined with
the layout boxes). Everything is inside x 80–1000 and y 260–1480, and the smallest text is 44 px (disclaimer,
`عائلة واحدة`, `VERA`, `Cleopatra`). Only decoration (floors, reflections, plinths, frames, dust) sits outside
the safe zone.

## Technical

- `window.DURATION = 27`. All timeline motion uses CSS `@keyframes` with `animation-fill-mode: both` and delays of
  `calc(var(--t0) + var(--d))`.
- `window.seek(t)` draws the gold dust (120 specks and 8 bokeh, seeded mulberry32) for any time `t`.
- The grain tile is generated once at load from the same seeded PRNG.
- There are no timers, rAF, `Date.now` or `Math.random`.
- All files are local: `../fonts/`, `../cutouts/`, `../photos/`.
- `?guides=1` overlays the safe zone for checking.
- Render: `node ../render.cjs index.html --stills … --stills-dir stills` and
  `node ../render.cjs index.html --out preview.mp4`.
