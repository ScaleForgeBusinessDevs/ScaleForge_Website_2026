# PRD 10 — Pricing Page

**URL:** `/pricing`
**Build target:** Production page using the locked design system.

---

## Page identity

The Pricing page owns **COMMITMENT** — the dollar amounts, the tier breakdowns, and what's included at each level. It exposes pricing publicly to build trust with international buyers (especially US/UK/AU markets where opaque "request a quote" pricing reads as a red flag).

The page must:
1. Display all four service tracks: AI Development, Web Design & Development (bundled), SEO, Content Creation.
2. Three tiers per track with clear inclusions.
3. A "custom / enterprise" pathway for buyers outside the tier matrix.
4. FAQs handling the most common pricing objections.

**Key gap to fix:** Current site has no AI Development tier in pricing. This PRD adds it as the first/flagship track.

---

## Target user & intent

- **Primary**: Buyer who has read services pages and now wants to know if ScaleForge is in their budget.
- **Secondary**: Buyer doing comparison shopping who wants pricing to evaluate against other agencies.
- **Search intent:** "[agency] pricing," "web design cost," "seo monthly cost," "ai automation pricing"

---

## What this page owns

| Owns | Does NOT own |
|---|---|
| Tier structure for all four service tracks | Service narrative (→ service detail pages) |
| Dollar amounts | Process detail (→ Solutions / service detail) |
| Inclusions per tier | Case study proof (→ Work) |
| Pricing-specific FAQs (engagement model, retainers, refunds) | |
| Custom / enterprise pathway | |

---

## Section flow

1. **Hero** — Position pricing as transparent.
2. **Section anchor nav** — Jump to AI / Design+Dev / SEO / Content.
3. **AI Development & Automation** — 3 tiers.
4. **Web Design & Development** — 3 tiers.
5. **SEO** — 3 tiers.
6. **Content Creation** — 3 tiers.
7. **Custom / Enterprise pathway** — For buyers beyond the tiers.
8. **Pricing FAQs**.
9. **CTA** — Book a call.

---

## Section-by-section content

### 1. Hero

**Eyebrow:** SCALE YOUR BUSINESS

**H1:** Choose Your Growth Path

**Subhead:** Flexible, transparent pricing for every stage of growth. No hidden fees, no "contact us for a quote" games. Pick a tier and let's build.

**Primary CTA:** Book a Free Strategy Call
**Secondary CTA:** Read FAQs → smooth-scroll to FAQ section

---

### 2. Section Anchor Nav

A sticky horizontal nav appears below the hero and stays visible on scroll:

`AI Development | Web Design & Dev | SEO | Content Creation`

Each anchor scrolls to that section. The active section highlights as the user scrolls.

---

### 3. AI Development & Automation

**Section H2:** AI Development & Automation

**Section subhead:** Automation that scrapes leads, makes calls, and publishes content while you sleep.

**Three tiers presented as cards:**

#### Tier 1 — Starter Automation
**Price:** $1,200 / project
**Best for:** Solo founders and small teams running 1–2 manual workflows.

**Includes:**
- 1 custom automation workflow (lead enrichment OR social posting OR CRM sync)
- Tool selection from n8n, Make.com, or Zapier
- Up to 5 system integrations
- Full documentation & 30-min training session
- 14-day post-launch support

**CTA:** Book a Call

---

#### Tier 2 — Growth Automation ★ MOST POPULAR
**Price:** $3,500 / project
**Best for:** Growing businesses with multiple workflows to automate.

**Includes:**
- Up to 3 custom automation workflows
- Mix of n8n, Make.com, Zapier as needed
- Up to 15 system integrations
- Optional Vapi AI cold-call agent (single use case)
- Full documentation & training
- 60-day post-launch support & optimization

**CTA:** Book a Call

---

#### Tier 3 — Automation Engine
**Price:** $7,500+ / project
**Best for:** Established businesses building automation as a core operating layer.

**Includes:**
- Unlimited workflow design
- Full Vapi AI cold-call deployment (multi-script, multi-list)
- AI content engine (social + blog + ad copy automation)
- Self-hosted n8n setup
- Unlimited integrations
- 90-day dedicated support
- Optional monthly maintenance retainer

