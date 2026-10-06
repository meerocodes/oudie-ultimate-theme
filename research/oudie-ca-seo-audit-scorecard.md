# OUDIE Business Website SEO Audit

**Website:** https://www.oudie.ca/  
**Audit date:** October 5, 2026  
**Framework:** Business Website SEO  
**Overall SEO Score:** **72/100**  
**Rating:** **Good**

---

## Scoring Method

| Category | Weight |
|---|---:|
| Technical SEO & Indexability | 20 |
| On-Page SEO & Keyword Targeting | 15 |
| Content Quality & Topical Authority | 15 |
| Site Architecture & Internal Linking | 10 |
| Local SEO & Entity Clarity | 10 |
| Structured Data | 10 |
| Authority, Trust & Proof | 10 |
| AI Search / Answer Engine Visibility | 10 |
| **Total** | **100** |

### Score Interpretation

| Score | Rating |
|---:|---|
| 90–100 | Excellent |
| 80–89 | Strong |
| 70–79 | Good |
| 60–69 | Average |
| 50–59 | Weak |
| 30–49 | Poor |
| 0–29 | Critical |

---

# Executive Scorecard

| Category | Weight | Score | Assessment |
|---|---:|---:|---|
| Technical SEO & Indexability | 20 | **14/20** | Strong crawlability and indexing, but duplicate collection routes, indexed vendor/filter-style URLs, variant URLs and stale event products create index bloat |
| On-Page SEO & Keyword Targeting | 15 | **12/15** | Homepage, core collection and Experiences targeting are strong; individual scent/product targeting can be much stronger |
| Content Quality & Topical Authority | 15 | **11/15** | Excellent scent library and useful product detail, but OUDIE lacks enough educational content to dominate broader oud queries |
| Site Architecture & Internal Linking | 10 | **7/10** | Good product/category structure and scent discovery, but scent-level landing pages and cleaner collection architecture are needed |
| Local SEO & Entity Clarity | 10 | **8/10** | Mississauga, Toronto and GTA positioning is strong; event freshness and local proof can improve |
| Structured Data | 10 | **4/10** | Product data appears machine-readable, but Organization/Event/Breadcrumb and full JSON-LD implementation should be verified and expanded |
| Authority, Trust & Proof | 10 | **8/10** | Strong customer reviews, founder story, event collaborations and first-party product detail; more external editorial authority is needed |
| AI Search / Answer Engine Visibility | 10 | **8/10** | The scent directory, FAQs and explicit local/service descriptions are highly extractable; entity consistency and third-party corroboration can improve |
| **TOTAL** | **100** | **72/100** | **Good** |

---

# Executive Summary

OUDIE has a substantially stronger SEO foundation than many small ecommerce fragrance brands.

The website already gives search engines and AI systems clear information about:

- What OUDIE sells
- Where OUDIE is based
- Oud and musk fragrance categories
- Extrait de parfum
- Fragrance oils
- Fragrance mists
- Bakhoor
- Sample sets
- Fragrance bars
- Weddings
- Corporate events
- Private fragrance workshops
- Individual fragrance notes

The strongest SEO asset on the website is currently the **Explore Our Scents** directory. It creates an explicit relationship between scent names, fragrance notes, formats, prices and products.

The biggest opportunities are now:

1. Clean duplicate/index-bloat URLs
2. Remove or archive stale workshop/event products
3. Fix catalog inconsistencies and spelling errors
4. Give important individual scents their own indexable landing pages
5. Expand educational content around oud and fragrance
6. Split the Experiences page into high-intent service landing pages
7. Strengthen event/local SEO
8. Verify and expand structured data
9. Build more external authority and backlinks
10. Make OUDIE even easier for AI answer engines to cite

---

# 1. Technical SEO & Indexability

**Score: 14/20**

## What OUDIE Is Doing Well

The main site is fully crawlable and major commercial pages are being indexed.

Observed indexed pages include:

- Homepage
- All-fragrances collections
- Extrait de parfum collection
- Fragrance mists collection
- Premium collection
- Best sellers
- Our Story
- Explore Our Scents
- OUDIE Experiences
- Individual product pages
- Workshop/event products

