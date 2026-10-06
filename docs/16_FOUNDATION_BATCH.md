# Foundation batch — October 5, 2026

## Status

The first implementation batch is implemented locally. It is not published, and the homepage is not yet production-complete. Shopify platform rendering, native commerce, Judge.me and accelerated checkout still require development-theme validation.

## Changes

- **Design system:** wired merchant palette settings to CSS variables; introduced paper/ink/amber surfaces, system serif/sans typography, spacing, containers, restrained controls, visible focus, reduced motion, and compact mobile composition. No remote font requests or framework dependency were added.
- **Navigation:** one 60px mobile header with centered OUDIE; merchant-editable menu with all six required default destinations. Search is in the drawer on mobile and the desktop header. Native details supports navigation without JavaScript. Enhanced navigation adds focus containment/restoration, Escape/overlay/close behavior, scroll locking, inert background, breakpoint cleanup and theme-editor lifecycle handling.
- **Homepage:** hero → curated scents → discovery introduction → samples → Experiences. Removed the horizontal trust strip, broad collection merchandising fallback and ticket-image fallback. Imagery and content are merchant-editable; missing imagery renders as a deliberate text composition or neutral card fallback.
- **Scent cards:** one identity per canonical reference, matching selected format products by variant `custom.scent` and then product fallback. Prices come from the cheapest available matching variant, or the cheapest matching sold-out variant when none are available. Purchase links carry the exact matching variant. Formats are supplied only by available matching products. Ordinary product callers retain product identity and native product pricing.
- **Small baseline fixes:** native variant select now submits `name="id"` without JavaScript. Removed the unsupported gift-card `qr_code` filter; redemption still uses the displayed gift-card code.

## Files changed

- Global assets/layout: `theme/assets/oudie.css`, `theme/assets/oudie.js`, `theme/layout/theme.liquid`.
- Global shell: `theme/sections/header.liquid`, `theme/sections/announcement.liquid`, new `theme/snippets/header-links.liquid`.
- Homepage: hero, featured-products, intro, sample and experience sections; `theme/templates/index.json`.
- Cards: `theme/snippets/product-card.liquid`, new `theme/snippets/scent-card.liquid`.
- Merchant settings/localization: both theme config JSON files and `theme/locales/en.default.json`.
- Baseline fixes: `theme/sections/main-product.liquid`, `theme/templates/gift_card.liquid`.

## Data sources and defaults

Read Shopify through the connected MCP and public native product JSON. Verified 23 canonical scent records, public storefront access for `oudie_scent`, all active product/variant references, page/blog destinations, and current assigned product/page template suffixes.

Canonical scent records currently supply names, classifications and note lists, but not reverse format references or editorial imagery. Therefore the section uses an explicit merchant-editable product list; it does not modify definitions or store data. Seeded curation: Madawi, Brilliance, Musk Amore and Zenobia. The five selected fragrance products provide native Extrait/Oil/Mist formats. Stored resource IDs are theme-picker configuration, not Liquid lookup constants.

No Oud Guide hub currently exists. The default Oud Guide navigation points to the existing perfume-oil/extrait education blog until the dedicated content batch establishes the hub.

Bella notes are withheld in shared cards pending merchant review. Black renders without a note list. No sample counts, credits, event dates, operational promises or unsupported fragrance claims are introduced. Existing product descriptions and store records were not edited.

## Validation

- Shopify skill validator: all 19 changed theme files pass.
- Shopify Theme Check: zero errors; four pre-existing HardcodedRoutes warnings remain in footer, main-cart, main-collection and main-404. They concern the preserved `all-oudie` URL, and do not justify replacing it with `/collections/all`.
- All 41 JSON templates resolve their referenced sections. Every currently assigned product/page suffix from the live query resolves locally.
- JavaScript syntax check passes.
- Local LiquidJS render with live Shopify catalog fixtures: data edge cases pass, including sold-out copies, partial/missing notes, missing media, duplicate curation, empty curation/editor state, and ticket exclusion.
- Browser QA: homepage at 360/375/390/430/768/1024/1440; collection, signature/Premium/sample PDPs, Experiences, empty cart and hero fallback at 390/1440. All 21 layout checks pass with no horizontal overflow or browser script errors.
- Drawer opening, focus containment, Escape, overlay closing, focus restoration and desktop-resize cleanup pass. No-JavaScript navigation and variant selection pass. Product price updates and reduced motion pass.
- Screenshots reviewed at 390 and 1440, plus the 390 drawer. The testing harness approximates Shopify globals/forms; it does not validate platform-specific rendering or submit purchases.

Temporary QA artifacts: `/private/tmp/oudie-foundation-qa/`; runner: `/private/tmp/oudie-foundation-tools/qa.mjs`.

## SEO implications

Preserved native canonical output, page metadata, existing ranking routes and all template suffixes. Homepage has one H1. Scent links resolve to actual product variants without adding new indexable scent pages. No redirects, robots changes or new JSON-LD were introduced. The full schema/content architecture remains a later batch.

## Remaining gates

- Validate the implementation in an isolated Shopify development theme, including metafield picker resolution and theme-editor behavior.
- Exercise native add-to-cart/cart/checkout, Shop Pay and Judge.me on that theme. Local form checks do not prove those integrations.
- Select authentic Oud Bar imagery and dedicated hero crops in the theme editor; product imagery is the initial hero fallback.
- Implement the remaining homepage modules, mature scent-first Shop/Explorer, PDP, cart, Experiences service pages, Guide and schema in the documented sequence.
- Merchant decisions in `docs/15_OPEN_DECISIONS.md` remain unchanged.
