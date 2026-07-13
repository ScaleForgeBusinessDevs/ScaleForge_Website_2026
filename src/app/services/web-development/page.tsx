import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import { Globe, ShoppingBag, Zap, Sidebar, SquarePen, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Next.js Web Development Services | ScaleForge",
  description:
    "Custom Next.js, React, and TypeScript development from ScaleForge. Sub-1.5s load times, 90+ PageSpeed scores, and Core Web Vitals dominance — engineered for SEO and conversions.",
  alternates: {
    canonical: "https://scaleforgewebdev.vercel.app/services/web-development",
  },
  openGraph: {
    title: "Next.js Web Development Services | ScaleForge",
    description:
      "Custom Next.js, React, and TypeScript development from ScaleForge. Sub-1.5s load times, 90+ PageSpeed scores, and Core Web Vitals dominance — engineered for SEO and conversions.",
    url: "https://scaleforgewebdev.vercel.app/services/web-development",
    siteName: "ScaleForge",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Web Development Services | ScaleForge",
    description:
      "Custom Next.js, React, and TypeScript development from ScaleForge. Sub-1.5s load times, 90+ PageSpeed scores, and Core Web Vitals dominance — engineered for SEO and conversions.",
    images: ["/og-image.png"],
  },
};

const CAPABILITIES = [
  {
    icon: Globe,
    title: "Business Websites",
    body: "Highly customized web presences from 5 to 30+ pages, built with semantic HTML and full metadata schemas to secure top-tier organic visibility.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Portals",
    body: "Supersonic online stores featuring advanced catalogs, instant checkout, secure payment pipelines, and custom inventory databases.",
  },
  {
    icon: Zap,
    title: "Landing Pages",
    body: "Single-page lightweight React applications built specifically for extreme loading speeds and automated Google Ads conversions.",
  },
  {
    icon: Sidebar,
    title: "Web Application Interfaces",
    body: "Clean, reliable, and responsive React/Next.js client-facing frontends tailored for SaaS products and online platforms.",
  },
  {
    icon: SquarePen,
    title: "Headless CMS Integration",
    body: "Connecting our custom components to user-friendly editing dashboards like Sanity CMS, allowing your team to update content without code.",
  },
];

const TECH_STACK = [
  {
    name: "Next.js",
    body: "The powerful React framework trusted by Hulu, TikTok, and Twitch to deliver server-side pre-rendering and static page generation.",
  },
  {
    name: "Tailwind CSS",
    body: "A utility-first stylesheet framework that compiles down to incredibly tiny, fast-loading, bloat-free CSS classes.",
  },
  {
    name: "Vercel CDN",
    body: "Global serverless hosting that caches your website at edge nodes around the world, delivering sub-200ms response times.",
  },
  {
    name: "TypeScript",
    body: "A strict syntactical superset of JavaScript that adds robust type safety, eliminating runtime layout bugs before deployment.",
  },
];

const BENCHMARKS = [
  { metric: "Page Load Time", ours: "Under 1.5s", industry: "3.0s – 5.0s", impact: "Higher retention" },
  { metric: "PageSpeed Score", ours: "90+ (Mobile)", industry: "50 – 70 (Avg)", impact: "Google advantage" },
  { metric: "Largest Contentful Paint", ours: "Under 2.5s", industry: "4.0s+ (Avg)", impact: "Better SEO rating" },
  { metric: "Cumulative Layout Shift", ours: "Under 0.1", industry: "0.25+ (Avg)", impact: "Stable structure" },
  { metric: "Time to First Byte", ours: "Under 200ms", industry: "400ms – 600ms", impact: "Edge hosted" },
];

const FAQS = [
  {
    q: "What is Next.js and why do you use it?",
    a: "Next.js is a React-based framework that powers some of the highest-traffic sites on the internet — Hulu, TikTok, Twitch, Notion. It combines server-side rendering, static generation, and edge caching to deliver pages faster than traditional WordPress or PHP setups. For SEO and conversion, it's the strongest foundation available.",
  },
  {
    q: "What is the development timeline for a new website?",
    a: "A custom build typically runs 3 to 6 weeks from design hand-off to production launch. A standard 10–15 page site lands in 3 to 4 weeks. Complex builds (e-commerce, custom integrations, multi-language) take 5 to 8 weeks. We commit to firm milestones at kickoff.",
  },
  {
    q: "Can you migrate my existing site to Next.js?",
    a: "Yes. Migration is a common engagement. We audit the existing site, map content into our new architecture, set up redirects to preserve SEO equity, and rebuild from scratch on Next.js. The new site is faster, leaner, and ranks better — without losing the search authority you've already earned.",
  },
  {
    q: "Do I need to understand coding to edit my site later?",
    a: "No. We integrate a headless CMS (typically Sanity) that gives you a clean visual dashboard to edit pages, blog posts, and content without touching code. Your team updates content the way you'd update a Google Doc.",
  },
  {
    q: "What support do you provide after the site goes live?",
    a: "Every engagement includes 30 to 90 days of post-launch support (varies by tier — see pricing). After that, we offer optional monthly retainers for ongoing development, performance monitoring, and feature additions. Most clients move to a small retainer once the initial build is stable.",
  },
];

