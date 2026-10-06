# Shopify Data Contract

## Core principle

Store fragrance facts once and reuse them everywhere.

The theme must not infer canonical scent identity from variant naming when a structured relation exists.

## Canonical scent

Primary fragrance source:

`variant.metafields.custom.scent.value`

Fallback:

`product.metafields.custom.scent.value`

Legacy fallback only:

`variant.metafields.custom.scent_notes.value`

## OUDIE scent metaobject

The canonical scent entity should support fields equivalent to:

- `name`
- handle/slug
- line / collection classification
- oud/musk classification
- scent families
- short descriptor
- short description
- longer story
- `top_notes`
- `heart_notes`
- `base_notes`
- aliases/search terms
- mood/character
- intensity
- hero image
- editorial images
- related scents
- available product/variant references
- sample relationships
- featured flag
- sort order
- SEO title
- SEO description
- concise entity/AI summary

Not every field needs to exist before launch. Render only fields that actually contain trustworthy data.

## Native Shopify sources

| Information | Source |
|---|---|
| Price | Variant |
| Inventory / availability | Variant |
| SKU | Variant |
| Option values / packaging | Variant/Product |
| Product media | Native Shopify media |
| Reviews | Judge.me and/or `reviews.*` metafields |
| Cart/checkout | Shopify native |
| Shop Pay | Shopify native accelerated checkout |
| Bestseller badge | existing variant metafield |
| New badge | existing variant metafield |
| Bundle child variants | existing variant-reference metafield |
| Product SEO | Shopify SEO fields |
| Event source | `oudie_appearance` metaobject |
| Sample-pack membership | sample configuration metaobject / exact variant refs |

## Current normalized state from Phase 1

Project migration established:

- canonical OUDIE scent records;
- `custom.scent` variant references across the fragrance catalog;
- Velvet Oud Brilliance merged into Velvet Brilliance;
- Tobacco Oud Brilliance merged into Tobacco Brilliance;
- OUDIE Black retained as a valid scent without invented note data;
- OUDIE Bella intentionally left for later review;
- OUDIE Musk should not contain “Mamask Rose”;
- sample packs now have relational configuration rather than relying only on titles;
- current event system can connect an appearance record to its ticket product.

Before destructive data changes, re-query Shopify rather than assuming this snapshot is permanently current.

## Samples

Do not use `custom.scent_notes` as sample-pack description storage.

Sample pack configuration should use exact product-variant references and exact scent references.

Known historical contradictions exist in sample-pack counts. Do not guess missing samples. Surface the issue for merchant review if it still exists.

## Bundles

Existing Premium Oil bundle references are relational and should be preserved. Do not convert real variant references into hardcoded handles.

## Product media fallback

Recommended rendering order:

1. exact variant media;
2. canonical scent hero image;
3. product featured media;
4. neutral placeholder.

## Event source

`oudie_appearance` should drive:

- upcoming event blocks;
- event detail content;
- ticket CTA;
- homepage current event;
- Experiences directory;
- Event schema.

Current merchant instruction for the Fragrance Workshop Social location: **6415 Erin Mills Parkway**.

## Do not touch yet

- product description HTML/CSS/JS blobs;
- OUDIE Bella data conflict;
- unsupported global concentration/longevity/sourcing claims.
