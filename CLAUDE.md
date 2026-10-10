# OUDIE continuation and initial setup

Read `AGENTS.md`, `MASTER_PROMPT.md`, `PROJECT_STATE.md`, then `docs/20_GALLERY_CART_POPUP_BATCH.md` before editing. The detailed setup and GitHub workflow are in `docs/17_GITHUB_HANDOFF.md`.

The deployable Shopify theme root is **`theme/`**. Work there, except for project documentation or skills. Continue from this native scratch theme; never import Dawn, Horizon, the live theme or old OUDIE rebuilds. The canonical scent relation is `custom.scent`. Preserve product descriptions and ranking URLs.

Install Shopify CLI from Shopify’s official source and authenticate separately; no credentials are included. Start with `shopify theme check --path theme`. Store: `9cbbf9-2.myshopify.com`. Current unpublished QA theme: **155284832439**. Preview and review changes in that theme. Publishing the live theme requires separate merchant authorization.

Use the current batch notes as the source of truth for completed work. Four Oud Guide articles are already published. Three service pages remain hidden. **Do not replay** `docs/content/shopify-drafts.json` to create resources again. The native popup settings are under **Native popup campaigns** in the theme editor; shipping thresholds are Canada CAD $120 / USA CAD $162, verified against checkout.

Before completing a batch, follow `.codex/skills/oudie-qa/SKILL.md` and `docs/10_QA_ACCEPTANCE.md`, record evidence and unresolved launch gates, and update `PROJECT_STATE.md` and the latest batch notes. Temporary QA tools/screenshots documented in the batch notes are historical local artifacts, not a portable suite included in a clone.