**CTA:** Book a Call

---

### 4. Web Design & Development

**Section H2:** Web Design & Development

**Section subhead:** From clean marketing sites to complex e-commerce systems — built bespoke, owned outright.

#### Tier 1 — Starter
**Price:** $1,800 / project

**Best for:** Individuals and small businesses establishing their online presence.

**Includes:**
- Up to 5 pages
- Mobile-responsive design
- Contact form integration
- 2 rounds of revisions
- 30-day post-launch support

**CTA:** Book a Call

---

#### Tier 2 — Growth ★ MOST POPULAR
**Price:** $4,500 / project

**Best for:** Growing brands needing custom design and richer functionality.

**Includes:**
- Up to 15 pages
- Custom UI/UX design in Figma
- Sanity CMS integration
- Basic SEO setup (meta, sitemap, schema)
- 4 rounds of revisions
- 60-day post-launch support

**CTA:** Book a Call

---

#### Tier 3 — Enterprise
**Price:** $9,500+ / project

**Best for:** Established businesses with complex needs and high traffic.

**Includes:**
- Unlimited pages
- Custom development & API integrations
- E-commerce or portal functionality
- Performance & security hardening
- Unlimited revisions
- 90-day dedicated support
- Optional retainer for ongoing development

**CTA:** Book a Call

---

### 5. SEO

**Section H2:** Search Engine Optimization

**Section subhead:** Monthly retainers built to rank and compound. No long-term contracts required.

#### Tier 1 — Essential
**Price:** $650 / month

**Best for:** Businesses building organic presence from the ground up.

**Includes:**
- Keyword research (20 keywords)
- On-page optimization
- Google Search Console setup
- Monthly performance report
- Technical SEO audit (one-time)

**CTA:** Book a Call

---

#### Tier 2 — Authority ★ MOST POPULAR
**Price:** $1,400 / month

**Best for:** Brands serious about ranking and driving qualified traffic.

**Includes:**
- Keyword research (60 keywords)
- On-page + technical optimization
- Link building (10 high-quality links/mo)
- Competitor analysis
- Bi-weekly strategy calls
- Detailed monthly reporting

**CTA:** Book a Call

---

#### Tier 3 — Dominate
**Price:** $3,200 / month

**Best for:** Businesses that need to own their market's search results.

**Includes:**
- Unlimited keyword targeting
- Full technical SEO management
- Link building (25+ links/mo)
- Content strategy alignment
- Weekly strategy calls
- Dedicated SEO manager

**CTA:** Book a Call

---

### 6. Content Creation

**Section H2:** Content Creation

**Section subhead:** Authority-building content that scales your reach. Monthly retainers, no minimum commitment.

#### Tier 1 — Essentials
**Price:** $900 / month

**Best for:** Businesses building consistent online presence.

**Includes:**
- 4 blog articles / month
- 8 social media posts
- Basic graphic design
- Content calendar
- 1 revision per piece

**CTA:** Book a Call

---

#### Tier 2 — Professional ★ MOST POPULAR
**Price:** $2,200 / month

**Best for:** Brands building authority and driving organic traffic.

**Includes:**
- 8 blog articles / month
- 20 social media posts
- Custom branded graphics
- Email newsletter design
- SEO-optimized copywriting
- Engagement & performance analysis

**CTA:** Book a Call

---

#### Tier 3 — Full-Scale
**Price:** $4,800 / month

**Best for:** Businesses ready to dominate their niche with content.

**Includes:**
- 16 blog articles / month
- Daily social media posts
- Video script writing
- Whitepaper & lead magnet creation
- Full brand voice management
- Dedicated content strategist

**CTA:** Book a Call

---

### 7. Custom / Enterprise Pathway

**H2:** Need Something Custom?

**Body:**
Every business is different. If your needs don't fit cleanly into the tiers above — whether that's a hybrid engagement, multi-track retainer, or a build outside our standard scope — let's talk.

**Examples of custom engagements:**
- Bundled retainer combining SEO + Content + AI automation
- Multi-site or multi-region deployment
- White-label work for other agencies
- Long-term embedded engineering partnership

