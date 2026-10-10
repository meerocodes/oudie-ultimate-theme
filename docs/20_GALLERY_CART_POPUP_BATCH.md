# Gallery, shipping, navigation and native campaigns — October 9–10, 2026

Uploaded to existing unpublished QA theme **155284832439**, OUDIE Sales Flow QA - Oct 8. [Development preview](https://www.oudie.ca/?preview_theme_id=155284832439). The live theme was not published or replaced. Product descriptions, catalog prices/inventory and shipping rates were not edited.

## Implemented behavior

- PDP imagery uses a full-width square frame on mobile and desktop. Removed the old mobile fixed-height rule that caused pale side bands. Thumbnails show the selected canonical scent's associated media plus shared product images. Other scents' assigned images are excluded. Echnaton now shows its bottle and shared packaging image, rather than other premium scents. Native image links work without JavaScript; progressive zoom has previous/next, Escape and focus return.
- Both full cart and drawer update merchandise quantity, totals and free-shipping progress through Shopify Ajax/bundled sections. Empty, unavailable-quantity and refresh-recovery states remain available. Native checkout and accelerated checkout remain compatible.
- Shipping thresholds match the active General and Parfum delivery profiles read from Shopify: **Canada CAD $120; USA CAD $162**. Settings are editable under Theme settings. Native localization selects the country. CAD totals render on the server; USD uses `Shopify.currency.rate`, rounded up to cents. Unsupported/missing conversion gets neutral threshold messaging instead of an invented amount. Progress counts shippable merchandise after exact native discount allocations; non-shipping products and Experiences/ticket suffixes are excluded. Checkout confirms destination/eligibility. The theme announcement and shipping copy reflect the verified thresholds; no dispatch claims were added.
- Desktop Shop is an editorial panel with Perfume & oils, Home & car and Discovery groups plus editable sample product/image/heading. Mobile retains its compact header and Shop accordion. Category routes and the native `scent_format` Premium oils URL remain intact. Keyboard Escape closes the desktop panel and returns focus.
- Oud Guide appears in the footer and a three-article homepage reading section after Experiences. It is omitted from primary navigation, including configured top-level Guide links. Existing public ranking URLs remain intact.

## Published editorial resources

Published the **four existing** articles with `articleUpdate(isPublished: true)` on October 9. Read back all four as published on October 9 and again after the October 10 restart. No CMS resources were duplicated and no article body/handle/SEO field was rewritten during publication. These articles are public across the store, including the current live theme.

| Article | Existing ID | Public route |
| --- | --- | --- |
| What Is Oud? | 602359431351 | [/blogs/oud-guide/what-is-oud](https://www.oudie.ca/blogs/oud-guide/what-is-oud) |
| Perfume Oil vs Extrait | 602359464119 | [/blogs/oud-guide/perfume-oil-vs-extrait-de-parfum](https://www.oudie.ca/blogs/oud-guide/perfume-oil-vs-extrait-de-parfum) |
| Understanding Fragrance Notes | 602359496887 | [/blogs/oud-guide/how-fragrance-notes-work](https://www.oudie.ca/blogs/oud-guide/how-fragrance-notes-work) |
| Wedding Fragrance Bars planning guide | 602359529655 | [/blogs/oud-guide/wedding-fragrance-bar-toronto-planning-guide](https://www.oudie.ca/blogs/oud-guide/wedding-fragrance-bar-toronto-planning-guide) |

Blog ID: **99887775927**, handle `oud-guide`. The three service pages created in batch 19 remain hidden; do not publish or recreate them as part of continuation. `docs/content/shopify-drafts.json` is a historical creation record, not a repeatable import job.

## Native popup setup

In the QA theme editor, open the global **Native popup campaigns** section. It supports **up to two campaign blocks**. Seed block `signup` is enabled; `promotion` is disabled until configured. Default signup: 20 seconds on the second session page view, once per session, seven-day dismissal cooldown, no invented incentive.

Each block provides:

- signup or promotion/announcement content, optional image, CTA and display of an existing discount code (does not create a discount);
- enabled state, priority (lower number first), revision, devices and audience;
- timezone, campaign start/end, seven weekday switches and optional daily time window;
- time delay, scroll depth or desktop exit intent;
- minimum session page views, include/exclude page paths, once-per-session/day or dismissal-cooldown frequency;
- dismissal cooldown in days. Global maximum-one-campaign-per-session prevents competing campaigns.

Use dates as `YYYY-MM-DD`, times as `HH:MM`, and an IANA timezone such as `America/Toronto`. Blank dates leave that boundary open. End times are exclusive. Daily windows can span midnight and use the opening day's weekday. Daylight saving follows the timezone. Invalid schedules suppress automatic display and show warnings in the editor. Changing the revision resets that campaign's saved dismissal history. Browser session storage defines session/page-view behavior; if storage is blocked, the popup remains usable with in-memory suppression on the current page.

Paths are one per line: exact paths or a terminal `*` prefix match, such as `/products/*`. Default exclusions are `/cart`, `/checkout*` and `/challenge*`. Known newsletter subscribers are suppressed. Delay is an earliest-display limit even when using scroll/exit triggers. Open cart, navigation/filter/gallery dialogs take precedence; no simultaneous native campaign is shown. An open campaign closes when its schedule expires.

Signup uses Shopify's native customer/newsletter form, required email and explicit marketing consent. Native success/errors reopen the matching campaign and successful signup suppresses subsequent signup prompts. No real email was submitted during QA. Promotions support accessible code-copy feedback. Modal controls support Escape, outside dismissal and focus return. Automatic editor display is disabled; selecting a campaign block previews it. Unpublished-theme preview URL: `?preview_theme_id=155284832439&oudie_popup_preview=signup` (does not consume normal session frequency).

**Legacy Pop Convert:** theme-scoped suppression hides/inerts its known `#pop-convert-app` root and clears legacy scroll locks while respecting native dialogs. Existing app settings were not changed globally. Before launching this theme, disable its legacy campaign/app embed after accepting the native replacement. Hiding the root does not remove third-party network/script overhead.

## Validation evidence

- Theme Check: **zero errors**, three preserved HardcodedRoutes warnings (404, collection and footer). Shopify vendor validator passed the changed files; the final shipping calculation and enhancement asset passed again after their last edits. JavaScript syntax and git whitespace checks pass.
- Local real-catalog regression: **119 layouts** at 360/375/390/430/768/1024/1440 across homepage, scent/category collections, signature/premium/oil/samples PDPs, Experiences/service views, article, search and cart. 23 canonical scents; no horizontal overflow or script errors. No-JavaScript variant submission/search fallbacks, sold-out, Bella and event exclusions checked. Three add/five change calls cover error recovery, drawer/full-cart quantity/remove, shipping progress and gallery focus.
- Focused edge checks: 11 date/timezone/DST assertions; five shipping assertions for exact line/order discount allocations, mixed tickets, non-shipping-only carts, unsupported destinations and USA threshold. Popup checks cover second-view/20-second trigger, session and seven-day dismissal rules, two-campaign priority, automatic expiry, cart collision, scroll, desktop-only exit, native success/error response handling and blocked storage. These use controlled local fixtures; they do not send customer forms.
- Real Shopify at 390px: Echnaton gallery measured **339 × 339**, no overflow, correct scent-specific bottle/packaging thumbnails, native zoom and Escape focus return. Signup preview rendered its native form/consent/Privacy link. Pop Convert root was hidden.
- Real commerce: Echnaton USD $95 displayed **$20.91 USD remaining** using native rate `0.7154382`; native USA checkout charged standard shipping below the threshold. Full-cart quantity 2 updated to USD $190 and **unlocked**; the same checkout showed standard shipping **FREE**. No order was placed and no address/payment data was entered. Canada localization changed natively; Madawi oil CAD $35 displayed $85 remaining, drawer quantity 4 unlocked Canada shipping. All test merchandise was removed.
- Real 1440px desktop menu inspected visually; Escape focus verified. Homepage renders three published articles, footer Guide link is present and primary Guide is absent. All four native article routes show one H1, correct canonical, description, valid Article and BreadcrumbList JSON-LD.

Temporary evidence/tools (outside GitHub): `/private/tmp/oudie-upgrade-qa/`, `/private/tmp/oudie-foundation-tools/upgrade-qa.mjs`, `upgrade-edge.mjs`, `/private/tmp/oudie-upgrade-pdp-390.png`, `oudie-upgrade-popup-390.png`, `oudie-upgrade-cart-390.png`, `oudie-upgrade-menu-1440.png`. Temporary files are not a portable test suite; the October 10 restart required restoring catalog fixtures/dependencies. Screenshots contain storefront UI only; no checkout/customer details were saved.

## Remaining launch gates

Judge.me enablement/review rendering remains a previous gate. Verify real newsletter/inquiry delivery using approved test contacts, disable legacy Pop Convert at launch, resolve Bella/sample-count/legacy-description claims through merchant review, review/publish dedicated service pages separately, and complete store-level accessibility/performance and remaining market/discount checkout scenarios. This batch is implemented and reviewable; it does not certify the entire store for launch.

Claude starts at root `CLAUDE.md`, then current state and this batch. Shopify source for discount semantics: [Liquid line item](https://shopify.dev/docs/api/liquid/objects/line_item) and [theme discount displays](https://shopify.dev/docs/storefronts/themes/pricing-payments/discounts). Do not copy example commercial-theme code from those references.
