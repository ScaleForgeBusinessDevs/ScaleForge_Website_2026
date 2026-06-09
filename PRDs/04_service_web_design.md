# PRD 04 — Web Design Service Detail

**URL:** `/services/web-design`
**Build target:** Production page using the locked design system.

---

## Page identity

The Web Design service detail page owns **the full pitch for ScaleForge's design capability** — what we design, how we design, what's included, the timeline, and the design-stage FAQs.

This page positions design as a conversion lever, not a beauty contest. Buyers should leave understanding that design isn't decoration — it's how trust is earned in the first 50 milliseconds.

---

## Target user & intent

- **Primary**: Founder or marketing lead who has decided they need a website redesign and is shopping for designers/agencies.
- **Secondary**: Buyer with an existing site they know underperforms, looking for someone to diagnose and fix the UX/visual issues.
- **Search intent:** "custom web design agency," "conversion-focused web design," "figma web design agency," "premium website design"

---

## What this page owns

| Owns | Does NOT own |
|---|---|
| The design service narrative | Pricing tiers (→ Pricing) |
| Five design offerings | Web Development specifics (→ Web Development detail page) |
| The 5-step design process | Past design work examples (→ Work) |
| Design-stage FAQs | Code-stack discussion (→ Web Development) |

---

## Section flow

1. **Hero** — Position design as conversion architecture.
2. **The 50ms stat** — Visceral data point about first impressions.
3. **Core design offerings** — Five capabilities.
4. **Standards included** — Bullet list of what every engagement includes.
5. **The 5-step process** — How a design engagement unfolds.
6. **FAQs** — Common design objections.
7. **CTA** — Free design briefing.

---

## Section-by-section content

### 1. Hero

**Eyebrow:** INTERACTIVE DESIGN

**H1:** Web Design That Converts Traffic into Clients

**Subhead:** ScaleForge designs custom, conversion-focused websites for ambitious businesses. Every layout, color choice, and interaction is engineered to build trust and drive direct action.

**Primary CTA:** Book a Free Design Briefing
**Secondary CTA:** See Our Work → links to `/work`

---

### 2. Did You Know

**Eyebrow:** DID YOU KNOW

**Pull quote:**

> "It takes only 50 milliseconds (0.05 seconds) for users to form an opinion about your website's aesthetic and decide whether they will stay or leave."

**Body:**

If your web presence feels outdated, slow, or difficult to navigate, you lose prospect trust immediately. A generic template is a costly liability. High-fidelity custom design is a powerful growth asset — and the cheapest way to lift conversions across every channel feeding into your site.

---

### 3. Core Design Offerings

**Eyebrow:** DESIGN SPECS

**H2:** Our Core Design Offerings

**Grid of 5 capability tiles:**

| Title | Body |
|---|---|
| **Custom UI Design** | Absolutely zero pre-made templates. Every layout, margin, and hover effect is drawn from scratch to match your specific brand personality and goals. |
| **UX & Conversion Architecture** | We define logical page hierarchies, smooth content layouts, and strategic CTA placements that eliminate scrolling fatigue and drive engagement. |
| **Mobile-First Responsive Design** | Over 60% of organic traffic is mobile. We design for the smallest screen widths first and scale upward, ensuring your site looks flawless on every device. |
| **Brand Identity & Style Guides** | Logo refinement, harmonized HSL color palettes, modern typography selections, and a comprehensive spacing guide to keep your brand coherent across every touchpoint. |
| **Landing Page Optimization** | High-converting standalone single-page systems specifically tuned for Google Ads, social media campaigns, and fast lead acquisition. |

---

### 4. Standards Included

**Eyebrow:** ★ STANDARDS INCLUDED

**H2:** Every Engagement Includes

**Bullet list:**
- Comprehensive competitor visual design audit
- Custom high-fidelity wireframes and editable Figma files
- Full typography hierarchy and brand color scales
- Mobile-first responsive design breakpoints
- WCAG 2.1 AA accessibility-compliant UI layouts
- Optimized conversion-first CTA button mapping

**Sidebar note (small text, italic):**
*100% custom wireframes in Figma. No templates. No stock layouts. No exceptions.*

---

### 5. The 5-Step Design Process

**Eyebrow:** THE TIMELINE

**H2:** Our 5-Step Web Design Process

**5 numbered steps (vertical roadmap):**

1. **Discovery & Research** — Analyzing your industry competitors, conversion targets, and target audience persona behavior.
2. **Wireframing & Architecture** — Drafting black-and-white structural wireframes to map user flows, layout spacing, and CTA locations.
3. **Visual & Brand Design** — Crafting high-fidelity Figmas with tailored assets, premium responsive aesthetics, and brand-aligned typography.
4. **Feedback & Revision Cycles** — Interactive visual reviews, iterating collaboratively until the UI/UX perfectly represents your business authority.
5. **Developer Handoff** — Exporting clean asset packages, documented component margins, and motion spec assets for implementation.

---

### 6. FAQs

**Eyebrow:** CLARITY

**H2:** Design Frequently Asked Questions

**Accordion with 5 questions:**

1. **What is the difference between web design and web development?**
Design is the visual and experiential layer — wireframes, layouts, color, type, and interaction patterns delivered in Figma. Development is turning those designs into a working website using code (Next.js, React, Tailwind). We do both, and they work best when delivered by the same team.

2. **How long does the web design stage take?**
A typical design engagement takes 2 to 4 weeks depending on scope. A small marketing site (5–7 pages) lands in around 2 weeks. A complex platform with custom illustrations, animations, and multiple templates can take 4 to 6 weeks.

3. **Do I need to have brand assets ready?**
No. If you have a logo, color palette, and rough brand guidelines, we'll work with them. If you don't, we'll build a brand identity from scratch as part of the engagement. Either way, you leave with a fully documented style guide.

4. **Will my custom design be mobile-friendly?**
Yes. We design mobile-first, which means the smallest screen size is the starting point. Every layout, every component, every animation is tested across iPhones, Android phones, and tablets before sign-off.

5. **Can you redesign my existing website?**
Yes — and it's one of our most common engagements. We start with a full audit of your current site (analytics, heatmaps, competitor analysis) and design a new version specifically tuned to lift the metrics you care about: time on page, bounce rate, conversion rate.

---

### 7. CTA section (closing)

**H2:** Ready for a Website That Works as Hard as You Do?

**Body:**
Book a free 30-minute design briefing. We'll review your current layout, identify user friction points, and sketch a custom visual path forward.

**Primary CTA:** Book a Free Design Briefing
**Secondary CTA:** See Our Work → links to `/work`

---

## CTAs & exit paths

- Hero primary → booking flow tagged `service=design`
- Hero secondary → `/work`
- Closing primary → booking flow
- Closing secondary → `/work`
- Inline cross-link suggestion in body: "developer handoff" → `/services/web-development`

---

## SEO meta

- **Title:** Web Design Services | Custom UI/UX from ScaleForge
- **Description:** ScaleForge designs custom, conversion-focused websites in Figma. Zero templates. Mobile-first, WCAG-compliant, brand-driven design that turns clicks into clients.
- **Schema:** `Service` schema; FAQ schema for the FAQ section.

---

## Notes

- Keep the visual style on this page **slightly softer / more "designer"** than the AI Development page — this is the page where buyers expect aesthetic care. The design system already accounts for this, but reinforce with imagery selection.
- The "100% custom wireframes in Figma" tagline is a high-trust signal — keep it visually prominent.
- Cross-link to the Web Development page in the FAQ answering "design vs. development" — these two services are commonly bundled.
