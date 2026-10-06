# SEO / AEO Plan

The original source audit is included at `research/oudie-ca-seo-audit-scorecard.md` and should be treated as the detailed reference.

## Baseline from the audit

Overall audit score: **72/100**.

Category scores from the audit:

- Technical SEO: 14/20
- On-page: 12/15
- Content: 11/15
- Architecture: 7/10
- Local: 8/10
- Structured data: 4/10
- Trust: 8/10
- AI/AEO: 8/10

The audit estimates that cleanup, scent/experience pages, education, schema, and authority work can materially lift the score into the high 80s / 90+ range over time.

## Highest-priority SEO themes

### 1. Clean index bloat

Review:

- overlapping all-product collection routes;
- vendor-query collection pages;
- stale event/workshop ticket products;
- variant URLs and canonicals;
- broken/duplicate collection routes;
- legacy typo handles.

Do not rename URLs simply because a handle is ugly. Preserve ranking URLs unless there is a redirect plan.

### 2. Build scent authority

The audit identifies individual scents as a major opportunity because many scent identities currently live inside generic product pages/variants.

Create authoritative scent content with:

- scent name;
- concise description;
- structured notes;
- family/character;
- available formats;
- sample path;
- related scents;
- FAQ where useful;
- internal links.

### 3. Preserve and strengthen Explore Our Scents

It is one of OUDIE's strongest SEO/discovery assets. Refactor its data source, not its core usefulness.

### 4. Split Experiences by intent

Create dedicated pages for:

- weddings;
- corporate activations;
- private workshops;
- public fragrance workshops.

Use local language naturally: Toronto, Mississauga, GTA, Ontario, Canada where truly relevant.

### 5. Oud education cluster

Build a real Oud Guide rather than isolated FAQ fragments.

### 6. Structured data

Recommended schema by page:

**Homepage**
- Organization
- WebSite

**Product**
- Product
- Offer
- AggregateRating/Review when valid
- BreadcrumbList

**Collection/Shop**
- CollectionPage
- ItemList where appropriate
- BreadcrumbList

**Scent page**
- WebPage
- BreadcrumbList
- ItemList of purchasable formats if semantically appropriate

**Experiences/service pages**
- Service
- BreadcrumbList

**Event**
- Event
- Offer
- Place
- Organization

**Guide/article**
- Article
- BreadcrumbList

Never output schema fields that the underlying data cannot support.

## AEO / AI-readability

Use concise factual entity statements in visible copy and structured data.

Good pattern:

> OUDIE is a Canadian oud and musk fragrance brand offering fragrances, samples, and mobile fragrance experiences for events.

Only use wording supportable by the business/store.

Use direct educational answers for common questions, then expand below. This helps both users and AI retrieval.

## Internal linking

Every important page should participate in a deliberate graph:

- Guide article → relevant scent pages
- Scent → formats/products
- Product → canonical scent / related scents
- Scent → samples
- Experiences hub → intent pages
- Event → Experiences
- Homepage → key commercial and educational hubs

Avoid orphan pages.

## SEO QA before launch

- one canonical URL per intended page;
- no accidental noindex;
- correct sitemap presence;
- robots directives intentional;
- OAI-SearchBot access reviewed;
- no workshop tickets in product grids unless intentionally surfaced;
- unique titles/H1s;
- image alt text;
- schema validates;
- breadcrumbs accurate;
- redirects for any changed URLs;
- Google Search Console post-launch monitoring plan.
