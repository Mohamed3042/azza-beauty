# Facts sheet — the only data allowed on screen

Every word, number and product name in the motion pieces must trace back to a line
in this file. Nothing here was taken from mywayeg.net directly: that domain did not
resolve from the build machine (DNS failure), so the source of truth is the offer
flyers already in `assets/` and the copy of the published one-page site (`index.html`).

**Not verified:** whether these offers are still running, and which year the
October flyer belongs to (it prints no year). Confirm before posting.

## Offers (transcribed from the flyers, exact spelling kept)

### 1. October offers — `assets/offer-october.jpg`
- Heading: `عروض اكتوبر`
- Dates: `من 22 اكتوبر الي 24 اكتوبر` (no year printed)
- Condition banner: `العرض بعد ١٠٠ نقطة بحد اقصي ٣ قطع ومتاح تكرار العرض مرتين`
- Badge on both products: `55%`
- **Tender perfume** — `برفان تندر` · `code:5854` · `عدد النقاط : 49` · price `195.75`, crossed-out `435.00`
  - bottle label: `Tender` `Eau de Parfum`
- **Secret Garden home freshener** — `سيكرت جاردن معطر منزلي متعدد الأغراض` · `480 مل` · `code:3363` · `عدد النقاط : 23` · price `91.00`, crossed-out `202.00`
  - bottle label: `Secret GARDEN` / `نسيم الحدائق`
- No currency printed on this flyer.

### 2. Cleopatra + Vera — `assets/offer-cleo.jpg` (phone photo with a text caption)
- Caption, verbatim: `كليوباترا للتطويل+ جل الصبار فيرا لجميع انواع البشره ينظف و يرطب و ينقي البشرة ب 110 بدل 140`
- Vera label: `VERA` `ALOE VERA` · `My Way Face Gel for all skin types` · `Softening, Moisturizing and Purifying`
- Cleopatra jar: `Cleopatra` … `Hair Styling Cream` (partly legible)
- Price: `110` instead of `140`. No currency printed.

### 3. Men's set — `assets/offer-menset.jpg`
- Heading visible: `MY WAY` (the Arabic line above it is cut off — do not guess it)
- Items in shot: `BOOM` perfume (grenade bottle, `MY WAY`), `BOOM` `My Way Cream Gel` tube,
  `Essential` spray, `Essential` `My Way …` tube, `Essential` box, a wristwatch
- Price tag: `550`. No currency printed, no delivery note.
- Name used on the published site: `الطقم الرجالي: بوم وإسنشيال وساعة`

### 4. Men's perfumes — `assets/offer-men312.jpg`
- `عروض أكتوبر` · `عرض برفانات رجالي` · `312` `جنيه` · `شامل التوصيل`
- Bottles: `ELITE` `MY WAY EAU DE PARFUM`, `Cavalier` `My Way Eau de Parfum`

### 5. Gift set — `assets/offer-785.jpg`
- `785ج` · `شامل التوصيل`
- Items partly visible (cut off at the bottom of the flyer): a silver spray can (label not legible — do not name it),
  a perfume with an eye-shaped cap (name not visible — do not name it), `BOOM` `My Way Cream Gel` tube, `BOOM` grenade bottle
- Name used on the published site: `مجموعة هدايا شامل التوصيل`

### Currency
All prices are Egyptian pounds (the flyers that print a currency say `جنيه` / `ج`, and this is the Egypt store).
Showing `جنيه` next to the other prices is allowed.

### Delivery
`شامل التوصيل` applies **only** to offers 4 (312) and 5 (785). Never attach it to anything else.

## Brand and copy (from the published `index.html`)
- Brand: `Azza Beauty` (Latin, "Beauty" in gold) · `عزة خليل · فريق ماي واي مصر`
- Lines already published and approved — reuse freely:
  `عائلة واحدة` · `عروض بتخلص بسرعة` · `عروض الأسبوع` · `اطلبي العرض ده` · `كلميني على واتساب` ·
  `برفانات حريمي` · `برفانات رجالي` · `عناية بالبشرة والشعر` · `منتجات البيت` ·
  `روايح ناعمة وراقية تدوم معاكي طول اليوم.` · `هدية شيك للزوج والأخ والابن، وأطقم كاملة.` ·
  `جل الصبار، كريمات، وزيوت للشعر لعناية كل يوم.` · `معطرات ومنظفات تخلي بيتك نضيف وريحته حلوة.` ·
  `برفانات وعناية ومنتجات للبيت من ماي واي.` · `ابعتيلي اسم المنتج أو صورته على واتساب`
- Disclaimer (keep its meaning if any company name is shown prominently): `موقع مستقل لعضوة في ماي واي مصر، وليس الموقع الرسمي للشركة`
- WhatsApp number: **unknown** (blank in the site). Never show a number. CTA = WhatsApp icon + text only.
- Website URL: not verified live. Do not show a URL.

## Palette and type (from the site)
- plum `#5c0f3a`, plum-2 `#7a1048`, pink `#c2185b`, pink-soft `#f7dbe6`, gold `#c9a45c`, gold-2 `#e6cc8f`,
  cream `#fbf6ef`, cream-2 `#f4ebdf`, ink `#2b1622`, muted `#6e5563`, WhatsApp green `#25d366`
- Fonts (vendored in `motion/fonts/`, all SIL OFL): El Messiri (display), Tajawal (body, 400–900), Lalezar (bold numerals/headlines)

## Images you may use
- **Real product cutouts** (`motion/cutouts/`, transparent PNG, cut from the flyers above — small, max ~420px tall, so do not scale past ~2.2×):
  `tender.png`, `october-pair.png` (Tender + Secret Garden), `elite.png`, `cavalier.png`, `men312-pair.png`,
  `boom.png` (dark backgrounds only — faint halo), `boom-gel.png`, `essential-box.png` (has the watch edge on its right)
- **Flyers** (`assets/offer-*.jpg`): fine to show whole or framed; the menset and 785 flyers have dark backgrounds that blend into dark scenes with a radial mask.
- **Mood photos** (`assets/hero.jpg`, `cat-women.jpg`, `cat-men.jpg`, `cat-care.jpg`, `cat-home.jpg`, `work.jpg`): generic, unbranded,
  **not** pictures of the real products. Use only as atmosphere/category backdrops; never caption one with a specific product name or price.

## Forbidden
Invented prices, discounts, percentages (other than the October `55%`), dates, stock counts, "limited time", ratings,
testimonials, ingredients, health or skin-benefit claims beyond the Vera label text, delivery promises outside offers 4–5,
phone numbers, URLs, follower counts, or any company slogan not quoted above.