export default function WebDevelopmentPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Next.js Web Development",
    "serviceType": "Web Development",
    "provider": {
      "@type": "Organization",
      "name": "ScaleForge",
      "url": "https://scaleforgewebdev.vercel.app"
    },
    "description": "Custom Next.js, React, and TypeScript development from ScaleForge. Sub-1.5s load times, 90+ PageSpeed scores, and Core Web Vitals dominance — engineered for SEO and conversions.",
    "areaServed": "Worldwide",
    "url": "https://scaleforgewebdev.vercel.app/services/web-development"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageHero
        eyebrow="ELITE CODING"
        title="Custom Web Development Built for Supersonic Speed"
        subhead="We build custom websites using Next.js — the same framework powering Hulu, TikTok, and Twitch. Every line of code is compiled for Core Web Vitals dominance and lasting search authority."
        primaryCta={{ label: "Book a Free Technical Audit", href: "https://cal.com/shahood-saleem-gbzisb/30min" }}
        secondaryCta={{ label: "See Our Stack", href: "#stack" }}
      />

      {/* Why Speed Is a Ranking Factor */}
      <section className="border-y border-white/[0.06] bg-[#0c0c0f] py-24 lg:py-32">
        <div className="mx-auto max-w-[860px] px-6 text-center lg:px-10">
          <Reveal>
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              Why Speed Is a Ranking Factor
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-white/45">
              Google uses loading speed as an explicit mobile search ranking factor. Over{" "}
              <strong className="font-medium text-white/70">40% of internet users abandon a web page</strong> if it
              takes more than 3 seconds to render. A slow, bloated WordPress site doesn&apos;t just annoy visitors —
              it&apos;s actively pushing your rankings down.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-white/45">
              Our handcrafted Next.js builds give you a tremendous performance headstart over legacy platforms.
              Sub-1.5-second load times. Perfect Lighthouse scores. Zero bloat. Every component earns its place.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Build Capabilities */}
      <section className="bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              Our Development Capabilities
            </h2>
          </Reveal>

          <Reveal stagger staggerAmount={0.07} className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((item) => (
              <div key={item.title} className="flex flex-col gap-4 rounded-2xl border border-white/[0.07] bg-[#101013] p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70">
                  <item.icon size={16} aria-hidden />
                </span>
                <div>
                  <h3 className="text-[15px] font-medium text-white">{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/45">{item.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="stack" className="scroll-mt-28 border-y border-white/[0.06] bg-[#0c0c0f] py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              Engineered with Top-Tier Tools
            </h2>
          </Reveal>

          <Reveal stagger staggerAmount={0.08} className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {TECH_STACK.map((tool) => (
              <div key={tool.name} className="rounded-2xl border border-white/[0.07] bg-[#101013] p-7">
                <h3 className="text-[17px] font-medium text-white">{tool.name}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-white/45">{tool.body}</p>
              </div>
            ))}
          </Reveal>

          {/* inline code snippet — credibility signal for dev buyers */}
          <Reveal className="mt-6 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#101013] p-6 font-mono text-[12.5px] leading-relaxed">
            <p className="text-white/30">{"// Every page export is typed and clean"}</p>
            <p className="mt-2">
              <span className="text-[#6fcf8e]">export default async function</span>{" "}
              <span className="text-white/80">Page</span>
              {"("}
              <span className="text-white/55">{"{ params }: PageProps"}</span>
              {") {"}
            </p>
            <p className="pl-4 text-white/55">
              <span className="text-[#6fcf8e]">const</span> data ={" "}
              <span className="text-[#e8633a]">await</span> fetchData(params.slug);
            </p>
            <p className="pl-4 text-white/55">
              <span className="text-[#6fcf8e]">return</span> &lt;<span className="text-white/80">PageContent</span> data={"{data}"} /&gt;;
            </p>
            <p>{"}"}</p>
            <div className="mt-4 flex items-center gap-4 border-t border-white/[0.07] pt-4 text-[11px] text-white/35">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-[#6fcf8e]/70" aria-hidden /> 0 TypeScript errors
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-[#6fcf8e]/70" aria-hidden /> Static + server hybrid
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Performance Benchmarks */}
      <section className="bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              Our Performance Targets
            </h2>
          </Reveal>

          <Reveal className="mt-14 overflow-hidden rounded-2xl border border-white/[0.07]">
            <div className="grid grid-cols-4 gap-0 border-b border-white/[0.07] bg-white/[0.02] px-6 py-3">
              {["Core Metric", "ScaleForge Target", "Industry Average", "Impact"].map((h) => (
                <p key={h} className="font-accent text-[10px] uppercase tracking-[0.14em] text-white/40">{h}</p>
              ))}
            </div>
            {BENCHMARKS.map((row, i) => (
              <div
                key={row.metric}
                className={`grid grid-cols-4 gap-0 px-6 py-4 ${i < BENCHMARKS.length - 1 ? "border-b border-white/[0.07]" : ""}`}
              >
                <p className="text-[13.5px] text-white/70">{row.metric}</p>
                <p className="text-[13.5px] font-medium text-[#6fcf8e]">{row.ours}</p>
                <p className="text-[13.5px] text-white/40">{row.industry}</p>
                <p className="text-[13px] text-white/50">{row.impact}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <FAQAccordion eyebrow="CLARITY" heading="Technical Frequently Asked Questions" questions={FAQS} />

      <CTASection
        title="Let Us Build the Website Your Business Deserves"
        body="Book a free 30-minute technical engineering call. We'll review your current hosting and codebase, identify speed bottlenecks, and outline what a high-performance custom build can do for your search traction and conversion rate."
        primaryCta={{ label: "Book a Free Technical Audit", href: "https://cal.com/shahood-saleem-gbzisb/30min" }}
        secondaryCta={{ label: "View Pricing", href: "/pricing#web-development" }}
      />
    </>
  );
}