This means there is no major crawl blocker such as the password-wall issue seen on Golden Scoop.

---

## 1.1 High: Consolidate Duplicate “All Products” Collection URLs

### What is happening

Both of these are indexed:

```text
/collections/all
/collections/all-oudie
```

They serve substantially overlapping product discovery intent.

There is also:

```text
/collections
```

and a Shopify-generated vendor route:

```text
/collections/vendors?q=oudie
```

### Why it matters

When multiple URLs serve essentially the same catalog purpose, Google must decide:

- Which URL is primary
- Which page deserves authority
- Which page should rank
- Which links should consolidate

This creates unnecessary index bloat.

### Recommended structure

Choose one primary all-products collection.

Recommended:

```text
/collections/all-oudie
```

or a cleaner custom handle such as:

```text
/collections/oud-fragrances
```

Then either:

- 301 redirect true duplicates, or
- canonicalize duplicates to the chosen primary page
- noindex utility/vendor collection URLs where appropriate

### Specifically review

```text
/collections/all
/collections/all-oudie
/collections
/collections/vendors?q=oudie
```

**Priority: HIGH**

---

## 1.2 High: Remove the Shopify Vendor Collection From Search

An indexed page currently exists at:

```text
/collections/vendors?q=oudie
```

Its H1 is essentially:

```text
oudie
```

and it duplicates the main product catalog.

### Recommended fix

The vendor collection should not compete with the main collection.

Preferred options:

1. Add `noindex,follow` to Shopify vendor-generated collection pages, or
2. Canonicalize it to the main collection where technically appropriate

Do not use the vendor route as an SEO landing page.

**Priority: HIGH**

---

## 1.3 High: Clean Up Old Workshop and Event Products

Old event products remain crawlable and searchable.

Examples include:

```text
OUDIE X THE VENDOR'S ALLEY WORKSHOP
OUDIE WORKSHOP EXPERIENCE #1008
Oud Making Workshop — Oudie x The Local by Masrawy
```

Some are sold out and refer to past event dates.

The Workshops collection also surfaces numerous historical workshop entries.

### Why it matters

Past events are not inherently bad SEO.

The problem is when they remain as thin ecommerce products with:

- “Sold out”
- old dates
- generic names
- no archive structure
- no useful link to current events

This creates stale search results.

### Better event architecture

Create:

```text
/pages/fragrance-workshops
```

for evergreen workshop intent.

Create permanent event articles/pages such as:

```text
/blogs/events/fragrance-workshop-blackstone-mississauga-october-17-2026
```

After an event:

- Keep valuable event pages live as an archive
- Clearly label them “Past Event”
- Add photos/results
- Link to current workshops
- Remove ecommerce purchase CTAs
- Redirect thin/duplicate old event products when they have no lasting value

**Priority: HIGH**

---

## 1.4 Medium: Review Variant URL Indexing

Search results expose variant-specific URLs such as:

```text
/products/premium-extrait-de-parfum?variant=45470018240695
```

alongside the clean product URL.

### Why it matters

Shopify normally handles variants reasonably well, but OUDIE should confirm that:

```text
?variant=
```

URLs canonicalize correctly to the parent product URL unless there is a deliberate SEO reason to index them separately.

### Verify

In Google Search Console and page source, confirm:

```html
<link rel="canonical" href="https://www.oudie.ca/products/premium-extrait-de-parfum">
```

for variant URLs.

If variant URLs are being indexed as separate canonical documents, fix them.

**Priority: MEDIUM**

---

## 1.5 Medium: Clean Legacy URL Naming

Some URL handles no longer accurately reflect the product/category.

Examples:

```text
/collections/eau-de-parfume-50ml
/products/oudie-eau-de-parfum
```

The visible product/category language is now **Extrait de Parfum**.

### Recommendation

Do not change ranking URLs casually.

If a migration is done, use permanent 301 redirects.

Potential future URLs:

```text
/collections/oud-extrait-de-parfum
/products/oudie-extrait-de-parfum
```

The current title tags already compensate for the old slug, so this is not an emergency.

**Priority: MEDIUM / LOW**

---

## 1.6 Verify Core Technical Files

The audit crawler could not directly inspect the rendered contents of:

