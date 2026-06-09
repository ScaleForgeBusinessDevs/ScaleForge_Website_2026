# PRD 12 — Blog Index Page

**URL:** `/blog`
**Build target:** Production page using the locked design system.

---

## Page identity

The Blog index owns **EXPERTISE at scale** — the demonstrated depth, the SEO surface area, and the trust artifacts. ScaleForge has 34+ published articles plus case studies; this page is how that content is discovered, browsed, and indexed.

This page does two simultaneous jobs:
1. For human readers: a useful, browsable knowledge hub that demonstrates ScaleForge knows what it's talking about.
2. For Google: a high-density topical authority page that internally distributes link equity to every article.

---

## Target user & intent

- **Primary**: Top-of-funnel visitor learning about SEO, AI automation, or web development — not ready to buy, but worth nurturing.
- **Secondary**: Returning visitor looking for a specific article they read before.
- **Search intent:** "[ScaleForge] blog," "[topic] guide" (any of the 34+ topics).

---

## What this page owns

| Owns | Does NOT own |
|---|---|
| Article discovery and browsing | Individual article content (→ Blog post template) |
| Topic filtering | Service pitches (→ Services) |
| Featured article promotion | Case study browsing (→ Work) |
| Newsletter signup | Methodology (→ Solutions) |

---

## Section flow

1. **Hero** — Position the blog as practical insights.
2. **Filter bar** — All Articles · Blogs · Case Studies (with topic sub-filters).
3. **Featured article** — Top of the page, large card.
4. **Article grid** — Responsive cards, paginated or "load more".
5. **Newsletter signup** — Mid-page or sidebar.
6. **CTA** — "Want us to apply this to your business?"

---

## Section-by-section content

### 1. Hero

**Eyebrow:** KNOWLEDGE HUB

**H1:** The ScaleForge Blog: Actionable Insights

**Subhead:** No fluff. No filler. Practical web design, custom engineering, SEO, and AI automation playbooks from a team that actually builds and ranks websites for a living.

**Body (single supporting paragraph):**

Vague growth hacks and outdated ranking recommendations cost businesses real leads. We document direct lessons from coding fast Next.js interfaces, auditing technical sitemap errors, optimizing local search visibility, and building AI systems that drive real business outcomes.

---

### 2. Filter Bar

A horizontal filter bar with two filter layers:

**Type filter (primary):**
- All Articles
- Blogs
- Case Studies

**Topic filter (secondary, optional):**
- SEO
- Web Development
- Web Design
- AI & Automation
- Content & Strategy
- Industry Insights

Filters use AND logic. Active filters show as removable chips. Filter state persists in URL (`/blog?type=blogs&topic=seo`).

---

### 3. Featured Article

A large hero card above the grid. Pulled dynamically from the CMS (marked as "featured" in Sanity) or the most recent high-performing article.

**Card structure:**
- Featured image (16:9, full card width)
- Type tag (Blog / Case Study)
- Date · Read time
- H2: Article title (linked)
- Excerpt (2–3 sentences)
- "Read Full Article →" link

---

### 4. Article Grid

Responsive grid: 3 columns on desktop, 2 on tablet, 1 on mobile.

**Each article card includes:**
- Thumbnail image
- Type tag
- Date · Read time (e.g., "May 2026 · 8 Min Read")
- H3: Article title (linked)
- Excerpt (1–2 sentences)
- "Read Full Article →" link

**Initial population:** All 34+ existing articles + new case study entries. List should be pulled from Sanity, sorted by date (newest first) with featured articles boosted.

**Pagination:** "Load More" button at the bottom of the grid (loads next 12). Avoid infinite scroll — it breaks the SEO-friendly URL structure.

---

### 5. Newsletter Signup

**Placement:** Mid-grid (after 6–9 cards) as an inline card the same width as a single article card row.

**Card content:**

**H3:** Get Weekly Insights Delivered to Your Inbox

**Body:** One actionable tip per week covering Next.js, AI automation, local SEO, or conversion copy. No spam. No filler. Unsubscribe with one click.

**Form:**
- Email input
- Button: "Subscribe for Free"

**Privacy note (small italic):**
*We will never sell your email. Read our [Privacy Policy](/privacy).*

---

### 6. CTA section (closing)

**H2:** Want Us to Apply This to Your Business?

**Body:**
Reading about speed benchmarks and schema guidelines is useful. Hiring our engineering team to execute on a custom SEO roadmap is far more profitable.

**Primary CTA:** Book a Free Strategy Call
**Secondary CTA:** Browse Our Services → links to `/services`

---

## CTAs & exit paths

- Every article card → its respective post URL (`/blog/[slug]`)
- Newsletter form → email capture endpoint
- Closing primary → booking flow
- Closing secondary → `/services`

---

## SEO meta

- **Title:** Blog & Insights | ScaleForge
- **Description:** Practical guides on Next.js, SEO, AI automation, and web development from ScaleForge — the studio building high-performance sites and AI systems for ambitious brands.
- **Schema:** `Blog` schema with `BlogPosting` items for each indexed post; `BreadcrumbList`.
- **Pagination:** Use `rel=prev` / `rel=next` meta tags or canonical to first page if using progressive loading.

---

## Notes

- **34+ articles already exist** — all the SEO-focused ones from the current site. The build only needs to render them through the new template; content migration is a separate task tracked in the existing memory.
- **Most current articles are SEO-focused.** As ScaleForge transitions to AI flagship positioning, new articles should weigh more heavily on AI / automation topics to balance the topical mix.
- **Case Studies in the same feed as Blog posts** is intentional — both are knowledge artifacts that build authority. The "Type" filter lets readers separate them when needed.
- **The Newsletter card is critical for nurture conversion.** Most blog visitors won't convert immediately; capturing email lets ScaleForge nurture them over weeks.
- **Article cards should NOT show full author name** if author bylines aren't yet standardized. If they are, add small "By Shahood Saleem" line below the date.
- **Consider a "Most Read" section** above the main grid showing the 3 highest-traffic articles — adds discoverability for new visitors.
