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

## What is NOT finished

The scratch theme is not the final design. It still needs:

- refined visual system;
- stronger typography/spacing;
- a bespoke homepage;
- mature scent-first Shop;
- stronger Scent Explorer;
- polished PDP;
- Judge.me integration verification;
- cart refinement;
- Experiences service pages;
- Oud Guide content/templates;
- structured data/schema;
- full mobile QA;
- accessibility/performance QA;
- final SEO migration cleanup.

## Do not revive old approaches

Do not use the previous imported theme or the failed “Full Plan” rebuild as a base. Their ideas have already been distilled into this handoff; their code should not be copied.

## Foundation batch — October 5, 2026

The global design system, accessible mobile navigation, homepage hero/composition and curated canonical scent cards are now implemented locally. Native no-JavaScript variant submission and the invalid gift-card QR filter were also corrected. Local structural, catalog-fixture, responsive and interaction checks pass; Shopify development-theme commerce/review/checkout validation remains pending. See `docs/16_FOUNDATION_BATCH.md` for changed files, data sources, QA evidence and remaining gates. No store data or live theme was modified.

## Scent commerce batch — October 8, 2026

Implemented the canonical scent catalog, perfume-first discovery, scent-preserving mobile/desktop format controls, compact PDP gallery, and native Ajax cart drawer. Local data/commerce/responsive QA passes; the isolated unpublished preview also passes the Madawi format/color/cart flow and native Shop Pay checkout handoff. See `docs/18_SCENT_COMMERCE_BATCH.md` for configuration, evidence, preview, and remaining launch gates. Judge.me app-embed verification is blocked by Shopify Admin account verification; shipping progress is intentionally disabled pending eligibility verification. Product descriptions and the live theme remain unchanged.