```text
/robots.txt
/sitemap.xml
```

Verify manually in Google Search Console.

### Checklist

- Sitemap submitted
- Sitemap contains only canonical/indexable pages
- No stale event/filter URLs in sitemap
- No important pages blocked
- OAI-SearchBot not blocked
- Googlebot not blocked
- Canonicals are self-referencing on core pages
- HTTPS version is canonical
- `www` / non-`www` behavior is consistent

---

# 2. On-Page SEO & Keyword Targeting

**Score: 12/15**

## Major Strength

OUDIE already has strong search-facing homepage language.

Current homepage title:

```text
Handcrafted Oud Fragrances & Perfume in Canada – OUDIE
```

Current H1:

```text
Handcrafted Oud & Musk Fragrances
```

This is clear, descriptive and commercially relevant.

The homepage also explicitly connects OUDIE with:

```text
Mississauga
Toronto
Canada
oud perfume
extrait de parfum
fragrance oil
oud bar
GTA events
```

That is strong entity and keyword targeting.

---

## 2.1 Strong: Extrait Collection

The collection currently targets:

```text
Oud Perfume & Extrait de Parfum in Canada
```

with the H1:

```text
Oud perfume & extrait de parfum
```

This is a strong commercial category page.

Keep it.

---

## 2.2 Improve Generic Collection H1s

Some collections are still too brand/internal-language focused.

Examples:

```text
OUDIE MIST
Oudie Premium
ALL OUDIE
```

### Better examples

For the mists collection:

**Title**

```text
Oud Fragrance Mists in Canada | OUDIE
```

**H1**

```text
Oud & Musk Fragrance Mists
```

For premium:

**Title**

```text
Premium Oud Perfume & Fragrance Oils | OUDIE Canada
```

**H1**

```text
Premium Oud Fragrances
```

For all products:

**Title**

```text
Oud Fragrances, Perfume & Oils in Canada | OUDIE
```

**H1**

```text
Oud Fragrances, Perfume & Oils
```

---

# 3. Individual Scent SEO Is OUDIE's Biggest On-Page Opportunity

## Current issue

Several important fragrances exist as **variants inside generic product pages**.

For example:

```text
OUDIE MADAWI
OUDIE MUSK
OUDIE BRILLIANCE
OUDIE MUSK AMORE
```

are variants of a generic:

```text
OUDIE EXTRAIT DE PARFUM
```

product page.

Similarly:

```text
Echnaton
Zenobia
Sweet Yathrib
Tobacco Honey
```

share:

```text
PREMIUM - EXTRAIT DE PARFUM
```

### Why it matters

If someone searches:

```text
OUDIE Madawi perfume
Madawi oud perfume Canada
Sweet Yathrib perfume
Zenobia oud fragrance
```

Google has no highly focused canonical product document whose primary H1/title is the scent itself.

The **Explore Our Scents** page helps, but it should not be responsible for ranking every scent query.

---

## Recommended Scent Hub Architecture

Keep variants if they are operationally useful in Shopify, but create an indexable landing page for every important scent.

Example:

```text
/pages/scents/oudie-madawi
/pages/scents/oudie-musk
/pages/scents/oudie-brilliance
/pages/scents/zenobia
/pages/scents/sweet-yathrib
```

### Example: OUDIE Madawi

**SEO title**

```text
OUDIE Madawi | Peach, Jasmine & Oud Fragrance
```

**H1**

```text
OUDIE Madawi
```

**Opening copy**

> OUDIE Madawi is a fruity-floral oud fragrance blending peach and apple blossom with pineapple blossom, jasmine, musk, wild rose and patchouli. Handcrafted by OUDIE in Mississauga, Canada.

Then show:

- Full scent notes
- Scent family
- Character
- Intensity
- Formats available
- Extrait
- Oil blend
- Mist
- Car diffuser
- Reviews mentioning Madawi
- Related scents
- Sample-set availability

### Internal link structure

```text
Explore Our Scents
→ OUDIE Madawi scent page
→ Extrait product variant
→ Oil product variant
→ Mist product variant
```

This gives Google one authoritative URL per scent.

**Priority: HIGH**

---

