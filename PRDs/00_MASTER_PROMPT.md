# ScaleForge — Master Build Prompt

## Context

The ScaleForge homepage/landing experience is **already designed and locked in**. The visual system, motion language, type stack, color palette, scroll behavior, navigation chrome, and footer are all production-ready. The six-act cinematic narrative on the homepage is the brand's most expensive surface — every other page in the site should feel like it was built by the same studio in the same week.

This prompt pack covers **the remaining pages and sub-pages** that need to be built out on top of the existing design system. Styling decisions are settled. What follows defines **content, flow, hierarchy, and conversion architecture** for each page.

---

## What's already done

- `/` — Homepage (six-act narrative, hero, capabilities, why-choose, process, social proof, FAQ, CTA)
- Global design system (typography, color, motion, components)
- Navigation chrome (header + footer)
- Brand voice and verbal identity

## What this pack covers

| # | Page | URL | Purpose |
|---|------|-----|---------|
| 01 | Solutions | `/solutions` | The methodology / how we think |
| 02 | Services (index) | `/services` | What we sell, overview |
| 03 | AI Development | `/services/ai-development` | Service detail — flagship |
| 04 | Web Design | `/services/web-design` | Service detail |
| 05 | Web Development | `/services/web-development` | Service detail |
| 06 | SEO | `/services/seo` | Service detail |
| 07 | Content Creation | `/services/content-creation` | Service detail |
| 08 | Work | `/work` | Case study index |
| 09 | Project Detail Template | `/work/[slug]` | Individual case study layout |
| 10 | Pricing | `/pricing` | Plans across all service tracks |
| 11 | About | `/about` | Team, story, values |
| 12 | Blog Index | `/blog` | Article hub with filtering |
| 13 | Blog Post Template | `/blog/[slug]` | Individual article layout |
| 14 | Contact | `/contact` | Direct contact + booking |
| 15 | Legal | `/privacy`, `/terms` | Privacy policy + Terms of service |

---

## Global rules (apply to every page)

### Content ownership map (zero redundancy)

Each page owns a distinct piece of the story. Never repeat the same content across pages.

- **Home owns WHY** — the vision, the problem with the status quo, the cinematic story arc. The emotional pitch.
- **Solutions owns HOW** — the methodology, the development DNA, the principles that govern every engagement.
- **Services owns WHAT** — the concrete deliverables, what you actually buy, the scope of each track.
- **About owns WHO** — the team, the founders, the formation story, the values that bind the work.
- **Work owns PROOF** — the receipts, the case studies, the measurable outcomes.
- **Pricing owns COMMITMENT** — the dollar amounts, the tiers, what's included at each level.
- **Blog owns EXPERTISE** — the demonstrated depth, the SEO surface area, the trust-building artifacts.
- **Contact owns ACCESS** — the conversion endpoint, the path to start the conversation.

If a piece of content could live on more than one page, **it lives on one page and gets linked from the others**.

### Brand voice

- Confident without being arrogant. Authoritative without being academic.
- Short sentences punch. Long sentences carry weight when needed.
- We don't say "we're passionate about X." We show the work.
- Avoid agency cliché ("synergy," "leverage," "ecosystem," "best-in-class").
- Speak to the buyer, not the buyer's boss. The buyer is the founder or the marketing lead.
- Numbers are louder than adjectives. Concrete is louder than abstract.

### Repositioning note — AI as flagship

ScaleForge is in active transition from web/SEO-led to AI-development-led. Across all pages where a service hierarchy is presented, **AI Development & Automation is positioned first**, followed by Web Design, Web Development, SEO, and Content Creation. The other services remain real and sellable, but AI leads the narrative going forward.

### Trust architecture for international clients

ScaleForge is Pakistan-based serving primarily US/UK/AU clients. Every page should reinforce trust signals deliberately:
- Visible founders with full names, photos, titles
- Specific tools and stacks named (proves technical depth)
- Process transparency at every stage
- Pricing exposed publicly (not gated)
- Case studies with measurable outcomes
- Multiple low-friction conversion entry points (chat, book a call, free audit, free demo)

