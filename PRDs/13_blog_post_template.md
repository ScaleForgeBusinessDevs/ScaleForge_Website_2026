# PRD 13 — Blog Post Template

**URL:** `/blog/[slug]`
**Build target:** Production template using the locked design system.

---

## Page identity

This is the **template for an individual blog article**. Every blog post on the index renders through this layout. The template owns the reading experience and the conversion opportunities embedded within a long-form article.

The blog post template must:
1. Be optimized for long-form readability (line length, type, spacing).
2. Surface SEO-critical metadata (date, author, read time, schema).
3. Include conversion CTAs without disrupting the read.
4. Drive readers to related content and to bookable services.

---

## Target user & intent

- **Primary**: Reader who landed via Google search for a specific topic.
- **Secondary**: Reader who found the article through the blog index or newsletter.
- **Search intent:** Specific topic (e.g., "what does SEO stand for," "how SEO works in website development").

---

## What this template owns

| Owns | Does NOT own |
|---|---|
| Long-form article reading experience | Article discovery (→ Blog index) |
| In-article CTAs and lead capture | Service pitches in depth (→ Services) |
| Related-article surfacing | Methodology (→ Solutions) |
| Author byline and credibility signals | |

---

## Section flow

1. **Article hero** — Title, meta, hero image.
2. **Article body** — Long-form rich text with embedded media.
3. **Sidebar (desktop)** — Table of contents + sticky CTA.
4. **Mid-article CTA** — Inline conversion opportunity.
5. **Author byline** — At article end.
6. **Related articles** — 3 cards.
7. **Newsletter signup** — Footer-adjacent.
8. **Final CTA** — "Apply this to your business."

---

## Section-by-section content

### 1. Article Hero

**Breadcrumb (above title):** Home › Blog › [Topic Tag]

**Eyebrow:** [Topic Tag] · [Type: Blog / Case Study]

**H1:** [Article title — full text]

**Article meta strip (below title):**
- Author name + small avatar
- Published date
- Read time estimate ("8 min read")
- Last updated date (only if differs from published date)

**Hero image:** Featured image (16:9). Alt text required. Optional caption below.

---

### 2. Article Body

The main reading column. Rich text rendered from Sanity (Portable Text or equivalent).

**Supported block types:**
- H2, H3 (no H1 — that's the title)
- Paragraph text
- Bullet and numbered lists
- Block quotes (pull quotes styled as callouts)
- Inline links
- Inline bold and italic
- Inline code and fenced code blocks
- Embedded images (with alt + caption)
- Embedded video (YouTube / Vimeo / direct)
- Tables
- Comparison tables
- Callout boxes (info / warning / tip)
- Author note callouts ("From the studio:")

**Typography rules (passed to the design system):**
- Body text: 18–20px on desktop, 17px on mobile
- Line length capped at ~70 characters
- Generous line height (1.6–1.7)
- Headings retain the global type scale

**Inline reading aids:**
- Anchor links on every H2 and H3 (hash links for sharing)
- Table of contents auto-generated from H2s (rendered in sidebar on desktop, collapsible at top on mobile)

---

### 3. Sidebar (desktop only)

A sticky sidebar on the right side of the article, visible from H1 down. Hidden on mobile and tablet.

**Sidebar content:**

**Block 1 — Table of Contents (sticky)**
Auto-generated list of H2 anchors. Highlights the section currently in viewport.

**Block 2 — Sticky CTA card**
Small card that stays in view:
- Title: "Get this done for you."
- One-line body: "Book a free 30-minute strategy call."
- Button: "Book a Call"

**Block 3 — Share buttons**
- Copy link
- X / Twitter share
- LinkedIn share
- Email share

---

### 4. Mid-Article CTA

Approximately one-third of the way through the article (after the first 2–3 H2 sections), an inline CTA block embedded in the reading flow.

**Block content:**

> **Want this implemented properly?**
> ScaleForge builds [topic-relevant service, e.g., "fast Next.js websites" / "AI automation pipelines" / "compounding SEO retainers"] for ambitious businesses. Book a free strategy call →

The "topic-relevant service" line is dynamic based on the article's primary topic tag. If SEO topic, link to `/services/seo`. If AI topic, link to `/services/ai-development`. Etc.

---

### 5. Author Byline

At the end of the article body, before related content.

**Block content:**

- Author avatar (large, ~80px)
- Author name (linked to a future author page or LinkedIn)
- Author title (e.g., "Founder & CEO, ScaleForge")
- Short bio (2 sentences)
- Social icons (LinkedIn, X, email)

---

### 6. Related Articles

**Eyebrow:** RELATED READING

**H2:** Continue Reading

Up to 3 article cards (same format as on `/blog` index). Selected by:
1. Same topic tag first
2. Same author second
3. Recent publishes as fallback

---

### 7. Newsletter Signup

**Same component as on `/blog` index — reused here.**

**H3:** Get Weekly Insights Delivered to Your Inbox

**Body:** One actionable tip per week. No spam. No filler.

**Form:** Email input + Subscribe button.

---

### 8. Final CTA section (closing)

**H2:** Want Us to Apply This to Your Business?

**Body:**
You've read the playbook. Hiring us to execute it for you is the fastest way to see results.

**Primary CTA:** Book a Free Strategy Call
**Secondary CTA:** See Our Services → links to `/services`

---

## CTAs & exit paths

- Sticky sidebar CTA → booking with `source=blog&slug=[slug]`
- Mid-article CTA → relevant service detail page (dynamic by topic tag)
- Related Articles → other article URLs
- Closing primary → booking flow
- Closing secondary → `/services`

---

## SEO meta (per article)

- **Title:** [Article title] | ScaleForge Blog
- **Description:** [Article meta description — 140–160 chars, written per article in Sanity]
- **Schema:** `BlogPosting` schema with `headline`, `author`, `datePublished`, `dateModified`, `image`, `mainEntityOfPage`, `publisher` (Organization).
- **OG / Twitter cards:** Use the featured image as the OG image. Twitter card type: `summary_large_image`.
- **Canonical URL:** `/blog/[slug]`
- **Breadcrumb schema:** Home → Blog → Article.

---

## CMS schema notes (Sanity)

Each blog post document needs:

```
title: string
slug: slug
type: enum [blog, case-study]
topicTags: array<ref>
featuredImage: image (with alt)
featuredImageCaption: string?
excerpt: string (140–160 chars, used for meta + card excerpt)
readTime: number (minutes; auto-calculate from body)
author: ref to Person
publishedDate: date
lastUpdatedDate: date?
body: portable text
featured: boolean (used by blog index hero)
relatedPostsManual: array<ref>? (manual override; falls back to auto)
seoTitle: string?
seoDescription: string?
```

---

## Notes

- **Reading experience is the differentiator.** Most agency blogs are unreadable walls of bolded text and CTAs. ScaleForge's articles should feel like editorial, not lead bait. The mid-article CTA is one block, not three.
- **The sticky sidebar Table of Contents is high-value** for long pieces (10+ min reads). Always render it on desktop.
- **Author bylines build E-E-A-T.** Make sure each article has a named human author, not "ScaleForge Team."
- **Update timestamps matter.** Show `lastUpdatedDate` prominently if the article has been revised. Google rewards content freshness.
- **The newsletter form should NOT pop up as a modal.** Inline only. Modals on long-form articles destroy reading flow.
- **Comment sections are intentionally omitted.** They add moderation overhead and rarely drive value. Replace with social sharing.