# 4. Content Quality & Topical Authority

**Score: 11/15**

## Major Strength: Explore Our Scents

This is one of the site's best SEO assets.

It exposes:

- Scent names
- Top notes
- Heart notes
- Base notes
- Formats
- Prices
- Product relationships
- Search/filter behavior
- FAQ content
- Sample information
- Educational language

This is highly useful for both traditional search and AI systems.

Do not remove or simplify this page.

Expand its role as the central scent knowledge graph.

---

## 4.1 High: Fix Catalog Data Errors

Several inconsistencies currently appear in crawlable content.

### Sample Packs

The site shows:

```text
Premium Samples (6 Total)
```

but describes:

```text
Four 1 ml vials
```

The product page lists five premium names:

- Zenobia
- Yathrib
- Echnaton
- Secret
- Sweet Egypt

Similarly:

```text
Musk Samples (6 Total)
```

is described as:

```text
Four 1 ml musky blends
```

and the product page lists four musk scents.

### Why it matters

This is a conversion problem and a quality signal problem.

AI systems may repeat the wrong number because the website itself is contradictory.

### Exact fix

Determine the actual quantity and make all of these consistent:

- Variant name
- Product description
- Scent directory
- Structured data
- Images
- Cart line item
- Email confirmations

**Priority: HIGH**

---

## 4.2 High: Fix Fragrance Note Typos and Normalization

Examples observed in crawlable content include:

```text
Patchoulii
Mamask Rose
Ambregris
Mandarine
Caramel ,
Musk.
Cedar wood
```

Some may be intentional terms, but several look like spelling/data-entry errors.

### Recommended scent-data standard

Use one consistent vocabulary.

Examples:

```text
Patchouli
Damask Rose
Ambergris
Mandarin
Caramel, Honey
Musk, Cambodian Oud
Cedarwood
```

Also standardize:

```text
Top / Heart / Base
```

instead of mixing:

```text
Top / Middle / Base
```

unless the distinction is deliberate.

### Why it matters

OUDIE is building a fragrance database.

Consistency improves:

- User trust
- Search quality
- AI extraction
- Filtering
- Schema
- Future recommendation tools

**Priority: HIGH**

---

## 4.3 Build the Oud Education Layer

The current site is commercial-first.

That is good for conversion, but OUDIE could become much more authoritative by answering the informational searches around the category.

### Recommended evergreen pages

```text
/blogs/oud-guide/what-is-oud
/blogs/oud-guide/oud-vs-musk
/blogs/oud-guide/extrait-de-parfum-vs-perfume-oil
/blogs/oud-guide/how-to-wear-oud
/blogs/oud-guide/what-does-oud-smell-like
/blogs/oud-guide/how-fragrance-notes-work
/blogs/oud-guide/how-to-layer-oud-and-musk
/blogs/oud-guide/how-long-does-oud-perfume-last
```

### Best first article

```text
What Is Oud? A Guide to Oud Fragrance
```

The article should answer immediately:

> Oud is an aromatic material traditionally associated with agarwood and widely used in Middle Eastern perfumery. Its scent can vary from woody, smoky and resinous to sweet, leathery or musky depending on the material and composition.

Then explain:

- Agarwood
- Cultural history
- What oud smells like
- Oud vs musk
- Oud oils
- Oud perfume
- How OUDIE uses oud-inspired compositions
- How beginners can choose a scent

### Why this matters

It gives OUDIE a chance to rank and be cited for educational searches, not just branded/product searches.

**Priority: HIGH**

---

# 5. Site Architecture & Internal Linking

**Score: 7/10**

## Current Strengths

The site has useful commercial pathways:

```text
Homepage
→ Collections
→ Products
```

and a second discovery pathway:

```text
Homepage
→ Explore Our Scents
→ Scent
→ Format
→ Product
```

That second pathway is particularly strong.

---

## Recommended Future Architecture