The trust playbook layered into the site: **free demo → 30-day trial offer → video call → escrow/Upwork/Contra availability → published reputation**.

### Conversion architecture

Every page ends with a CTA section. The default CTA pair is:

- **Primary**: "Book a Free Strategy Call" — links to Calendly/Cal.com booking
- **Secondary**: "Chat with Us" — opens chat widget or links to WhatsApp/Intercom

Service detail pages use a service-specific CTA: "Book a Free [Service] Audit" / "Request a Free [Service] Demo." Pricing pages CTA into the booking flow directly.

### Repeated components (build once, use everywhere)

- **Header** — already designed
- **Footer** — already designed
- **CTA section** — closing CTA block on every page; reusable component with configurable headline/subheadline/buttons
- **FAQ accordion** — used on home + service detail pages; reusable
- **Testimonial card** — used on home, work, service details
- **Metric tile** — used across home, solutions, service details
- **Process step (numbered)** — used on solutions, service details
- **Service card** — used on home, services index, solutions

### Global SEO baseline

Every page must have:
- Unique `<title>` (50–60 chars)
- Unique `<meta description>` (140–160 chars)
- One `<h1>` only
- Semantic heading hierarchy (h1 → h2 → h3, no skips)
- Canonical URL set
- Open Graph and Twitter card meta
- Article/Service/Organization JSON-LD schema where applicable
- Internal links to at least 2 other pages on the site
- Alt text on every image
- Breadcrumb schema on nested pages (`/services/*`, `/work/[slug]`, `/blog/[slug]`)

### Navigation hierarchy (primary nav)

```
Home  |  Solutions  |  Services ▾  |  Work  |  Pricing  |  About  |  Blog  |  [Book a Call]
                       ├─ AI Development
                       ├─ Web Design
                       ├─ Web Development
                       ├─ SEO
                       └─ Content Creation
```

Mobile nav: same hierarchy, accordion-style.

---

## How to use this pack

Each numbered file (`01_solutions.md` through `15_legal_pages.md`) is a self-contained PRD that can be fed to Claude Code (or any agent) as a build instruction. Each file includes:

1. The page's purpose and what content it owns
2. The target user and search intent
3. Section-by-section flow with order and rationale
4. Verbatim copy for every block (headlines, body, CTAs)
5. CTAs and internal linking targets
6. SEO meta (title + description + schema notes)
7. Edge cases and dynamic content notes

**Recommended build order** for fastest momentum:

1. Solutions → 2. Services index → 3-7. Service detail pages → 8. Work → 9. Project detail → 10. Pricing → 11. About → 12. Blog index → 13. Blog post template → 14. Contact → 15. Legal

This order front-loads conversion-critical pages (services, pricing) and leaves blog templates and legal for last.

---

## What is NOT in this pack

- **Styling, motion specs, exact component dimensions** — the design system handles this. PRDs reference component names but don't redesign them.
- **Asset production** (photography, illustrations, custom graphics) — flagged where needed, but production happens separately.
- **CMS schema** — Sanity is the planned CMS. Schema modeling is implied by the content structure but should be defined in a separate technical doc.
- **Animation choreography** — handled by the existing design system and the React Three Fiber / GSAP layer already in place.

---

## Notes on existing site debt to fix in the rebuild

Pulled from auditing the current `scaleforgewebdev.vercel.app`:

1. **Heavy redundancy between Home and Solutions** — both currently pitch "why ScaleForge." Fix per the ownership map above.
2. **AI Development service missing from pricing** — currently no AI tier exists in `/pricing`. Pricing PRD includes a new AI track.
3. **Industries grid lives only on Solutions** — keep there, link from Services where relevant.
4. **No contact page** — current site relies entirely on "Chat with Us" and "Book a Call." Adding a dedicated `/contact` improves trust and SEO.
5. **No individual project detail pages** — `/projects` lists titles only, no clickable detail. Build the template.
6. **Blog has 34+ posts but only one case study** — separate blog from case studies in IA. Case studies live under `/work`, articles live under `/blog`.
7. **Footer has two "Privacy Policy / Terms of Services" stubs linking to #** — build real legal pages.

---

## End of master prompt

Proceed to the individual page PRDs.
