# AGENTS.md — OUDIE Theme Rules

## Scope

You are working on the **OUDIE Ultimate Shopify Theme**. Treat this repository as a clean theme project, not as a patch to any previous Shopify theme.

## Hard rules

1. **Never import code from Dawn, Horizon, the current live theme, `oudie-theme-build`, or `OUDIE Full Plan`.**
2. Work only inside `theme/` unless updating project docs or skills.
3. Build with native Shopify Liquid/JSON/CSS/JS and the existing OUDIE data model.
4. The canonical fragrance source is the variant/product metafield `custom.scent`, which points to the OUDIE scent metaobject.
5. Legacy fields such as `custom.scent_notes` may be used only as fallback.
6. Product descriptions stay untouched for now. Do not migrate or sanitize them unless explicitly asked.
7. Do not invent claims. If the store does not contain a trustworthy fact, omit it or use a neutral fallback.
8. Keep known ranking URLs unless an SEO migration plan explicitly redirects them.
9. Experiences/tickets must be separated from core fragrance merchandising.
10. Judge.me and accelerated checkout/Shop Pay must remain compatible.
11. All major UI work must be reviewed first at mobile widths.
12. Avoid hardcoded product IDs/variant IDs where a product, collection, page, metafield, metaobject, or theme setting can provide the value.
13. Keep JavaScript progressive and minimal. Core buying should remain functional without fragile client-side state.
14. All template suffixes used by live OUDIE resources must resolve cleanly.

## Design intent

OUDIE should feel like a modern niche fragrance house with Middle Eastern identity, not a generic “luxury beige Shopify theme.” Use restraint, strong typography, controlled spacing, tactile imagery, dark/light contrast, and scent-led storytelling. Avoid visual noise, excessive pills, generic gradients, over-rounded UI, and novelty animation.

## Mobile standard

Design at 390px first. Validate at 360, 375, 390, 430, 768, 1024, 1440.

Mobile header target:
- one compact row;
- Menu / centered OUDIE / Bag;
- no second navigation row;
- no oversized announcement stack;
- drawer navigation with large tap targets.

## Data-first rendering

Preferred fragrance rendering order:

1. `variant.metafields.custom.scent.value`
2. `product.metafields.custom.scent.value`
3. legacy `variant.metafields.custom.scent_notes`
4. native Shopify product/variant fallback

Do not parse legacy strings if structured scent data exists.

## Shipping / claims

Known free shipping threshold: **CAD $120** for qualifying Canada & USA orders. Do not hardcode dispatch speed unless explicitly verified.

Do not globally hardcode:
- 40% concentration;
- 24+ hour longevity;
- sustainably sourced Cambodian oud;
- “master perfumers”;
- any ingredient/sourcing claim.

Only display claim fields when the record actually supplies them.

## Current merchant corrections

- Event address for the current Fragrance Workshop Social: **6415 Erin Mills Parkway**.
- OUDIE Musk: remove/avoid “Mamask Rose”.
- OUDIE Bella: unresolved, fix later.
- OUDIE Black: valid scent; no invented note pyramid.
- Velvet Oud Brilliance and Velvet Brilliance are the same scent.
- Tobacco Oud Brilliance and Tobacco Brilliance are the same scent.

## Completion discipline

A page is not complete because it renders. It must pass:
- mobile visual hierarchy;
- real catalog data;
- sold-out/empty states;
- keyboard/focus checks;
- add-to-cart flow;
- SEO semantics;
- schema validity where applicable;
- no duplicate content blocks;
- no broken template suffixes;
- no event tickets leaking into fragrance grids.
