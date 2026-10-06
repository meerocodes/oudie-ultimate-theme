# Structured Data Specification

Use JSON-LD generated from real Shopify/page data. Keep schema concise and valid.

## Homepage

### Organization
Potential fields when supported:
- name
- url
- logo
- sameAs
- contactPoint if business data supports it

### WebSite
- name
- url
- SearchAction only if implementation genuinely supports the target.

## Product

Use native product/variant data:

- `@type: Product`
- name
- image
- description (clean concise source where possible)
- sku when present
- brand OUDIE
- offers derived from actual available variants
- aggregateRating/review only when review integration supplies valid values

Do not output fake GTIN/MPN.

## BreadcrumbList

Use on product, collection, scent, article, service and event pages where hierarchy is clear.

## CollectionPage / ItemList

For curated Shop/collection pages. Do not describe hidden/helper products in public item lists.

## Scent page

Base:
- WebPage
- BreadcrumbList

Optionally ItemList for actual purchasable formats when it adds semantic value.

Do not mislabel a scent editorial page as Product if it is not itself purchasable.

## Experiences service pages

Use Service where the content describes an actual OUDIE event service.

Potential fields:
- name
- provider
- areaServed only when supported
- description
- url

Do not fabricate priceRange/offers.

## Event

Use only for an actual event with complete current data:

- Event
- name
- startDate
- endDate
- eventAttendanceMode if known
- eventStatus
- location / Place / PostalAddress
- image
- description
- organizer
- offers linked to actual ticket product when appropriate

## Article / Oud Guide

- Article
- headline
- image
- datePublished/dateModified when available
- author/publisher only when real
- BreadcrumbList

## Validation

Before launch:

- Google Rich Results Test where relevant;
- schema.org validator;
- inspect page source for duplicate/conflicting JSON-LD;
- ensure third-party review schema does not conflict with custom schema.
