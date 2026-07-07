import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Approach | How ScaleForge Builds Sites That Rank and Convert",
  description:
    "ScaleForge merges custom React architectures, AI automation, and semantic SEO to deliver sites that dominate search and convert traffic. See how we work.",
  alternates: {
    canonical: "https://scaleforgewebdev.vercel.app/solutions",
  },
  openGraph: {
    title: "Our Approach | How ScaleForge Builds Sites That Rank and Convert",
    description:
      "ScaleForge merges custom React architectures, AI automation, and semantic SEO to deliver sites that dominate search and convert traffic. See how we work.",
    url: "https://scaleforgewebdev.vercel.app/solutions",
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
    title: "Our Approach | How ScaleForge Builds Sites That Rank and Convert",
    description:
      "ScaleForge merges custom React architectures, AI automation, and semantic SEO to deliver sites that dominate search and convert traffic. See how we work.",
    images: ["/og-image.png"],
  },
};

const STATS = [
  { value: "34+", label: "Published Blog Posts" },
  { value: "90+", label: "PageSpeed Score Target" },
  { value: "100%", label: "Custom-Built Code" },
  { value: "1.5s", label: "Target Load Time" },
];

const VALUES = [
  {
    title: "Performance First",
    body: "Every technical and creative decision ties directly back to one question: will this improve conversion rates and search rankings? Lean, fast, and highly intentional.",
  },
  {
    title: "Transparency Always",
    body: "Clear honest reporting, direct access to Slack workspaces, and absolute clarity on project timelines. No sales talk. No vanity metrics.",
  },
  {
    title: "Long-Term Thinking",
    body: "We engineer websites and design SEO pipelines built to compound authority, organic clicks, and value over years — not weeks.",
  },
  {
    title: "Relentless Quality",
    body: "Rigorous speed audits, cross-device testing, and structural review before a single page is published to your live domain.",
  },
];

const INDUSTRIES = [
  "Healthcare and Dental Practices",
  "E-Commerce and Retail Brands",
  "Professional Services & Consulting",
  "Real Estate Agencies",
  "Automotive & Transportation",
  "Luxury Goods & Jewelry Retailers",
  "Local Home Service Businesses",
  "Startups and Scaling SaaS Brands",
];

function CodeSnippetVisual() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#101013] p-6 font-mono text-[12.5px] leading-relaxed">
      <p className="text-white/30">{"// type-safe by default"}</p>
      <p className="mt-2">
        <span className="text-[#6fcf8e]">type</span> <span className="text-white/80">ClientSite</span> = {"{"}
      </p>
      <p className="pl-4 text-white/55">
        ownership: <span className="text-[#e8633a]">&apos;100%&apos;</span>;
      </p>
      <p className="pl-4 text-white/55">
        security: <span className="text-white/80">Readonly</span>&lt;T&gt;;
      </p>
      <p className="pl-4 text-white/55">
        performance: <span className="text-[#e8633a]">&apos;blazing&apos;</span>;
      </p>
      <p>{"}"}</p>
      <div className="mt-4 flex items-center gap-4 border-t border-white/[0.07] pt-4 text-[11px] text-white/40">
        <span className="flex items-center gap-1.5">
          <i className="bi bi-check-circle-fill text-[#6fcf8e]/70" aria-hidden /> Type-safe
        </span>
        <span className="flex items-center gap-1.5">
          <i className="bi bi-check-circle-fill text-[#6fcf8e]/70" aria-hidden /> Zero errors
        </span>
      </div>
    </div>
  );
}

function ScoreDialVisual() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 rounded-2xl border border-white/[0.07] bg-[#101013] p-10 text-center">
      <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-[6px] border-white/[0.07]">
        <div className="absolute inset-0 rounded-full border-[6px] border-transparent border-t-[#6fcf8e] border-r-[#6fcf8e] [transform:rotate(45deg)]" />
        <div>
          <p className="text-[30px] font-bold text-white">100</p>
          <p className="text-[10px] uppercase tracking-[0.12em] text-white/40">Perfect</p>
        </div>
      </div>
      <p className="text-[11px] uppercase tracking-[0.1em] text-white/40">LCP &lt; 1.5s · CLS: 0</p>
    </div>
  );
}