```text
HOME
│
├── SHOP
│   ├── Extrait de Parfum
│   ├── Fragrance Oils
│   ├── Mists
│   ├── Bakhoor
│   ├── Samples
│   └── Home & Car
│
├── EXPLORE SCENTS
│   ├── OUDIE Madawi
│   ├── OUDIE Musk
│   ├── Egyptian Oud
│   ├── Zenobia
│   ├── Sweet Yathrib
│   └── ...
│
├── EXPERIENCES
│   ├── Wedding Fragrance Bar
│   ├── Corporate Fragrance Bar
│   ├── Private Fragrance Workshops
│   └── Upcoming Public Workshops
│
├── OUD GUIDE
│   ├── What Is Oud?
│   ├── Oud vs Musk
│   ├── Fragrance Notes
│   └── How to Choose a Scent
│
└── ABOUT
```

This architecture would create much stronger topical clusters.

---

# 6. OUDIE Experiences / Oud Bar SEO

The current Experiences page is already good.

Current title:

```text
Oud Fragrance Bar Toronto & GTA | Weddings & Events – OUDIE
```

Current H1:

```text
Oud Fragrance Bars for Toronto, GTA, Canada & U.S. Events
```

It also contains strong FAQ-style answers around:

- Weddings
- Corporate events
- Private workshops
- Toronto
- Mississauga
- GTA
- Guest count
- Pricing process
- Fragrance bar vs workshop

This is a strong page.

---

## 6.1 High: Split the Three Experience Types Into Dedicated Landing Pages

The current single page is trying to target three different commercial intents.

Create:

```text
/pages/wedding-fragrance-bar-toronto
/pages/corporate-fragrance-bar-toronto
/pages/private-fragrance-workshops-toronto
```

### Wedding page

Target:

```text
wedding perfume bar Toronto
wedding fragrance bar Toronto
oud bar wedding Toronto
perfume bar wedding Mississauga
```

### Corporate page

Target:

```text
corporate fragrance activation Toronto
corporate perfume bar Toronto
brand activation fragrance bar
```

### Workshop page

Target:

```text
fragrance workshop Toronto
perfume making workshop Toronto
fragrance workshop Mississauga
private perfume workshop Toronto
```

The existing Experiences page then becomes the hub.

**Priority: HIGH**

---

## 6.2 Competitor Opportunity

A Toronto competitor in the perfume-bar category has a highly focused landing page with:

- Dedicated event positioning
- Clear inclusions
- Testimonials
- Occasion types
- Booking urgency
- Real-event proof

OUDIE's current page is well-written, but OUDIE can outrank and out-convert competitors by adding:

- Event testimonials
- Past venue names
- Real event galleries
- Client/brand logos where permitted
- Approximate group-size guidance
- Setup examples
- FAQs per occasion
- Case studies
- Separate service landing pages

---

# 7. Local SEO & Entity Clarity

**Score: 8/10**

OUDIE is doing this well.

The site repeatedly establishes:

```text
OUDIE
→ Mississauga
→ Toronto
→ GTA
→ Canada
```

The About page also explains the brand's Egyptian heritage and origin story.

That is strong entity information.

---

## 7.1 Fix the Current Event Contradiction

The homepage currently lists the October 17 workshop product but later says:

```text
No upcoming appearances are scheduled.
```

The October 17, 2026 Fragrance Workshop Social is currently on sale.

### Why it matters

This creates conflicting information for:

- Users
- Google
- AI answer engines
- Event discovery

### Exact fix

The “Find OUDIE Near You” section should dynamically pull active events.

For October 2026 it should show:

```text
Fragrance Workshop Social
October 17, 2026
5:00 PM–7:00 PM
Mississauga, Ontario
```

Then link to the event page.

**Priority: HIGH**

---

## 7.2 Clean Event Naming

The current event page title combines:

```text
Oud & Stones | Fragrance Workshop Social | October 17
```

Choose one official event name and use it consistently across:

- Product title
- SEO title
- H1
- Event schema
- Homepage
- Social posts
- Ticket image
- Confirmation emails

Recommended current naming:

```text
Fragrance Workshop Social
```

### Suggested SEO title

```text
Fragrance Workshop in Mississauga | OUDIE | Oct. 17
```

### Suggested H1

```text
Fragrance Workshop Social
```

---

# 8. Structured Data

**Score: 4/10**

The audit could not fully validate the rendered JSON-LD, so this score is deliberately conservative.

