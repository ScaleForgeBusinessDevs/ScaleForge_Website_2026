import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import {
  Pencil,
  Megaphone,
  MapPin,
  Book,
  MessageSquareQuote,
  Check,
  Quote,
} from "lucide-react";

export const metadata = {
  title: "Content Creation & SEO Copywriting Services | ScaleForge",
  description:
    "Human-written, E-E-A-T compliant SEO content from ScaleForge. Blog posts, landing pages, pillar guides, and copy built to rank and establish authority.",
  alternates: {
    canonical: "https://scalesforge.site/services/content-creation",
    languages: {
      "en": "https://scalesforge.site/services/content-creation",
      "x-default": "https://scalesforge.site/services/content-creation"
    },
    media: {
      "only screen and (max-width: 640px)": "https://scalesforge.site/services/content-creation"
    }
  },
  keywords: ["SEO Copywriting","Content Strategy Agency","E-E-A-T Blog Writing","Pillar Guide Content","Google Snippets Optimization"],
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
      "Content Creation & SEO Copywriting Services | ScaleForge",
    description:
      "Human-written, E-E-A-T compliant SEO content from ScaleForge. Blog posts, landing pages, pillar guides, and copy built to rank and establish authority.",
    url: "https://scalesforge.site/services/content-creation",
    siteName: "ScaleForge",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Content Creation & SEO Copywriting Services | ScaleForge",
    description:
      "Human-written, E-E-A-T compliant SEO content from ScaleForge. Blog posts, landing pages, pillar guides, and copy built to rank and establish authority.",
    images: ["/og-image.png"],
  },
};

