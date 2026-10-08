# Scent commerce and cart drawer — October 8, 2026

## Status

Implemented in the scratch theme and uploaded to the isolated unpublished **OUDIE Sales Flow QA - Oct 8** theme, ID `155284832439`.

Preview: https://9cbbf9-2.myshopify.com/?preview_theme_id=155284832439

The live theme and store catalog were not edited. This is a reviewable commerce upgrade, not permission to publish. Remaining launch gates are listed below.

## Buying flow

- Homepage, main Shop, Explorer, search, and PDP format links share the canonical scent resolver. Discovery enumerates variant references, then product-reference fallbacks, and deduplicates by canonical scent ID. The configured catalog resolves all 23 current scents.
- Discovery leads with available perfume, then oil, mist, and other native formats. Cards display the actual destination format price rather than the cheapest unrelated format price. Explicit format filtering changes the exact variant destination and price together.
- Search supports canonical names, stored aliases, and trustworthy notes; classification filters use only structured classifications. Bella notes remain withheld. Black renders without invented notes. Tickets and workshop/helper products are excluded from fragrance merchandising.
- PDP controls separate format, scent, and native options such as bottle color. Mobile uses a full-width format dropdown; desktop exposes format links. Format changes preserve the scent and navigate to the matching product variant. Native navigation reloads media, notes, price, stock, reviews, and payment controls together.
- Mobile has one compact primary image, thumbnails, identity above the gallery, and a compact buying panel. Added visible breadcrumbs and Shopify-native Product/ProductGroup structured data. Existing product descriptions remain untouched inside their accordion, including their unresolved claims/headings.
- The drawer opens after successful Add to bag or through Bag. Native line-item keys drive quantity and removal. Drawer content and the Bag count refresh through Shopify bundled section rendering, with a read-only section refresh fallback. Pending requests prevent duplicate submissions; uncertain add responses are never automatically retried.
- Native cart properties, selling plans, discounts, and available bundle component details render in shared drawer/full-cart snippets. Errors are announced; keyboard focus is contained and restored. Checkout remains native. The full cart, native variant form, and format links remain the no-JavaScript fallback.

## Merchant configuration

In Theme settings → Scent commerce:

- **Fragrance catalog:** contains nine current fragrance-format products. Add future fragrance products here; this explicit list supports up to 50 products. Do not insert tickets, samples, or bundle helpers. Native canonical references determine relationships; title similarity is never used as identity.
- **Samples destination:** configured to the existing samples product. Links invite selection on its PDP; the drawer never adds an arbitrary sample-pack variant. The samples suggestion is omitted when samples are already in the bag.
- **Show shipping progress:** defaults off. The CAD $120 qualifying Canada/USA policy is displayed. The optional progress calculation uses discounted native cart subtotal and is CAD-only; confirm merchandise exclusions, discount handling, destination qualification, and the actual shipping rule before enabling it. Native checkout remains authoritative.

Homepage curated scents remain section settings. The global catalog takes precedence over its older section-only format product list.

## Verification

- Shopify Theme Check: zero errors; three pre-existing `HardcodedRoutes` warnings preserve `/collections/all-oudie` in footer, collection, and 404.
- Shopify skill validator: changed Liquid/config/layout files pass. JavaScript syntax, JSON parsing, and all 41 JSON templates' section references pass.
- Local LiquidJS QA uses refreshed public native product JSON plus canonical reference fixtures. It verifies 23 unique scents, perfume-first destinations, matching prices, sold-out fallback, Bella note withholding, ticket exclusion, search/filter/clear/empty states, and no-JavaScript buying controls.
- Local browser QA: 70 layout checks across ten routes at 390/360/375/430/768/1024/1440, with no overflow or script errors. Mocked native cart endpoints verify exact selected variant submission, bundled-section fallback, quantity/remove, stock errors without duplicate adds, and drawer focus/Escape behavior.
- Real Shopify preview: Madawi perfume → oil → black bottle retains Madawi and posts the exact variant; drawer quantity/subtotal/count updates work, including Enter-key updates that retain input focus without submitting checkout. Test items were removed afterward. Checkout reaches native Shop Pay without placing an order. Explorer exposes 23 scents, and Madawi + Oil filtering returns one exact matching oil variant. Parent product canonical and native JSON-LD parse correctly; the native oil schema is `ProductGroup`.
- Native presentment prices/currency can differ from the public catalog JSON used by the local harness. UI price and cart totals always come from Shopify Liquid/Ajax responses; no prices are hardcoded.

Temporary local test runner: `/private/tmp/oudie-foundation-tools/sales-qa.mjs`; screenshots/results: `/private/tmp/oudie-sales-qa/`. Additional targeted/edge runners in that tools directory verify drawer focus wrapping, quantity Enter handling, reduced motion, bundle components, properties, selling plans, and discounts. Native mobile screenshots are saved as `shopify-pdp-390.jpg` and `shopify-cart-drawer-390.jpg` in the QA output directory. It uses LiquidJS/Playwright from the prior temporary QA tools directory, and is not a substitute for platform tests.

## Remaining launch gates

1. **Judge.me app embed:** review markup/mounts and `@app` support remain intact, but no Judge.me script or review content appears in this new preview. Shopify Admin requests account verification before app-embed settings can be inspected. Complete verification, enable/configure the existing Judge.me integration on this preview, and verify actual ratings/review content across format changes. Do not invent ratings.
2. **Shipping progress eligibility:** verify the actual shipping-rule basis before enabling the optional meter, especially mixed physical/digital carts and discounts. Keep the qualified policy text otherwise.
3. **Existing product content:** merchant review remains required for embedded duplicate H1s, unsupported concentration/longevity/sourcing claims, and sample-count contradictions. No descriptions or catalog records were changed in this batch. Native schema inherits store product content and needs the same content review.
4. Validate actual bundle/selling-plan/discount scenarios when applicable, and a test payment in an approved test environment before launch. No purchase or payment was performed here.
5. Complete the broader documented theme roadmap and final release acceptance. After an approved release, compare native Shopify product-view → add-to-cart → checkout → order funnel metrics against a fresh baseline; no new analytics vendor was introduced.
