import { notFound } from "next/navigation";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/programmaticSeo";
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles, Building, MapPin, Calendar } from "lucide-react";

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  return {
    title: `${study.title} | Case Study | ScaleForge`,
    description: `See how ScaleForge helped ${study.client} achieve ${study.heroMetric} through custom web development, SEO, and automation.`,
    alternates: {
      canonical: `https://scalesforge.site/case-studies/${study.slug}`,
    },
  };
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

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
      {
        "@type": "ListItem",
        position: 3,
        name: study.title,
        item: `https://scalesforge.site/case-studies/${study.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="relative overflow-hidden bg-[#08080a] pb-24 pt-36 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(94,106,210,0.18),rgba(255,255,255,0))]" />

        <div className="relative mx-auto max-w-[1200px] px-6 lg:px-10">
          {/* Back link */}
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-white/50 transition-colors hover:text-white"
          >
            ← Back to All Case Studies
          </Link>

          {/* Header */}
          <header className="mt-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-[11px] font-medium text-white/70">
                {study.industry}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-[11px] font-semibold text-emerald-400">
                <TrendingUp size={13} />
                {study.heroMetric}
              </span>
            </div>

            <h1 className="mt-5 text-[clamp(2rem,4.5vw,3.4rem)] font-display font-normal leading-[1.14] text-white">
              {study.title}
            </h1>

            {/* Meta details bar */}
            <div className="mt-8 flex flex-wrap items-center gap-6 border-y border-white/[0.08] py-4 text-[13px] text-white/55">
              <div className="flex items-center gap-2">
                <Building size={15} className="text-[#a5aef0]" />
                <span>{study.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-[#a5aef0]" />
                <span>{study.clientLocation}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={15} className="text-[#a5aef0]" />
                <span>Published {study.publishedAt}</span>
              </div>
            </div>
          </header>

          {/* Metrics Spotlight Grid */}
          <section className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {study.metrics.map((metric, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/[0.08] bg-[#0d0d12] p-6 text-center"
              >
                <p className="text-[clamp(1.8rem,3vw,2.4rem)] font-display font-normal text-white">
                  {metric.value}
                </p>
                <p className="mt-1 text-[12px] text-white/45">{metric.label}</p>
              </div>
            ))}
          </section>

          {/* Challenge & Solution Content */}
          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-12">
              <section>
                <h2 className="text-[22px] font-display font-normal text-white">
                  The Challenge
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-white/70">
                  {study.challenge}
                </p>
              </section>

              <section>
                <h2 className="text-[22px] font-display font-normal text-white">
                  The ScaleForge Solution
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-white/70">
                  {study.solution}
                </p>
              </section>

              {/* Client Quote Card */}
              {study.testimonial && (
                <div className="rounded-3xl border border-[#5e6ad2]/30 bg-[#5e6ad2]/[0.08] p-8">
                  <blockquote className="text-[16px] italic leading-relaxed text-white/90">
                    &ldquo;{study.testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="mt-5 flex items-center gap-3">
                    <img
                      src={study.testimonial.avatar}
                      alt={study.testimonial.author}
                      className="h-10 w-10 rounded-full object-cover border border-white/20"
                    />
                    <div>
                      <p className="text-[13.5px] font-semibold text-white">
                        {study.testimonial.author}
                      </p>
                      <p className="text-[11.5px] text-white/50">
                        {study.testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar with Scope & Industry Links */}
            <aside className="space-y-6">
              <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d12] p-6">
                <h3 className="text-[12px] font-semibold tracking-wider text-white/50 uppercase">
                  Delivered Capabilities
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {study.services.map((svc) => (
                    <li key={svc} className="flex items-center gap-2 text-[13px] text-white/75">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                      {svc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d12] p-6">
                <h3 className="text-[12px] font-semibold tracking-wider text-white/50 uppercase">
                  Related Industry Hub
                </h3>
                <p className="mt-2 text-[13px] text-white/60">
                  Explore how we scale other firms in {study.industry}.
                </p>
                <Link
                  href={`/industries/${study.industrySlug}`}
                  className="mt-4 inline-flex items-center gap-2 text-[12.5px] font-medium text-[#a5aef0] hover:underline"
                >
                  View {study.industry} Solutions →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <CTASection
        title="Ready to Achieve Similar Results?"
        body="Let's build a custom digital growth engine tailored specifically to your vertical and commercial goals."
        primaryCta={{ label: "Book Strategy Call", href: "/contact" }}
        secondaryCta={{ label: "Instant Website Audit", href: "/audit" }}
      />
    </>
  );
}
