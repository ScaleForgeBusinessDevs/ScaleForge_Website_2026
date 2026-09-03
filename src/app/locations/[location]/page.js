import { notFound } from "next/navigation";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import {
  getAllLocations,
  getLocationBySlug,
  getAllIndustries,
  getAllServices,
  siteUrl,
} from "@/lib/programmaticSeo";
import {
  ArrowRight,
  CheckCircle2,
  Building,
  TrendingUp,
  MapPin,
  Users,
  ShieldCheck,
} from "lucide-react";

export async function generateStaticParams() {
  const locations = getAllLocations();
  return locations.map((loc) => ({
    location: loc.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { location: locationSlug } = await params;
  const location = getLocationBySlug(locationSlug);
  if (!location) return {};

  return {
    title: `Web Development, SEO & AI Agency in ${location.city}, ${location.stateCode} | ScaleForge`,
    description: `ScaleForge delivers custom Next.js web applications, Page 1 local SEO, and AI workflow automations for businesses in ${location.city}, ${location.stateCode} and the ${location.metro}.`,
    alternates: {
      canonical: `${siteUrl}/locations/${location.slug}`,
    },
    openGraph: {
      title: `Web Development, SEO & AI Agency in ${location.city}, ${location.stateCode} | ScaleForge`,
      description: `ScaleForge delivers custom Next.js web applications, Page 1 local SEO, and AI workflow automations for businesses in ${location.city}, ${location.stateCode}.`,
      url: `${siteUrl}/locations/${location.slug}`,
      siteName: "ScaleForge",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
      type: "website",
    },
  };
}

export default async function LocationHubPage({ params }) {
  const { location: locationSlug } = await params;
  const location = getLocationBySlug(locationSlug);
  if (!location) notFound();

  const industries = getAllIndustries();
  const services = getAllServices();

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
        name: "Locations",
        item: `${siteUrl}/locations`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${location.city}, ${location.stateCode}`,
        item: `${siteUrl}/locations/${location.slug}`,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Web Development, SEO and AI Automation for ${location.city}, ${location.stateCode}`,
    url: `${siteUrl}/locations/${location.slug}`,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: {
      "@type": "City",
      name: location.city,
      containedInPlace: {
        "@type": "State",
        name: location.state,
      },
    },
    description: `Remote digital agency serving ${location.city}, ${location.stateCode} with custom web development, SEO, and AI automations.`,
  };

  const locationFaqs = [
    {
      q: `How does ScaleForge help businesses in ${location.city} rank on Google?`,
      a: `We execute a comprehensive localized SEO strategy tailored to ${location.city} search queries, optimizing Google Business Profiles, local citation consistency, geo-targeted schema markup, and landing pages built to outrank regional competitors.`,
    },
    {
      q: `Why do companies in ${location.city} choose Next.js over traditional WordPress?`,
      a: `Next.js websites load in under 1 second, achieve 95+ Core Web Vitals scores, have zero plugin vulnerability security risks, and convert mobile visitors at a substantially higher rate in competitive metro areas like ${location.city}.`,
    },
    {
      q: `Do you work with businesses across the entire ${location.metro}?`,
      a: `Yes. We build programmatic regional landing pages and Map Pack visibility that capture high-intent inquiries from the urban core to all surrounding suburban commercial corridors.`,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <article className="relative overflow-hidden bg-[#08080a] pb-24 pt-36 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(94,106,210,0.18),rgba(255,255,255,0))]" />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          {/* Breadcrumb back link */}
          <Link
            href="/locations"
            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-white/50 transition-colors hover:text-white"
          >
            ← Back to All Locations
          </Link>

          {/* Hero */}
          <header className="mt-8 max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-mono font-semibold text-[#a5aef0]">
                {location.code}
              </span>
              <span className="text-[12px] text-white/50">{location.metro}</span>
            </div>

            <h1 className="mt-5 text-[clamp(2.1rem,5vw,3.6rem)] font-display font-normal leading-[1.12] text-white">
              Digital Growth & Web Engineering in {location.city}, {location.stateCode}
            </h1>
            <p className="mt-4 text-[16px] leading-relaxed text-white/60">
              {location.localContext}
            </p>
          </header>

          {/* Economic Hub & Metro Growth Card */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/[0.08] bg-[#0d0d12] p-8">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2563eb]/20 text-[#2563eb]">
                <Building size={18} />
              </span>
              <h2 className="mt-4 text-[18px] font-medium text-white">
                Economic Ecosystem
              </h2>
              <p className="mt-2 text-[14px] leading-relaxed text-white/60">
                {location.economicHub}
              </p>
            </div>

            <div className="rounded-3xl border border-white/[0.08] bg-[#0d0d12] p-8">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                <TrendingUp size={18} />
              </span>
              <h2 className="mt-4 text-[18px] font-medium text-white">
                Regional Growth Trend
              </h2>
              <p className="mt-2 text-[14px] leading-relaxed text-white/60">
                {location.growthStat}
              </p>
            </div>
          </div>

          {/* Industry Solutions in this Metro */}
          <section className="mt-20">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <span className="font-accent text-[10px] uppercase tracking-[0.2em] text-[#a5aef0]">
                  Industry Specializations in {location.city}
                </span>
                <h2 className="mt-2 text-[clamp(1.7rem,3.2vw,2.4rem)] font-display font-normal text-white">
                  Targeted Solutions for {location.city} Businesses
                </h2>
              </div>
              <p className="text-[13px] text-white/45 max-w-sm">
                Explore our vertical-specific web development and SEO systems for {location.city}.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {industries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/seo/${ind.slug}/${location.slug}`}
                  className="group rounded-2xl border border-white/[0.07] bg-[#0d0d12] p-5 transition-all duration-300 hover:border-[#5e6ad2]/50 hover:bg-[#12121a]"
                >
                  <p className="text-[11px] font-semibold text-white/40 uppercase">
                    {ind.shortName}
                  </p>
                  <h3 className="mt-2 text-[15px] font-medium text-white group-hover:text-[#a5aef0] transition-colors">
                    {ind.name} in {location.city}
                  </h3>
                  <div className="mt-4 flex items-center justify-between text-[11px] text-white/35">
                    <span>View Landing Page</span>
                    <span className="text-[#a5aef0] group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <div className="mt-20">
            <FAQAccordion
              eyebrow="LOCAL INTEL"
              heading={`Frequently Asked Questions for ${location.city} Businesses`}
              questions={locationFaqs}
            />
          </div>
        </div>
      </article>

      <CTASection
        title={`Dominate Page 1 in ${location.city}`}
        body={`Partner with ScaleForge to build custom web architecture and high-velocity local SEO that scales your ${location.city} business.`}
        primaryCta={{ label: "Book Strategy Call", href: "/contact" }}
        secondaryCta={{ label: "Run Free Website Audit", href: "/audit" }}
      />
    </>
  );
}
