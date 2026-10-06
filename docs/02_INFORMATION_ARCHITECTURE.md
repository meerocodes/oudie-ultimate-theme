# Information Architecture

## Primary navigation

Recommended top-level structure:

- **Shop**
- **Explore Scents**
- **Samples**
- **Experiences**
- **Oud Guide**
- **Our Story**
- Search
- Bag

On mobile, use a compact one-row header and put navigation inside the drawer.

## Shop architecture

Customer-facing commerce categories:

- Extrait de Parfum
- Fragrance Oils
- Mists
- Bakhoor
- Samples
- Home & Car
- Beard / Grooming if the merchant wants it prominent

The main Shop experience should be a **curated scent-first interface**, not a literal rendering of `ALL OUDIE`.

Do not use the broad vendor collection as the definition of customer-facing fragrance commerce because it can contain workshops, drafts, helper products, and other non-merchandise records.

## Scent architecture

Each important scent should have one canonical identity that can power:

- scent card;
- Scent Explorer;
- scent landing page;
- PDP context;
- recommendations;
- structured data;
- internal links;
- AI/SEO content.

Recommended future page concept:

- `/pages/scents/oudie-madawi`
- `/pages/scents/oudie-musk`
- `/pages/scents/zenobia`
- `/pages/scents/sweet-yathrib`

Do not implement URL changes casually. If Shopify routing makes another structure more maintainable, preserve SEO intent and document redirects.

## Experiences architecture

Recommended service pages:

- `/pages/oudie-experiences`
- dedicated Wedding Fragrance Bar page
- dedicated Corporate Fragrance Bar page
- dedicated Private Fragrance Workshops page
- Fragrance Workshops / public events page

The SEO audit specifically recommends splitting the broad Experiences page into intent-specific landing pages.

## Education architecture

Oud Guide pillar + article cluster:

- What Is Oud?
- What Does Oud Smell Like?
- Oud vs Musk
- Extrait vs Fragrance Oil
- How to Wear Oud
- How Fragrance Notes Work
- Layering Oud
- How Long Does Oud Last? (avoid unsupported product claims)

Education should link naturally into scents, samples, and Experiences.

## Events architecture

Active events should use the `oudie_appearance` source of truth and link to the actual ticket product.

After an event:

- preserve as a substantive recap/case study when valuable; or
- redirect/retire thin ticket pages.

Do not leave stale sold-out ticket pages as the main representation of Experiences.