Shopify product information is clearly machine-readable, but the schema implementation should be audited directly.

---

## Recommended Schema Stack

### Homepage

```text
Organization
WebSite
```

### Product pages

```text
Product
Offer
AggregateRating
Review
```

Only use rating/review properties when they accurately represent visible customer reviews.

### Collections

```text
CollectionPage
ItemList
BreadcrumbList
```

### Experiences

```text
Service
BreadcrumbList
```

### Public workshop/event pages

```text
Event
Offer
Place
Organization
```

### Educational articles

```text
Article
BreadcrumbList
```

---

## Event Schema Example Fields

For the October 17 workshop:

```text
name
startDate
endDate
eventStatus
eventAttendanceMode
location
address
organizer
offers
price
priceCurrency
availability
url
image
description
```

This is a major opportunity because OUDIE runs real-world experiences.

---

# 9. Authority, Trust & Proof

**Score: 8/10**

OUDIE has strong first-party trust signals.

Observed examples include:

- 10 reviews on OUDIE Extrait de Parfum
- 17 reviews on Premium Oil Rub Blends
- 16 reviews on OUDIE Mist
- 25 reviews on Sample Packs
- Founder/brand story
- Local collaborations
- Public workshops
- Physical event activity
- Product-specific fragrance information

---

## 9.1 Improve External Authority

The next step is not more on-site self-description.

It is more independent sources confirming OUDIE.

### Target sources

- Toronto food/lifestyle publications
- Wedding publications
- Wedding vendor directories
- Toronto event blogs
- Mississauga event calendars
- Corporate event publications
- Venue partner websites
- Festival websites
- Community organizations
- Creator reviews
- Fragrance blogs

### Best backlink opportunity

Every OUDIE workshop partner or venue should link to the OUDIE event/service page.

Examples:

```text
Venue event page
→ OUDIE event page

Wedding planner vendor list
→ OUDIE Wedding Fragrance Bar page

Corporate event recap
→ OUDIE Corporate Fragrance Bar page
```

---

# 10. AI Search / Answer Engine Visibility

**Score: 8/10**

OUDIE is already structured unusually well for AI extraction.

The site answers facts such as:

- What is OUDIE?
- Where is OUDIE based?
- What does OUDIE sell?
- Which fragrance notes are in each scent?
- Which format is each scent available in?
- Does OUDIE offer fragrance bars?
- Does OUDIE serve Toronto and Mississauga?
- What happens during a private fragrance workshop?
- What is the difference between a fragrance bar and workshop?

That is excellent.

---

## 10.1 Build Explicit Entity Statements

Use concise factual statements throughout key pages.

Example:

> OUDIE is a Mississauga-based Canadian fragrance brand creating handcrafted oud and musk perfumes, fragrance oils, mists, bakhoor and interactive fragrance experiences.

For experiences:

> OUDIE offers wedding fragrance bars, corporate scent activations and private perfume-making workshops across Toronto, Mississauga and the GTA.

These are easy for AI systems to quote or summarize accurately.

---

## 10.2 Create Citation-Worthy Educational Pages

AI systems are more likely to cite OUDIE for non-branded questions if OUDIE publishes useful informational content.

Target questions:

```text
What is oud?
What does oud smell like?
What is oud perfume?
What is the difference between oud and musk?
What is extrait de parfum?
How long does oud perfume last?
How do fragrance notes work?
How do you layer oud?
What is a perfume bar?
What happens at a fragrance workshop?
```

---

## 10.3 Verify OAI-SearchBot Access

If appearing in ChatGPT search is a goal, verify that:

```text
OAI-SearchBot
```

is not blocked by:

- robots.txt
- firewall rules
- bot protection
- CDN rules

---

# 11. Product Content Quality Audit

## Current Strength

Product pages contain useful information such as:

- Concentration
- Longevity
- Notes
- Ingredients
- Application
- Volume
- Reviews
- Related products
- Sample-set links

This is much stronger than thin Shopify product pages.

---

## 11.1 Improve Product Titles Around Actual Search Language

Generic product H1:

```text
OUDIE EXTRAIT DE PARFUM
```

is useful for the category but weak for individual scent queries.

If separate scent pages are created, keep the product operationally generic.

