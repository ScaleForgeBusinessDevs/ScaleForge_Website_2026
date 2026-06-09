# PRD 09 — Project Detail Template

**URL:** `/work/[slug]`
**Build target:** Production template using the locked design system.

---

## Page identity

This is the **template for an individual case study**. Every project on the `/work` index links to one of these. The template owns the full narrative of a single engagement — context, problem, approach, outcome — with visual proof and measurable results.

A case study page is the most powerful conversion tool on the site. It does three things simultaneously: proves credibility, demonstrates approach, and lets the buyer self-identify ("this is my situation").

---

## Target user & intent

- **Primary**: High-intent buyer near the bottom of the funnel, doing due diligence before booking a call.
- **Secondary**: Buyer in a similar industry looking for relevant proof points.
- **Search intent:** "[ScaleForge] case study," "[client name] website," "[industry] website redesign case study"

---

## What this template owns

| Owns | Does NOT own |
|---|---|
| Single project narrative | The project index (→ `/work`) |
| Outcome metrics for one project | Service detail pitches (→ Service detail pages) |
| Visual gallery of the work | Pricing (→ Pricing) |
| Client testimonial for this project | |

---

## Section flow

1. **Hero** — Client name + headline outcome + tags.
2. **Project metadata strip** — Industry, services delivered, timeline.
3. **The challenge** — What the client was facing.
4. **The approach** — What ScaleForge did.
5. **The build** — Visual gallery (screenshots, mockups, before/after).
6. **The outcomes** — Hard metrics in tile format.
7. **Client testimonial** — Quote + attribution.
8. **Stack used** — Tools and tech.
9. **Related projects** — Up to 3 cards linking to other case studies.
10. **CTA** — "Want results like these?"

---

## Section-by-section content

### 1. Hero

**Eyebrow:** [Industry tag] · [Service tags]

**H1:** [Client Name] — [Headline Outcome in one line]

*Example: "Apex Dental — Local Map Pack rank #1 within 6 months"*

**Subhead:** [One-paragraph description of the engagement in 2–3 sentences]

**Hero visual:** Project mockup, screenshot, or device frame showing the finished work. This is the largest visual on the page.

---

### 2. Project Metadata Strip

A small horizontal strip below the hero containing:

| Label | Value |
|---|---|
| **Industry** | [Healthcare & Dental / E-Commerce / etc.] |
| **Services** | [Web Design, Web Development, SEO / etc.] |
| **Timeline** | [3 months / 6-month engagement / Ongoing] |
| **Region** | [Country / city of client] |
| **Status** | [Live / In Progress / Concept] |

---

### 3. The Challenge

**H2:** The Challenge

**Body (2–4 paragraphs):**

What was the client facing before ScaleForge? Specific business problems, market context, technical debt, conversion gaps. Be concrete — names of platforms they were on, metrics that were broken, growth they were missing.

Avoid generic phrasing. "They had an outdated website" is not a challenge. "Their WordPress site loaded in 7.2 seconds on mobile, scored 23 on PageSpeed, and bounced 78% of paid traffic before the hero loaded" is a challenge.

---

### 4. The Approach

**H2:** The Approach

**Body (2–4 paragraphs):**

What did ScaleForge do? Walk through the strategic decisions, the build choices, the priorities set. This is the section where the methodology comes through — without re-pitching the methodology page.

Reference the relevant services (with inline links to those service pages). For example: "We rebuilt the entire site on Next.js [link to /services/web-development], deployed a fresh Sanity CMS, and ran a 90-day SEO sprint [link to /services/seo] focused on local Map Pack visibility."

**Optional pull-quote/callout** within this section to surface a key insight:

> "The fix wasn't a better template. The fix was killing the template entirely."

---

### 5. The Build (Visual Gallery)

**H2:** The Build

A visual gallery showing the finished work. Mix of:
- Full-page mockups on device frames (desktop + mobile)
- Hero section screenshots
- Detail screenshots (forms, modals, key components)
- Before/after comparisons where relevant
- Animation captures (looping video/GIF) for interactive pieces

Each image should have an alt text and an optional caption.

