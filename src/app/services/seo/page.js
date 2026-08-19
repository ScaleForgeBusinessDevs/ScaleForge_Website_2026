import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import {
  Bug,
  FileText,
  Search,
  MapPin,
  Link as LinkIcon,
  Check,
  Quote,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "SEO Services | Rank Higher on Google with ScaleForge",
  description:
    "Technical SEO audits, on-page optimization, keyword strategy, local SEO, and authority link building — engineered to rank and stay ranked. Free audit available.",
  alternates: {
    canonical: "https://scalesforge.site/services/seo",
    languages: {
      "en": "https://scalesforge.site/services/seo",
      "x-default": "https://scalesforge.site/services/seo"
    },
    media: {
      "only screen and (max-width: 640px)": "https://scalesforge.site/services/seo"
    }
  },
  keywords: ["Search Engine Optimization Services","Technical SEO Audit","On-Page Optimization","Authority Link Building","Organic Search Leads"],
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
      "SEO Services | Rank Higher on Google with ScaleForge",
    description:
      "Technical SEO audits, on-page optimization, keyword strategy, local SEO, and authority link building — engineered to rank and stay ranked. Free audit available.",
    url: "https://scalesforge.site/services/seo",
    siteName: "ScaleForge",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SEO Services | Rank Higher on Google with ScaleForge",
    description:
      "Technical SEO audits, on-page optimization, keyword strategy, local SEO, and authority link building — engineered to rank and stay ranked. Free audit available.",
    images: ["/og-image.png"],
  },
};

