# PRD 15 — Legal Pages

**URLs:** `/privacy` and `/terms`
**Build target:** Production pages using the locked design system.
**Note:** Current site has footer links pointing to `#` — these are placeholder stubs that need real pages.

---

## Page identity

Legal pages own **TRUST INFRASTRUCTURE**. They're not conversion pages and they don't need to be flashy, but they have to exist, be discoverable, and be jurisdictionally appropriate for a Pakistan-based agency serving international clients.

These pages serve three audiences:
1. **Buyers** doing trust diligence before signing a contract
2. **Search engines** crawling for trust signals (E-E-A-T)
3. **Legal compliance** (GDPR for EU clients, CCPA for California, basic Pakistani contract law)

---

## Target user & intent

- **Primary**: Buyer reviewing terms before signing a contract or sending payment.
- **Secondary**: Newsletter subscriber checking privacy practices.
- **Search intent:** "[ScaleForge] privacy policy," "[ScaleForge] terms of service"

---

## What these pages own

| Owns | Does NOT own |
|---|---|
| Legal language, contractual terms | Service narrative |
| Privacy practices, data handling, cookies | Pricing details |
| Refund and dispute resolution policy | Contact details (cross-link to /contact) |
| Jurisdiction and governing law | |

---

## SHARED ELEMENTS (both pages)

### Page hero (used on both)

**Eyebrow:** LEGAL

**H1:** [Privacy Policy / Terms of Service]

**Subhead:** Last updated: [Date]

**Body (one line):** If you have any questions about this document, contact us at hello@scaleforge.com or via the [contact page](/contact).

### Page styling notes

- Single-column layout, narrower content width than marketing pages (max ~720px) for readability
- Clear H2 section headers, H3 sub-sections
- Long-form serif or sans-serif body type — match the global type system
- A right-sidebar Table of Contents on desktop (sticky), similar to blog post template

### Page footer (both)

A small block at the end of each legal page:

> *Questions about this document? [Email us](mailto:hello@scaleforge.com) or [book a call](/contact).*

---

## PAGE A — Privacy Policy

**URL:** `/privacy`

### Section structure

1. **Introduction** — Who we are, what this policy covers.
2. **Information we collect** — Personal data, usage data, cookies.
3. **How we use information** — Purposes of data processing.
4. **Sharing & third parties** — Who we share data with and why.
5. **Cookies & tracking** — Cookie policy.
6. **Data retention** — How long we keep data.
7. **Your rights** — GDPR/CCPA rights summary.
8. **Data security** — How we protect data.
9. **International data transfers** — Pakistan ↔ EU/US.
10. **Children's privacy** — Not directed at under-13s.
11. **Changes to this policy** — Notification of updates.
12. **Contact** — How to reach the privacy lead.

### Section-by-section content

#### 1. Introduction

ScaleForge ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, share, and protect your personal information when you visit scaleforge.com (the "Site") or engage our services.

This policy applies to all visitors, leads, and clients. By using the Site, you consent to the practices described here.

#### 2. Information We Collect

**Information you provide directly:**
- Name, email, company, and details you submit via contact forms
- Communications you send us (email, chat, call recordings if applicable)
- Project briefs, files, and access credentials you share for service delivery
- Payment information (processed by third-party providers — see Section 4)

**Information we collect automatically:**
- IP address, browser type, device type
- Pages visited, time on page, referrer
- Cookies and similar tracking technologies (see Section 5)

#### 3. How We Use Information