**Recommended layout:** Mason grid or alternating large/small with full-width breakers.

---

### 6. The Outcomes

**Eyebrow:** RESULTS

**H2:** The Outcomes

**Stat tile grid (4 to 6 tiles):**

Each tile shows one metric with:
- Big number
- Caption label
- Optional comparison (before → after) or time window

**Examples:**
- `+315%` Organic Search Traffic · 9 months
- `1.1s` Mobile Load Time · was 6.2s
- `+240%` Lead Volume · 3 months post-launch
- `Top 3` Local Map Pack Ranking · 5 months
- `40%` Conversion Rate Improvement
- `100` PageSpeed Score · was 23

---

### 7. Client Testimonial

**Treated as a full-width quote block:**

> "[Quote text — 2 to 4 sentences. Specific. Mentions outcomes. Sounds like a real human, not a sales testimonial.]"

**Attribution:**
- Avatar / photo
- Name
- Title, Company

---

### 8. Stack Used

**Eyebrow:** TOOLS & TECH

**H2:** Built With

A horizontal strip of small logo + label cards for every tool used in the engagement. Examples:
- Next.js
- Tailwind CSS
- Sanity CMS
- Vercel
- n8n
- Vapi
- Google Search Console
- Ahrefs

This section reinforces technical credibility and is a useful page-level SEO surface area.

---

### 9. Related Projects

**Eyebrow:** RELATED WORK

**H2:** More Case Studies

Up to 3 cards (same format as on `/work` index) showing other case studies. Selected by:
1. Same industry first
2. Same service tags second
3. Most recent if no matches

---

### 10. CTA section (closing)

**H2:** Want Results Like These?

**Body:**
Every engagement starts with a free 30-minute strategy call. Tell us what you're building, where you're stuck, and we'll outline what we'd do.

**Primary CTA:** Book a Free Strategy Call
**Secondary CTA:** See All Work → links to `/work`

---

## CTAs & exit paths

- Inline links to relevant service detail pages throughout "The Approach" section
- Related Projects cards → other case study URLs
- Closing primary → booking flow tagged `source=case-study&project=[slug]`
- Closing secondary → `/work`

---

## SEO meta

- **Title (per case study):** [Client Name] Case Study | [Service Type] for [Industry] | ScaleForge
- **Description (per case study):** How ScaleForge [delivered specific outcome] for [client name], a [industry] business based in [region]. [Outcome metric].
- **Schema:** `CreativeWork` or `CaseStudy` schema (where supported); `BreadcrumbList`; `Review` schema if testimonial is structured.
- **Canonical URL:** `/work/[slug]`

---

## CMS schema notes (Sanity)

Each case study document needs the following fields:

```
title: string (client name + outcome)
slug: slug
client: { name: string, location: string, industryTag: ref }
heroImage: image (16:9 or 3:2)
heroTagline: string
metadata:
  - industry: ref
  - services: array<ref>
  - timeline: string
  - region: string
  - status: enum [live, in-progress, concept]
challenge: rich text (3-5 paragraphs)
approach: rich text (3-5 paragraphs, with inline service refs)
buildGallery: array<image with alt + caption>
outcomes: array<{ metric: string, label: string, comparison?: string }>
testimonial:
  quote: text
  authorName: string
  authorTitle: string
  authorPhoto: image
stack: array<{ name: string, logo: image }>
relatedProjects: array<ref> (manual override; falls back to auto-suggest)
publishedDate: date
seoTitle: string
seoDescription: string
```

---

## Notes

- **Outcomes section is the most-shared section** — buyers screenshot it. Treat the tile design with care so it scans cleanly out of context.
- **"In progress" and "Concept" statuses are critical for trust.** A spec/mockup labeled as concept shouldn't be confused for shipped work. The status badge should be visible on both the index card and the detail page hero.
- **Mason gallery in section 5** should NOT be a carousel — buyers want to scan the work, not click through one image at a time.
- **First case study to build** should be the strongest one with the most data — that becomes the template's "test case" for visual treatment.
- **Avoid making case studies feel like ads.** Lead with the client and the problem. ScaleForge is the studio that solved it, not the hero of the story.
