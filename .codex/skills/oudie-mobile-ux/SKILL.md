---
name: oudie-mobile-ux
description: Mobile-first UX and responsive design rules for OUDIE. Use for header, navigation, homepage, grids, filters, PDP, cart, forms, and responsive QA.
---

# OUDIE Mobile UX Skill

## Why this matters

A prior analytics snapshot showed roughly **77.6% mobile web sessions**. Mobile is not a compressed desktop layout; it is the primary design target.

## Design widths

Start at 390px. Validate:

360 / 375 / 390 / 430 / 768 / 1024 / 1440.

## Header

Target:

`Menu    OUDIE    Bag`

- one row;
- 56–64px height;
- no second nav row;
- centered brand;
- drawer with large touch targets;
- search accessible without bloating the header.

## Product grids

Two columns on common phones only if:

- title remains readable;
- price remains visible;
- cards align;
- tap targets stay large;
- note/format metadata is concise.

If a specific component cannot work in two columns, use a horizontal rail or one-column editorial card rather than squeezing it.

## Filters

On mobile:

- use a drawer/sheet;
- show active filter chips outside the drawer;
- show result count;
- provide clear Apply/Clear behavior;
- do not create a long row of tiny controls.

## PDP

First screen priority:

1. product/scent identity;
2. image;
3. rating/descriptor;
4. price;
5. format/option;
6. ATC.

Do not place several paragraphs before the purchase decision.

Sticky ATC is allowed when it is compact, dismisses/hides intelligently, and does not cover Shopify accelerated checkout or accessibility controls.

## Forms

- one column on mobile;
- actual labels, not placeholder-only;
- correct input types;
- comfortable vertical spacing;
- error text adjacent to field;
- buttons full-width where appropriate.

## Motion

Subtle only. Respect `prefers-reduced-motion`. Never make mobile navigation dependent on heavy animation.

## QA trigger

Any desktop change that affects layout must be checked at 390px before it is considered complete.