We process your information for the following purposes:
- Responding to inquiries and providing requested services
- Delivering, maintaining, and improving our services
- Sending newsletter communications (only if you've opted in)
- Analyzing site usage to improve experience
- Complying with legal obligations and enforcing our terms

#### 4. Sharing & Third Parties

We do not sell your personal information. We share it only with:
- **Service providers** assisting our operations (e.g., Stripe for payments, Sanity for content storage, Vercel for hosting, email tools)
- **Legal authorities** when required by law
- **Successor entities** in the event of a merger, acquisition, or asset sale

A summary list of subprocessors is available on request via hello@scaleforge.com.

#### 5. Cookies & Tracking

We use cookies and similar technologies to:
- Remember your preferences
- Analyze how the Site is used (e.g., Google Analytics or Plausible)
- Power chat and booking widgets where applicable

You can disable cookies via your browser settings, though some Site features may not function without them.

#### 6. Data Retention

We retain personal data for as long as needed to provide services, comply with legal obligations, resolve disputes, and enforce agreements. Typically:
- Active client data: retained throughout engagement + 7 years for tax records
- Lead data (no engagement): retained for 24 months unless deletion is requested
- Newsletter subscribers: retained until unsubscribed

#### 7. Your Rights

Depending on your jurisdiction (GDPR for EU residents, CCPA for California residents, similar protections elsewhere), you have the right to:
- Access the personal data we hold about you
- Correct inaccurate data
- Request deletion of your data ("right to be forgotten")
- Object to or restrict processing
- Data portability (receive your data in a structured format)
- Withdraw consent at any time

To exercise these rights, email hello@scaleforge.com. We respond within 30 days.

#### 8. Data Security

We use industry-standard security measures including HTTPS encryption, access controls, secure storage with reputable providers (Vercel, Sanity, Google), and minimum-necessary data collection. No system is 100% secure; in the unlikely event of a breach affecting your data, we'll notify you per applicable law.

#### 9. International Data Transfers

ScaleForge operates from Pakistan. By using our services, you understand and agree that your data may be transferred to, stored in, and processed in countries outside your country of residence, including Pakistan, the United States, and the European Union. We rely on standard contractual safeguards for international transfers.

#### 10. Children's Privacy

Our services are not directed at individuals under 13 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, contact hello@scaleforge.com so we can delete it.

#### 11. Changes to This Policy

We may update this policy from time to time. Material changes will be posted on this page with an updated "Last Updated" date. For significant changes, we'll attempt to notify active clients and newsletter subscribers by email.

#### 12. Contact

For questions about this Privacy Policy or to exercise your privacy rights, contact:

**Email:** hello@scaleforge.com
**Postal:** ScaleForge, Karachi, Pakistan
**Privacy lead:** Ruhan Bhaleshah (CTO)

---

## PAGE B — Terms of Service

**URL:** `/terms`

### Section structure

1. **Agreement to terms**
2. **Services we provide**
3. **Engagements and contracts**
4. **Payment terms**
5. **Refund and cancellation policy**
6. **Intellectual property**
7. **Confidentiality**
8. **Warranties and disclaimers**
9. **Limitation of liability**
10. **Indemnification**
11. **Dispute resolution and governing law**
12. **Termination**
13. **Changes to these terms**
14. **Contact**

### Section-by-section content

#### 1. Agreement to Terms

These Terms of Service ("Terms") govern your use of the ScaleForge website (scaleforge.com) and our services. By accessing the Site or engaging ScaleForge for services, you agree to be bound by these Terms. If you do not agree, do not use the Site or our services.

#### 2. Services We Provide

ScaleForge offers digital agency services including but not limited to:
- AI Development & Automation
- Web Design
- Web Development (Next.js, React)
- Search Engine Optimization (SEO)
- Content Creation & Copywriting

Specific service scope, deliverables, and timelines for each engagement are defined in a separate engagement contract or Statement of Work ("SOW") signed by both parties.

#### 3. Engagements and Contracts

All client engagements require a signed contract or SOW prior to work commencing. The contract specifies:
- Scope of work
- Deliverables
- Timeline and milestones
- Payment schedule
- Revisions policy
- Termination conditions

These Terms apply in addition to and alongside any engagement contract.

#### 4. Payment Terms

- **Project-based engagements:** Payment is structured in milestones, typically 30% deposit, 30% mid-build, 40% on delivery, unless otherwise agreed in the contract.
- **Monthly retainers:** Billed at the start of each calendar month.
- **Accepted methods:** Wire transfer, Stripe (card), Wise, Payoneer, Upwork or Contra escrow.
- **Currency:** All prices are in USD unless otherwise specified.
- **Late payment:** Invoices overdue by more than 14 days may result in pause of services until cleared.

#### 5. Refund and Cancellation Policy

- **Project-based work:** 30-day satisfaction guarantee on the first milestone. If the initial design or build does not meet expectations and ScaleForge cannot resolve the issue within reasonable revisions, the deposit is refunded.
- **Monthly retainers:** No long-term contracts. Cancellation requires 30 days' written notice. Already-billed months are not refunded; future months are stopped.
- **Mid-project cancellation:** If a project is cancelled mid-build by the client, ScaleForge bills for work completed to date. Already-paid milestones are not refunded for completed work.

#### 6. Intellectual Property

- **Client ownership:** Upon full payment, the client owns all final deliverables produced specifically for them (code, designs, content). ScaleForge retains the right to display the work in portfolios and case studies unless the client requests confidentiality in writing.
- **ScaleForge IP:** Methodologies, frameworks, internal tooling, and pre-existing assets remain ScaleForge property. Licenses to use them within the deliverable are granted as part of the engagement.
- **Third-party assets:** Stock photos, fonts, plugins, and licensed software remain the property of their respective owners. Clients are responsible for ongoing license costs after handover.

#### 7. Confidentiality

Both parties agree to keep confidential information shared during an engagement private. Confidential information includes business strategy, financial data, customer lists, technical specifications, and any information marked confidential at the time of sharing. This obligation survives termination of the engagement.

#### 8. Warranties and Disclaimers

ScaleForge warrants that services will be performed with reasonable skill and care. We do not warrant:
- Specific business outcomes (e.g., guaranteed revenue, traffic, or rankings)
- That the Site or deliverables will be uninterrupted or error-free
- Third-party services (hosting providers, APIs, payment processors) will function without disruption

THE SITE AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND EXCEPT AS EXPRESSLY STATED.

#### 9. Limitation of Liability

To the maximum extent permitted by law, ScaleForge's total liability for any claim arising from these Terms or an engagement is limited to the total fees paid by the client to ScaleForge in the 6 months preceding the claim. In no event shall ScaleForge be liable for indirect, consequential, incidental, or punitive damages.

#### 10. Indemnification

The client agrees to indemnify and hold ScaleForge harmless from any third-party claim arising from:
- Content provided by the client (including IP infringement, defamation)
- Client's use of deliverables outside the agreed scope
- Client's violation of applicable laws

#### 11. Dispute Resolution and Governing Law

These Terms are governed by the laws of the Islamic Republic of Pakistan. Any dispute arising shall first be resolved through good-faith negotiation. If unresolved within 60 days, disputes will be settled by arbitration in Karachi, Pakistan, in accordance with the Arbitration Act, 1940.

For international clients, both parties may agree in writing to alternative dispute resolution venues (e.g., London arbitration, Singapore arbitration) on a per-contract basis.

#### 12. Termination

ScaleForge or the client may terminate an engagement with 30 days' written notice for any reason. Either party may terminate immediately for material breach (non-payment, IP infringement, gross negligence) after 14 days' notice and failure to cure.

Upon termination:
- Outstanding invoices for work completed are due immediately
- Confidentiality and IP obligations survive
- Final deliverables completed and paid for are transferred to the client

#### 13. Changes to These Terms

We may update these Terms from time to time. Material changes will be posted on this page with an updated "Last Updated" date. Continued use of the Site or services after changes constitutes acceptance.

#### 14. Contact

For questions about these Terms:

**Email:** hello@scaleforge.com
**Postal:** ScaleForge, Karachi, Pakistan
**Legal lead:** Shahood Saleem (CEO)

---

## CTAs & exit paths

- Cross-link to `/contact` from the closing block of each page
- Cross-link to `/privacy` from the Terms (referenced in confidentiality and data handling)
- Cross-link to `/terms` from the Privacy Policy footer

---

## SEO meta

### Privacy Policy
- **Title:** Privacy Policy | ScaleForge
- **Description:** ScaleForge's Privacy Policy — how we collect, use, and protect your data when you visit our site or engage our services.
- **Schema:** `WebPage` schema; no special markup beyond breadcrumbs.

### Terms of Service
- **Title:** Terms of Service | ScaleForge
- **Description:** Terms governing the use of ScaleForge's website and services — engagement terms, payment, IP, liability, and governing law.
- **Schema:** `WebPage` schema; no special markup beyond breadcrumbs.

---

## Notes

- **THIS IS NOT LEGAL ADVICE.** Both pages should be reviewed by a Pakistani lawyer (and ideally a US-licensed lawyer for international client work) before publishing. The content above is a reasonable starting draft, not a finished legal document.
- **Founder name corrections:** Verify that Ruhan is the appropriate Privacy lead and Shahood the appropriate Legal lead — adjust per actual founder roles.
- **Last Updated date** must be set on publish and updated on every material revision.
- **Jurisdiction (Karachi arbitration)** is appropriate for Pakistani contract law but may need adjustment for major US/EU client contracts — most large contracts specify their own jurisdiction in the engagement contract itself. These Terms set the default.
- **Subprocessors list** should be maintained as a separate document (or simple page) referenced from the Privacy Policy. Don't list specific vendors inline if they change frequently.
- **Cookie banner / consent mechanism** is a separate UI requirement, not covered in this PRD. For GDPR compliance with EU visitors, a basic cookie consent banner is recommended.
