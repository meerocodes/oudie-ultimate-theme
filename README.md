# OUDIE Ultimate Shopify Theme — Codex Handoff

This workspace is the continuation pack for rebuilding **oudie.ca** as a refined, mobile-first, scent-first Shopify OS 2.0 theme.

## Use this workspace as the source of truth

- `theme/` is the **pure scratch theme**. Continue from this codebase only.
- Do **not** copy code from Dawn, Horizon, the old live theme, `oudie-theme-build`, or `OUDIE Full Plan`.
- `research/oudie-ca-seo-audit-scorecard.md` is the original SEO audit and should remain unchanged.
- `docs/` contains the agreed product, design, data, SEO, CRO, and QA specifications.
- `.codex/skills/` contains project-specific skills Codex should use while working.
- `MASTER_PROMPT.md` is the recommended starting prompt for Codex.
- `docs/17_GITHUB_HANDOFF.md` explains the repository layout, continuation workflow, and Shopify validation boundary.

## Project goal

Build a premium fragrance-house storefront that feels bespoke rather than theme-like, while preserving OUDIE's strongest current capabilities: scent intelligence, Judge.me reviews, Shop Pay/accelerated checkout, sampling, local Experiences/Oud Bar content, and existing ranking URLs.

The final experience should combine:

1. premium editorial design;
2. scent-first product discovery;
3. structured Shopify data and metafield/metaobject relationships;
4. mobile-first commerce;
5. strong SEO/AEO and structured data;
6. clear Experiences/Oud Bar lead generation;
7. maintainable code with minimal hardcoded catalog content.

## Non-negotiables

- Mobile is the primary design target.
- Use the canonical `custom.scent` relation as the first fragrance data source.
- Keep legacy metafields only as fallback during migration.
- Do not rewrite product descriptions yet.
- Do not invent fragrance notes, sourcing claims, longevity claims, concentration claims, or event details.
- Do not change established URLs casually; use redirects when URL changes are truly necessary.
- Do not mix workshop/event ticket products into normal fragrance merchandising.
- Keep the Oct. 17 event address as **6415 Erin Mills Parkway** per merchant instruction.
- OUDIE Bella remains intentionally unresolved until later.
- OUDIE Musk must not contain “Mamask Rose”.
- Velvet Oud Brilliance = Velvet Brilliance. Tobacco Oud Brilliance = Tobacco Brilliance.

## Recommended Codex workflow

1. Read `AGENTS.md` and `MASTER_PROMPT.md`.
2. Read the skills in `.codex/skills/` that match the current task.
3. Read `docs/01_PRODUCT_BRIEF.md`, `docs/03_DESIGN_SYSTEM.md`, `docs/04_PAGE_SPECS.md`, and `docs/05_SHOPIFY_DATA_CONTRACT.md` before changing theme structure.
4. Read the original SEO audit before URL, collection, schema, or copy changes.
5. Implement in small reviewable steps.
6. Run the QA checklist in `docs/10_QA_ACCEPTANCE.md` before calling any page complete.

## Theme status

The included `theme/` is a functional scratch foundation, not a finished visual system. It should be refined heavily. The goal is not to preserve its current look; the goal is to preserve its clean independence from old themes and evolve it into the final OUDIE design system.
