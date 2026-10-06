---
name: oudie-theme-architect
description: Design and implement the custom OUDIE Shopify OS 2.0 theme from the clean scratch codebase. Use for architecture, Liquid sections/templates, global design system, navigation, homepage, PDP, collection, cart, and reusable components.
---

# OUDIE Theme Architect

## Mission

Build a bespoke, production-quality OUDIE theme from `theme/`. Do not import code from Dawn, Horizon, the live theme, `oudie-theme-build`, or prior rebuilds.

## Before coding

Read:

- `/AGENTS.md`
- `/docs/01_PRODUCT_BRIEF.md`
- `/docs/03_DESIGN_SYSTEM.md`
- `/docs/04_PAGE_SPECS.md`
- `/docs/05_SHOPIFY_DATA_CONTRACT.md`
- `/docs/10_QA_ACCEPTANCE.md`

## Architecture principles

- Shopify OS 2.0 JSON templates + Liquid sections/snippets.
- Keep sections reusable but not hyper-generic.
- One component should have one clear responsibility.
- Theme settings for merchant-editable visual/content choices.
- Metafields/metaobjects for catalog facts.
- Native product/variant/cart objects for commerce truth.
- Minimal progressive JS.
- No component framework dependency unless explicitly approved.

## Component system to establish

Build stable primitives before many pages:

- containers / page width;
- section spacing;
- display/body typography;
- buttons/text links;
- product/scent cards;
- chips/filter state;
- form fields;
- accordions;
- media frames;
- review/rating summary;
- breadcrumbs;
- drawers;
- empty states;
- loading/skeleton state only where necessary.

## Design review questions

For every section ask:

1. What is the single user purpose?
2. What is the primary visual hierarchy?
3. What happens at 390px?
4. Is any text redundant?
5. Is any fact hardcoded that belongs in Shopify data?
6. Does this look bespoke to OUDIE or like a theme demo?
7. Can the section fail safely when optional data is missing?

## Theme code rules

- Do not put CSS/JS inside product descriptions.
- Avoid inline styles except truly dynamic values that cannot be represented cleanly otherwise.
- Use BEM-like or project-prefixed class naming to prevent collisions.
- Keep JS selectors data-attribute based.
- Use `image_url` + `image_tag` with responsive widths.
- Lazy-load below-fold imagery.
- Preserve semantic headings.
- Avoid duplicate H1s.
- Make forms usable without JS where possible.

## Completion gate

Do not mark a component complete until it is tested with real OUDIE product data, mobile width, empty/missing optional data, keyboard focus, and the relevant commerce action.
