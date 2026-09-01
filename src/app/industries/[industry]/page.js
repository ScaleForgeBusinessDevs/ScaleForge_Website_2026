import { notFound } from "next/navigation";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import {
  getAllIndustries,
  getIndustryBySlug,
  getAllLocations,
  getAllServices,
  getCaseStudiesForContext,
  siteUrl,
} from "@/lib/programmaticSeo";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Sparkles,
  MapPin,
  Building2,
  ShieldCheck,
} from "lucide-react";

export async function generateStaticParams() {
  const industries = getAllIndustries();
  return industries.map((ind) => ({
    industry: ind.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { industry: industrySlug } = await params;
  const industry = getIndustryBySlug(industrySlug);
  if (!industry) return {};

  return {
    title: `Web Design, SEO & AI Solutions for ${industry.name} | ScaleForge`,
    description: `Bespoke digital growth architecture for ${industry.name.toLowerCase()}. High-converting Next.js web applications, local Map Pack SEO, and automated client workflows.`,
    alternates: {
      canonical: `${siteUrl}/industries/${industry.slug}`,
    },
    openGraph: {
      title: `Web Design, SEO & AI Solutions for ${industry.name} | ScaleForge`,
      description: `Bespoke digital growth architecture for ${industry.name.toLowerCase()}. High-converting Next.js web applications, local Map Pack SEO, and automated client workflows.`,
      url: `${siteUrl}/industries/${industry.slug}`,
      siteName: "ScaleForge",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
      type: "website",
    },
  };
}

export default async function IndustryHubPage({ params }) {
  const { industry: industrySlug } = await params;
  const industry = getIndustryBySlug(industrySlug);
  if (!industry) notFound();

  const locations = getAllLocations();
  const services = getAllServices();
  const caseStudies = getCaseStudiesForContext(industry.slug, null);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: `${siteUrl}/industries`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: industry.name,
        item: `${siteUrl}/industries/${industry.slug}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Digital Growth & Web Architecture for ${industry.name}`,
    serviceType: "Digital Agency Solutions",
    provider: {
      "@type": "Organization",
      name: "ScaleForge",
      url: siteUrl,
    },
    description: industry.marketStat,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <article className="relative overflow-hidden bg-[#08080a] pb-24 pt-36 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(94,106,210,0.18),rgba(255,255,255,0))]" />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          {/* Breadcrumb back link */}
          <Link
            href="/industries"
            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-white/50 transition-colors hover:text-white"
          >
            ← Back to All Industries
          </Link>

          {/* Hero */}
          <header className="mt-8 max-w-4xl">
            <span className="rounded-full border border-[#5e6ad2]/30 bg-[#5e6ad2]/10 px-3.5 py-1 text-[11px] font-medium text-[#a5aef0]">
              {industry.category} Specialization
            </span>
            <h1 className="mt-5 text-[clamp(2.1rem,5vw,3.6rem)] font-display font-normal leading-[1.12] text-white">
              Bespoke Web, SEO & Automation for {industry.name}
            </h1>
            <p className="mt-4 text-[16px] leading-relaxed text-white/60">
              {industry.marketStat}
            </p>
          </header>

          {/* Key Benchmark Metric Callout */}
          <div className="mt-10 rounded-2xl border border-white/[0.08] bg-[#0d0d12] p-6 max-w-3xl">
            <div className="flex items-start gap-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <TrendingUp size={18} />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
                  Industry Growth Benchmark
                </p>
                <p className="mt-1 text-[14px] leading-relaxed text-white/80">
                  {industry.benchmark}
                </p>
              </div>
            </div>
          </div>

          {/* Pain Points vs Solutions Grid */}
          <section className="mt-20">
            <h2 className="text-[clamp(1.7rem,3.2vw,2.4rem)] font-display font-normal text-white">
              Overcoming the Core Bottlenecks in {industry.shortName}
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Pain Points */}
              <div className="rounded-3xl border border-rose-500/20 bg-rose-500/[0.02] p-8">
                <div className="flex items-center gap-2.5 text-rose-400">
                  <AlertCircle size={20} />
                  <h3 className="text-[16px] font-semibold uppercase tracking-wider">
                    Common Pitfalls & Lost Revenue
                  </h3>
                </div>
                <ul className="mt-6 space-y-4">
                  {industry.painPoints.map((pain, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] leading-relaxed text-white/70">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                      {pain}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.02] p-8">
                <div className="flex items-center gap-2.5 text-emerald-400">
                  <CheckCircle2 size={20} />
                  <h3 className="text-[16px] font-semibold uppercase tracking-wider">
                    The ScaleForge Architecture
                  </h3>
                </div>
                <ul className="mt-6 space-y-4">
                  {industry.solutions.map((sol, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] leading-relaxed text-white/70">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      {sol}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Matched Case Studies (if available) */}
          {caseStudies.length > 0 && (
            <section className="mt-20">
              <h2 className="text-[clamp(1.7rem,3.2vw,2.4rem)] font-display font-normal text-white">
                Featured Case Studies in {industry.shortName}
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                {caseStudies.map((cs) => (
                  <div
                    key={cs.slug}
                    className="rounded-3xl border border-white/[0.08] bg-[#0d0d12] p-8 flex flex-col justify-between"
                  >
                    <div>
                      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-[11px] font-semibold text-emerald-400">
                        {cs.heroMetric}
                      </span>
                      <h3 className="mt-4 text-[19px] font-medium text-white">
                        {cs.title}
                      </h3>
                      <p className="mt-2.5 text-[13px] leading-relaxed text-white/50">
                        {cs.challenge}
                      </p>
                    </div>
                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="mt-6 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#a5aef0] hover:underline"
                    >
                      Read Full Case Study →
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Location Landing Pages Directory */}
          <section className="mt-24 border-t border-white/[0.08] pt-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <span className="font-accent text-[10px] uppercase tracking-[0.2em] text-[#a5aef0]">
                  Programmatic Landing Pages
                </span>
                <h2 className="mt-2 text-[clamp(1.6rem,3vw,2.2rem)] font-display font-normal text-white">
                  {industry.name} Services by Metro
                </h2>
              </div>
              <p className="text-[13px] text-white/45 max-w-sm">
                Targeted local execution tailored to specific US commercial centers.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {locations.slice(0, 24).map((loc) => (
                <Link
                  key={loc.code}
                  href={`/seo/${industry.slug}/${loc.slug}`}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-center transition-all hover:border-[#5e6ad2]/40 hover:bg-white/[0.05]"
                >
                  <p className="text-[12.5px] font-medium text-white truncate">
                    {loc.city}, {loc.stateCode}
                  </p>
                  <p className="text-[10px] text-white/35">SEO & Web</p>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQs */}
          {industry.faqs && industry.faqs.length > 0 && (
            <div className="mt-20">
              <FAQAccordion
                eyebrow="VERTICAL CLARITY"
                heading={`Frequently Asked Questions for ${industry.shortName}`}
                questions={industry.faqs}
              />
            </div>
          )}
        </div>
      </article>

      <CTASection
        title={`Scale Your ${industry.singular} Today`}
        body="Book a free strategy session with our senior digital growth architects to map out your custom Next.js, SEO, and automation roadmap."
        primaryCta={{ label: "Book Strategy Call", href: "/contact" }}
        secondaryCta={{ label: "Run Free Website Audit", href: "/audit" }}
      />
    </>
  );
}
