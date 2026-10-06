---
name: oudie-shopify-data
description: Use OUDIE's Shopify products, variants, metafields, metaobjects, samples, bundles, reviews, and event data safely. Use when wiring Liquid to store data or proposing catalog/data changes.
---

# OUDIE Shopify Data Skill

## Read first

- `/docs/05_SHOPIFY_DATA_CONTRACT.md`
- `/docs/11_STORE_SNAPSHOT.md`
- `/AGENTS.md`

## Core scent rule

Use structured canonical scent data before legacy text.

Preferred order:

1. `variant.metafields.custom.scent.value`
2. `product.metafields.custom.scent.value`
3. `variant.metafields.custom.scent_notes.value` as fallback only
4. native product/variant fallback

## Do not infer identity from titles

If a structured scent relation exists, do not deduplicate variants by normalizing strings in Liquid/JS.

## Native truth

Always use Shopify native objects for:

- price;
- compare-at price;
- availability;
- inventory;
- SKU;
- product/variant IDs;
- options;
- cart line state;
- media associations.

## Known merchant corrections

- OUDIE Musk: no “Mamask Rose”.
- OUDIE Bella: unresolved; do not silently normalize.
- OUDIE Black: valid scent; do not invent missing notes.
- Velvet Oud Brilliance = Velvet Brilliance.
- Tobacco Oud Brilliance = Tobacco Brilliance.
- current event address source of truth: 6415 Erin Mills Parkway.

## Samples

Use exact sample variant references and scent references. If counts/content contradict, surface the contradiction rather than guessing.

## Bundles

Preserve existing relational variant references. Never replace them with string handles if not necessary.

## Reviews

Preserve Judge.me integration. Do not create a parallel review database.

## Data mutations

When changing store data:

1. query current state;
2. classify change as safe vs merchant decision;
3. preserve URLs/IDs;
4. update references;
5. verify storefront rendering;
6. document the change.

Avoid destructive cleanup solely for aesthetic neatness.
