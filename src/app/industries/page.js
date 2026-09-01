import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { getAllIndustries } from "@/lib/programmaticSeo";
import { ArrowRight, Sparkles, Shield, Building2, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Industry Verticals & Digital Solutions | ScaleForge",
  description:
    "Explore bespoke web development, local SEO, and custom AI automations engineered specifically for 20 specialized industry verticals by ScaleForge.",
  alternates: {
    canonical: "https://scalesforge.site/industries",
  },
  openGraph: {
    title: "Industry Verticals & Digital Solutions | ScaleForge",
    description:
      "Explore bespoke web development, local SEO, and custom AI automations engineered specifically for 20 specialized industry verticals by ScaleForge.",
    url: "https://scalesforge.site/industries",
    siteName: "ScaleForge",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function IndustriesIndexPage() {
  const industries = getAllIndustries();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://scalesforge.site",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: "https://scalesforge.site/industries",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="relative overflow-hidden bg-[#08080a] pb-24 pt-36 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(94,106,210,0.15),rgba(255,255,255,0))]" />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="font-accent text-[10px] uppercase tracking-[0.2em] text-[#a5aef0]">
              Vertical Specialization
            </span>
            <h1 className="mt-5 text-[clamp(2.1rem,5vw,3.6rem)] font-display font-normal leading-[1.12] text-white">
              Bespoke Growth Systems by Industry
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-[15.5px] leading-relaxed text-white/60">
              We do not build generic template websites. Every industry solution is custom-architected around the specific search intent, compliance rules, and conversion drivers of your vertical.
            </p>
          </Reveal>

          {/* Industries Grid */}
          <Reveal stagger className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-[#0d0d12] p-7 transition-all duration-300 hover:border-[#5e6ad2]/50 hover:bg-[#12121a]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold tracking-wider text-white/40 uppercase">
                      {ind.category}
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.04] text-white/40 transition-colors group-hover:bg-[#5e6ad2]/20 group-hover:text-[#a5aef0]">
                      <ArrowRight size={13} />
                    </span>
                  </div>

                  <h2 className="mt-4 text-[18px] font-medium text-white group-hover:text-[#a5aef0] transition-colors">
                    {ind.name}
                  </h2>

                  <p className="mt-2.5 text-[13px] leading-relaxed text-white/50 line-clamp-3">
                    {ind.marketStat}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[12px] text-white/40">
                  <span>Explore Solutions</span>
                  <span className="text-[#a5aef0] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Don't See Your Specific Niche?"
        body="We architect custom Next.js platforms, local SEO engines, and automated operational pipelines for specialized commercial sectors worldwide."
        primaryCta={{ label: "Book Strategy Call", href: "/contact" }}
        secondaryCta={{ label: "Run Free Website Audit", href: "/audit" }}
      />
    </>
  );
}
