# GitHub handoff

## Repository contents

Keep the complete continuation pack in version control: `theme/`, `docs/`, `research/`, `.codex/skills/`, and the root project instructions. The Shopify theme root is `theme/`; the repository root contains supporting material and is not a deployable theme directory.

Start with `AGENTS.md`, `MASTER_PROMPT.md`, `PROJECT_STATE.md`, `docs/16_FOUNDATION_BATCH.md`, `docs/18_SCENT_COMMERCE_BATCH.md`, `docs/19_CATEGORY_CONTENT_BATCH.md`, and `docs/20_GALLERY_CART_POPUP_BATCH.md`. The batch notes record completed work and pending Shopify validation gates. Continue from this scratch theme and preserve the original SEO audit.

## Working from a clone

1. Clone the repository and create a branch for the next implementation batch.
2. Follow the applicable project skills and `theme/AGENTS.md` before changing theme files.
3. Run Shopify Theme Check against `theme/` and the task-specific QA checks. Record results and unresolved gates in the project docs.
4. Review the diff and open a pull request with the behavior change and validation evidence.

GitHub version control does not publish or validate a Shopify theme. Preview work in an isolated development theme before completing platform-dependent commerce, Judge.me, Shop Pay, and theme-editor checks. Do not publish the live theme as part of this handoff.

## Local-only files

`.gitignore` excludes operating-system files, environment credentials, Shopify CLI state, dependencies, logs, and generated test reports. Temporary foundation QA tools and screenshots are recorded in `docs/16_FOUNDATION_BATCH.md`; they live outside this repository and are not included in a clone. Their historical results are evidence of that batch, not a portable test suite.

No deployment workflow or credentials are included. Configure store access separately when development-theme validation is required.

## Initial setup for Claude

Read `AGENTS.md`, `MASTER_PROMPT.md`, `PROJECT_STATE.md`, then the latest batch document before editing. The Shopify theme root is `theme/`. Install Shopify CLI using Shopify’s official instructions and authenticate against `9cbbf9-2.myshopify.com`; credentials are not stored here. Run `shopify theme check --path theme`. Preview only in an unpublished theme; the current QA theme ID is `155284832439`. Do not publish the live theme or replay `docs/content/shopify-drafts.json` as a creation job. Existing resource IDs are in batch 19; batch 20 records the four published articles, native popups, verified shipping thresholds and remaining launch gates.

The four articles are published under **Oud Guide** and visible across the store. The three service pages remain hidden under Content → Pages. Start Claude with the root `CLAUDE.md`. Publication is separate from theme deployment.