export default function ContentCreationPage() {

const SERVICES = [
  { title: "SEO Blog Articles", body: "Expertly written articles targeting high-volume keywords, structured strictly to win Google Featured Snippets and appear in AI Overviews.", icon: Pencil },
  { title: "Commercial Landing Pages", body: "High-converting copywriting specifically built to capture commercial-intent searches, detailing your services and driving inquiries.", icon: Megaphone },
  { title: "Geographic Location Pages", body: "Optimized local landing pages designed for multi-location businesses looking to rank locally across different cities and regions.", icon: MapPin },
  { title: "Long-Form Pillar Guides", body: "Extensive resource hubs (2,000+ words) that establish massive topical authority, attract organic backlink citations, and anchor your SEO silos.", icon: Book },
  { title: "Brand Copywriting", body: "Polishing your homepage, about page, and service sections to speak clearly and persuasively, matching your authentic company voice.", icon: MessageSquareQuote },
];

const PROCESS = [
  { title: "Keyword Research", body: "Identifying high-value search gaps and high-intent phrases that competitors have overlooked." },
  { title: "Content Briefing", body: "Developing in-depth briefs outlining heading structures, user intent, E-E-A-T references, and internal link targets." },
  { title: "Writing & Editing", body: "Handcrafting detailed, engaging, and authoritative prose aligned with your specific tone of voice." },
  { title: "On-Page Optimization", body: "Injecting schema markup (Article, FAQ), writing rich meta descriptions, and validating internal links." },
  { title: "Publishing & Reporting", body: "Deploying direct to your CMS, monitoring rankings progress, and updating copy for optimal performance." },
];

const STANDARDS = [
  "Authored prose fully aligned with your brand tone",
  "Metadata optimization (titles, descriptions, keyword density)",
  "FAQ and Article JSON-LD schema markup",
  "Strategic internal linking silos",
  "Full monthly search ranking performance reporting",
];

const FAQS = [
  { q: "What is content marketing and how does it power SEO?", a: "Content marketing is the discipline of creating helpful, search-optimized content that attracts your ideal customers organically. It powers SEO because Google's job is to surface the most useful content for any given query — and consistent, high-quality content is the most direct way to become that “most useful” resource in your industry." },
  { q: "How many blog posts do I need to publish to see results?", a: "For most industries, publishing 2 to 4 high-quality posts per month over 6+ months will move the needle on organic traffic. Competitive niches need 6+ posts per month. We map a content calendar tied to your keyword strategy and grow the cadence as authority compounds." },
  { q: "What is a content cluster strategy?", a: "A content cluster is a group of related articles (5 to 20) all linking to a central “pillar” page on a single topic. This structure tells Google you're an authority on that subject and dramatically improves rankings for the pillar. We architect clusters around your highest-value commercial keywords." },
  { q: "What is Google's E-E-A-T and why does it affect rankings?", a: "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness — the four signals Google uses to evaluate content quality. Content that demonstrates real expertise (cited sources, author credentials, original analysis) ranks higher than generic content. We write to E-E-A-T standards as a baseline, not an upgrade." },
  { q: "Can I just use ChatGPT to write all of my website content?", a: "You can, and many businesses do — but it costs them. Google's systems are explicitly tuned to deprioritize thin, AI-generated content that lacks original insight. We use AI as a research and outline tool, but every piece of final prose is written by a human editor who understands your business and your audience. The difference shows up in rankings." }
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
            "name": "Content Creation & SEO Copywriting Services",
            "item": "https://scalesforge.site/services/content-creation"
        }
    ]
};
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Content Creation & SEO Copywriting Services",
    "description": "Human-written, E-E-A-T compliant SEO content from ScaleForge. Blog posts, landing pages, pillar guides, and copy built to rank and establish authority.",
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
        eyebrow="SEARCH CONTENT"
        title="Content That Ranks and Establishes Authority"
        subhead="ScaleForge creates strategic, SEO-optimized content for ambitious businesses. Every article, guide, and landing page is researched, written, and structured to rank, build trust, and convert."
        primaryCta={{
          label: "Book a Free Content Strategy Call",
          href: "https://cal.com/shahood-saleem-gbzisb/30min",
        }}
        secondaryCta={{ label: "View Our Projects", href: "/projects" }}
      />

      {/* Quality Over Volume */}
      <section className="border-y border-white/[0.06] bg-[#0c0c0f] py-24 lg:py-32">
        <div className="mx-auto max-w-[860px] px-6 text-center lg:px-10">
          <Reveal>
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              Quality Over Raw Volume
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-white/60">
              The internet is saturated with generic, low-quality AI copy that
              ranks for nothing. Google&apos;s systems are specifically designed
              to filter out and deprioritize thin, unhelpful content — and
              they&apos;re getting better at it every month.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-white/60">
              At ScaleForge, quality is non-negotiable. Every paragraph we
              publish is researched, structured with logical semantic
              subheadings, internally linked to relevant resources, and written
              with E-E-A-T guidelines (Experience, Expertise, Authoritativeness,
              Trustworthiness) to capture and hold prospect attention.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Writing Services */}
      <section className="bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              Our Writing Services
            </h2>
          </Reveal>

          <Reveal
            stagger
            staggerAmount={0.07}
            className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {SERVICES.map((item) => (
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

      {/* Structural Compliance */}
      <section className="border-y border-white/[0.06] bg-[#0c0c0f] py-24 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <Reveal>
              <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
                Every Piece of Content Includes
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
                100% human-crafted editorial. AI is used for research support
                and outline scaffolding — never for final prose.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5-Step Editorial Process */}
      <section className="bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[860px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              Our Content Production Process
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
                    {i === 3 ? (
                      <>
                        Injecting{" "}
                        <Link
                          href="/services/seo"
                          className="text-white/60 underline decoration-white/20 underline-offset-4 hover:text-white"
                        >
                          schema markup
                        </Link>{" "}
                        (Article, FAQ), writing rich meta descriptions, and
                        validating internal links.
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

      <FAQAccordion
        eyebrow="CLARITY"
        heading="Content Strategy FAQs"
        questions={FAQS}
      />

      <CTASection
        title="Ready to Turn Your Website Into a Lead-Generating Content Machine?"
        body="Book a free content strategy call. We'll review your current content footprint, identify topical cluster gaps in your industry, and draft a rolling 3-month editorial calendar."
        primaryCta={{
          label: "Book a Free Content Strategy Call",
          href: "https://cal.com/shahood-saleem-gbzisb/30min",
        }}
        secondaryCta={{ label: "View Pricing", href: "/pricing#content" }}
      />
    </>
  );
}
