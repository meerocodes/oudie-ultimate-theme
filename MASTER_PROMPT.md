# Master prompt for Codex

Use this repository as the complete project handoff for rebuilding **oudie.ca**.

You are not patching an existing commercial Shopify theme. Continue from the clean scratch code in `theme/` and evolve it into a production-quality custom Shopify OS 2.0 theme. Do not copy code from Dawn, Horizon, the live theme, `oudie-theme-build`, or `OUDIE Full Plan`.

Before coding, read in this order:

1. `AGENTS.md`
2. `docs/01_PRODUCT_BRIEF.md`
3. `docs/02_INFORMATION_ARCHITECTURE.md`
4. `docs/03_DESIGN_SYSTEM.md`
5. `docs/04_PAGE_SPECS.md`
6. `docs/05_SHOPIFY_DATA_CONTRACT.md`
7. `docs/06_SEO_AEO_PLAN.md`
8. `docs/07_CRO_COMMERCE.md`
9. `docs/08_EXPERIENCES_PLAN.md`
10. `docs/09_BUILD_ROADMAP.md`
11. `docs/10_QA_ACCEPTANCE.md`
12. `research/RESEARCH_SYNTHESIS.md`
13. `research/oudie-ca-seo-audit-scorecard.md`

Also use the project skills under `.codex/skills/` as task-specific operating instructions.

## Immediate objective

Turn the current scratch foundation into a **refined, polished, bespoke OUDIE theme**. Prioritize mobile first. The current theme is only a starting structure and can be redesigned substantially.

## Required outcome

The finished site should feel like a premium niche fragrance house and should score strongly in:

- luxury / brand distinctiveness;
- mobile usability;
- scent discovery;
- product-card quality;
- collection/shop UX;
- PDP conversion;
- sampling funnel;
- Oud Bar / Experiences lead generation;
- trust/social proof;
- cart/AOV;
- SEO/AEO architecture;
- accessibility and performance.

## Core site model

Top-level navigation:

**Shop | Explore Scents | Samples | Experiences | Our Story | Search | Bag**

Oud Guide belongs in the homepage reading section and footer. Read `PROJECT_STATE.md` and `docs/20_GALLERY_CART_POPUP_BATCH.md` for the latest implemented behavior before following historical design targets.

Primary fragrance browsing must be **scent-first**, not duplicate-card-by-format. A scent card should communicate one scent identity and its available formats, e.g.:

**OUDIE Madawi**  
Peach · Jasmine · Musk · Oud  
From $XX  
Extrait · Oil · Mist · Car

Use the canonical scent relation in Shopify rather than trying to infer identity from variant titles.

## Homepage target flow

1. premium hero;
2. signature/bestselling scents;
3. “Find Your OUDIE” discovery entry point;
4. brand story;
5. shop by family / note;
6. discovery/sample set;
7. Oud Bar / Experiences;
8. reviews/social proof;
9. Oud Guide education;
10. current event/appearance if one is active;
11. Egyptian/Middle Eastern heritage storytelling;
12. newsletter/footer.

Avoid overlong copy. Keep one clear purpose per section.

## PDP target

Above the fold should prioritize:
- scent name;
- family / concise descriptor;
- reviews;
- key notes;
- format + size;
- price;
- availability;
- add to bag;
- sample CTA;
- shipping threshold messaging.

Below:
- scent story;
- structured note pyramid;
- character / intensity / concentration / ingredients only when data exists;
- how to wear;
- pairings;
- other available formats;
- reviews;
- related scents;
- FAQ.

Do not repeat the same notes and format information in multiple components.

## Shop target

Must support:
- scent grouping;
- family filters;
- note search;
- format filter;
- sort;
- active filter chips;
- result count;
- persistent price / “From $X”;
- sample availability;
- scent-detail link;
- mobile filter drawer.

Do not show workshops/events in fragrance merchandising.

## Data rules

Structured OUDIE scent data is authoritative. Legacy `custom.scent_notes` is fallback only. Keep prices, inventory, variant availability, images, SKUs, checkout, and cart native to Shopify.

Do not rewrite product descriptions yet.

## SEO rules

The original audit is included. Treat its cleanup and architecture recommendations as requirements. Preserve existing ranking URLs unless the migration plan explicitly changes them. Build schema from structured data. Separate product/fragrance authority from Experiences/local authority.

## Build approach

Work in reviewable stages. Before each major area, inspect existing scratch code and relevant docs. After each stage, run the QA checklist and summarize:

- files changed;
- visual/UX behavior changed;
- mobile behavior;
- data sources used;
- SEO implications;
- open issues.

Do not claim a page is finished until real catalog edge cases have been exercised.

Start by auditing the current `theme/` against the project docs, then propose the first implementation batch focused on **global design tokens + header/navigation + homepage mobile composition**. After that, implement rather than asking repeated clarification questions unless a merchant decision is genuinely required.
