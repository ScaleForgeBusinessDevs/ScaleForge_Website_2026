import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { Sparkles, Palette, Code, TrendingUp, SquarePen, Check, ArrowRight, Lightbulb, Megaphone, GitBranch, Crosshair } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Web Design, Development, SEO, Content & AI Automation",
  description:
    "Custom web design, Next.js development, SEO, AI automation, and content creation services from ScaleForge. Five integrated capabilities, one delivery team.",
  alternates: {
    canonical: "https://scaleforgewebdev.vercel.app/services",
  },
  openGraph: {
    title: "Services | Web Design, Development, SEO, Content & AI Automation",
    description:
      "Custom web design, Next.js development, SEO, AI automation, and content creation services from ScaleForge. Five integrated capabilities, one delivery team.",
    url: "https://scaleforgewebdev.vercel.app/services",
    siteName: "ScaleForge",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Web Design, Development, SEO, Content & AI Automation",
    description:
      "Custom web design, Next.js development, SEO, AI automation, and content creation services from ScaleForge. Five integrated capabilities, one delivery team.",
    images: ["/og-image.png"],
  },
};

const SERVICES = [
  {
    icon: Sparkles,
    eyebrow: "FLAGSHIP",
    name: "AI Development & Automation",
    valueProp: "Automated Systems That Generate Leads, Call Prospects, and Publish Content — 24/7",
    body: [
      "We build bespoke AI automation workflows using n8n, Make.com, Zapier, Vapi, Notion, and Google Sheets to eliminate repetitive work, automate lead generation, run AI cold calling agents, and publish content — all on autopilot.",
      "This isn't off-the-shelf chatbots. We architect end-to-end pipelines tailored to how your business actually works, then hand them off with full documentation so your team owns them outright.",
    ],
    included: [
      "Lead generation scraping & enrichment pipelines",
      "AI voice agents for cold calling (Vapi)",
      "Social media auto-publishing to 7+ platforms",
      "AI content generation workflows (n8n / Make.com)",
      "Google Sheets & Notion CRM automation setup",
    ],
    href: "/services/ai-development",
    linkLabel: "View AI Development & Automation Details",
  },
  {
    icon: Palette,
    eyebrow: "DESIGN",
    name: "Web Design",
    valueProp: "Conversion-Focused UI/UX That Builds Trust Instantly",
    body: [
      "Your website is your number-one salesperson. Visitors decide whether to stay or leave inside 50 milliseconds. Our design process starts with your business goals and maps a journey that guides users smoothly toward making an inquiry.",
      "Every layout is drawn in Figma from scratch — zero templates, zero pre-made components — to match your brand and conversion targets exactly.",
    ],
    included: [
      "Custom visual identity and brand style guide",
      "Conversion-focused page layouts & UX blueprints",
      "Mobile-first responsive design breakpoints",
      "Accessibility-compliant (WCAG) UI components",
      "Custom Figma component library for developers",
    ],
    href: "/services/web-design",
    linkLabel: "View Web Design Details",
  },
  {
    icon: Code,
    eyebrow: "ENGINEERING",
    name: "Web Development",
    valueProp: "Fast, Scalable Websites Built with Next.js",
    body: [
      "A gorgeous design is worthless if your website is slow, buggy, or difficult to crawl. We engineer every site in Next.js — the same framework powering Hulu, TikTok, and Twitch — for sub-1.5-second load times, clean semantic HTML, and long-term scalability.",
      "Every line of code is typed. Every component earns its place. The result is a site that ranks on Google's terms and never breaks when a plugin updates.",
    ],
    included: [
      "Next.js and Tailwind CSS custom programming",
      "Performance optimization (Core Web Vitals)",
      "SEO-ready schema markup & semantic architecture",
      "Robust headless CMS integration (Sanity)",
      "Comprehensive cross-browser and cross-device QA",
    ],
    href: "/services/web-development",
    linkLabel: "View Web Development Details",
  },
  {
    icon: TrendingUp,
    eyebrow: "VISIBILITY",
    name: "Search Engine Optimization",
    valueProp: "Rank Higher on Google. Stay There.",
    body: [
      "Organic search is the highest-ROI investment you can make in marketing. We cover all three critical layers: technical foundation fixes, strategic keyword content creation, and authority-building backlink outreach.",
      "Rankings built on shortcuts disappear overnight. We build them to compound — month after month, year after year.",
    ],
    included: [
      "Full technical SEO audit & root-cause fixing",
      "On-page optimization (meta, sitemaps, headings)",
      "Strategic buyer-journey keyword mapping",
      "Local SEO and Google Business Profile optimization",
      "Ethical link building and digital PR outreach",
    ],
    href: "/services/seo",
    linkLabel: "View SEO Details",
  },
  {
    icon: SquarePen,
    eyebrow: "AUTHORITY",
    name: "Content Creation & Strategy",
    valueProp: "Content That Builds Authority and Drives Organic Traffic",
    body: [
      "Content is the fuel that powers your SEO. We craft keyword-targeted articles, resource hubs, and persuasive landing pages designed to position your brand as the leading authority in your industry.",
      "Every paragraph is human-written, E-E-A-T compliant, and structured to win Featured Snippets and AI Overview citations.",
    ],
    included: [
      "Keyword-driven, search-optimized blog posts",
      "Service, product, and geographic landing pages",
      "Content calendar mapping & search gap research",
      "Copywriting aligned with your brand voice",
      "Strategic internal linking pipelines",
    ],
    href: "/services/content-creation",
    linkLabel: "View Content Creation Details",
  },
  {
    icon: Lightbulb,
    eyebrow: "ADVISORY",
    name: "Startup Advisory",
    valueProp: "Strategic Mentorship for Founders Who Move Fast",
    body: [
      "We work directly with early-stage founders to sharpen strategy, build investor-ready materials, and open doors. From pitch deck creation and fundraising strategy to OKR frameworks and go-to-market planning — hands-on advisory from people who have been in the room.",
      "Every engagement is structured, prepared, and output-driven. No generic mentorship sessions. Every week produces something concrete your business can act on immediately.",
    ],
    included: [
      "Weekly one-on-one founder advisory sessions",
      "Investor-ready pitch deck creation and review",
      "Fundraising strategy and round sizing guidance",
      "Go-to-market roadmap and channel selection",
      "Warm investor introductions from our network",
    ],
    href: "/services/startup-advisory",
    linkLabel: "View Startup Advisory Details",
  },
  {
    icon: Megaphone,
    eyebrow: "BRANDING",
    name: "Social Media Branding",
    valueProp: "A Brand Identity That Stops the Scroll",
    body: [
      "We build complete social media brand systems — visual identity, content templates, strategy, and voice guidelines — so your business looks premium and posts consistently across every platform.",
      "Every template is designed to be used the same day. No design skills required. We hand off a full library of editable assets plus a 30-day content calendar your team can execute immediately.",
    ],
    included: [
      "Full visual identity guide (colours, fonts, iconography)",
      "20+ editable post and story templates per platform",
      "30-day content calendar with topic and hook mapping",
      "Optimised profile and bio copy for all platforms",
      "Brand voice and tone-of-voice documentation",
    ],
    href: "/services/social-media-branding",
    linkLabel: "View Social Media Branding Details",
  },
  {
    icon: GitBranch,
    eyebrow: "OPERATIONS",
    name: "Supply Chain Management",
    valueProp: "Custom Software That Forecasts Demand and Cuts Waste",
    body: [
      "We build purpose-built supply chain platforms with AI-powered sales forecasting, real-time inventory intelligence, and supplier analytics — replacing spreadsheets with systems that actually scale.",
      "Custom models trained on your historical data deliver 85–96% forecast accuracy at the 30-day horizon, with automated reorder triggers and live ERP sync eliminating manual data entry entirely.",
    ],
    included: [
      "AI demand forecasting models built on your data",
      "Automated inventory reorder and safety stock engine",
      "Real-time supplier performance scorecards",
      "Full ERP integration (SAP, Oracle, Dynamics, Odoo)",
      "Role-based executive dashboards and alert system",
    ],
    href: "/services/supply-chain-management",
    linkLabel: "View Supply Chain Management Details",
  },
  {
    icon: Crosshair,
    eyebrow: "EFFICIENCY",
    name: "Motion Analysis",
    valueProp: "Eliminate Wasted Motion. Recover Hidden Capacity.",
    body: [
      "We conduct digital time and motion studies that identify exactly where your workforce time goes — and precisely how to get more output from the same headcount without adding cost.",
      "Our studies combine industrial engineering methodology with modern digital capture tools to deliver results that are 3× faster and significantly more accurate than traditional clipboard-based approaches.",
    ],
    included: [
      "Full digital time study with elemental breakdown",
      "Workflow and motion mapping with annotated diagrams",
      "Standard time calculations and performance ratings",
      "Efficiency benchmarking against industry norms",
      "90-day improvement roadmap with projected ROI",
    ],
    href: "/services/motion-analysis",
    linkLabel: "View Motion Analysis Details",
  },
];

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR CAPABILITIES"
        title="Full-Service Web, SEO, and AI Solutions"
        subhead="From building AI automation pipelines to coding custom platforms to ranking them on page one of Google — ScaleForge delivers every service your business needs to grow online, under one roof."
        primaryCta={{ label: "Book a Free Strategy Call", href: "https://cal.com/shahood-saleem-gbzisb/30min" }}
        secondaryCta={{ label: "View Pricing", href: "/pricing" }}
      />

      <section className="bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[860px] px-6 text-center lg:px-10">
          <Reveal>
            <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              Everything You Need to Build, Rank, and Scale
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-white/45">
              We don&apos;t believe in half-measures. Having a gorgeous website means nothing if no one can find it on
              search. Ranking on page one of Google is worthless if your page is slow and fails to convert. And running
              expensive ad campaigns is a waste if your business still answers leads manually at 9am the next morning.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-white/45">
              Our services are engineered to work in tandem. Design shapes the user experience. Development guarantees
              supersonic speed. SEO drives targeted traffic. Content converts it. AI automation handles the volume — so
              you scale without scaling overhead.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#08080a] pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="flex flex-col gap-8">
            {SERVICES.map((service, i) => (
              <Reveal
                key={service.name}
                className={`overflow-hidden rounded-3xl border bg-[#101013] ${
                  i === 0 ? "border-white/[0.14] shadow-[0_40px_120px_-50px_rgba(255,255,255,0.2)]" : "border-white/[0.07]"
                }`}
              >
                <div className="grid grid-cols-1 gap-10 p-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:p-12">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70">
                        <service.icon size={18} aria-hidden />
                      </span>
                      <span className="font-accent text-[10px] uppercase tracking-[0.18em] text-white/40">{service.eyebrow}</span>
                    </div>
                    <h2 className="mt-5 text-[24px] font-medium leading-snug text-white sm:text-[28px]">{service.name}</h2>
                    <h3 className="mt-2 text-[15px] leading-snug text-white/55">{service.valueProp}</h3>
                    <div className="mt-5 space-y-4">
                      {service.body.map((para, idx) => (
                        <p key={idx} className="text-[14px] leading-relaxed text-white/45">
                          {para}
                        </p>
                      ))}
                    </div>
                    <Link
                      href={service.href}
                      className="group mt-7 inline-flex items-center gap-2 text-[13.5px] font-medium text-white/75 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white/50"
                    >
                      {service.linkLabel}
                      <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
                    </Link>
                  </div>

                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7">
                    <p className="font-accent text-[10px] uppercase tracking-[0.18em] text-white/40">What&apos;s Included</p>
                    <ul className="mt-5 space-y-3">
                      {service.included.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-white/55">
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white/15 text-[9px] text-white/60">
                            <Check size={9} aria-hidden />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure Where to Start?"
        body="Every business has unique growth dynamics. Book a free 30-minute strategic briefing. We'll analyze your current site's search presence and draft a custom action plan — no obligation, no upsell."
        primaryCta={{ label: "Book a Free Strategy Call", href: "https://cal.com/shahood-saleem-gbzisb/30min" }}
        secondaryCta={{ label: "See Pricing", href: "/pricing" }}
      />
    </>
  );
}
