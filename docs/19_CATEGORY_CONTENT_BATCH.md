# Category shopping and editorial batch — October 8–9, 2026

Implemented in the clean `theme/` project and uploaded to unpublished theme **155284832439**, OUDIE Sales Flow QA - Oct 8. The live theme was not published or changed. Existing product descriptions and published page/article bodies were not edited.

## Shopping changes

- Restored fallback Shop submenu: all products, perfume, oil blends, premium oils, mists, car diffusers, car fresheners, bakhoor and samples. Configured merchant menus and nested links remain supported.
- Fragrance collection grids discover canonical scents from that collection's products. Global catalog products supply matching alternate formats. Category membership determines initial card destination and eligible filters; Premium oils displays six matching premium oil scents on Shopify.
- Cards expose primary Perfume/Oil/Mist links under “Available in”; additional formats use native disclosure. Selecting a format updates matching variant URL, image, native price, availability, selected indicator and “View [format]” destination together. Controls are siblings of image/title links, with exact native URLs as the no-JavaScript fallback. Missing target images use a neutral placeholder.
- Search, Format and Scent type controls now share heights, borders and alignment with the heading/grid. Mobile uses a native filter dialog with Clear/Show results, result count and removable active filters. Search and selected filters persist in the URL.
- **Shopify routing correction:** use `scent_format`, not `format`, in query parameters. Shopify treats `format` as a response-format parameter and returned 404 for the original Premium oils URL. Corrected link: `/collections/oudie-premium?scent_format=Oil+Blends`. Real Shopify reload verified.

## Experiences and editorial

The hub adds service choices, a planning sequence, location guidance, public-workshop separation, FAQs and a native contact inquiry form. Labels are connected to fields; only core contact/occasion/location fields are required. Date, time, venue, attendance and bottle/scent counts may be undecided. Native success/errors are shown. No inquiry was actually sent during QA.

Three distinct service templates support wedding, corporate and private workshop intent, using existing OUDIE Shopify Files imagery referenced by the live Experiences content. Imagery is editable through theme settings. No testimonials, client names, fixed prices/durations or ingredient claims were invented. Service and BreadcrumbList schema are context-specific. Existing ranking URLs remain unchanged.

Preview hidden service templates through the existing hub route, for example:

`/pages/oudie-experiences?view=wedding-fragrance-bar-toronto&preview_theme_id=155284832439`

Substitute `corporate-fragrance-bar-toronto` or `private-fragrance-workshops-toronto`. Alternate previews retain the existing hub's CMS title/canonical; dedicated draft pages have their own SEO metadata for eventual publication. Hub links to dedicated pages only when those pages are available publicly; otherwise inquiry links work. The new Oud Guide is not linked in navigation until it has published articles.

Blog/article templates add breadcrumbs, readable article width, native Article schema, related published reading and contextual scent/sample links. Empty blogs and missing article images have deliberate fallback content.

## Created Shopify resources (all pages/articles unpublished)

These IDs were read back with `isPublished: false` and their native `global.title_tag` / `global.description_tag` values. No existing CMS resource was overwritten.

| Resource | Handle | Shopify ID |
| --- | --- | --- |
| Blog container | oud-guide | 99887775927 |
| Wedding page | wedding-fragrance-bar-toronto | 120973328567 |
| Corporate page | corporate-fragrance-bar-toronto | 120973361335 |
| Private workshop page | private-fragrance-workshops-toronto | 120973394103 |
| What Is Oud? | what-is-oud | 602359431351 |
| Perfume Oil vs Extrait de Parfum | perfume-oil-vs-extrait-de-parfum | 602359464119 |
| Understanding Fragrance Notes | how-fragrance-notes-work | 602359496887 |
| Wedding Fragrance Bars planning guide | wedding-fragrance-bar-toronto-planning-guide | 602359529655 |

Content source and creation payloads are versioned in `docs/content/`. These are an audit/continuation record, **not an import script**; do not rerun creation and duplicate the resources. Draft SEO metadata was set separately using Shopify's reserved native SEO fields. The empty blog container has no publication flag; its four articles remain hidden.

## Validation evidence

- Theme Check: zero errors, only three pre-existing HardcodedRoutes warnings for preserved routes.
- Shopify Liquid vendor validator: 15 changed theme files passed, one preserved-route warning. Final native alternate templates parse their Service/BreadcrumbList JSON-LD; the existing published article renders native Article/BreadcrumbList schema.
- All 37 JSON templates resolve their referenced sections. Additional Liquid templates remain in place; no existing suffix was removed. JavaScript syntax and git whitespace checks pass.
- Local fixture/browser QA: **119 layouts across 360/375/390/430/768/1024/1440**, including homepage, collections, PDPs, samples, cart, search, hub, three service kinds and an article. No horizontal overflow or script errors. 23 canonical scents, sold-out and Bella/event exclusions checked.
- Interaction QA: category default formats, premium oil membership, reload persistence, mobile filter application, empty/reset states, card format changes, exact PDP identity, native cart add/change/remove, error recovery and drawer focus/Escape behavior passed. Local cart tests made three add and three change calls.
- Real Shopify: mobile Madawi Perfume → Oil card → matching oil PDP → Add to bag produces **variant 43192939413687**, Gold / OUDIE MADAWI. Test item removed; real bag confirmed empty. Mobile filters preserve scent search and update Mist destination/price. Premium oils loads/reloads six matching oil scents. Mobile Shop drawer category links inspected. Actual 1440px heading and grid share x=88.5, no overflow.
- Native 390px service views: correct unique H1, corporate/private form default, Service/BreadcrumbList schema, no overflow. Wedding image loaded in the browser. Other existing image references render with native lazy loading.
- Screenshots and local QA runner live outside the repository: `/private/tmp/oudie-sales-qa/shop-controls-final-1440.jpg`, `format-card-final-390.jpg`, and `/private/tmp/oudie-foundation-tools/merch-qa.mjs`. These temporary fixtures/tools are not included in a clone.

## Launch gates and continuation

This batch is reviewable; the whole theme is not launch-certified. Before launch:

1. Enable/verify the Judge.me app embed in the unpublished theme (admin account verification was previously blocking the editor). Preserve accelerated checkout; prior batch reached native Shop Pay checkout without placing an order.
2. Review the existing **Pop Convert** store app popup. During real preview it appeared over shopping controls, intercepted a format click and injected another H1. It was dismissed for QA; no global app settings were changed. Adjust its timing/design/accessibility before launch.
3. Review and publish the seven draft resources only after content/service details are approved and the destination theme is ready. Dedicated pages use the new template suffixes; another theme may lack them.
4. Review sample count contradictions, Bella and product description claims already recorded in earlier batches. No catalog/content cleanup was silently performed here.
5. Complete final store-level performance/accessibility, review-widget, inquiry delivery and checkout checks. Inquiry rendering was tested without sending a real message.

Educational fact sources: [Kew agarwood reference](https://www.kew.org/sites/default/files/2019-02/CITES%20and%20Timber_Second%20Edition.pdf), [International Perfume Museum olfactory composition guide](https://www.museesdegrasse.com/sites/default/files/fs_mip_english.pdf). Service facts/imagery: [OUDIE Experiences](https://www.oudie.ca/pages/oudie-experiences). Native SEO field behavior: [Shopify SEO documentation](https://shopify.dev/docs/apps/build/marketing/optimize-storefront-seo). New text is original; no live theme code was imported.
