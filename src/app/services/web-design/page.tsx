import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import { PenTool, Split, Smartphone, Palette, Rocket, Check, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Design Services | Custom UI/UX from ScaleForge",
  description:
    "ScaleForge designs custom, conversion-focused websites in Figma. Zero templates. Mobile-first, WCAG-compliant, brand-driven design that turns clicks into clients.",
  alternates: {
    canonical: "https://scaleforgewebdev.vercel.app/services/web-design",
  },
  openGraph: {
    title: "Web Design Services | Custom UI/UX from ScaleForge",
    description:
      "ScaleForge designs custom, conversion-focused websites in Figma. Zero templates. Mobile-first, WCAG-compliant, brand-driven design that turns clicks into clients.",
    url: "https://scaleforgewebdev.vercel.app/services/web-design",
    siteName: "ScaleForge",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Services | Custom UI/UX from ScaleForge",
    description:
      "ScaleForge designs custom, conversion-focused websites in Figma. Zero templates. Mobile-first, WCAG-compliant, brand-driven design that turns clicks into clients.",
    images: ["/og-image.png"],
  },
};

const OFFERINGS = [
  {
    icon: PenTool,
    title: "Custom UI Design",
    body: "Absolutely zero pre-made templates. Every layout, margin, and hover effect is drawn from scratch to match your specific brand personality and goals.",
  },
  {
    icon: Split,
    title: "UX & Conversion Architecture",
    body: "We define logical page hierarchies, smooth content layouts, and strategic CTA placements that eliminate scrolling fatigue and drive engagement.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Responsive Design",
    body: "Over 60% of organic traffic is mobile. We design for the smallest screen widths first and scale upward, ensuring your site looks flawless on every device.",
  },
  {
    icon: Palette,
    title: "Brand Identity & Style Guides",
    body: "Logo refinement, harmonized HSL color palettes, modern typography selections, and a comprehensive spacing guide to keep your brand coherent across every touchpoint.",
  },
  {
    icon: Rocket,
    title: "Landing Page Optimization",
    body: "High-converting standalone single-page systems specifically tuned for Google Ads, social media campaigns, and fast lead acquisition.",
  },
];

const STANDARDS = [
  "Comprehensive competitor visual design audit",
  "Custom high-fidelity wireframes and editable Figma files",
  "Full typography hierarchy and brand color scales",
  "Mobile-first responsive design breakpoints",
  "WCAG 2.1 AA accessibility-compliant UI layouts",
  "Optimized conversion-first CTA button mapping",
];

const PROCESS = [
  { title: "Discovery & Research", body: "Analyzing your industry competitors, conversion targets, and target audience persona behavior." },
  { title: "Wireframing & Architecture", body: "Drafting black-and-white structural wireframes to map user flows, layout spacing, and CTA locations." },
  { title: "Visual & Brand Design", body: "Crafting high-fidelity Figmas with tailored assets, premium responsive aesthetics, and brand-aligned typography." },
  { title: "Feedback & Revision Cycles", body: "Interactive visual reviews, iterating collaboratively until the UI/UX perfectly represents your business authority." },
  { title: "Developer Handoff", body: "Exporting clean asset packages, documented component margins, and motion spec assets for implementation." },
];

const FAQS = [
  {
    q: "What is the difference between web design and web development?",
    a: "Design is the visual and experiential layer — wireframes, layouts, color, type, and interaction patterns delivered in Figma. Development is turning those designs into a working website using code (Next.js, React, Tailwind). We do both, and they work best when delivered by the same team.",
  },
  {
    q: "How long does the web design stage take?",
    a: "A typical design engagement takes 2 to 4 weeks depending on scope. A small marketing site (5–7 pages) lands in around 2 weeks. A complex platform with custom illustrations, animations, and multiple templates can take 4 to 6 weeks.",
  },
  {
    q: "Do I need to have brand assets ready?",
    a: "No. If you have a logo, color palette, and rough brand guidelines, we'll work with them. If you don't, we'll build a brand identity from scratch as part of the engagement. Either way, you leave with a fully documented style guide.",
  },
  {
    q: "Will my custom design be mobile-friendly?",
    a: "Yes. We design mobile-first, which means the smallest screen size is the starting point. Every layout, every component, every animation is tested across iPhones, Android phones, and tablets before sign-off.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes — and it's one of our most common engagements. We start with a full audit of your current site (analytics, heatmaps, competitor analysis) and design a new version specifically tuned to lift the metrics you care about: time on page, bounce rate, conversion rate.",
  },
];