function RankingLadderVisual() {
  const steps = ["#47", "#23", "#11", "#4", "#1"];
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-[#101013] p-7">
      <div className="flex flex-wrap items-center gap-3">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-3">
            <span
              className={`rounded-full border px-3.5 py-1.5 text-[13px] font-medium ${
                i === steps.length - 1 ? "border-[#6fcf8e]/40 bg-[#6fcf8e]/10 text-[#6fcf8e]" : "border-white/15 text-white/55"
              }`}
            >
              {step}
            </span>
            {i < steps.length - 1 && <i className="bi bi-arrow-right text-[12px] text-white/25" aria-hidden />}
          </div>
        ))}
      </div>
      <p className="mt-5 text-[12px] text-white/40">Search position improvement over a sustained content &amp; schema cycle.</p>
    </div>
  );
}

function GrowthGraphVisual() {
  const bars = [18, 28, 40, 58, 78, 100];
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-[#101013] p-7">
      <div className="flex h-32 items-end gap-2.5">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-white/[0.06] to-white/30" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between text-[11px] text-white/40">
        <span>100 visitors</span>
        <span className="flex items-center gap-1.5 text-white/60">
          <i className="bi bi-arrow-up-right text-[#6fcf8e]" aria-hidden /> No ceiling. No rebuild.
        </span>
        <span>100,000+</span>
      </div>
    </div>
  );
}

function RosterVisual() {
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-[#101013] p-7">
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`flex aspect-square items-center justify-center rounded-xl border text-[14px] ${
              i < 4 ? "border-white/15 bg-white/[0.04] text-white/50" : "border-dashed border-white/15 text-white/25"
            }`}
          >
            <i className={`bi ${i < 4 ? "bi-person-fill" : "bi-plus-lg"}`} aria-hidden />
          </div>
        ))}
      </div>
      <p className="mt-5 text-[12px] text-white/40">4 / 6 slots filled — 2 remaining. Roster resets each season.</p>
    </div>
  );
}

