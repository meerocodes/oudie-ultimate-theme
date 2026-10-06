---
name: oudie-qa
description: Validate OUDIE theme changes against real Shopify routes, catalog edge cases, mobile layouts, accessibility, performance, SEO, and commerce flows before completion.
---

# OUDIE Theme QA Skill

## Rule

“Liquid compiled” is not completion.

Read `/docs/10_QA_ACCEPTANCE.md` before approving a significant page or component.

## Required layers

### 1. Structural

- valid Liquid/JSON schemas;
- no missing sections/templates;
- active template suffixes resolve;
- no accidental old-theme dependencies.

### 2. Data

- real products;
- multiple variants;
- sold out;
- missing canonical scent fields;
- incomplete notes;
- event ticket product;
- sample pack;
- bundle/helper relationships where used.

### 3. Responsive

390px first, then full breakpoint matrix.

### 4. Commerce

- variant selection;
- price update;
- ATC;
- cart update/remove;
- checkout;
- Shop Pay/accelerated checkout;
- Judge.me.

### 5. Accessibility

- keyboard;
- focus;
- labels;
- semantic controls;
- contrast;
- reduced motion;
- alt text.

### 6. SEO

- H1;
- metadata;
- canonical;
- schema;
- breadcrumbs;
- index intent;
- internal links.

### 7. Visual polish

Inspect screenshots/rendered previews. Look for:

- uneven cards;
- bad crops;
- accidental wrapping;
- inconsistent spacing;
- giant mobile dead space;
- overly dense desktop sections;
- floating buttons that obscure content;
- missing/placeholder content.

## Regression rule

After global CSS/header/component changes, re-check at least:

- homepage;
- collection/shop;
- signature fragrance PDP;
- Premium PDP;
- samples PDP;
- Experiences page;
- cart;
- 390px and 1440px.

## Final handoff

Report:

- what was tested;
- what passed;
- known issues;
- merchant decisions still required.

Never hide a known issue behind “looks good.”