export default function SEOPage() {

const MODULES = [
  { title: "Technical SEO Audit & Fixing", body: "We identify and resolve indexation blocks, crawling bottlenecks, sitemap errors, duplicate paths, structured data errors, and Core Web Vitals issues.", icon: Bug },
  { title: "Precision On-Page SEO", body: "Optimizing titles, meta tags, and structured headers (H1–H4) across your priority commercial pages, using natural keyword distribution and link silos.", icon: FileText },
  { title: "Keyword Strategy & Mapping", body: "We research high-intent search phrases that your primary customers type during their purchase decision phase, mapping keywords directly to service pages.", icon: Search },
  { title: "Local SEO & Maps Dominance", body: "Optimizing your Google Business Profile, setting up consistent local citations, and crafting location-specific pages to dominate the Map Pack.", icon: MapPin },
  { title: "Authority Link Building", body: "Custom guest-outreach campaigns and digital PR to secure high-authority backlinks from established editorial platforms in your industry.", icon: LinkIcon },
];

const PROCESS = [
  { title: "Audit & Baseline", body: "Establishing ranking metrics, keyword baselines, sitemap checks, and crawl optimization." },
  { title: "Strategy & Mapping", body: "Researching high-intent search volumes and matching keywords to commercial landing pages." },
  { title: "Technical & On-Page Fixes", body: "Rewriting titles, metas, structured schema markers, and speeding up Core Web Vitals." },
  { title: "Content & Link Outreach", body: "Deploying structured blog calendars and outreach teams to gather high-authority backlinks." },
  { title: "Continuous Optimization", body: "Tracking conversion drop-offs, monitoring competitor movements, and updating landing page copy." },
];

const MONTHLY_INCLUSIONS = [
  "Ongoing structural fix implementation and speed audits",
  "2 to 8 high-intent, SEO-optimized blog posts/articles per month",
  "Local citation building and Map review acquisition campaigns",
  "Manual outreach campaigns securing 4–20 high-quality editorial links",
  "Competitor gap analysis and ranking keyword updates",
  "Dedicated monthly strategy briefing (30 minutes)",
];

const TIMELINE = [
  { phase: "Months 1–2", body: "Complete technical SEO audit, clean up sitemap crawling blocks, rewrite metas, and optimize Core Web Vitals. The foundation phase." },
  { phase: "Months 3–4", body: "Early ranking improvements for low-competition keywords. Sitemap indexation increases. Content clusters begin publishing." },
  { phase: "Months 4–6", body: "Measurable, compounding organic traffic increases. Backlink outreach campaigns yield authority spikes." },
  { phase: "Months 6–9", body: "Competitive high-intent keywords climb into first-page positions. Local Map Pack rankings climb to top 3." },
  { phase: "Months 9–12", body: "Full organic search channel dominance. Organic leads, calls, and conversions scale to compound on autopilot." },
];

const FAQS = [
  { q: "What is technical SEO?", a: "Technical SEO is the foundation layer — the structural, behind-the-scenes work that makes your website crawlable, indexable, and trustworthy to search engines. It covers site speed (Core Web Vitals), sitemap configuration, schema markup, redirects, canonical tags, and crawl budget. Without strong technical SEO, content and backlink efforts hit a ceiling." },
  { q: "How long does it take to see SEO results?", a: "For low-competition keywords, you can see ranking movement within 60 to 90 days. For competitive commercial keywords, expect 6 to 9 months before you see top-of-page rankings. SEO is a long game — anyone promising page-one rankings in 30 days is either lying or using tactics that will get you penalized." },
  { q: "What is local SEO and how does it help service businesses?", a: "Local SEO is the discipline of ranking in the 'Map Pack' — the three local business listings that appear above traditional results when someone searches for a service near them. For service businesses (dentists, lawyers, plumbers, home services), local SEO is often higher-ROI than national SEO because the intent is purchase-ready." },
  { q: "How do backlinks help my search rankings?", a: "Backlinks are votes of confidence. When another website links to yours, search engines interpret it as a signal that your content is trustworthy and worth citing. The number, quality, and topical relevance of those links is one of the strongest ranking factors Google uses. We earn backlinks through editorial outreach and digital PR — never through link farms or paid networks." },
  { q: "What is the difference between on-page and off-page SEO?", a: "On-page SEO is what we control on your website — titles, headings, content quality, internal linking, schema. Off-page SEO is what happens outside your website — backlinks, brand mentions, social signals. A complete SEO strategy needs both. We deliver both." }
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
            "name": "Services",
            "item": "https://scalesforge.site/services"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "SEO Services",
            "item": "https://scalesforge.site/services/seo"
        }
    ]
};
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "SEO Services",
    "description": "Technical SEO audits, on-page optimization, keyword strategy, local SEO, and authority link building — engineered to rank and stay ranked. Free audit available.",
    "brand": {
        "@type": "Brand",
        "name": "ScaleForge"
    },
    "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "1200",
        "highPrice": "8000",
        "offerCount": "3"
    }
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <PageHero
        eyebrow="ORGANIC GROWTH"
        title="SEO Services That Secure First-Page Rankings"
        subhead="We design and execute custom SEO blueprints that increase search visibility, drive qualified buyer traffic, and compile recurring leads. No guesswork. No black-hat shortcuts. Just rankings that compound."
        primaryCta={{
          label: "Book a Free SEO Audit",
          href: "https://cal.com/shahood-saleem-gbzisb/30min",
        }}
        secondaryCta={{ label: "See Pricing", href: "/pricing#seo" }}
      />

      {/* The SEO Advantage */}
      <section className="border-y border-white/[0.06] bg-[#0c0c0f] py-24 lg:py-32">
        <div className="mx-auto max-w-[860px] px-6 text-center lg:px-10">
          <Reveal>
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              The Highest-ROI Marketing Channel
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-white/60">
              Paid advertising stops generating traffic the exact microsecond
              you stop paying. Organic search traffic is the opposite —
              it&apos;s a compounding asset. A single keyword cluster ranked
              today keeps generating qualified leads day after day, month after
              month, costing nothing per click.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-white/60">
              By positioning your brand at the exact moment your prospects are
              searching for solutions, you bypass high ad bids and establish
              instant market authority. Done right, SEO becomes the lowest-cost,
              highest-trust channel in your entire marketing stack.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Core Optimization Modules */}
      <section className="bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              Our Core Optimization Modules
            </h2>
          </Reveal>

          <Reveal
            stagger
            staggerAmount={0.07}
            className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {MODULES.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 rounded-2xl border border-white/[0.07] bg-[#101013] p-7"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70">
                  <item.icon size={16} aria-hidden />
                </span>
                <div>
                  <h3 className="text-[15px] font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Monthly Inclusions */}
      <section className="border-y border-white/[0.06] bg-[#0c0c0f] py-24 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <Reveal>
              <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
                Every Monthly Retainer Includes
              </h2>
              <ul className="mt-8 space-y-3">
                {MONTHLY_INCLUSIONS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[14px] leading-relaxed text-white/55"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/15 text-[10px] text-white/60">
                      <Check size={10} aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="rounded-2xl border border-white/[0.07] bg-[#101013] p-8">
              <Quote size={24} className="text-white/20" aria-hidden />
              <p className="mt-3 text-[15px] italic leading-relaxed text-white/65">
                Full-service monthly retainers. Tier-dependent inclusions
                detailed on the{" "}
                <Link
                  href="/pricing#seo"
                  className="text-white/75 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
                >
                  Pricing page
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 12-Month Timeline */}
      <section className="bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              The SEO Compounding Timeline
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/60">
              SEO requires consistency. Here&apos;s a realistic roadmap for the
              first 12 months of partnership.
            </p>
          </Reveal>

          <Reveal
            stagger
            staggerAmount={0.08}
            className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
          >
            {TIMELINE.map((item, i) => (
              <div
                key={item.phase}
                className="relative rounded-2xl border border-white/[0.07] bg-[#101013] p-6"
              >
                <span className="font-accent text-[10px] uppercase tracking-[0.14em] text-[#e8633a]/70">
                  {item.phase}
                </span>
                <p className="mt-3 text-[12.5px] leading-relaxed text-white/50">
                  {item.body}
                </p>
                {i < TIMELINE.length - 1 && (
                  <span className="absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/10 bg-[#101013] p-1 lg:flex">
                    <ArrowRight
                      size={10}
                      className="text-white/30"
                      aria-hidden
                    />
                  </span>
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="border-y border-white/[0.06] bg-[#0c0c0f] py-24 lg:py-32">
        <div className="mx-auto max-w-[860px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              Our 5-Step Optimization Process
            </h2>
          </Reveal>

          <Reveal className="mt-14 flex flex-col">
            {PROCESS.map((step, i) => (
              <div
                key={step.title}
                className="flex gap-6 border-t border-white/[0.07] py-6 first:border-t-0"
              >
                <span className="font-accent text-[13px] text-white/30">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-[15px] font-medium text-white">
                    {i === 3 ? (
                      <>
                        Content &amp;{" "}
                        <Link
                          href="/services/content-creation"
                          className="text-white/60 underline decoration-white/20 underline-offset-4 hover:text-white"
                        >
                          Link Outreach
                        </Link>
                      </>
                    ) : (
                      step.title
                    )}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-white/60">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>


      <FAQAccordion
        eyebrow="CLARITY"
        heading="SEO Frequently Asked Questions"
        questions={FAQS}
      />

      <CTASection
        title="Find Out Exactly Why Your Website Is Not Ranking"
        body="Order your free comprehensive SEO audit. We'll catalog your crawl errors, scan Core Web Vitals barriers, identify keyword targets in your sector, and design a customized traffic timeline — no commitment required."
        primaryCta={{
          label: "Get a Free SEO Audit",
          href: "https://cal.com/shahood-saleem-gbzisb/30min",
        }}
        secondaryCta={{ label: "View Pricing", href: "/pricing#seo" }}
      />
    </>
  );
}