If not, consider dynamic title elements that expose the selected scent more strongly.

Example visible heading:

```text
OUDIE Madawi
Extrait de Parfum
```

rather than only:

```text
OUDIE EXTRAIT DE PARFUM
```

---

## 11.2 Review Strong Marketing Claims

Current product content includes strong claims such as:

```text
24+ hour wear
Rare ingredients
Sustainably sourced Cambodian oud
Master perfumers
```

These can increase conversion when accurate.

However, because fragrance authority is central to the brand, any strong factual claim should be supportable.

Recommended:

- Avoid unnecessary absolute claims
- Explain sourcing where relevant
- Ensure longevity language is consistent across variants
- Avoid claiming credentials that cannot be substantiated
- Keep product details aligned with actual formulas

This strengthens trust and E-E-A-T-style quality signals.

---

# 12. Content Opportunities by Search Intent

## Transactional

Create/strengthen pages for:

```text
oud perfume Canada
oud perfume Toronto
oud oil Canada
oud fragrance Canada
Arabic perfume Toronto
musk perfume Canada
extrait de parfum Canada
oud samples Canada
bakhoor Canada
```

---

## Local / Experience

```text
fragrance workshop Toronto
fragrance workshop Mississauga
perfume making workshop Toronto
perfume bar Toronto
wedding perfume bar Toronto
wedding fragrance bar Toronto
corporate fragrance activation Toronto
oud bar Toronto
```

---

## Informational

```text
what is oud
what does oud smell like
oud vs musk
oud perfume meaning
how to wear oud
how long does oud perfume last
what is extrait de parfum
perfume oil vs spray
what are top heart base notes
```

---

## Brand + Scent

```text
OUDIE Madawi
OUDIE Musk
OUDIE Brilliance
OUDIE Bella
Egyptian Oud OUDIE
Medina Brilliance
Jasmine Brilliance
Zenobia perfume OUDIE
Sweet Yathrib
Echnaton fragrance
```

---

# 13. Recommended Content Cluster

## Pillar: Oud Fragrance Guide

URL:

```text
/pages/oud-fragrance-guide
```

Then link to:

```text
/blogs/oud-guide/what-is-oud
/blogs/oud-guide/what-does-oud-smell-like
/blogs/oud-guide/oud-vs-musk
/blogs/oud-guide/how-to-wear-oud
/blogs/oud-guide/extrait-vs-oil
```

Each article should link to:

- Explore Our Scents
- Relevant products
- Samples
- Related articles

This gives OUDIE a genuine educational moat.

---

# 14. Recommended Local Experience Cluster

```text
/pages/oudie-experiences
│
├── /pages/wedding-fragrance-bar-toronto
├── /pages/corporate-fragrance-bar-toronto
├── /pages/private-fragrance-workshops-toronto
└── /pages/fragrance-workshops
```

Public event pages then link into the relevant evergreen service.

---

# 15. Priority Implementation Backlog

## Critical

There is no site-wide critical blocker comparable to Golden Scoop's password wall.

That is a major positive.

---

## High Priority

1. Consolidate duplicate all-products collection routes
2. Noindex/canonicalize the Shopify vendor collection
3. Clean old workshop/event product indexing
4. Fix sample-pack count contradictions
5. Correct scent-note spelling/data inconsistencies
6. Fix homepage upcoming-event contradiction
7. Standardize the current Fragrance Workshop Social naming
8. Create dedicated scent landing pages
9. Split Experiences into wedding/corporate/workshop landing pages
10. Verify product/variant canonicals

---

## Medium Priority

11. Build “What Is Oud?” content
12. Build the oud education cluster
13. Add/verify Organization schema
14. Add/verify BreadcrumbList
15. Add Event schema to public workshops
16. Add Service schema to experience pages
17. Improve collection H1/title specificity
18. Strengthen external backlinks and press mentions
19. Review legacy URL handles before any migration
20. Verify robots.txt, sitemap and OAI-SearchBot access

---

# 16. Recommended First 30 Days

## Week 1: Cleanup

- Fix sample count errors
- Fix scent-note typos
- Fix current event status on homepage
- Standardize event naming
- Review duplicate collections
- Review indexed vendor URL
- Review past workshop products

