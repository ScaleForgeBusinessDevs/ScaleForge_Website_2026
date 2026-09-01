import { notFound } from "next/navigation";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import InteractiveAuditTool from "@/components/InteractiveAuditTool";
import {
  getServiceBySlug,
  getIndustryBySlug,
  getLocationBySlug,
  getPriorityCombos,
  generateComboContent,
  generateProgrammaticSchemas,
  getAllIndustries,
  getAllLocations,
  getAllServices,
  siteUrl,
} from "@/lib/programmaticSeo";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  MapPin,
  Building,
  Shield,
  Zap,
  PhoneCall,
  Calendar,
  Sparkles,
} from "lucide-react";

export async function generateStaticParams() {
  const priorityCombos = getPriorityCombos();
  // Pre-generate top priority combinations (e.g., top 100 for fast build times, remainder on-demand with ISR/SSR)
  return priorityCombos.slice(0, 80).map((combo) => ({
    service: combo.serviceSlug,
    industry: combo.industrySlug,
    location: combo.locationSlug,
  }));
}

export async function generateMetadata({ params }) {
  const { service: serviceSlug, industry: industrySlug, location: locationSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const industry = getIndustryBySlug(industrySlug);
  const location = getLocationBySlug(locationSlug);

  if (!service || !industry || !location) return {};

  const content = generateComboContent(service, industry, location);

  return {
    title: content.pageTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `${siteUrl}/${service.slug}/${industry.slug}/${location.slug}`,
    },
    openGraph: {
      title: content.pageTitle,
      description: content.metaDescription,
      url: `${siteUrl}/${service.slug}/${industry.slug}/${location.slug}`,
      siteName: "ScaleForge",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: content.pageTitle,
      description: content.metaDescription,
      images: ["/og-image.png"],
    },
  };
}