export default function WebDesignPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Web Design",
    "serviceType": "UI/UX Web Design",
    "provider": {
      "@type": "Organization",
      "name": "ScaleForge",
      "url": "https://scaleforgewebdev.vercel.app"
    },
    "description": "ScaleForge designs custom, conversion-focused websites in Figma. Zero templates. Mobile-first, WCAG-compliant, brand-driven design that turns clicks into clients.",
    "areaServed": "Worldwide",
    "url": "https://scaleforgewebdev.vercel.app/services/web-design"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageHero
        eyebrow="INTERACTIVE DESIGN"
        title="Web Design That Converts Traffic into Clients"
        subhead="ScaleForge designs custom, conversion-focused websites for ambitious businesses. Every layout, color choice, and interaction is engineered to build trust and drive direct action."
        primaryCta={{ label: "Book a Free Design Briefing", href: "https://cal.com/shahood-saleem-gbzisb/30min" }}
        secondaryCta={{ label: "See Our Work", href: "/blog?type=case-studies" }}
      />

      {/* Did You Know */}
      <section className="border-y border-white/[0.06] bg-[#0c0c0f] py-24 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-6 text-center lg:px-10">
          <Reveal className="flex flex-col items-center">
            <p className="mx-auto mt-7 text-[clamp(1.4rem,3vw,1.9rem)] font-display font-normal leading-[1.3] text-white">
              &ldquo;It takes only 50 milliseconds (0.05 seconds) for users to form an opinion about your website&apos;s
              aesthetic and decide whether they will stay or leave.&rdquo;
            </p>
            <p className="mx-auto mt-7 max-w-xl text-[14.5px] leading-relaxed text-white/45">
              If your web presence feels outdated, slow, or difficult to navigate, you lose prospect trust immediately.
              A generic template is a costly liability. High-fidelity custom design is a powerful growth asset — and
              the cheapest way to lift conversions across every channel feeding into your site.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Core Design Offerings */}
      <section className="bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              Our Core Design Offerings
            </h2>
          </Reveal>

          <Reveal stagger staggerAmount={0.07} className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {OFFERINGS.map((item) => (
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

      {/* Standards Included */}
      <section className="border-y border-white/[0.06] bg-[#0c0c0f] py-24 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <Reveal>
              <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
                Every Engagement Includes
              </h2>
              <ul className="mt-8 space-y-3">
                {STANDARDS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] leading-relaxed text-white/55">
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
                100% custom wireframes in Figma. No templates. No stock layouts. No exceptions.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5-Step Design Process */}
      <section className="bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[860px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              Our 5-Step Web Design Process
            </h2>
          </Reveal>

          <Reveal className="mt-14 flex flex-col">
            {PROCESS.map((step, i) => (
              <div key={step.title} className="flex gap-6 border-t border-white/[0.07] py-6 first:border-t-0">
                <span className="font-accent text-[13px] text-white/30">0{i + 1}</span>
                <div>
                  <h3 className="text-[15px] font-medium text-white">{step.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-white/45">
                    {i === 4 ? (
                      <>
                        Exporting clean asset packages, documented component margins, and motion spec assets for{" "}
                        <Link
                          href="/services/web-development"
                          className="text-white/60 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white/50"
                        >
                          implementation
                        </Link>
                        .
                      </>
                    ) : (
                      step.body
                    )}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <FAQAccordion eyebrow="CLARITY" heading="Design Frequently Asked Questions" questions={FAQS} />

      <CTASection
        title="Ready for a Website That Works as Hard as You Do?"
        body="Book a free 30-minute design briefing. We'll review your current layout, identify user friction points, and sketch a custom visual path forward."
        primaryCta={{ label: "Book a Free Design Briefing", href: "https://cal.com/shahood-saleem-gbzisb/30min" }}
        secondaryCta={{ label: "See Our Work", href: "/blog?type=case-studies" }}
      />
    </>
  );
}
