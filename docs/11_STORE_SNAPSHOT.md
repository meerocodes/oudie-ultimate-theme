# Store Snapshot for Theme Work

This is a project snapshot from the audit/migration period. Re-query Shopify before assuming counts or event status are still current.

## Theme/data environment

- Live theme existed separately from the scratch project.
- Previous imported/rebuild themes must not be used as code sources.
- `theme/` in this repository is the clean codebase to continue.

## Important existing systems

- Judge.me reviews
- Shop Pay / Shopify accelerated checkout
- Shopify native cart/checkout
- `custom.scent` canonical fragrance relation
- legacy `custom.scent_notes` fallback
- existing bundle variant references
- sample-pack configuration metaobjects
- `oudie_appearance` event source

## Customer-facing routes known during the project

- Shop collection historically: `/collections/all-oudie`
- Explore Scents page: `/pages/our-scents`
- Experiences: `/pages/oudie-experiences`
- Our Story: `/pages/our-mission`
- Samples product: `/products/sample-pack-1-of-each-scent`

Do not assume these should all remain primary forever; preserve or redirect intentionally.

## Existing product template suffixes encountered

The store previously contained suffixes such as:

- `rubs`
- `sprays`
- `car-diffuser`
- `samples`
- `extrait-de-parfum`
- `premium-scents`
- `premium-extrait-parfum`
- `bakhoor`
- `workshop`
- `oud-and-stones`

The new theme should ensure every currently assigned suffix resolves to a valid template or migrate resources deliberately.

## Collection/data caveats

- `ALL OUDIE` was a broad vendor-based collection and could include non-fragrance resources.
- duplicate/broken Best Sellers collection existed historically.
- Faire created a machine-managed collection that should not be edited/deleted by the theme project.
- typo legacy handles exist and should not be renamed casually.

## Known merchant corrections

- current event address source of truth: **6415 Erin Mills Parkway**.
- OUDIE Bella data to be reviewed later.
- OUDIE Musk must not include “Mamask Rose”.
- OUDIE Black is valid but may lack structured notes.
- Velvet Oud Brilliance = Velvet Brilliance.
- Tobacco Oud Brilliance = Tobacco Brilliance.
