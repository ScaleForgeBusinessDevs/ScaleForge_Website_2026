import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { ShaderAnimation } from "@/components/ShaderAnimationLazy";
import FAQAccordion from "@/components/FAQAccordion";
import PricingAnchorNav from "@/components/PricingAnchorNav";

export const metadata: Metadata = {
  title: "Pricing | Transparent Tiers for Web, SEO, Content & AI | ScaleForge",
  description:
    "Transparent pricing for ScaleForge's Web Design & Development, SEO, AI Automation, and Content Creation services. Tier-based, no hidden fees, no contracts.",
  alternates: {
    canonical: "https://scaleforgewebdev.vercel.app/pricing",
  },
  openGraph: {
    title: "Pricing | Transparent Tiers for Web, SEO, Content & AI | ScaleForge",
    description:
      "Transparent pricing for ScaleForge's Web Design & Development, SEO, AI Automation, and Content Creation services. Tier-based, no hidden fees, no contracts.",
    url: "https://scaleforgewebdev.vercel.app/pricing",
    siteName: "ScaleForge",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Transparent Tiers for Web, SEO, Content & AI | ScaleForge",
    description:
      "Transparent pricing for ScaleForge's Web Design & Development, SEO, AI Automation, and Content Creation services. Tier-based, no hidden fees, no contracts.",
    images: ["/og-image.png"],
  },
};

interface Tier {
  name: string;
  price: string;
  billing: string;
  bestFor: string;
  includes: string[];
  featured: boolean;
}

const AI_TIERS: Tier[] = [
  {
    name: "Starter Automation",
    price: "$1,200",
    billing: "/ project",
    bestFor: "Solo founders and small teams running 1–2 manual workflows.",
    includes: [
      "1 custom automation workflow (lead enrichment OR social posting OR CRM sync)",
      "Tool selection from n8n, Make.com, or Zapier",
      "Up to 5 system integrations",
      "Full documentation & 30-min training session",
      "14-day post-launch support",
    ],
    featured: false,
  },
  {
    name: "Growth Automation",
    price: "$3,500",
    billing: "/ project",
    bestFor: "Growing businesses with multiple workflows to automate.",
    includes: [
      "Up to 3 custom automation workflows",
      "Mix of n8n, Make.com, Zapier as needed",
      "Up to 15 system integrations",
      "Optional Vapi AI cold-call agent (single use case)",
      "Full documentation & training",
      "60-day post-launch support & optimization",
    ],
    featured: true,
  },
  {
    name: "Automation Engine",
    price: "$7,500+",
    billing: "/ project",
    bestFor: "Established businesses building automation as a core operating layer.",
    includes: [
      "Unlimited workflow design",
      "Full Vapi AI cold-call deployment (multi-script, multi-list)",
      "AI content engine (social + blog + ad copy automation)",
      "Self-hosted n8n setup",
      "Unlimited integrations",
      "90-day dedicated support",
      "Optional monthly maintenance retainer",
    ],
    featured: false,
  },
];

