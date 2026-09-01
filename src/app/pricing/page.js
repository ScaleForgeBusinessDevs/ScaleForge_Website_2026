import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { ShaderAnimation } from "@/components/ShaderAnimationLazy";
import FAQAccordion from "@/components/FAQAccordion";
import PricingAnchorNav from "@/components/PricingAnchorNav";
import { ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "Pricing | Transparent Service Tiers | ScaleForge",
  description:
    "Transparent pricing for ScaleForge's Web Design & Development, SEO, AI Automation, and Content Creation services. Tier-based, no hidden fees, no contracts.",
  alternates: {
    canonical: "https://scalesforge.site/pricing",
    languages: {
      "en": "https://scalesforge.site/pricing",
      "x-default": "https://scalesforge.site/pricing"
    },
    media: {
      "only screen and (max-width: 640px)": "https://scalesforge.site/pricing"
    }
  },
  keywords: ["ScaleForge Pricing","Web Design Cost","SEO Agency Cost","AI Automation Pricing","Web Development Hourly Rate"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    title:
      "Pricing | Transparent Service Tiers | ScaleForge",
    description:
      "Transparent pricing for ScaleForge's Web Design & Development, SEO, AI Automation, and Content Creation services. Tier-based, no hidden fees, no contracts.",
    url: "https://scalesforge.site/pricing",
    siteName: "ScaleForge",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pricing | Transparent Tiers for Web, SEO, Content & AI | ScaleForge",
    description:
      "Transparent pricing for ScaleForge's Web Design & Development, SEO, AI Automation, and Content Creation services. Tier-based, no hidden fees, no contracts.",
    images: ["/og-image.png"],
  },
};

export default function PricingPage() {

const BUNDLE_TIERS = [
  {
    name: "Launch",
    price: "$2,400",
    suffix: "starting at",
    description: "Ideal for startups and small businesses launching their first professional digital presence.",
    includes: ["5-page custom website", "On-page SEO for all pages", "Brand identity starter kit", "Google Analytics + GSC setup"],
    popular: false,
  },
  {
    name: "Growth",
    price: "$4,800",
    suffix: "starting at",
    description: "For established businesses ready to scale their digital footprint with content and automation.",
    includes: ["10-page custom website", "Full SEO audit + optimization", "4 blog posts/month", "AI lead enrichment workflow", "Social media starter (8 posts/mo)"],
    popular: true,
  },
  {
    name: "Dominance",
    price: "$8,500",
    suffix: "starting at",
    description: "Enterprise-grade digital infrastructure for brands that demand market leadership.",
    includes: ["Unlimited pages + custom app features", "Aggressive multi-keyword SEO", "8 blog posts/month", "Full AI automation suite", "Complete social media management", "Dedicated strategist"],
    popular: false,
  },
];

function BundleTierCard({ tier }) {
  return (
    <div className={`relative flex flex-col rounded-2xl border p-7 ${tier.popular ? "border-white/20 bg-white/[0.04]" : "border-white/[0.07] bg-[#101013]"}`}>
      {tier.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 font-accent text-[9px] uppercase tracking-[0.14em] text-[#08080a]">
          Most Popular
        </span>
      )}
      <h3 className="text-[18px] font-medium text-white">{tier.name}</h3>
      <p className="mt-1 text-[12px] text-white/35">{tier.suffix}</p>
      <p className="mt-2 text-[32px] font-display font-normal text-white">{tier.price}</p>
      <p className="mt-4 text-[13px] leading-relaxed text-white/50">{tier.description}</p>
      <ul className="mt-6 flex-1 space-y-2.5">
        {tier.includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-white/50">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white/15 text-[9px] text-white/60">
              <Check size={9} aria-hidden />
            </span>
            {item}
          </li>
        ))}
      </ul>
      <a
        href="https://cal.com/shahood-saleem-gbzisb/30min"
        className={`mt-8 block rounded-full py-3 text-center font-accent text-[11px] uppercase tracking-[0.12em] transition-colors ${tier.popular ? "bg-white text-[#08080a] hover:bg-white/90" : "border border-white/15 text-white/70 hover:border-white/30 hover:text-white"}`}
      >
        Get Started
      </a>
    </div>
  );
}