**Primary CTA:** Request a Custom Quote
**Secondary CTA:** Book a Discovery Call

---

### 8. Pricing FAQs

**Eyebrow:** CLARITY

**H2:** Pricing Frequently Asked Questions

**Accordion with 8 questions:**

1. **Are these prices final, or do you charge extra fees?**
The listed prices are what you pay. No setup fees, no surprise add-ons. The only exceptions are third-party costs we pass through at cost (hosting, CMS subscriptions, API usage) — and those are itemized in the engagement contract before signing.

2. **Do you offer a money-back guarantee or trial period?**
For project-based work (Web Design & Development, AI Development), we offer a 30-day satisfaction guarantee on the first milestone. If the initial design or build doesn't meet expectations, we refund the deposit. For monthly retainers (SEO, Content), there's no long-term contract — cancel anytime with 30 days' notice.

3. **What payment methods do you accept?**
Wire transfer, Stripe (card), Wise, Payoneer, and Upwork escrow. For larger engagements, we typically use Upwork or Contra escrow to give clients additional payment protection.

4. **Do you offer payment plans?**
Yes. For project-based work, we structure payments in milestones: typically 30% deposit, 30% mid-build, 40% on delivery. For larger engagements (Enterprise tier), we can split into 4 to 6 milestones.

5. **What's not included in the tiers?**
Third-party costs (domain, hosting, CMS subscriptions, ad spend, premium plugin licenses) are not included and are billed at cost. Content writing in the Web tiers does not include long-form blog content — that's covered by the Content Creation tiers.

6. **Can I switch tiers mid-engagement?**
Yes. For monthly retainers (SEO, Content), you can switch tiers at the start of any billing cycle. For project tiers, scope changes are handled through a change order at the standard tier upgrade rate.

7. **Do you work with international clients?**
Yes — we work primarily with clients in the US, UK, Canada, Australia, and the EU. All pricing is in USD. We invoice in USD and accept payment in your local currency via Wise or Stripe (we absorb minor conversion variance).

8. **How quickly can we start?**
For project-based work, we onboard new clients within 1 to 2 weeks of contract signing. For monthly retainers, we typically begin the kickoff process within 5 business days of payment. Cohort capacity does sell out — booking a call early reserves your slot.

---

### 9. CTA section (closing)

**H2:** Not Sure Which Tier Fits?

**Body:**
Book a free 30-minute strategy call. We'll review your situation, recommend the right tier (or build a custom path), and answer any pricing questions in real time.

**Primary CTA:** Book a Free Strategy Call
**Secondary CTA:** Chat with Us → opens chat widget

---

## CTAs & exit paths

- Every tier card has its own "Book a Call" CTA tagged with `tier=[name]&service=[track]`
- Custom pathway → booking with `flow=custom`
- All FAQs answered inline; no external links from FAQs except optional cross-links to relevant service pages

---

## SEO meta

- **Title:** Pricing | Transparent Tiers for Web, SEO, Content & AI | ScaleForge
- **Description:** Transparent pricing for ScaleForge's Web Design & Development, SEO, AI Automation, and Content Creation services. Tier-based, no hidden fees, no contracts.
- **Schema:** `Service` schema per track with `Offer` nested for each tier; `FAQPage` schema.

---

## Notes

- **The "★ MOST POPULAR" badge is a conversion lever** — keep it on the middle tier across all tracks (consistent visual rhythm).
- **The "30-day satisfaction guarantee" and Upwork escrow mention are critical trust signals for international buyers.** Pakistan-based agencies often struggle with payment trust — exposing this in FAQs lowers that friction.
- **Pricing should be stored in CMS** (Sanity) so tiers can be adjusted without redeploys as the business scales.
- **AI Development pricing tiers are NEW** — they don't exist on the current site. The dollar amounts above are reasonable starting points; finalize with founders before publishing.
- Consider adding a **toggle for monthly vs. annual** retainer pricing where the annual option offers a 10–15% discount. Standard SaaS-style commitment lever.
- Consider a **comparison table** below the tier cards that lets buyers see all 3 tiers side-by-side per track. Useful for granular feature comparison.
