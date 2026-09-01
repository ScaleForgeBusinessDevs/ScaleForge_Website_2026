import Reveal from "@/components/Reveal";
import InteractiveAuditTool from "@/components/InteractiveAuditTool";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { Sparkles, Shield, Zap, Search, CheckCircle2, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Free Website & SEO Performance Audit | ScaleForge",
  description:
    "Run an instant 15-second diagnostic on your website. Audit Core Web Vitals, local SEO schema, mobile responsiveness, and conversion architecture with ScaleForge.",
  alternates: {
    canonical: "https://scalesforge.site/audit",
  },
  openGraph: {
    title: "Free Website & SEO Performance Audit | ScaleForge",
    description:
      "Run an instant 15-second diagnostic on your website. Audit Core Web Vitals, local SEO schema, mobile responsiveness, and conversion architecture with ScaleForge.",
    url: "https://scalesforge.site/audit",
    siteName: "ScaleForge",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

const AUDIT_FAQS = [
  {
    q: "How does the ScaleForge instant audit tool work?",
    a: "Our automated diagnostic engine inspects your domain's public HTTP headers, Core Web Vitals indicators, structured schema markup, mobile viewport configuration, and key conversion pathways in real time.",
  },
  {
    q: "Is this preliminary audit really 100% free?",
    a: "Yes. You get an immediate on-screen score across Performance, SEO, Mobile UX, and Conversion Readiness with zero login or payment required.",
  },
  {
    q: "What happens if my site scores below 70?",
    a: "A score below 70 indicates critical leaks — such as slow load times driving up bounce rates or missing schema markup causing Google to ignore your local business. You can request our team's manual technical roadmap to fix these issues.",
  },
  {
    q: "Can you fix the issues discovered during the audit?",
    a: "Yes. ScaleForge specializes in high-velocity custom Next.js web development, technical SEO repairs, and AI automation workflows designed to turn underperforming websites into category leaders.",
  },
];

export default function AuditPage() {
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
        name: "Instant Website Audit",
        item: "https://scalesforge.site/audit",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#08080a] pb-20 pt-36 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(94,106,210,0.18),rgba(255,255,255,0))]" />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="font-accent text-[10px] uppercase tracking-[0.2em] text-[#a5aef0]">
              Competitive Advantage Engine
            </span>
            <h1 className="mt-5 text-[clamp(2.1rem,5vw,3.6rem)] font-display font-normal leading-[1.12] text-white">
              Instant Website & SEO Performance Audit
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-[15.5px] leading-relaxed text-white/60">
              Discover hidden technical bottlenecks, speed penalties, missing schema tags, and conversion drop-offs costing your business qualified clients every month.
            </p>
          </Reveal>

          {/* Interactive Audit Tool */}
          <div className="mx-auto mt-14 max-w-3xl">
            <InteractiveAuditTool />
          </div>

          {/* Value Props Grid */}
          <Reveal stagger className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.07] bg-[#101013] p-6 text-center">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#2563eb]/20 text-[#2563eb]">
                <Zap size={18} />
              </span>
              <h4 className="mt-4 text-[15px] font-medium text-white">Sub-Second Speed Checks</h4>
              <p className="mt-2 text-[12.5px] leading-relaxed text-white/50">
                Identify heavy render-blocking scripts and uncompressed assets destroying your Google Core Web Vitals.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.07] bg-[#101013] p-6 text-center">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#5e6ad2]/20 text-[#a5aef0]">
                <Search size={18} />
              </span>
              <h4 className="mt-4 text-[15px] font-medium text-white">Search Schema Verification</h4>
              <p className="mt-2 text-[12.5px] leading-relaxed text-white/50">
                Ensure Google crawlers can accurately index your local business coordinates, services, and client reviews.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.07] bg-[#101013] p-6 text-center">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                <TrendingUp size={18} />
              </span>
              <h4 className="mt-4 text-[15px] font-medium text-white">Conversion Funnel Analysis</h4>
              <p className="mt-2 text-[12.5px] leading-relaxed text-white/50">
                Pinpoint mobile UX friction points and missing call-to-action triggers that cause prospects to bounce.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion
        eyebrow="AUDIT INTEL"
        heading="Frequently Asked Questions"
        questions={AUDIT_FAQS}
      />

      <CTASection
        title="Ready to Fix Your Audit Findings?"
        body="Book a free 30-minute technical review with our senior engineering team. We'll walk you through our recommended Next.js and SEO growth roadmap."
        primaryCta={{ label: "Book Strategy Call", href: "/contact" }}
        secondaryCta={{ label: "View Transparent Pricing", href: "/pricing" }}
      />
    </>
  );
}