function PricingTrack({ id, eyebrow, heading, subhead, tiers, dark }) {
  return (
    <section
      id={id}
      className={`scroll-mt-36 border-b border-white/[0.06] py-24 lg:py-32 ${dark ? "bg-[#0c0c0f]" : "bg-[#08080a]"}`}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="font-accent text-[10px] uppercase tracking-[0.2em] text-white/35">
            {eyebrow}
          </span>
          <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
            {heading}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/60">
            {subhead}
          </p>
        </Reveal>
        <Reveal stagger className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`relative flex flex-col rounded-2xl border p-7 ${t.featured ? "border-white/20 bg-white/[0.04]" : "border-white/[0.07] bg-[#101013]"}`}>
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 font-accent text-[9px] uppercase tracking-[0.14em] text-[#08080a]">
                  Most Popular
                </span>
              )}
              <h3 className="text-[18px] font-medium text-white">{t.name}</h3>
              <p className="mt-1 text-[12px] text-white/35">{t.suffix}</p>
              <p className="mt-2 text-[32px] font-display font-normal text-white">{t.price}</p>
              <p className="mt-4 text-[13px] leading-relaxed text-white/50">{t.description}</p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {t.included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-white/50">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white/15 text-[9px] text-white/60">
                      <Check size={9} aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              {t.detail && <p className="mt-4 ml-6 text-[11.5px] leading-relaxed text-white/35">{t.detail}</p>}
              <a
                href="https://cal.com/shahood-saleem-gbzisb/30min"
                className={`mt-8 block rounded-full py-3 text-center font-accent text-[11px] uppercase tracking-[0.12em] transition-colors ${t.featured ? "bg-white text-[#08080a] hover:bg-white/90" : "border border-white/15 text-white/70 hover:border-white/30 hover:text-white"}`}
              >
                Get Started
              </a>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

const AI_TIERS = [
  { name: "Starter", price: "$800", suffix: "one-time", description: "A single automated workflow to eliminate your most painful manual task.", included: ["1 custom n8n/Make workflow", "CRM or spreadsheet integration", "Documentation & handoff"], featured: false },
  { name: "Growth", price: "$2,400", suffix: "one-time", description: "A connected automation stack that handles lead gen, outreach, and reporting.", included: ["Up to 5 workflows", "AI lead enrichment pipeline", "Outreach sequence automation", "CRM sync + reporting dashboard"], detail: "3 workflows — lead enrichment, outreach, CRM sync", featured: true },
  { name: "Enterprise", price: "$4,500+", suffix: "one-time", description: "Full-stack automation infrastructure with AI voice, self-hosted tooling, and unlimited scope.", included: ["Unlimited workflows", "Vapi AI voice agents", "Self-hosted n8n instance", "Custom API integrations", "Support retainer available (billed separately)"], detail: "Automation Engine — unlimited workflows, Vapi AI, self-hosted n8n", featured: false },
];

const WEB_TIERS = [
  { name: "Starter", price: "$1,200", suffix: "one-time", description: "A clean, fast marketing site for businesses launching their online presence.", included: ["Up to 5 pages", "Mobile-first responsive design", "Basic on-page SEO", "Contact form integration"], featured: false },
  { name: "Growth", price: "$3,200", suffix: "one-time", description: "A conversion-optimized website with animations, CMS, and advanced SEO architecture.", included: ["Up to 15 pages", "Custom animations & interactions", "CMS integration (blog/portfolio)", "Schema markup + technical SEO", "Analytics & conversion tracking"], featured: true },
  { name: "Enterprise", price: "$6,000+", suffix: "one-time", description: "Complex web applications, e-commerce platforms, and custom SaaS dashboards.", included: ["Unlimited pages + app features", "E-commerce / booking system", "Custom admin dashboards", "API integrations", "Performance SLA guarantee"], featured: false },
];

const SEO_TIERS = [
  { name: "Starter", price: "$400", suffix: "/month", description: "Foundation-level SEO for businesses beginning their organic search journey.", included: ["Up to 15 target keywords", "On-page optimization (10 pages)", "1 blog post/month", "Monthly ranking report"], featured: false },
  { name: "Growth", price: "$800", suffix: "/month", description: "Aggressive keyword expansion with content velocity and technical optimization.", included: ["Up to 40 target keywords", "Full technical SEO audit + fixes", "4 blog posts/month", "Link building outreach", "Bi-weekly strategy calls"], featured: true },
  { name: "Enterprise", price: "$1,500+", suffix: "/month", description: "Market-domination SEO for brands competing in high-value verticals.", included: ["Unlimited keywords", "8+ blog posts/month", "Dedicated SEO strategist", "Competitor gap analysis", "Custom reporting dashboard"], featured: false },
];

const CONTENT_TIERS = [
  { name: "Starter", price: "$350", suffix: "/month", description: "Consistent, SEO-optimized content for businesses building topical authority.", included: ["2 long-form articles/month", "Keyword research per article", "On-page SEO optimization", "CMS publishing"], featured: false },
  { name: "Growth", price: "$700", suffix: "/month", description: "Content velocity with pillar guides, supporting articles, and internal linking.", included: ["4 long-form articles/month", "1 pillar guide/quarter", "Internal linking strategy", "Content calendar planning"], featured: true },
  { name: "Enterprise", price: "$1,200+", suffix: "/month", description: "Full editorial operation with dedicated writers and strategic content direction.", included: ["8+ articles/month", "Quarterly content audits", "Dedicated content strategist", "Multi-format content (guides, case studies, whitepapers)"], featured: false },
];

const SOCIAL_TIERS = [
  { name: "Starter", price: "$400", suffix: "/month", description: "A consistent, branded social presence across your primary platforms.", included: ["8 curated posts/month", "Profile optimization", "Monthly content calendar", "All major platforms"], featured: false },
  { name: "Growth", price: "$750", suffix: "/month", description: "Engagement-focused social strategy with video content and performance tracking.", included: ["16 posts/month", "Short-form video editing (Reels / TikToks)", "Monthly performance reports", "Community management", "Daily posting cadence"], featured: true },
  { name: "Enterprise", price: "$1,200+", suffix: "/month", description: "Full-service social media management with paid creative and influencer coordination.", included: ["20+ custom posts/month", "Paid social ad creative (Meta + LinkedIn)", "Influencer outreach coordination", "Dedicated social media manager", "All major platforms", "Daily posting cadence", "Short-form video editing (Reels / TikToks)"], featured: false },
];

const CUSTOM_EXAMPLES = [
  "Multi-track retainer (SEO + Content + Social under one roof)",
  "Startup launch package (Brand + Website + Pitch Deck)",
  "AI automation sprint (5-day intensive build)",
  "E-commerce migration + redesign",
  "White-label development for agencies",
];

const FAQS = [
  { q: "Are these prices final, or do you charge extra fees?", a: "The listed prices are what you pay. No setup fees, no surprise add-ons. The only exceptions are third-party costs we pass through at cost (hosting, CMS subscriptions, API usage) — and those are itemized in the engagement contract before signing." },
  { q: "Do you offer a money-back guarantee or trial period?", a: "For project-based work (Web Design & Development, AI Development), we offer a 30-day satisfaction guarantee on the first milestone. If the initial design or build doesn't meet expectations, we refund the deposit. For monthly retainers (SEO, Content), there's no long-term contract — cancel anytime with 30 days' notice." },
  { q: "What payment methods do you accept?", a: "Wire transfer, Stripe (card), Wise, Payoneer, and Upwork escrow. For larger engagements, we typically use Upwork or Contra escrow to give clients additional payment protection." },
  { q: "Do you offer payment plans?", a: "Yes. For project-based work, we structure payments in milestones: typically 30% deposit, 30% mid-build, 40% on delivery. For larger engagements (Enterprise tier), we can split into 4 to 6 milestones." },
  { q: "What's not included in the tiers?", a: "Third-party costs (domain, hosting, CMS subscriptions, ad spend, premium plugin licenses) are not included and are billed at cost. Content writing in the Web tiers does not include long-form blog content — that's covered by the Content Creation tiers." },
  { q: "Can I switch tiers mid-engagement?", a: "Yes. For monthly retainers (SEO, Content), you can switch tiers at the start of any billing cycle. For project tiers, scope changes are handled through a change order at the standard tier upgrade rate." },
  { q: "Do you work with international clients?", a: "Yes — we work primarily with clients in the US, UK, Canada, Australia, and the EU. All pricing is in USD. We invoice in USD and accept payment in your local currency via Wise or Stripe (we absorb minor conversion variance)." },
  { q: "How quickly can we start?", a: "For project-based work, we onboard new clients within 1 to 2 weeks of contract signing. For monthly retainers, we typically begin the kickoff process within 5 business days of payment. Cohort capacity does sell out — booking a call early reserves your slot." },
];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://scalesforge.site"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Pricing",
        "item": "https://scalesforge.site/pricing"
      }
    ]
  };

  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "ScaleForge Pricing & Service Packages",
    "description": "Transparent pricing tiers for ScaleForge Web Design & Development, SEO, AI Automation, Content Creation, and Social Media Marketing.",
    "url": "https://scalesforge.site/pricing",
    "provider": {
      "@type": "Organization",
      "name": "ScaleForge",
      "url": "https://scalesforge.site"
    },
    // TODO: replace with real rating data
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "12",
      "bestRating": "5",
      "worstRating": "1"
    },
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "All-in-One Growth Bundles",
        "itemListElement": BUNDLE_TIERS.map((tier) => ({
          "@type": "Offer",
          "name": `${tier.name} Bundle`,
          "price": tier.price.replace(/[^0-9]/g, ""),
          "priceCurrency": "USD",
          "description": tier.description,
          "url": "https://scalesforge.site/pricing#all-in-one"
        }))
      },
      {
        "@type": "OfferCatalog",
        "name": "AI Development & Automation",
        "itemListElement": AI_TIERS.map((tier) => ({
          "@type": "Offer",
          "name": `AI Automation - ${tier.name}`,
          "price": tier.price.replace(/[^0-9]/g, ""),
          "priceCurrency": "USD",
          "description": tier.description,
          "url": "https://scalesforge.site/pricing#ai-development"
        }))
      },
      {
        "@type": "OfferCatalog",
        "name": "Web Design & Development",
        "itemListElement": WEB_TIERS.map((tier) => ({
          "@type": "Offer",
          "name": `Web Design & Dev - ${tier.name}`,
          "price": tier.price.replace(/[^0-9]/g, ""),
          "priceCurrency": "USD",
          "description": tier.description,
          "url": "https://scalesforge.site/pricing#web-design-dev"
        }))
      },
      {
        "@type": "OfferCatalog",
        "name": "Search Engine Optimization",
        "itemListElement": SEO_TIERS.map((tier) => ({
          "@type": "Offer",
          "name": `SEO - ${tier.name}`,
          "price": tier.price.replace(/[^0-9]/g, ""),
          "priceCurrency": "USD",
          "description": tier.description,
          "url": "https://scalesforge.site/pricing#seo"
        }))
      },
      {
        "@type": "OfferCatalog",
        "name": "Content Creation",
        "itemListElement": CONTENT_TIERS.map((tier) => ({
          "@type": "Offer",
          "name": `Content Creation - ${tier.name}`,
          "price": tier.price.replace(/[^0-9]/g, ""),
          "priceCurrency": "USD",
          "description": tier.description,
          "url": "https://scalesforge.site/pricing#content"
        }))
      },
      {
        "@type": "OfferCatalog",
        "name": "Social Media Marketing",
        "itemListElement": SOCIAL_TIERS.map((tier) => ({
          "@type": "Offer",
          "name": `Social Media - ${tier.name}`,
          "price": tier.price.replace(/[^0-9]/g, ""),
          "priceCurrency": "USD",
          "description": tier.description,
          "url": "https://scalesforge.site/pricing#social-media"
        }))
      }
    ]
  };


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#08090a]">
        <div className="pointer-events-none absolute inset-0 z-0">
          <ShaderAnimation />
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[#08090a]/80" />
        <div className="bg-grid-dark bg-grid-fade pointer-events-none absolute inset-0 z-[2]" />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-20 pt-32 text-center lg:px-10 lg:pt-28">
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center">
            <h1 className="mx-auto mt-6 max-w-2xl text-[clamp(2.1rem,5.4vw,3.5rem)] font-display font-normal leading-[1.14] text-white">
              Choose Your Growth Path
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-white/60">
              Flexible, transparent pricing for every stage of growth. Fixed
              pricing on individual services, custom quotes for bundles — no
              hidden fees, ever. Pick a tier and let&apos;s build.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://cal.com/shahood-saleem-gbzisb/30min"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-accent text-[12px] uppercase tracking-[0.12em] text-[#08080a] transition-transform hover:scale-[1.03]"
              >
                Book a Free Strategy Call
                <ArrowRight size={16} aria-hidden />
              </a>
              <a
                href="#faq"
                className="rounded-full border border-white/15 px-6 py-3 font-accent text-[12px] uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-white/30 hover:text-white"
              >
                Read FAQs
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <PricingAnchorNav />

      {/* All-in-One Bundles — shown first */}
      <section
        id="all-in-one"
        className="scroll-mt-36 border-b border-white/[0.06] bg-[#08080a] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="font-accent text-[10px] uppercase tracking-[0.2em] text-white/35">
              Complete Packages
            </span>
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              All-in-One Growth Bundles
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/60">
              Every channel. One team. One invoice. Bundled pricing costs less
              than booking services individually — and gives you a unified
              strategy that actually compounds.
            </p>
          </Reveal>

          <Reveal
            stagger
            className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3"
          >
            {BUNDLE_TIERS.map((tier) => (
              <BundleTierCard key={tier.name} tier={tier} />
            ))}
          </Reveal>

          <Reveal>
            <p className="mt-8 text-center text-[12.5px] text-white/30">
              Bundle pricing is custom-quoted based on your business
              requirements. Prices shown are starting estimates.{" "}
              <a
                href="https://cal.com/shahood-saleem-gbzisb/30min"
                className="text-white/55 underline decoration-white/20 underline-offset-4 hover:text-white/80"
              >
                Book a call for an exact quote.
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      <PricingTrack
        id="ai-development"
        eyebrow="AI AUTOMATION"
        heading="AI Development & Automation"
        subhead="Automation that scrapes leads, makes calls, and publishes content while you sleep."
        tiers={AI_TIERS}
        dark
      />

      <PricingTrack
        id="web-design-dev"
        eyebrow="DESIGN & ENGINEERING"
        heading="Web Design & Development"
        subhead="From clean marketing sites to complex e-commerce systems — built bespoke, owned outright."
        tiers={WEB_TIERS}
      />

      <PricingTrack
        id="seo"
        eyebrow="ORGANIC GROWTH"
        heading="Search Engine Optimization"
        subhead="Monthly retainers built to rank and compound. No long-term contracts required."
        tiers={SEO_TIERS}
        dark
      />

      <PricingTrack
        id="content"
        eyebrow="CONTENT & AUTHORITY"
        heading="Content Creation"
        subhead="Authority-building content that scales your reach. Monthly retainers, no minimum commitment."
        tiers={CONTENT_TIERS}
      />

      <PricingTrack
        id="social-media"
        eyebrow="SOCIAL MEDIA"
        heading="Social Media Marketing"
        subhead="Consistent posting, branded creative, and community management across every platform that matters."
        tiers={SOCIAL_TIERS}
        dark
      />

      {/* Custom / Enterprise */}
      <section className="bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <Reveal className="rounded-3xl border border-white/[0.10] bg-[#101013] p-10 lg:p-14">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="mt-5 text-[clamp(1.7rem,3.2vw,2.4rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
                  Need Something Custom?
                </h2>
                <p className="mt-4 text-[14.5px] leading-relaxed text-white/60">
                  Every business is different. If your needs don&apos;t fit
                  cleanly into the tiers above — whether that&apos;s a hybrid
                  engagement, multi-track retainer, or a build outside our
                  standard scope — let&apos;s talk.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://cal.com/shahood-saleem-gbzisb/30min"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-accent text-[11px] uppercase tracking-[0.12em] text-[#08080a] transition-transform hover:scale-[1.02]"
                  >
                    Request a Custom Quote
                    <ArrowRight size={16} aria-hidden />
                  </a>
                  <a
                    href="https://cal.com/shahood-saleem-gbzisb/30min"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-accent text-[11px] uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-white/30"
                  >
                    Book a Discovery Call
                  </a>
                </div>
              </div>
              <div>
                <p className="font-accent text-[10px] uppercase tracking-[0.16em] text-white/35">
                  Custom Engagement Examples
                </p>
                <ul className="mt-5 space-y-3">
                  {CUSTOM_EXAMPLES.map((ex) => (
                    <li
                      key={ex}
                      className="flex items-start gap-3 text-[13.5px] leading-relaxed text-white/50"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#e8633a]" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQAccordion
        eyebrow="CLARITY"
        heading="Pricing Frequently Asked Questions"
        questions={FAQS}
      />

      <CTASection
        title="Not Sure Which Tier Fits?"
        body="Book a free 30-minute strategy call. We'll review your situation, recommend the right tier (or build a custom path), and answer any pricing questions in real time."
        primaryCta={{ label: "Book a Free Strategy Call", href: "/contact" }}
        secondaryCta={{ label: "Chat with Us", href: "/contact" }}
      />
    </>
  );
}
