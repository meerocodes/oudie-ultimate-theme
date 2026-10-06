# Design System

## Design direction

The site should feel **editorial, intimate, tactile, refined, modern Middle Eastern, and fragrance-led**.

Avoid turning “luxury” into a generic beige template. OUDIE needs its own visual rhythm.

## Visual principles

1. **Restraint:** fewer elements, stronger hierarchy.
2. **Contrast:** warm light editorial surfaces balanced by deep charcoal/ink moments.
3. **Tactility:** close product photography, glass, oil, paper, wood, metal, fabric, scent ingredients.
4. **Typography:** expressive editorial display face + highly readable modern sans.
5. **Spacing:** generous but not wasteful; denser on mobile where scrolling cost matters.
6. **Motion:** subtle reveal/hover/transition only. No novelty loops.
7. **Shape:** moderate radii, not every component as a pill/card.

## Suggested palette

These are design recommendations, not immutable brand rules:

- Warm paper: `#F5F0E8`
- Near-white: `#FCFAF6`
- Ink: `#171512`
- Charcoal: `#211F1C`
- Muted text: `#6D655C`
- Antique gold / oud amber accent: `#9B7444`
- Hairline: ink at ~12–16% opacity

Use accent gold sparingly. Gold should signal emphasis, not decorate everything.

## Typography

Recommended character:

- Display: high-contrast editorial serif, elegant rather than bridal/fashion-script.
- UI/body: neutral modern sans with strong small-size legibility.

Use Shopify-hosted/system-safe choices where performance or licensing is uncertain. Do not add remote font imports inside product descriptions or scattered section CSS.

Suggested scale:

- Hero display: 56–120 desktop, 48–72 mobile depending on composition
- H1: 46–76 desktop, 38–52 mobile
- H2: 36–56 desktop, 30–40 mobile
- H3/card editorial: 22–32
- Body: 16–18
- Utility: 12–14

Do not make mobile type tiny merely to fit more content.

## Grid

- Max content width: ~1280–1360px
- Desktop gutters: 40–64px
- Tablet: 28–40px
- Mobile: 16–20px
- Mobile product grid: 2 columns when card content remains readable
- Product-detail page: media first, sticky purchase panel only desktop/tablet where it helps

## Header

Mobile:

`Menu    OUDIE    Bag`

- one row;
- 56–64px target height;
- centered brand;
- no second nav row;
- drawer uses editorial typography and clear hierarchy.

Desktop:

Use balanced left navigation / centered or visually anchored wordmark / utility actions. Keep the header quieter than the page content.

## Product cards

Every product/scent card must answer:

1. What is this scent/product?
2. What does it smell like?
3. What does it cost?
4. What formats are available?
5. What should I click?

Scent-first card target:

- image;
- scent name;
- 3–4 note/character descriptors;
- `From $X`;
- format availability text;
- optional restrained badge;
- clear hover/focus state.

Do not require hover to reveal price.

## Buttons

Primary:
- solid ink/charcoal;
- minimum 46–48px height;
- strong readable label.

Secondary:
- outline or text link;
- do not create five competing button styles.

## Section rhythm

Use alternating editorial modes rather than a stack of identical cards:

- full-bleed image;
- light editorial text;
- dark story panel;
- product grid;
- split image/copy;
- testimonial/review strip;
- guide/article rail.

## Imagery

Prioritize authentic OUDIE imagery. Never invent packaging that does not match the actual product.

Image crops should be deliberate:
- hero: cinematic, strong negative space for text;
- product card: consistent ratio;
- scent story: tactile/editorial;
- Experiences: real guests, scent interaction, Oud Bar setup, bottles, event context.

## Accessibility visual rules

- never rely only on color to communicate state;
- minimum contrast for body text;
- visible keyboard focus;
- avoid text over busy photography without an intentional contrast layer;
- preserve legibility at 200% zoom;
- respect `prefers-reduced-motion`.
