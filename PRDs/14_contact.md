# PRD 14 — Contact Page

**URL:** `/contact`
**Build target:** Production page using the locked design system.
**Note:** This is a NEW page — current site has no dedicated contact page.

---

## Page identity

The Contact page owns **ACCESS** — the conversion endpoint. Every CTA across the site eventually routes to either booking, chat, or this page. Contact is the explicit "I want to start a conversation" surface.

For an international agency, a dedicated contact page is a trust signal. Buyers from the US/UK/AU expect to see a real address, real channels, real human contact info — not just a calendar link. The page must offer multiple contact modes so different buyer preferences are accommodated.

---

## Target user & intent

- **Primary**: Buyer ready to start a conversation but who prefers email or form over Calendly.
- **Secondary**: Partners, press, prospective hires looking for the right person to email.
- **Search intent:** "contact [ScaleForge]," "[ScaleForge] email," "[ScaleForge] address"

---

## What this page owns

| Owns | Does NOT own |
|---|---|
| Direct contact channels (email, phone, form) | Service pitches (→ Services) |
| Office / company address | Pricing (→ Pricing) |
| Calendar booking embed | Team bios (→ About) |
| Response time expectations | |

---

## Section flow

1. **Hero** — Multiple ways to reach us.
2. **Contact form** — Primary lead capture.
3. **Direct channels** — Email, phone, social.
4. **Booking embed** — Inline Calendly / Cal.com widget.
5. **Office info** — Address, hours, time zone.
6. **FAQs** — "When will you respond?" type questions.
7. **CTA** — One last conversion prompt.

---

## Section-by-section content

### 1. Hero

**Eyebrow:** GET IN TOUCH

**H1:** Let's Talk About What You're Building

**Subhead:** Whether you have a fully-scoped project or a half-formed idea, we'd like to hear about it. Pick whichever channel works best for you below.

**No CTA in hero** — the page IS the CTA.

---

### 2. Contact Form

A two-column layout on desktop: form on the left, supporting info on the right. Stacked on mobile.

**Form fields:**

| Field | Type | Required | Notes |
|---|---|---|---|
| Full name | text | yes | |
| Email | email | yes | Validated |
| Company / website | text | no | Optional |
| What are you interested in? | multi-select chips | yes | Options: AI Automation, Web Design, Web Development, SEO, Content, Not sure yet |
| Budget range | single select | no | Options: < $2k, $2k–$5k, $5k–$10k, $10k+, Monthly retainer, Not sure yet |
| Timeline | single select | no | Options: ASAP, Within a month, 1–3 months, Just exploring |
| Tell us about your project | textarea | yes | Min 50 chars suggested |

**Submit button:** "Send Message"

**Below button (small italic):**
*We typically respond within 4 business hours during our working window (Mon–Fri, flexible coverage across US/EU/AU time zones).*

**Right column (supporting info):**

**H3:** What happens next?

A small 3-step list:
1. We read your message (within 4 business hours).
2. We respond with sharper questions and propose a 30-minute call.
3. On the call, we figure out whether (and how) we can help.

**Below the steps, small note:**
*No sales pitches. No follow-up spam. If we're not the right fit, we'll tell you and point you somewhere better.*

---

### 3. Direct Channels

A horizontal strip of 4 direct contact tiles below the form.

| Channel | Detail | Link |
|---|---|---|
| **Email** | hello@scaleforge.com | mailto:hello@scaleforge.com |
| **WhatsApp** | +92 [number] | wa.me link |
| **LinkedIn** | @scaleforge | linkedin.com link |
| **Chat** | Live during working hours | opens chat widget |

---

### 4. Inline Booking Widget

**Eyebrow:** OR JUMP STRAIGHT TO A CALL

**H2:** Book a Free 30-Minute Strategy Call

**Body (one line):**
Pick a time that works. We'll send a calendar invite with a video link automatically.

**Embed:** Cal.com or Calendly inline embed taking the full width of the content column. Mobile-responsive.

**Below the embed (small italic):**
*No prep needed. Bring your situation, your questions, and your skepticism. We'll do the rest.*

---

### 5. Office Info

**Eyebrow:** WHERE WE ARE

**H2:** Karachi, Pakistan · Remote-First

**Body:**

ScaleForge operates remote-first from Karachi, Pakistan, with team members working across multiple time zones. While we don't host walk-ins, we're happy to meet clients in person when projects require it.

**Detail strip (3 tiles):**

| Label | Value |
|---|---|
| **Office** | Karachi, Pakistan |
| **Time zone** | PKT (UTC +5) |
| **Working hours** | Mon–Fri, flexible coverage across US / EU / AU windows |

**Map (optional):** Static Google Maps embed centered on Karachi if a public address is desired. Otherwise omit — most international clients don't need a physical address visualization.

---

### 6. FAQs

**Eyebrow:** CLARITY

**H2:** Contact FAQs

**Accordion with 5 questions:**

1. **How quickly do you respond?**
We respond to every inbound message within 4 business hours during our working window. Messages received outside business hours are answered the following business morning.

2. **Do I need to have a project fully scoped before reaching out?**
No. Some of our best engagements start with a vague idea and a few real constraints. The first call exists to scope and clarify.

3. **What's the best channel for urgent matters?**
WhatsApp is fastest for time-sensitive matters. Email is best for substantive briefs that need attachments or back-and-forth. The form is best if you want a structured starting point.

4. **Do you take on small projects?**
Yes. Our Starter tiers are specifically designed for small businesses and solo founders. If a project is below the Starter scope (< $1,000), we'll usually refer you to a freelancer we trust rather than overcharge.

5. **What if we're not the right fit?**
We'll tell you. We have a network of trusted designers, developers, and agencies we refer to when our skill set or capacity isn't the right match.

---

### 7. CTA section (closing)

**H2:** Still Not Sure?

**Body:**
If you're not ready to fill out a form or book a call but want to keep ScaleForge on your radar, our weekly newsletter delivers one actionable insight per week — no spam.

**Newsletter signup (reused component):**
- Email input
- Button: "Subscribe for Free"

---

## CTAs & exit paths

- Contact form submit → backend email + CRM entry
- Direct channel tiles → respective external destinations
- Booking embed → calendar event creation
- Closing newsletter form → email list

---

## SEO meta

- **Title:** Contact ScaleForge | Book a Call or Send a Message
- **Description:** Get in touch with ScaleForge. Email, WhatsApp, LinkedIn, or book a free 30-minute strategy call. Responses within 4 business hours.
- **Schema:** `ContactPage` schema; `Organization` schema with `contactPoint` array (email, phone, type).

---

## Notes

- **Multiple contact modes matter more for international trust than for conversion.** Most buyers will use only one channel — but seeing all four channels present reassures them ScaleForge is a real company.
- **"Response within 4 business hours" sets a clear expectation.** Don't promise faster than the team can deliver. If response times slip, lower the promise rather than break it.
- **The form's "What are you interested in?" multi-select is a router signal** — backend routing should send AI inquiries to one queue and Web inquiries to another if/when the team scales.
- **No live chat widget required if not staffed.** Replace the "Chat" tile with a simpler "Slack" or "Telegram" channel if those are more reliably staffed.
- **The "What happens next?" right column is critical** — it lowers form anxiety by telling people what to expect after they hit submit.
- **WhatsApp number visibility** is a strong signal for Middle East, South Asia, and Latin American markets where WhatsApp is the default business channel. Keep it.
