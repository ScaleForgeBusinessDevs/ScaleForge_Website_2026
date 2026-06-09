# PRD 08 — Work / Case Study Index

**URL:** `/work`
**Build target:** Production page using the locked design system.
**Note:** This URL replaces the current `/projects` for clearer IA.

---

## Page identity

The Work page owns **PROOF** — the receipts. Every other page in the site says what ScaleForge does. This page shows what ScaleForge has actually shipped.

The page lists every case study with enough metadata at the glance (industry, service type, headline outcome) for a buyer to find the one most relevant to their situation, then click through to the full case study.

---

## Target user & intent

- **Primary**: Buyer who has read services/pricing pages and now wants proof before booking a call.
- **Secondary**: Buyer in a specific industry looking for relevant case studies.
- **Search intent:** "[agency] case studies," "[agency] portfolio," "web design portfolio examples"

---

## What this page owns

| Owns | Does NOT own |
|---|---|
| The full case study index | Methodology (→ Solutions) |
| Filtering by service type and industry | Blog articles (→ Blog) |
| Outcome metrics in card preview | Detail of any single case (→ `/work/[slug]`) |
| Visual gallery of projects | |

---

## Section flow

1. **Hero** — Brief positioning + dynamic project count.
2. **Filter bar** — By service type and industry.
3. **Featured case study** — One large card above the grid.
4. **Project grid** — All case studies in a responsive grid.
5. **CTA section** — "Want to be next?"

---

## Section-by-section content

### 1. Hero

**Eyebrow:** SELECTED WORK

**H1:** Building the Next Generation of High-Performing Businesses

**Subhead:** Every engagement leaves measurable receipts — faster sites, higher rankings, more leads, less manual work. Here are the brands we've shipped for.

**Dynamic counter (small, below subhead):**
`{N} live projects · {N} industries served`

**No CTA in hero** — the proof IS the CTA. Browse downward.

---

### 2. Filter Bar

A horizontal filter bar with two filter groups:

**By Service:**
- All
- AI Automation
- Web Design
- Web Development
- SEO
- Content

**By Industry:**
- All
- Healthcare & Dental
- E-Commerce
- Professional Services
- Real Estate
- Automotive
- Luxury & Jewelry
- Home Services
- SaaS & Startups

Filters work as AND logic. Selected filters show as removable chips below the bar.

---

### 3. Featured Case Study

Above the project grid, one large hero card. Showcases the strongest or most recent case study with full visual treatment.

**Card structure:**
- Eyebrow: FEATURED CASE STUDY
- Project thumbnail (large, 16:9 or 3:2)
- Industry tag · Service tags
- H2: Project name
- One-line outcome ("Tripled organic traffic in 9 months" / "80% reduction in SDR cost")
- Short body (2 sentences)
- Link: "Read the Case Study →" → `/work/[slug]`

---

### 4. Project Grid

A responsive grid of project cards. 2 columns on desktop, 1 on mobile.

**Each project card includes:**
- Thumbnail image (project mockup or screenshot)
- Industry tag
- Service type tags
- Project title (linked H3)
- One-line outcome
- "View Project →" link

**Initial project entries (based on current site + memory):**

| # | Title | Industry | Services | Headline Outcome |
|---|---|---|---|---|
| 1 | Car Rental Website (Malaysian client) | Automotive | Web Design, Web Development | Live booking platform with [outcome TBD] |
| 2 | Dental Clinic Website (Australian client) | Healthcare & Dental | Web Design, Web Development, SEO | Local Map Pack rank #1 within 6 months |
| 3 | Jewellery Store Website | Luxury & Jewelry | Web Design, Web Development, E-Commerce | Premium e-commerce conversion uplift |
| 4 | E-Commerce Concept (Speculative mockup) | E-Commerce | Web Design | Inspirational concept piece |
| 5 | Real Estate SEO Engagement (from blog case study) | Real Estate | SEO, Content | Tripled qualified lead volume in 9 months |

**Note:** Each project should have its own detail page (see PRD 09 — Project Detail Template).

---

### 5. CTA section (closing)

**H2:** Want to Be Next?

**Body:**
We accept a limited cohort of brands each season. If you're building something worth shipping, let's talk.

**Primary CTA:** Book a Free Strategy Call
**Secondary CTA:** See Pricing → links to `/pricing`

---

## CTAs & exit paths

- Each project card → its own detail page at `/work/[slug]`
- Filter chips → dynamic URL params (`/work?service=seo&industry=healthcare`)
- Closing primary → booking flow
- Closing secondary → `/pricing`

---

## SEO meta

- **Title:** Our Work | Case Studies & Past Projects | ScaleForge
- **Description:** See real outcomes from ScaleForge engagements — web design, custom Next.js builds, SEO, and AI automation across healthcare, e-commerce, real estate, and more.
- **Schema:** `ItemList` schema listing all case studies as `CreativeWork` items; `BreadcrumbList` schema.

---

## Notes

- **The filter bar is critical for trust.** International buyers want to see "someone in my industry got results." Industry filtering lets them self-serve.
- **A small "speculative" or "concept" tag** should mark mockups (like the E-Commerce concept) so buyers don't confuse them with live engagements.
- **Add a "load more" or pagination** if the project count exceeds 12. Default infinite scroll feels too casual for a case study page; "load more" feels more deliberate.
- **Dynamic project count in hero** should pull from CMS so it updates as new case studies publish.
- **Consider an "in progress" tag** for active engagements where ScaleForge can publicly mention them — adds freshness signal.
- The current site only has 4 visible projects. Filling out 6–10 case studies should be a content priority alongside this build.
