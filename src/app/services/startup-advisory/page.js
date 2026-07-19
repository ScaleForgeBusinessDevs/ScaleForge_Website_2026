import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import {
  Lightbulb,
  LineChart,
  Megaphone,
  Target,
  Users,
  Check,
  Quote,
} from "lucide-react";

export const metadata = {
  title: "Startup Advisory Services | Strategic Mentorship from ScaleForge",
  description:
    "ScaleForge provides hands-on startup advisory: pitch deck creation, fundraising strategy, go-to-market planning, and investor introductions for early-stage founders.",
  alternates: {
    canonical: "https://scalesforge.site/services/startup-advisory",
    languages: {
      "en": "https://scalesforge.site/services/startup-advisory",
      "x-default": "https://scalesforge.site/services/startup-advisory"
    },
    media: {
      "only screen and (max-width: 640px)": "https://scalesforge.site/services/startup-advisory"
    }
  },
  keywords: ["Startup Advisory","Pitch Deck Design","Fundraising Strategy Founder","Go To Market Blueprint","Investor Introductions"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    title:
      "Startup Advisory Services | Strategic Mentorship from ScaleForge",
    description:
      "ScaleForge provides hands-on startup advisory: pitch deck creation, fundraising strategy, go-to-market planning, and investor introductions for early-stage founders.",
    url: "https://scalesforge.site/services/startup-advisory",
    siteName: "ScaleForge",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Startup Advisory Services | Strategic Mentorship from ScaleForge",
    description:
      "ScaleForge provides hands-on startup advisory: pitch deck creation, fundraising strategy, go-to-market planning, and investor introductions for early-stage founders.",
    images: ["/og-image.png"],
  },
};

