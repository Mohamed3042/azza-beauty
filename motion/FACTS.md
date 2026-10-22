# Facts sheet — the only content allowed on screen

Every word and product name in the motion pieces must trace back to a line in this file.

## Decision from the owner: NO PRICES
Her WhatsApp catalog and the offer flyers disagree on prices, and prices change often, so the
video shows **no prices of any kind**: no numbers with جنيه/ج/EGP, no "بدل", no old/new price,
no discount percentages (55%, 50%…), no "شامل التوصيل", no points, no product codes, no offer dates.
Every price question goes to WhatsApp: the closing line is `اسألي عن السعر على واتساب`.
Images that show a price (the flyers in `assets/offer-*.jpg`) must **not** appear on screen; use the
price-free cutouts and photos listed below instead.

## Sources
1. **Her WhatsApp Business catalog** (two screenshots shared on 2026-10-22). Business name
   shown at the top of the catalog: `ماي واي مصر`. Listings, titles and descriptions as written
   (descriptions ending in `…` were cut off by the app; never complete them):
   | Title (as listed) | Description (as listed) |
   |---|---|
   | `اجمل تشكيله مستحضرات تجميل` | `اجمل تشكيله مستحضرات التجميل والعناية…` (photo: Vera aloe gel + Cleopatra jar) |
   | `سيكرت جاردن نسيم الحدائق` | `عطري بيتك وهدومك باجمل سيكرت` |
   | `برفيوم` | `اجمل تشكيله برفيوم رجالي وحريمي بسعر ال…` |
   | `مستحضرات تجميل وعناية شخصية` | `مجموعات شامبو وشاور وماسك مميزه من…` |
   | `ماي شيف` | `منتجات ماي شيف من شركه ماي واي مصر` |
   | `اسبريهات حريمي ورجالي` | `اسبري معطر للجسم` |
   | `مسكا` / `مسكا جل معطر جسم` | `جل معطر للجسم` |
   | `عطور رجالي وحريمي` | `برفانات ماي واي مصر والشحن لجميع المحـ…` (cut off — do not use the shipping part) |
   (A `فرصه عمل` listing also exists; it is not a product — leave it out.)
   You may fix informal spelling for display (`تشكيله` → `تشكيلة`, `اجمل` → `أجمل`, `مميزه` → `مميزة`, `شركه` → `شركة`).
2. **Offer flyers** in `assets/offer-*.jpg` — used only for product names printed on the bottles and boxes:
   `Tender` (`برفان تندر`, Eau de Parfum) · `Secret Garden` (`سيكرت جاردن`, `نسيم الحدائق`, `معطر منزلي متعدد الأغراض`) ·
   `ELITE` (My Way Eau de Parfum) · `Cavalier` (My Way Eau de Parfum) · `BOOM` perfume · `BOOM` `My Way Cream Gel` ·
   `Essential` (spray, tube, box) · `VERA` `ALOE VERA` `My Way Face Gel for all skin types — Softening, Moisturizing and Purifying` ·
   `Cleopatra` hair styling cream (`كليوباترا للتطويل`).
   Flyer caption for Vera, usable as a product description: `جل الصبار فيرا لجميع انواع البشره ينظف و يرطب و ينقي البشرة`.
   Name of the men's set on the published site: `الطقم الرجالي: بوم وإسنشيال وساعة`.
3. **The published site** `index.html` — brand and approved copy, below.

mywayeg.net itself did not resolve from the build machine (DNS failure), so nothing was taken from it directly.

## Brand and copy (from the published `index.html`)
- Brand: `Azza Beauty` (Latin, "Beauty" in gold) · `عزة خليل · فريق ماي واي مصر`
- Approved lines — reuse freely:
  `عائلة واحدة` · `كلميني على واتساب` · `اسألي عن الأسعار` ·
  `برفانات حريمي` · `برفانات رجالي` · `عناية بالبشرة والشعر` · `منتجات البيت` ·
  `روايح ناعمة وراقية تدوم معاكي طول اليوم.` · `هدية شيك للزوج والأخ والابن، وأطقم كاملة.` ·
  `جل الصبار، كريمات، وزيوت للشعر لعناية كل يوم.` · `معطرات ومنظفات تخلي بيتك نضيف وريحته حلوة.` ·
  `برفانات وعناية ومنتجات للبيت من ماي واي.` · `ابعتيلي اسم المنتج أو صورته على واتساب`
- New lines approved for the video: `اسألي عن السعر على واتساب` · `شوفي الكتالوج على واتساب` (she has a WhatsApp catalog).
  Short connective phrases that make no factual claim are fine (`وكمان…`, `تشكيلة لكل البيت`, `اختاري اللي يناسبك`).
- Disclaimer (keep its meaning if the company name is shown prominently): `موقع مستقل لعضوة في ماي واي مصر، وليس الموقع الرسمي للشركة`
- WhatsApp number: **unknown**. Never show a number. CTA = WhatsApp icon + text only.
- Website URL: not verified live. Do not show a URL.

## Palette and type (from the site)
- plum `#5c0f3a`, plum-2 `#7a1048`, pink `#c2185b`, pink-soft `#f7dbe6`, gold `#c9a45c`, gold-2 `#e6cc8f`,
  cream `#fbf6ef`, cream-2 `#f4ebdf`, ink `#2b1622`, muted `#6e5563`, WhatsApp green `#25d366`
- Fonts (vendored in `motion/fonts/`, all SIL OFL): El Messiri (display), Tajawal (body, 400–900), Lalezar (bold display)

## Images you may use (all price-free)
- **Product cutouts** (`motion/cutouts/`, transparent PNG cut from the flyers; small, max ~420 px tall, so do not scale past ~2.2×):
  `tender.png` (Tender) · `october-pair.png` (Tender in front of Secret Garden) · `elite.png` · `cavalier.png` ·
  `men312-pair.png` (Elite + Cavalier) · `boom.png` (dark backgrounds only — faint halo) · `boom-gel.png` ·
  `essential-box.png` (the watch's edge shows on its right)
- **Product photos** (`motion/photos/`):
  `vera-cleopatra.jpg` (848×752, real phone photo of the Vera aloe gel and the Cleopatra jar on a beige wall — caption removed) ·
  `menset-clean.png` (1002×340, the men's set — BOOM perfume, BOOM cream gel, Essential spray, Essential tube, Essential box,
  watch — under a gold `MY WAY` heading, edges fade to transparent; made for dark scenes)
- **Mood photos** (`assets/hero.jpg`, `cat-women.jpg`, `cat-men.jpg`, `cat-care.jpg`, `cat-home.jpg`, `work.jpg`): generic,
  unbranded, **not** the real products. Atmosphere/category backdrops only — caption them with a category name, never a product name.
- **Never on screen:** `assets/offer-*.jpg` (they show prices), the catalog screenshots (they show prices).

## Forbidden
Any price, number of pounds, discount, percentage, points, codes, dates, stock counts, "limited time", delivery/shipping
promises, ratings, testimonials, ingredients, health or skin-benefit claims beyond the Vera text above, phone numbers,
URLs, follower counts, or any company slogan not quoted above.