const WEB_TIERS: Tier[] = [
  {
    name: "Starter",
    price: "$1,800",
    billing: "/ project",
    bestFor: "Individuals and small businesses establishing their online presence.",
    includes: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Contact form integration",
      "2 rounds of revisions",
      "30-day post-launch support",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "$4,500",
    billing: "/ project",
    bestFor: "Growing brands needing custom design and richer functionality.",
    includes: [
      "Up to 15 pages",
      "Custom UI/UX design in Figma",
      "Sanity CMS integration",
      "Basic SEO setup (meta, sitemap, schema)",
      "4 rounds of revisions",
      "60-day post-launch support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$9,500+",
    billing: "/ project",
    bestFor: "Established businesses with complex needs and high traffic.",
    includes: [
      "Unlimited pages",
      "Custom development & API integrations",
      "E-commerce or portal functionality",
      "Performance & security hardening",
      "Unlimited revisions",
      "90-day dedicated support",
      "Optional retainer for ongoing development",
    ],
    featured: false,
  },
];

const SEO_TIERS: Tier[] = [
  {
    name: "Essential",
    price: "$650",
    billing: "/ month",
    bestFor: "Businesses building organic presence from the ground up.",
    includes: [
      "Keyword research (20 keywords)",
      "On-page optimization",
      "Google Search Console setup",
      "Monthly performance report",
      "Technical SEO audit (one-time)",
    ],
    featured: false,
  },
  {
    name: "Authority",
    price: "$1,400",
    billing: "/ month",
    bestFor: "Brands serious about ranking and driving qualified traffic.",
    includes: [
      "Keyword research (60 keywords)",
      "On-page + technical optimization",
      "Link building (10 high-quality links/mo)",
      "Competitor analysis",
      "Bi-weekly strategy calls",
      "Detailed monthly reporting",
    ],
    featured: true,
  },
  {
    name: "Dominate",
    price: "$3,200",
    billing: "/ month",
    bestFor: "Businesses that need to own their market's search results.",
    includes: [
      "Unlimited keyword targeting",
      "Full technical SEO management",
      "Link building (25+ links/mo)",
      "Content strategy alignment",
      "Weekly strategy calls",
      "Dedicated SEO manager",
    ],
    featured: false,
  },
];

const CONTENT_TIERS: Tier[] = [
  {
    name: "Essentials",
    price: "$900",
    billing: "/ month",
    bestFor: "Businesses building consistent online presence.",
    includes: [
      "4 blog articles / month",
      "8 social media posts",
      "Basic graphic design",
      "Content calendar",
      "1 revision per piece",
    ],
    featured: false,
  },
  {
    name: "Professional",
    price: "$2,200",
    billing: "/ month",
    bestFor: "Brands building authority and driving organic traffic.",
    includes: [
      "8 blog articles / month",
      "20 social media posts",
      "Custom branded graphics",
      "Email newsletter design",
      "SEO-optimized copywriting",
      "Engagement & performance analysis",
    ],
    featured: true,
  },
  {
    name: "Full-Scale",
    price: "$4,800",
    billing: "/ month",
    bestFor: "Businesses ready to dominate their niche with content.",
    includes: [
      "16 blog articles / month",
      "Daily social media posts",
      "Video script writing",
      "Whitepaper & lead magnet creation",
      "Full brand voice management",
      "Dedicated content strategist",
    ],
    featured: false,
  },
];

const SOCIAL_TIERS: Tier[] = [
  {
    name: "Presence",
    price: "$750",
    billing: "/ month",
    bestFor: "Businesses establishing a consistent social media presence.",
    includes: [
      "2 platforms (choose from IG, LinkedIn, X, Facebook, TikTok)",
      "12 posts / month",
      "Custom branded graphics",
      "Caption & hashtag copywriting",
      "Monthly performance report",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "$1,800",
    billing: "/ month",
    bestFor: "Brands ready to build audience and drive engagement at scale.",
    includes: [
      "4 platforms",
      "24 posts / month",
      "Story & Reel / short-form video scripts",
      "Community management (comments & DMs)",
      "Competitor benchmarking",
      "Bi-weekly strategy review",
    ],
    featured: true,
  },
  {
    name: "Authority",
    price: "$3,800",
    billing: "/ month",
    bestFor: "Businesses that want full-service social media domination.",
    includes: [
      "All major platforms",
      "Daily posting cadence",
      "Short-form video editing (Reels / TikToks)",
      "Paid social ad creative (Meta + LinkedIn)",
      "Influencer outreach coordination",
      "Dedicated social media manager",
    ],
    featured: false,
  },
];

interface BundleTier {
  name: string;
  price: string;
  billing: string;
  badge?: string;
  bestFor: string;
  tracks: { label: string; detail: string }[];
  featured: boolean;
}

const BUNDLE_TIERS: BundleTier[] = [
  {
    name: "Starter Bundle",
    price: "$3,800",
    billing: "/ month",
    bestFor: "Early-stage businesses that need every channel covered without hiring a team.",
    tracks: [
      { label: "Web Design", detail: "5-page marketing site, mobile-responsive" },
      { label: "SEO", detail: "Essential — 20 keywords, on-page & GSC setup" },
      { label: "Content Creation", detail: "4 blog articles + 8 social posts / month" },
      { label: "Social Media", detail: "Presence — 2 platforms, 12 posts / month" },
      { label: "AI Automation", detail: "1 workflow — lead capture or CRM sync" },
    ],
    featured: false,
  },
  {
    name: "Growth Bundle",
    price: "$7,200",
    billing: "/ month",
    badge: "Best Value",
    bestFor: "Growing brands that want compounding results across every digital channel.",
    tracks: [
      { label: "Web Design & Dev", detail: "15-page custom site, Sanity CMS, Figma design" },
      { label: "SEO", detail: "Authority — 60 keywords, link building (10/mo), bi-weekly calls" },
      { label: "Content Creation", detail: "8 blog articles + 20 posts + email newsletter / month" },
      { label: "Social Media", detail: "Growth — 4 platforms, 24 posts, community management" },
      { label: "AI Automation", detail: "3 workflows — lead enrichment, outreach, CRM sync" },
    ],
    featured: true,
  },
  {
    name: "Domination Bundle",
    price: "$14,500+",
    billing: "/ month",
    bestFor: "Established businesses that want to own their market across every front.",
    tracks: [
      { label: "Web Design & Dev", detail: "Enterprise build — unlimited pages, custom integrations" },
      { label: "SEO", detail: "Dominate — unlimited keywords, 25+ links/mo, dedicated manager" },
      { label: "Content Creation", detail: "Full-Scale — 16 articles + daily posts + video scripts" },
      { label: "Social Media", detail: "Authority — all platforms, video editing, paid ad creative" },
      { label: "AI Automation", detail: "Automation Engine — unlimited workflows, Vapi AI, self-hosted n8n" },
    ],
    featured: false,
  },
];

const CUSTOM_EXAMPLES = [
  "Bundled retainer combining SEO + Content + AI automation",
  "Multi-site or multi-region deployment",
  "White-label work for other agencies",
  "Long-term embedded engineering partnership",
];

const FAQS = [
  {
    q: "Are these prices final, or do you charge extra fees?",
    a: "The listed prices are what you pay. No setup fees, no surprise add-ons. The only exceptions are third-party costs we pass through at cost (hosting, CMS subscriptions, API usage) — and those are itemized in the engagement contract before signing.",
  },
  {
    q: "Do you offer a money-back guarantee or trial period?",
    a: "For project-based work (Web Design & Development, AI Development), we offer a 30-day satisfaction guarantee on the first milestone. If the initial design or build doesn't meet expectations, we refund the deposit. For monthly retainers (SEO, Content), there's no long-term contract — cancel anytime with 30 days' notice.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Wire transfer, Stripe (card), Wise, Payoneer, and Upwork escrow. For larger engagements, we typically use Upwork or Contra escrow to give clients additional payment protection.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. For project-based work, we structure payments in milestones: typically 30% deposit, 30% mid-build, 40% on delivery. For larger engagements (Enterprise tier), we can split into 4 to 6 milestones.",
  },
  {
    q: "What's not included in the tiers?",
    a: "Third-party costs (domain, hosting, CMS subscriptions, ad spend, premium plugin licenses) are not included and are billed at cost. Content writing in the Web tiers does not include long-form blog content — that's covered by the Content Creation tiers.",
  },
  {
    q: "Can I switch tiers mid-engagement?",
    a: "Yes. For monthly retainers (SEO, Content), you can switch tiers at the start of any billing cycle. For project tiers, scope changes are handled through a change order at the standard tier upgrade rate.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes — we work primarily with clients in the US, UK, Canada, Australia, and the EU. All pricing is in USD. We invoice in USD and accept payment in your local currency via Wise or Stripe (we absorb minor conversion variance).",
  },
  {
    q: "How quickly can we start?",
    a: "For project-based work, we onboard new clients within 1 to 2 weeks of contract signing. For monthly retainers, we typically begin the kickoff process within 5 business days of payment. Cohort capacity does sell out — booking a call early reserves your slot.",
  },
];

function TierCard({ tier }: { tier: Tier }) {
  return (
    <div
      className={`flex flex-col rounded-2xl border p-7 ${
        tier.featured
          ? "border-white/20 bg-[#101013] shadow-[0_40px_120px_-50px_rgba(255,255,255,0.25)]"
          : "border-white/[0.07] bg-[#101013]"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-[15px] font-medium text-white">{tier.name}</h3>
        {tier.featured && (
          <span className="shrink-0 rounded-full bg-white px-3 py-1 font-accent text-[10px] uppercase tracking-[0.1em] text-[#08080a]">
            Most Popular
          </span>
        )}
      </div>
      <p className="mt-2 text-[12.5px] leading-relaxed text-white/40">{tier.bestFor}</p>
      <p className="mt-5 flex items-baseline gap-1">
        <span className="text-[34px] font-semibold tracking-[-0.02em] text-white">{tier.price}</span>
        <span className="text-[13px] text-white/40">{tier.billing}</span>
      </p>
      <a
        href="https://cal.com/shahood-saleem-gbzisb/30min"
        className={`mt-5 inline-flex items-center justify-center rounded-full px-5 py-2.5 font-accent text-[11px] uppercase tracking-[0.12em] transition-transform hover:scale-[1.02] ${
          tier.featured ? "bg-white text-[#08080a]" : "border border-white/15 text-white/80"
        }`}
      >
        Book a Call
      </a>
      <ul className="mt-7 flex flex-col gap-2.5 border-t border-white/[0.07] pt-6">
        {tier.includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-white/50">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white/15 text-[9px] text-white/60">
              <i className="bi bi-check-lg" aria-hidden />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BundleTierCard({ tier }: { tier: BundleTier }) {
  return (
    <div
      className={`flex flex-col rounded-2xl border p-7 ${
        tier.featured
          ? "border-white/20 bg-[#101013] shadow-[0_40px_120px_-50px_rgba(255,255,255,0.25)]"
          : "border-white/[0.07] bg-[#101013]"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-[15px] font-medium text-white">{tier.name}</h3>
        {tier.badge && (
          <span className="shrink-0 rounded-full bg-white px-3 py-1 font-accent text-[10px] uppercase tracking-[0.1em] text-[#08080a]">
            {tier.badge}
          </span>
        )}
      </div>
      <p className="mt-2 text-[12.5px] leading-relaxed text-white/40">{tier.bestFor}</p>
      <p className="mt-5 flex items-baseline gap-1">
        <span className="text-[34px] font-semibold tracking-[-0.02em] text-white">{tier.price}</span>
        <span className="text-[13px] text-white/40">{tier.billing}</span>
      </p>
      <a
        href="https://cal.com/shahood-saleem-gbzisb/30min"
        className={`mt-5 inline-flex items-center justify-center rounded-full px-5 py-2.5 font-accent text-[11px] uppercase tracking-[0.12em] transition-transform hover:scale-[1.02] ${
          tier.featured ? "bg-white text-[#08080a]" : "border border-white/15 text-white/80"
        }`}
      >
        Get This Bundle
      </a>
      <ul className="mt-7 flex flex-col gap-3 border-t border-white/[0.07] pt-6">
        {tier.tracks.map((track) => (
          <li key={track.label} className="flex flex-col gap-0.5">
            <span className="flex items-center gap-2 text-[12.5px] font-[500] text-white/80">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#5e6ad2]/40 bg-[#5e6ad2]/10 text-[9px] text-[#a5aef0]">
                <i className="bi bi-check-lg" aria-hidden />
              </span>
              {track.label}
            </span>
            <span className="ml-6 text-[11.5px] leading-relaxed text-white/35">{track.detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingTrack({
  id,
  eyebrow,
  heading,
  subhead,
  tiers,
  dark,
}: {
  id: string;
  eyebrow: string;
  heading: string;
  subhead: string;
  tiers: Tier[];
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-36 py-24 lg:py-32 ${dark ? "border-y border-white/[0.06] bg-[#0c0c0f]" : "bg-[#08080a]"}`}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
            {heading}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/45">{subhead}</p>
        </Reveal>

        <Reveal stagger className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {tiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#08090a]">
        <div className="pointer-events-none absolute inset-0 z-0"><ShaderAnimation /></div>
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[#08090a]/80" />
        <div className="bg-grid-dark bg-grid-fade pointer-events-none absolute inset-0 z-[2]" />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-20 pt-32 text-center lg:px-10 lg:pt-28">
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center">
            <h1 className="mx-auto mt-6 max-w-2xl text-[clamp(2.1rem,5.4vw,3.5rem)] font-display font-normal leading-[1.14] text-white">
              Choose Your Growth Path
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-white/45">
              Flexible, transparent pricing for every stage of growth. No hidden fees, no &ldquo;contact us for a
              quote&rdquo; games. Pick a tier and let&apos;s build.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://cal.com/shahood-saleem-gbzisb/30min"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-accent text-[12px] uppercase tracking-[0.12em] text-[#08080a] transition-transform hover:scale-[1.03]"
              >
                Book a Free Strategy Call
                <i className="bi bi-arrow-right" aria-hidden />
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
      <section id="all-in-one" className="scroll-mt-36 border-b border-white/[0.06] bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="font-accent text-[10px] uppercase tracking-[0.2em] text-white/35">
              Complete Packages
            </span>
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              All-in-One Growth Bundles
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/45">
              Every channel. One team. One invoice. Bundled pricing saves you 15–20% versus booking services individually — and gives you a unified strategy that actually compounds.
            </p>
          </Reveal>

          <Reveal stagger className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {BUNDLE_TIERS.map((tier) => (
              <BundleTierCard key={tier.name} tier={tier} />
            ))}
          </Reveal>

          <Reveal>
            <p className="mt-8 text-center text-[12.5px] text-white/30">
              Bundle pricing is custom-quoted based on your business requirements. Prices shown are starting estimates.{" "}
              <a href="https://cal.com/shahood-saleem-gbzisb/30min" className="text-white/55 underline decoration-white/20 underline-offset-4 hover:text-white/80">
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
                <p className="mt-4 text-[14.5px] leading-relaxed text-white/45">
                  Every business is different. If your needs don&apos;t fit cleanly into the tiers above — whether
                  that&apos;s a hybrid engagement, multi-track retainer, or a build outside our standard scope —
                  let&apos;s talk.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://cal.com/shahood-saleem-gbzisb/30min"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-accent text-[11px] uppercase tracking-[0.12em] text-[#08080a] transition-transform hover:scale-[1.02]"
                  >
                    Request a Custom Quote
                    <i className="bi bi-arrow-right" aria-hidden />
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
                    <li key={ex} className="flex items-start gap-3 text-[13.5px] leading-relaxed text-white/50">
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
