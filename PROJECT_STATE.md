# Project State at Handoff

## What has already been done

- OUDIE Shopify data was audited.
- Canonical scent relations were introduced and linked across the fragrance catalog.
- Legacy Velvet/Tobacco “Oud Brilliance” naming was normalized to the canonical Velvet Brilliance / Tobacco Brilliance scent identities.
- OUDIE Musk's bad “Mamask Rose” value was removed/should remain removed.
- OUDIE Black is recognized as a valid scent but should not receive invented notes.
- OUDIE Bella is intentionally left for later merchant review.
- Sample pack relationships were structured, but historical count contradictions may still need merchant clarification.
- The event/appearance model was upgraded conceptually to connect event records with ticket products.
- The merchant's required event address is 6415 Erin Mills Parkway.
- Product descriptions were deliberately left untouched.
- A pure scratch Shopify theme was created and is included under `theme/`.

## Current state and remaining launch work

The latest implementation is uploaded to unpublished QA theme **155284832439**. Read `docs/20_GALLERY_CART_POPUP_BATCH.md` first; the dated batch sections below are historical records. Four Oud Guide articles are published globally. The live theme has not been published or replaced.

Remaining launch gates:

- Judge.me app-embed verification and real review rendering;
- Bella, sample-count contradictions and legacy product-description claims already flagged for merchant review;
- dedicated Experiences service-page approval/publication (three pages remain hidden);
- end-to-end newsletter/inquiry delivery checks without test subscribers/messages in production;
- disabling the legacy Pop Convert campaign/app embed at launch, after the native replacement is accepted;
- final store-level accessibility, performance, market/discount edge cases and SEO launch review.

## Do not revive old approaches

Do not use the previous imported theme or the failed “Full Plan” rebuild as a base. Their ideas have already been distilled into this handoff; their code should not be copied.

## Foundation batch — October 5, 2026

The global design system, accessible mobile navigation, homepage hero/composition and curated canonical scent cards are now implemented locally. Native no-JavaScript variant submission and the invalid gift-card QR filter were also corrected. Local structural, catalog-fixture, responsive and interaction checks pass; Shopify development-theme commerce/review/checkout validation remains pending. See `docs/16_FOUNDATION_BATCH.md` for changed files, data sources, QA evidence and remaining gates. No store data or live theme was modified.

## Scent commerce batch — October 8, 2026

Implemented the canonical scent catalog, perfume-first discovery, scent-preserving mobile/desktop format controls, compact PDP gallery, and native Ajax cart drawer. Local data/commerce/responsive QA passes; the isolated unpublished preview also passes the Madawi format/color/cart flow and native Shop Pay checkout handoff. See `docs/18_SCENT_COMMERCE_BATCH.md` for configuration, evidence, preview, and remaining launch gates. Judge.me app-embed verification is blocked by Shopify Admin account verification; shipping progress is intentionally disabled pending eligibility verification. Product descriptions and the live theme remain unchanged.

## Category and content batch — October 8–9, 2026

Restored category navigation; category-scoped canonical scent grids, clickable card formats, styled desktop filters and a mobile filter sheet are now uploaded to unpublished theme 155284832439. Expanded Experiences hub and three distinct service templates are implemented. Shopify contains three hidden service pages and four unpublished Oud Guide articles with SEO metadata. Native Shopify `scent_format` URLs survive reload. Local 119-layout checks and the real Madawi Oil card-to-cart flow pass. See `docs/19_CATEGORY_CONTENT_BATCH.md` for resource IDs, content, sources and evidence. Judge.me enablement, existing Pop Convert popup behavior, editorial approval/publication and final launch checks remain gates. No live theme or existing product descriptions were changed.

## Gallery, shipping and native campaigns — October 9–10, 2026

Implemented a mobile square PDP gallery with scent-specific thumbnails and accessible zoom, live shipping meters in both cart surfaces, native country selection, an editorial desktop Shop mega menu, homepage reading and footer-only Oud Guide navigation. Native popup campaigns support two editable slots with dates, weekdays, daily time windows, timezone, delay/scroll/desktop-exit triggers, audience/page/device rules and session/dismissal limits. Four existing Oud Guide articles were published and verified; no resources were duplicated. Checkout shipping was verified against active profiles: Canada CAD $120, USA CAD $162. Real USD checkout passed paid/free shipping checks; test cart was emptied. Local 119-layout regression and focused popup/discount/ticket/DST checks passed. Full configuration/evidence and remaining launch gates: `docs/20_GALLERY_CART_POPUP_BATCH.md`.
