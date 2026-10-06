# QA / Acceptance Checklist

A build is not finished until it passes the following.

## Responsive

Test at minimum:

- 360px
- 375px
- 390px
- 430px
- 768px
- 1024px
- 1440px

Check:

- no horizontal scroll;
- no clipped text;
- header stays compact;
- drawer usable with keyboard/touch;
- product cards readable at 2 columns;
- controls do not overflow;
- sticky elements do not cover content;
- images crop intentionally.

## Header/nav

- Menu opens/closes.
- Escape/overlay close if implemented.
- focus handling is sane.
- Shop/Explore Scents/Samples/Experiences/Oud Guide/Our Story routes valid.
- Bag count updates/reflects cart.

## Product cards

- image exists/fallback works;
- correct scent/product identity;
- price always visible;
- sold-out treatment;
- note/descriptor truncation sensible;
- format availability clear;
- no workshop/event product in fragrance results.

## PDP

Test at least:

- signature Extrait with many variants;
- Premium Extrait;
- Oil Rub;
- Mist;
- Car Diffuser;
- Sample Packs;
- Bakhoor;
- workshop/event ticket;
- sold-out variant if available;
- OUDIE Black or another scent with incomplete canonical notes.

Verify:

- selected variant ID posts correctly;
- displayed price updates correctly;
- ATC availability state correct;
- Shop Pay works;
- structured notes render when available;
- legacy fallback does not duplicate structured notes;
- product description still renders;
- Judge.me integration survives.

## Cart

- quantity update;
- remove item;
- subtotal;
- free shipping progress;
- threshold CAD $120;
- checkout button;
- accelerated checkout compatibility;
- empty state.

## Scent data

- no “Mamask Rose” for OUDIE Musk;
- Velvet Oud Brilliance resolves to Velvet Brilliance;
- Tobacco Oud Brilliance resolves to Tobacco Brilliance;
- OUDIE Black can render without invented notes;
- OUDIE Bella is not silently “fixed”.

## Experiences

- current event data source works;
- event address follows merchant source of truth;
- inquiry form collects required fields;
- no automatic pricing;
- success/error states clear.

## SEO

- one H1;
- descriptive title/metadata fallback;
- canonical correct;
- no accidental noindex;
- breadcrumbs;
- Product schema only on product contexts;
- Event schema only when event data complete;
- image alt text;
- no duplicate event/scent pages accidentally indexed;
- internal links work.

## Accessibility

- visible focus;
- semantic buttons vs links;
- labels on fields;
- form error messaging;
- keyboard navigation;
- color contrast;
- alt text;
- reduced motion;
- skip link.

## Performance

- responsive image widths/sizes;
- lazy-load below fold;
- no unnecessary third-party JS;
- minimal client-side filtering payload;
- defer noncritical scripts;
- avoid huge DOM from rendering every variant as duplicate UI.

## Visual polish

- consistent rhythm;
- no orphan headings;
- no accidental line breaks in product names;
- buttons align;
- cards align across grids;
- no generic placeholder copy visible;
- dark/light sections transition intentionally;
- no inherited styling from old themes.