export default function StartupAdvisoryPage() {

const OFFERINGS = [
  { title: "Go-to-Market Strategy", body: "We map your ICP, define your positioning statement, identify the fastest acquisition channels, and build a phased GTM roadmap that minimises burn while maximising early traction.", icon: Target },
  { title: "Pitch Deck Creation", body: "Investor-ready decks that tell a compelling narrative: problem, solution, market size, traction, team, and ask — structured to survive the first 90-second filter from a VC associate.", icon: Lightbulb },
  { title: "Fundraising Strategy", body: "We advise on round sizing, valuation anchoring, SAFE vs. priced round mechanics, and which investor archetypes to target at each stage — from pre-seed angels to Series A funds.", icon: LineChart },
  { title: "Investor Introductions", body: "Warm introductions to our network of angel investors, syndicate leads, and early-stage VCs actively deploying capital in your sector — so your outreach starts at second base.", icon: Users },
  { title: "OKR & KPI Framework Setup", body: "Define the right metrics to track at your stage, set up a lightweight OKR system your team will actually use, and build a weekly cadence that keeps execution locked to strategy.", icon: Megaphone }
];

const PROCESS = [
  { title: "Founder Diagnostic", body: "Deep-dive session mapping your current stage, runway, product-market fit signals, and the top 3 obstacles standing between you and your next milestone." },
  { title: "Strategy Blueprint", body: "We deliver a concise written strategy document covering GTM priorities, fundraising timeline, and 90-day execution milestones." },
  { title: "Pitch & Materials Build", body: "Co-create your investor deck, one-pager, and financial model, iterating until every slide earns its place and every number is defensible." },
  { title: "Investor Targeting", body: "Curate a tiered investor list, draft personalised outreach, and make warm introductions where relevant." },
  { title: "Ongoing Advisory", body: "Weekly check-ins, deal support, and ad-hoc advisory as your raise progresses — we stay in the room until the round closes." }
];

const STANDARDS = [
  "One-on-one weekly founder advisory sessions",
  "Custom pitch deck design and narrative review",
  "Financial model and unit economics audit",
  "Competitive landscape and positioning analysis",
  "Curated investor target list and outreach scripts",
  "Monthly board-level strategy review document"
];

const FAQS = [
  { q: "What stage startups do you work with?", a: "We focus on pre-seed through Series A. The sweet spot is a founder who has a working MVP and at least some early user traction but hasn't yet formalised their fundraising strategy or GTM playbook. We occasionally take on idea-stage founders with unusually strong domain expertise." },
  { q: "Do you take equity in exchange for advisory?", a: "We offer both fee-based and equity-based advisory arrangements depending on the engagement length and the founder's preference. Equity arrangements are typically 0.25–0.75% with a 12–24 month cliff and standard vesting. We're happy to discuss what structure makes most sense for your situation." },
  { q: "How are advisor sessions structured?", a: "Standard engagements include one structured 60-minute call per week. Before each call you submit an update covering metrics, blockers, and questions. We review it in advance and arrive prepared to go deep — no status update theatre, just high-signal strategic discussion." },
  { q: "Can you help us if we're not fundraising yet?", a: "Absolutely. Many of our most impactful advisory relationships start long before a fundraise — working on pricing strategy, hiring sequence, product positioning, and channel selection. Getting these fundamentals right dramatically shortens the time between founding and a fundable traction story." },
  { q: "What sectors do you have the deepest expertise in?", a: "We have the strongest networks and pattern recognition in B2B SaaS, AI/ML tooling, digital media, and professional services tech. We also work with consumer brands and marketplace businesses where the founder brings strong domain expertise we can leverage." }
];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://scalesforge.site"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://scalesforge.site/services"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "Startup Advisory Services",
            "item": "https://scalesforge.site/services/startup-advisory"
        }
    ]
};
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Startup Advisory Services",
    "description": "ScaleForge provides hands-on startup advisory: pitch deck creation, fundraising strategy, go-to-market planning, and investor introductions for early-stage founders.",
    "brand": {
        "@type": "Brand",
        "name": "ScaleForge"
    },
    "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "1200",
        "highPrice": "8000",
        "offerCount": "3"
    }
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <PageHero
        eyebrow="STARTUP ADVISORY"
        title="Strategic Guidance for Founders Who Move Fast"
        subhead="ScaleForge works directly with early-stage founders to sharpen strategy, build investor-ready materials, and open doors. Hands-on advisory from people who have been in the room."
        primaryCta={{
          label: "Book a Free Founder Call",
          href: "https://cal.com/shahood-saleem-gbzisb/30min",
        }}
        secondaryCta={{ label: "View Our Services", href: "/services" }}
      />

      {/* Stat Section */}
      <section className="border-y border-white/[0.06] bg-[#0c0c0f] py-24 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-6 text-center lg:px-10">
          <Reveal className="flex flex-col items-center">
            <p className="mx-auto mt-7 text-[clamp(1.4rem,3vw,1.9rem)] font-display font-normal leading-[1.3] text-white">
              &ldquo;90% of startups fail — but those with active advisors are
              3× more likely to raise their next round successfully.&rdquo;
            </p>
            <p className="mx-auto mt-7 max-w-xl text-[14.5px] leading-relaxed text-white/60">
              The difference between a startup that survives and one that scales
              is rarely the idea — it&apos;s the quality of strategic decisions
              made in the first 18 months. A great advisor compresses your
              learning curve, prevents expensive mistakes, and opens doors that
              take years to open alone.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              What We Advise On
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/60">
              Every engagement is different. We focus on the highest-leverage
              work for your current stage.
            </p>
          </Reveal>

          <Reveal
            stagger
            staggerAmount={0.07}
            className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {OFFERINGS.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 rounded-2xl border border-white/[0.07] bg-[#101013] p-7"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70">
                  <item.icon size={16} aria-hidden />
                </span>
                <div>
                  <h3 className="text-[15px] font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* What's Included */}
      <section className="border-y border-white/[0.06] bg-[#0c0c0f] py-24 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <Reveal>
              <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
                Every Engagement Includes
              </h2>
              <ul className="mt-8 space-y-3">
                {STANDARDS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[14px] leading-relaxed text-white/55"
                  >
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
                We don&apos;t do generic mentorship. Every session is prepared,
                agenda-driven, and designed to produce a concrete output you can
                act on the same week.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Advisory Process */}
      <section className="bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[860px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              How Advisory Engagements Work
            </h2>
          </Reveal>

          <Reveal className="mt-14 flex flex-col">
            {PROCESS.map((step, i) => (
              <div
                key={step.title}
                className="flex gap-6 border-t border-white/[0.07] py-6 first:border-t-0"
              >
                <span className="font-accent text-[13px] text-white/30">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-[15px] font-medium text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-white/60">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <FAQAccordion
        eyebrow="CLARITY"
        heading="Startup Advisory FAQs"
        questions={FAQS}
      />

      <CTASection
        title="Ready to Build Something That Lasts?"
        body="Book a free 30-minute founder diagnostic. We'll review your current traction, identify the biggest strategic gaps, and tell you exactly how we can help — no pitch, no obligation."
        primaryCta={{
          label: "Book a Free Founder Call",
          href: "https://cal.com/shahood-saleem-gbzisb/30min",
        }}
        secondaryCta={{ label: "View All Services", href: "/services" }}
      />
    </>
  );
}
