import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { getAllCaseStudies } from "@/lib/programmaticSeo";
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";

export const metadata = {
  title: "Case Studies & Client Proof | ScaleForge",
  description:
    "Explore real, verified client case studies and measurable outcomes delivered by ScaleForge across custom Next.js web development, SEO, and AI automation.",
  alternates: {
    canonical: "https://scalesforge.site/case-studies",
  },
  openGraph: {
    title: "Case Studies & Client Proof | ScaleForge",
    description:
      "Explore real, verified client case studies and measurable outcomes delivered by ScaleForge across custom Next.js web development, SEO, and AI automation.",
    url: "https://scalesforge.site/case-studies",
    siteName: "ScaleForge",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();

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
        name: "Case Studies",
        item: "https://scalesforge.site/case-studies",
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
              Verified Proof & Outcomes
            </span>
            <h1 className="mt-5 text-[clamp(2.1rem,5vw,3.6rem)] font-display font-normal leading-[1.12] text-white">
              Proven Results for Ambitious Brands
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-[15.5px] leading-relaxed text-white/60">
              Explore how we engineer custom web architectures, dominate organic search, and automate operational workflows for scaling businesses.
            </p>
          </Reveal>

          {/* Case Studies Grid */}
          <Reveal stagger className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            {caseStudies.map((study) => (
              <div
                key={study.slug}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0d0d12] p-8 transition-all duration-300 hover:border-[#5e6ad2]/40 hover:bg-[#111118]"
              >
                <div>
                  {/* Category & Hero Metric */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-[11px] font-medium text-white/65">
                      {study.industry}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-[11px] font-semibold text-emerald-400">
                      <TrendingUp size={12} />
                      {study.heroMetric}
                    </span>
                  </div>

                  <h2 className="mt-6 text-[20px] font-medium leading-snug text-white transition-colors group-hover:text-[#a5aef0]">
                    {study.title}
                  </h2>

                  <p className="mt-3 text-[13.5px] leading-relaxed text-white/50 line-clamp-3">
                    {study.challenge}
                  </p>

                  {/* Metrics Grid */}
                  <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                    {study.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx}>
                        <p className="text-[18px] font-display text-white">{m.value}</p>
                        <p className="text-[11px] text-white/40">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  {study.testimonial && (
                    <blockquote className="mt-6 border-l-2 border-[#5e6ad2]/40 pl-3.5 text-[12.5px] italic text-white/60">
                      &ldquo;{study.testimonial.quote}&rdquo;
                      <span className="block mt-1 font-normal not-italic text-white/40">
                        — {study.testimonial.author}, {study.testimonial.role}
                      </span>
                    </blockquote>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {study.services.map((svc) => (
                      <span key={svc} className="text-[11px] text-white/35">
                        #{svc}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-1.5 text-[12px] font-medium text-white transition-colors hover:text-[#a5aef0]"
                  >
                    Read Full Story
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Ready to Build Your Growth Case Study?"
        body="Let's build a high-performance digital presence that scales your qualified inbound pipeline predictably."
        primaryCta={{ label: "Book Strategy Call", href: "/contact" }}
        secondaryCta={{ label: "Instant Website Audit", href: "/audit" }}
      />
    </>
  );
}