## Week 2: Technical

- Verify Search Console
- Verify sitemap
- Verify canonical tags
- Check variant URLs
- Check schema
- Check robots
- Check OAI-SearchBot
- Request reindexing after cleanup

## Week 3: Commercial SEO

Publish:

```text
Wedding Fragrance Bar Toronto
Corporate Fragrance Bar Toronto
Private Fragrance Workshops Toronto
```

## Week 4: Scent Authority

Create the first high-value scent pages:

```text
OUDIE Madawi
OUDIE Musk
OUDIE Brilliance
Egyptian Oud
Zenobia
Sweet Yathrib
```

Then publish:

```text
What Is Oud?
```

---

# 17. Score Improvement Potential

| Stage | Estimated Score |
|---|---:|
| Current | **72/100** |
| Catalog + technical cleanup | **77–80/100** |
| Dedicated scent + experience pages | **82–86/100** |
| Educational authority + structured data | **87–90/100** |
| Strong third-party authority/backlinks | **90+/100** |

---

# 18. Biggest SEO Opportunities Ranked by ROI

| Rank | Opportunity | Impact |
|---:|---|---|
| 1 | Dedicated scent landing pages | **Very High** |
| 2 | Split wedding/corporate/workshop experience pages | **Very High** |
| 3 | Clean duplicate/index-bloat URLs | **High** |
| 4 | Fix catalog accuracy and scent data | **High** |
| 5 | Publish “What Is Oud?” + education cluster | **High** |
| 6 | Event schema + evergreen event architecture | **High** |
| 7 | Build venue/publication backlinks | **High** |
| 8 | Strengthen collection titles/H1s | **Medium** |
| 9 | Clean legacy URL naming | **Medium/Low** |
| 10 | Expand AI-specific factual/entity copy | **Medium** |

---

# 19. Final Strategic Assessment

## What OUDIE Already Has

OUDIE already has:

- A crawlable ecommerce site
- Strong homepage keyword targeting
- Canadian location targeting
- Toronto/GTA experience targeting
- Product reviews
- A clear origin story
- Detailed scent information
- A strong fragrance discovery tool
- Product/category indexation
- Real event activity
- Multiple fragrance formats
- First-party expertise content

That gives the brand a genuine SEO foundation.

## What OUDIE Needs Next

OUDIE should evolve from:

```text
A fragrance ecommerce site with an Oud Bar
```

into:

```text
A Canadian oud fragrance authority
+
A Toronto/GTA fragrance experience authority
```

The two SEO pillars should be:

### Pillar 1: Products & Fragrance Knowledge

```text
Oud perfume Canada
→ scent discovery
→ individual scent pages
→ samples
→ educational oud content
```

### Pillar 2: Experiences

```text
Fragrance bar Toronto
→ wedding fragrance bar
→ corporate fragrance activation
→ private perfume workshop
→ public workshops
```

If implemented properly, these two topic clusters can reinforce each other and make OUDIE much easier for both Google and AI answer engines to understand and recommend.

---

# Observed Source Pages

- https://www.oudie.ca/
- https://www.oudie.ca/pages/our-scents
- https://www.oudie.ca/pages/our-mission
- https://www.oudie.ca/pages/oudie-experiences
- https://www.oudie.ca/collections/all
- https://www.oudie.ca/collections/all-oudie
- https://www.oudie.ca/collections/eau-de-parfume-50ml
- https://www.oudie.ca/collections/sprays
- https://www.oudie.ca/collections/oudie-premium
- https://www.oudie.ca/collections/workshops
- https://www.oudie.ca/collections/vendors?q=oudie
- https://www.oudie.ca/products/oudie-eau-de-parfum
- https://www.oudie.ca/products/premium-extrait-de-parfum
- https://www.oudie.ca/products/premium-oil-rub-blends
- https://www.oudie.ca/products/sample-pack-1-of-each-scent
- https://www.oudie.ca/products/oud-stones-oud-fragrance-workshop-ticket
- https://www.oudie.ca/products/oudie-x-the-vendors-alley-workshop

---

*Prepared using the Business Website SEO audit framework.*
