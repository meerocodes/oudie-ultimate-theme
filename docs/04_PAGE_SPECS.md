# Page-by-Page Design Specs

## Homepage

### 1. Hero
Purpose: establish OUDIE as a fragrance house immediately.

Recommended content:

**Oud, after dark.**

Supporting descriptor:

> Handcrafted oud and musk fragrances, blended in Canada.

Primary CTA: Shop scents  
Secondary CTA: Explore the Oud Bar

Avoid unsupported “Picked in Egypt” or global concentration/longevity claims.

### 2. Signature scents
Curated 4–8 scent-first cards, not the broad `ALL OUDIE` collection.

### 3. Find Your OUDIE
Short, visual discovery entry point. Full quiz can come later; first version can be a guided scent-family selector.

Target dimensions:
- fragrance mood;
- occasion;
- intensity;
- note preference.

Do not fabricate match percentages unless scoring logic actually supports them.

### 4. Brand story
Short editorial story with authentic imagery. Keep the homepage copy concise and link to Our Story.

### 5. Shop by family / notes
Examples: Sweet, Floral, Woody, Musky, Fresh, Spiced/Oud.

### 6. Discovery/sample set
Make “try before full size” a major path.

### 7. Oud Bar / Experiences
Use real service imagery and clear value:
- what happens;
- what guests make/take home;
- weddings/corporate/private events;
- service area;
- inquiry CTA.

### 8. Social proof
Judge.me ratings/reviews, preferably contextually relevant.

### 9. Oud Guide
Feature 2–4 educational articles.

### 10. Current event
Only show if `oudie_appearance` contains an active/upcoming event.

### 11. Heritage/editorial
Egyptian/Middle Eastern inspiration and craft story, using only supportable factual language.

### 12. Newsletter/footer
Clean and useful, not oversized.

---

## Shop / collection

Must include:

- clear H1 and concise intro;
- scent-first grouping where relevant;
- note search;
- family filters;
- format filter;
- sorting;
- active filter chips;
- result count;
- mobile filter drawer;
- persistent price;
- no workshop tickets in fragrance results.

Avoid duplicate cards for the same scent solely because it appears in multiple formats.

---

## Scent Explorer

Preserve the strengths of the live scent intelligence:

- search by scent name;
- search by note;
- synonym matching;
- family filtering;
- format filtering;
- line filtering;
- active filter state;
- direct path to sample or purchase.

Refactor to use canonical `oudie_scent` records first rather than deduplicating variant-title strings.

---

## PDP

### Above fold

- scent/product eyebrow;
- canonical scent name;
- rating + count;
- compact descriptor/key notes;
- format / size selector;
- price;
- stock/availability;
- add to bag;
- Shop Pay / accelerated checkout;
- sample CTA;
- free shipping threshold note.

### Below fold

- scent story;
- note pyramid;
- character/intensity when structured data exists;
- ingredients/concentration only when structured data exists;
- how to wear;
- available formats;
- related scents;
- reviews;
- FAQ.

Avoid displaying the same note list three times.

Mobile:
- prioritize image, identity, price, options, ATC;
- sticky ATC may be used if it does not obscure content;
- reduce repeated accordions.

---

## Cart

- clean line items;
- variant/format clarity;
- quantity controls;
- free shipping progress to CAD $120;
- context-aware sample upsell when reliable;
- subtotal and checkout hierarchy;
- accelerated checkout compatibility;
- no intrusive cross-sell wall.

---

## Experiences hub

Purpose: explain OUDIE's fragrance experience offering and route by event type.

Sections:
- hero / service statement;
- what the Oud Bar is;
- wedding;
- corporate;
- private workshop;
- how it works;
- guest takeaway/customization;
- selected past activations/events;
- reviews/proof;
- FAQ;
- inquiry form.

Do not auto-generate or display pricing unless merchant explicitly approves.

---

## Experience inquiry

Fields:

- experience/event type;
- date;
- time;
- city/location;
- venue/place;
- approximate guest count;
- number of bottles;
- preferred number of scents;
- name;
- email;
- phone;
- notes.

The form should collect quote context but not calculate/send a price.

---

## Oud Guide

Editorial reading experience with strong H1/H2 structure, table-of-contents option for longer guides, related scents, related sample CTA, and contextual Experiences link when relevant.
