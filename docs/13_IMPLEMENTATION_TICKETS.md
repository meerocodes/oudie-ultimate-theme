# Implementation Tickets

Use these as a practical backlog. Reorder only when dependencies require it.

## P0 — Foundation

### T01 Design tokens
Create production CSS custom properties for color, type, spacing, radii, shadows, borders, motion, containers, and z-index.

Acceptance:
- no scattered magic colors for core UI;
- mobile and desktop spacing scales defined;
- reduced-motion behavior defined.

### T02 Typography
Create display/body/utility classes and responsive type scale.

Acceptance:
- no tiny mobile body text;
- headings wrap intentionally;
- font loading strategy documented.

### T03 Header + mobile drawer
Build final one-row mobile header and refined desktop nav.

Acceptance:
- 390px screenshot clean;
- drawer keyboard usable;
- Shop / Explore Scents / Samples / Experiences / Oud Guide / Our Story routes accessible.

### T04 Shared scent/product card
One reusable card system with variants for editorial rail vs grid.

Acceptance:
- price visible;
- canonical scent identity supported;
- format text supported;
- image fallback supported;
- no hover-only critical info.

## P1 — Homepage

### T05 Hero
Editorial OUDIE hero with actual OUDIE imagery/settings.

### T06 Signature scents
Curated scent-first merchandising.

### T07 Find Your OUDIE
First version can be guided discovery categories; design API for future quiz.

### T08 Sample section
Prominent try-first path.

### T09 Experiences section
Clear service proposition and CTA.

### T10 Reviews + Oud Guide + current event
Conditional sections with clean empty states.

## P1 — Commerce

### T11 Shop architecture
Replace generic collection behavior with scent-first merchandising where appropriate.

### T12 Filters
Family / notes / format / sort / active chips / mobile drawer.

### T13 Scent Explorer
Refactor to canonical scent entities.

### T14 PDP above fold
Identity / rating / notes / format / price / availability / ATC / sample / shipping.

### T15 PDP below fold
Story / notes / fields / formats / reviews / related / FAQ without duplication.

### T16 Cart
Shipping progress, clean quantities, relevant sample upsell.

## P1 — Experiences

### T17 Experiences hub
### T18 Wedding page
### T19 Corporate page
### T20 Private workshop page
### T21 Event template
### T22 Inquiry form

## P2 — SEO/content

### T23 Scent landing-page framework
### T24 Oud Guide framework
### T25 Breadcrumbs
### T26 Metadata fallbacks
### T27 JSON-LD
### T28 Internal linking

## P2 — Edge routes

### T29 Search
### T30 Contact
### T31 Customer account flows
### T32 404 / password / gift card

## P0 before launch

### T33 Mobile regression suite
### T34 Real catalog PDP suite
### T35 Cart/checkout/Judge.me verification
### T36 SEO/schema validation
### T37 Accessibility pass
### T38 Performance pass
### T39 Launch redirect/index checklist