function UpdateFeedVisual() {
  const updates = [
    { time: "Mon · 09:14", text: "Strategy brief reviewed and locked" },
    { time: "Wed · 15:40", text: "Homepage architecture milestone shipped" },
    { time: "Fri · 11:02", text: "SEO schema pass complete — live on staging" },
  ];
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-[#101013] p-7">
      <ul className="space-y-3">
        {updates.map((u) => (
          <li key={u.text} className="flex items-start gap-3 rounded-md border border-white/[0.06] bg-white/[0.015] px-3.5 py-2.5">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6fcf8e]" />
            <div>
              <p className="text-[12px] text-white/55">{u.text}</p>
              <p className="mt-0.5 text-[10.5px] uppercase tracking-[0.08em] text-white/30">{u.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const DNA_BLOCKS = [
  {
    title: "Bespoke Speed. Complete Code Safety.",
    body: "Every project we take on is built from scratch — no page builders, no WordPress themes, no borrowed components. We write clean, typed TypeScript from line one, which means your website is faster, safer, and owned entirely by you. Our code doesn't break when a plugin updates. It doesn't slow down when traffic spikes. It simply performs.",
    visual: <CodeSnippetVisual />,
  },
  {
    title: "No Libraries or Themes Bloated with Markup.",
    body: "Pre-built themes ship with thousands of lines of CSS and JavaScript you'll never use. That dead weight silently kills your PageSpeed scores and handicaps your Google rankings. We design and develop every component purposefully — each pixel earns its place. The result is a website that loads in under 1.5 seconds on mobile, with a score your competitors simply cannot match.",
    visual: <ScoreDialVisual />,
  },
  {
    title: "Long-Term Organic System Visibility.",
    body: "Rankings built on shortcuts disappear overnight. We architect your website's semantic HTML structure, schema markup, and content hierarchy so search engines can crawl, understand, and trust your pages completely. Every heading, every internal link, and every piece of metadata is a deliberate signal to Google — compounding your authority month after month.",
    visual: <RankingLadderVisual />,
  },
  {
    title: "Designed Strictly for Growth Acceleration.",
    body: "We don't build websites for where your business is today. We build them for where your business is heading. Modular React architectures mean new pages, features, and integrations slot in without a full rebuild. Whether you're going from 100 visitors a month to 100,000 or expanding into new service markets, your platform scales with you.",
    visual: <GrowthGraphVisual />,
  },
  {
    title: "Limited Cohorts for Deep, Precise Output.",
    body: "Most agencies spread themselves across 50 active clients, which means your project gets a fraction of the attention it deserves. We deliberately cap our active roster each season. When you partner with ScaleForge, you get a dedicated team that has studied your industry, analyzed your competitors, and mapped out exactly what it will take to rank and convert.",
    visual: <RosterVisual />,
  },
  {
    title: "Elite Talent. Collaborative Execution.",
    body: "Our team is built around two principles: deep technical excellence and relentless communication. We don't disappear after onboarding. You receive regular progress updates, milestone walkthroughs, and a direct line to your strategist at every stage. No account managers playing telephone. Just the people doing the work, keeping you informed.",
    visual: <UpdateFeedVisual />,
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR APPROACH"
        title="Built to Dominate. Built to Help You Win."
        subhead="ScaleForge merges elite hand-crafted React architectures, AI automation infrastructure, and aggressive search visibility to give growing businesses an unfair digital advantage. No templates. No shortcuts. No excuses."
        primaryCta={{ label: "Book a Free Strategy Call", href: "https://cal.com/shahood-saleem-gbzisb/30min" }}
        secondaryCta={{ label: "View Our Services", href: "/services" }}
        stats={STATS}
      />

      <section className="bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[860px] px-6 text-center lg:px-10">
          <Reveal>
            <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              Why Most Agencies Fail You
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-white/45">
              Most agencies spin up a template, call it custom, and disappear — leaving you with a slow, bloated site
              that&apos;s invisible on Google and impossible to scale. ScaleForge is the antidote: pixel-perfect
              engineering, high-intent SEO architecture, and AI automation systems built to compound your authority and
              efficiency month after month.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-[#0c0c0f] py-24 lg:py-32">
        <div className="mx-auto max-w-[760px] px-6 text-center lg:px-10">
          <Reveal>
            <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              Our Mission
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-relaxed text-white/45">
              To equip startups, small businesses, and scaling brands with high-performance web systems,{" "}
              <Link
                href="/services/ai-development"
                className="text-white/70 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white/50"
              >
                AI-powered automation
              </Link>
              , and aggressive search-driven visibility that turns passive clicks into consistent, predictable revenue.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              Our Core Development DNA
            </h2>
          </Reveal>

          <div className="mt-16 flex flex-col gap-16 lg:gap-20">
            {DNA_BLOCKS.map((block, i) => (
              <Reveal key={block.title} className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="font-accent text-[11px] uppercase tracking-[0.16em] text-white/30">0{i + 1}</span>
                  <h3 className="mt-3 text-[20px] font-medium leading-snug text-white sm:text-[23px]">{block.title}</h3>
                  <p className="mt-4 text-[14px] leading-relaxed text-white/45">{block.body}</p>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>{block.visual}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-[#0c0c0f] py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              The Values Behind Every Engagement
            </h2>
          </Reveal>

          <Reveal stagger staggerAmount={0.08} className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {VALUES.map((value) => (
              <div key={value.title} className="rounded-2xl border border-white/[0.07] bg-[#101013] p-7">
                <h3 className="text-[16px] font-medium text-white">{value.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-white/45">{value.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              Industries We&apos;ve Worked With
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/45">
              Different industries. Same playbook. Every business that depends on online discovery benefits from the
              ScaleForge approach.
            </p>
          </Reveal>

          <Reveal stagger staggerAmount={0.05} className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((industry) => (
              <div key={industry} className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-5 py-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/50">
                  <i className="bi bi-building text-[14px]" aria-hidden />
                </span>
                <span className="text-[13.5px] leading-snug text-white/65">{industry}</span>
              </div>
            ))}
          </Reveal>

          <Reveal className="mx-auto mt-14 max-w-2xl rounded-2xl border border-white/[0.07] bg-white/[0.02] px-8 py-10 text-center">
            <i className="bi bi-quote text-[26px] text-white/20" aria-hidden />
            <p className="mt-3 text-[17px] font-medium leading-relaxed text-white/75">
              &ldquo;No matter your industry, if your customers search online, we can help you get found.&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Want to Work Together?"
        body="We accept a limited cohort of brands each season to guarantee deep technical resources and high-fidelity output. Reserve your strategic planning briefing today."
        primaryCta={{ label: "Book a Free Strategy Call", href: "https://cal.com/shahood-saleem-gbzisb/30min" }}
        secondaryCta={{ label: "Meet the Team", href: "/about" }}
      />
    </>
  );
}