export default async function ProgrammaticComboPage({ params }) {
  const { service: serviceSlug, industry: industrySlug, location: locationSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const industry = getIndustryBySlug(industrySlug);
  const location = getLocationBySlug(locationSlug);

  // Validate that all three entities exist
  if (!service || !industry || !location) {
    notFound();
  }

  const content = generateComboContent(service, industry, location);
  const canonicalUrl = `${siteUrl}/${service.slug}/${industry.slug}/${location.slug}`;
  const schemas = generateProgrammaticSchemas({
    service,
    industry,
    location,
    canonicalUrl,
    faqs: content.faqs,
  });

  const allIndustries = getAllIndustries();
  const allLocations = getAllLocations();
  const relatedIndustries = allIndustries.filter((i) => i.slug !== industry.slug).slice(0, 6);
  const relatedLocations = allLocations.filter((l) => l.slug !== location.slug).slice(0, 8);

  return (
    <>
      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <article className="relative overflow-hidden bg-[#08080a] pb-24 pt-36 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(94,106,210,0.18),rgba(255,255,255,0))]" />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumbs" className="flex flex-wrap items-center gap-2 text-[12px] text-white/40">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <Link href={`/services/${service.slug}`} className="hover:text-white transition-colors">{service.shortName}</Link>
            <span>/</span>
            <Link href={`/industries/${industry.slug}`} className="hover:text-white transition-colors">{industry.shortName}</Link>
            <span>/</span>
            <span className="text-white/80">{location.city}, {location.stateCode}</span>
          </nav>

          {/* Hero Section */}
          <header className="mt-8 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#5e6ad2]/30 bg-[#5e6ad2]/10 px-3.5 py-1 text-[11px] font-medium text-[#a5aef0]">
                <MapPin size={12} />
                {location.city}, {location.stateCode} Metro
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-white/60">
                {industry.name}
              </span>
            </div>

            <h1 className="mt-5 text-[clamp(2.1rem,5vw,3.6rem)] font-display font-normal leading-[1.12] text-white">
              {content.introHeadline}
            </h1>

            <p className="mt-5 text-[16px] leading-relaxed text-white/70">
              {content.introParagraph}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://cal.com/shahood-saleem-gbzisb/30min"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-accent text-[12px] uppercase tracking-[0.12em] text-[#08080a] transition-all hover:scale-[1.02]"
              >
                Book Strategy Call
                <ArrowRight size={14} />
              </a>
              <a
                href="#audit"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 font-accent text-[12px] uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-white/30 hover:text-white"
              >
                Run Free Website Audit
              </a>
            </div>
          </header>

          {/* Local Market & Vertical Insight Highlight */}
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d12] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
                Local Market Dynamics
              </p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-white/75">
                {location.economicHub}
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d12] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
                Growth Benchmark
              </p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-white/75">
                {industry.benchmark}
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d12] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
                Starting Investment
              </p>
              <p className="mt-2 text-[18px] font-display text-white">
                {service.startingPrice}
              </p>
              <p className="mt-0.5 text-[11.5px] text-white/40">
                {service.deliveryTime}
              </p>
            </div>
          </div>

          {/* Strategic Action Pillars */}
          <section className="mt-20">
            <span className="font-accent text-[10px] uppercase tracking-[0.2em] text-[#a5aef0]">
              Strategic Blueprint
            </span>
            <h2 className="mt-2 text-[clamp(1.7rem,3.2vw,2.4rem)] font-display font-normal text-white">
              How We Scale {industry.shortName} in {location.city}
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {content.strategyPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-white/[0.08] bg-[#0d0d12] p-7 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-[17px] font-medium text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-white/55">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Service Deliverables Checklist */}
          <section className="mt-20 rounded-3xl border border-white/[0.08] bg-[#0d0d12] p-8 lg:p-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <span className="font-accent text-[10px] uppercase tracking-[0.2em] text-[#a5aef0]">
                  Included Deliverables
                </span>
                <h2 className="mt-2 text-[24px] font-display font-normal text-white">
                  Full-Scope {service.title} Package
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-white/60">
                  Everything engineered bespoke — no outsourced shortcuts or generic themes.
                </p>
              </div>

              <ul className="space-y-3.5">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13.5px] text-white/75">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Matched Case Study Spotlight */}
          {content.featuredCaseStudy && (
            <section className="mt-20 rounded-3xl border border-[#5e6ad2]/30 bg-[#5e6ad2]/[0.06] p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-[11px] font-semibold text-emerald-400">
                    {content.featuredCaseStudy.heroMetric}
                  </span>
                  <h3 className="mt-4 text-[22px] font-display font-normal text-white">
                    Verified Client Outcome: {content.featuredCaseStudy.client}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-white/70 max-w-2xl">
                    &ldquo;{content.featuredCaseStudy.testimonial?.quote || content.featuredCaseStudy.solution}&rdquo;
                  </p>
                  <p className="mt-3 text-[12px] text-white/40">
                    — {content.featuredCaseStudy.testimonial?.author || content.featuredCaseStudy.clientContact}
                  </p>
                </div>
                <Link
                  href={`/case-studies/${content.featuredCaseStudy.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-accent text-[11px] uppercase tracking-[0.12em] text-[#08080a] transition-transform hover:scale-[1.02] shrink-0"
                >
                  View Case Study
                  <ArrowRight size={14} />
                </Link>
              </div>
            </section>
          )}

          {/* Interactive Audit Tool Anchor */}
          <section id="audit" className="mt-24">
            <InteractiveAuditTool defaultIndustry={industry.name} />
          </section>

          {/* Related Location & Industry Cross-links */}
          <section className="mt-24 border-t border-white/[0.08] pt-16">
            <h3 className="text-[18px] font-medium text-white">
              Explore Related {industry.shortName} Markets
            </h3>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {relatedLocations.map((relLoc) => (
                <Link
                  key={relLoc.code}
                  href={`/${service.slug}/${industry.slug}/${relLoc.slug}`}
                  className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-[12px] text-white/65 hover:border-[#5e6ad2]/40 hover:text-white transition-all"
                >
                  {industry.shortName} in {relLoc.city}
                </Link>
              ))}
            </div>

            <h3 className="mt-10 text-[18px] font-medium text-white">
              Other Commercial Verticals in {location.city}
            </h3>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {relatedIndustries.map((relInd) => (
                <Link
                  key={relInd.slug}
                  href={`/${service.slug}/${relInd.slug}/${location.slug}`}
                  className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-[12px] text-white/65 hover:border-[#5e6ad2]/40 hover:text-white transition-all"
                >
                  {relInd.name} ({location.city})
                </Link>
              ))}
            </div>
          </section>

          {/* FAQs with Schema Support */}
          <div className="mt-20">
            <FAQAccordion
              eyebrow="LOCAL & VERTICAL CLARITY"
              heading={`Frequently Asked Questions`}
              questions={content.faqs}
            />
          </div>
        </div>
      </article>

      <CTASection
        title={`Scale Your ${industry.singular} in ${location.city}`}
        body={`Partner with ScaleForge to deploy high-converting Next.js architecture, Page 1 SEO, and custom AI automations designed for scale.`}
        primaryCta={{ label: "Book Strategy Call", href: "/contact" }}
        secondaryCta={{ label: "View Transparent Pricing", href: "/pricing" }}
      />
    </>
  );
}
