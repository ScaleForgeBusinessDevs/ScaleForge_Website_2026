import Reveal from "@/components/Reveal";
import InteractiveAuditTool from "@/components/InteractiveAuditTool";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { Sparkles, Shield, Zap, Search, CheckCircle2, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Free Website Speed & SEO Audit | ScaleForge",
  description:
    "Run your site through the Google PageSpeed Insights API and get real Lighthouse scores for speed, Core Web Vitals, technical SEO, accessibility and best practices.",
  alternates: {
    canonical: "https://scalesforge.site/audit",
  },
  openGraph: {
    title: "Free Website Speed & SEO Audit | ScaleForge",
    description:
      "Run your site through the Google PageSpeed Insights API and get real Lighthouse scores for speed, Core Web Vitals, technical SEO, accessibility and best practices.",
    url: "https://scalesforge.site/audit",
    siteName: "ScaleForge",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

const AUDIT_FAQS = [
  {
    q: "How does the audit tool work?",
    a: "We send your URL to the Google PageSpeed Insights API. Google loads your page on a simulated mobile device, runs Lighthouse against it, and returns scores for performance, SEO, accessibility and best practices. We display those results without changing them.",
  },
  {
    q: "How long does the scan take?",
    a: "Most sites finish in 20 to 45 seconds. Large pages take up to a minute. The wait is Google running the page load, not our servers.",
  },
  {
    q: "Is the audit really free?",
    a: "Yes. There is no login, no payment and no limit on how many times you run it. The scores appear on screen as soon as Google returns them.",
  },
  {
    q: "What does a low score actually mean?",
    a: "Lighthouse marks each check as passed, needs improvement or failed. A low performance score usually points to heavy images, render-blocking scripts or slow server response. A low SEO score usually points to missing titles, missing meta descriptions or pages Google cannot crawl. The findings list names the specific check that failed.",
  },
  {
    q: "Why is my score different from the last run?",
    a: "Lighthouse simulates a network and CPU, so a single run varies by a few points between tests. Treat the category score as a range rather than an exact number. The failed checks are the reliable part.",
  },
  {
    q: "Can you fix what the audit finds?",
    a: "Yes. We rebuild sites on Next.js, repair technical SEO, and cut load times. Leave your email after the scan and a member of our team reviews the report by hand, then sends back a prioritised fix list.",
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
        name: "Website Audit",
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
              Free Diagnostic
            </span>
            <h1 className="mt-5 text-[clamp(2.1rem,5vw,3.6rem)] font-display font-normal leading-[1.12] text-white">
              Website Speed &amp; SEO Audit
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-[15.5px] leading-relaxed text-white/60">
              See the same Lighthouse scores Google uses to judge your site. Real
              Core Web Vitals, real crawlability checks, real accessibility
              results. No sign-up.
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
              <h4 className="mt-4 text-[15px] font-medium text-white">Core Web Vitals</h4>
              <p className="mt-2 text-[12.5px] leading-relaxed text-white/50">
                Largest Contentful Paint, Cumulative Layout Shift and Total
                Blocking Time, plus the render-blocking scripts and oversized
                images behind them.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.07] bg-[#101013] p-6 text-center">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#5e6ad2]/20 text-[#a5aef0]">
                <Search size={18} />
              </span>
              <h4 className="mt-4 text-[15px] font-medium text-white">Crawlability Checks</h4>
              <p className="mt-2 text-[12.5px] leading-relaxed text-white/50">
                Whether Google can crawl the page, whether it has a title and
                meta description, and whether your links carry text a crawler
                can read.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.07] bg-[#101013] p-6 text-center">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                <TrendingUp size={18} />
              </span>
              <h4 className="mt-4 text-[15px] font-medium text-white">Mobile &amp; Accessibility</h4>
              <p className="mt-2 text-[12.5px] leading-relaxed text-white/50">
                Viewport configuration, tap target sizes, legible font sizes,
                image alt text and colour contrast on a simulated phone.
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
