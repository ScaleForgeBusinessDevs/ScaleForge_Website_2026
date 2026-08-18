import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import LinkedInPosts from "@/components/LinkedInPosts";
import {
  Palette,
  BarChart2,
  Camera,
  PenTool,
  Megaphone,
  Check,
  Quote,
} from "lucide-react";

export const metadata = {
  title: "Social Media Branding Services | ScaleForge",
  description:
    "ScaleForge builds cohesive social media brand systems, visual assets, and content frameworks that make your business recognisable and authoritative.",
  alternates: {
    canonical: "https://scalesforge.site/services/social-media-branding",
    languages: {
      "en": "https://scalesforge.site/services/social-media-branding",
      "x-default": "https://scalesforge.site/services/social-media-branding"
    },
    media: {
      "only screen and (max-width: 640px)": "https://scalesforge.site/services/social-media-branding"
    }
  },
  keywords: ["Social Media Branding", "Brand Visual Identity Design", "Canva Templates Design", "Brand Guidelines Booklet", "Scroll Stopping Graphics"],
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
      "Social Media Branding Services | ScaleForge",
    description:
      "ScaleForge builds cohesive social media brand systems, visual assets, and content frameworks that make your business recognisable and authoritative.",
    url: "https://scalesforge.site/services/social-media-branding",
    siteName: "ScaleForge",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Social Media Branding Services | ScaleForge",
    description:
      "ScaleForge builds cohesive social media brand systems, visual assets, and content frameworks that make your business recognisable and authoritative.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaBrandingPage() {

  const OFFERINGS = [
    { title: "Visual Identity System", body: "Custom color palettes, typography pairings, icon sets, and a comprehensive brand guideline document that keeps every post, story, and reel unmistakably yours.", icon: Palette },
    { title: "Content Template Design", body: "A full library of editable Canva or Figma templates — post formats, carousel slides, story frames, and highlight covers — designed to your brand and ready for your team to use daily.", icon: Camera },
    { title: "Profile & Bio Optimisation", body: "Profile pictures, banner artwork, keyword-optimised bios, and link-in-bio pages that communicate authority and drive clicks across LinkedIn, Instagram, and X.", icon: PenTool },
    { title: "Content Strategy & Calendar", body: "A data-driven content strategy defining your pillars, posting frequency, hook frameworks, and a 30-day editorial calendar mapped to your business goals.", icon: BarChart2 },
    { title: "Brand Voice Guidelines", body: "A documented brand voice playbook — tone, vocabulary, do's and don'ts — so every caption and comment sounds like you, whether written by the founder or a hired copywriter.", icon: Megaphone }
  ];

  const PROCESS = [
    { title: "Brand Discovery", body: "We interview you on your audience, competitors, aspirations, and what feeling you want your brand to evoke before we design a single pixel." },
    { title: "Competitor Visual Audit", body: "We study the top accounts in your niche — what works, what's oversaturated, and where the white space is for you to stand out." },
    { title: "Identity Design", body: "We build your full visual identity system: palette, type stack, grid rules, and a master style guide that governs every platform." },
    { title: "Template Library", body: "We design your platform-specific content templates in Figma or Canva, covering all major post formats and stories." },
    { title: "Strategy & Handoff", body: "We deliver your content strategy, 30-day calendar, and a guided walkthrough of every deliverable so your team is immediately operational." }
  ];

  const STANDARDS = [
    "Full social media brand audit and competitive benchmarking",
    "Custom visual identity guide (colours, fonts, iconography)",
    "20+ editable post and story templates per platform",
    "30-day content calendar with topic and hook mapping",
    "Optimised profile and bio copy for all active platforms",
    "Brand voice and tone-of-voice documentation"
  ];

  const FAQS = [
    { q: "What platforms do you design for?", a: "We cover LinkedIn, Instagram, X (Twitter), Facebook, TikTok, and YouTube. Most branding engagements focus on 2–3 platforms chosen based on where your audience is most concentrated. We always recommend LinkedIn for B2B and Instagram for B2C as starting points." },
    { q: "Do I need to have an existing brand before starting?", a: "No. We can work from scratch — starting with just your business name and a rough sense of your audience and values. If you have existing brand assets (logo, colours, fonts), we'll build on them. If you don't, we create them from the ground up as part of the engagement." },
    { q: "How long does the branding process take?", a: "A full social media branding engagement typically takes 3–4 weeks: one week for discovery and audit, one to two weeks for identity design and feedback cycles, and one week for template production and strategy delivery." },
    { q: "Will my team be able to use the templates independently?", a: "Yes — that's the whole point. All templates are built in Canva or Figma with clearly labelled layers, locked brand elements, and editable text/image zones. We walk your team through every template in a recorded handoff session." },
    { q: "Can you also manage our social media after the branding is done?", a: "We don't offer ongoing social media management directly, but we can connect you with our AI automation pipelines that auto-generate and schedule content, or refer you to trusted content management partners in our network." }
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
        "name": "Social Media Branding Services",
        "item": "https://scalesforge.site/services/social-media-branding"
      }
    ]
  };
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Social Media Branding Services",
    "description": "ScaleForge builds cohesive social media brand systems, visual assets, and content frameworks that make your business recognisable and authoritative.",
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
        eyebrow="SOCIAL MEDIA BRANDING"
        title="A Brand Identity That Stops the Scroll"
        subhead="ScaleForge builds complete social media brand systems — visual identity, content templates, strategy, and voice guidelines — so your business looks premium and posts consistently across every platform."
        primaryCta={{
          label: "Book a Free Brand Review",
          href: "https://cal.com/shahood-saleem-gbzisb/30min",
        }}
        secondaryCta={{ label: "View All Services", href: "/services" }}
      />

      {/* Stat Section */}
      <section className="border-y border-white/[0.06] bg-[#0c0c0f] py-24 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-6 text-center lg:px-10">
          <Reveal className="flex flex-col items-center">
            <p className="mx-auto mt-7 text-[clamp(1.4rem,3vw,1.9rem)] font-display font-normal leading-[1.3] text-white">
              &ldquo;It takes only 0.05 seconds for people to form an opinion
              about your brand on social media. Consistent visual branding
              increases revenue by up to 33%.&rdquo;
            </p>
            <p className="mx-auto mt-7 max-w-xl text-[14.5px] leading-relaxed text-white/60">
              Most businesses post inconsistently, use mismatched fonts and
              colours, and wonder why their follower count stagnates. A cohesive
              brand system removes all of that friction, your audience
              immediately knows who you are and what you stand for, every single
              time they see your content.
            </p>
          </Reveal>
        </div>
      </section>

      {/* LinkedIn Posts — Live Feed */}
      <LinkedInPosts />

      {/* Core Offerings */}
      <section className="bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              What We Build for Your Brand
            </h2>
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
                Every template we hand off is designed to be used the same day.
                No design skills needed. No guessing. Just open, edit, and post.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[860px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              Our 5-Step Branding Process
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
        heading="Social Media Branding FAQs"
        questions={FAQS}
      />

      <CTASection
        title="Ready to Build a Brand That Stands Out?"
        body="Book a free 30-minute brand review. We'll audit your current social presence, identify what's working and what's hurting you, and outline a custom branding path forward."
        primaryCta={{
          label: "Book a Free Brand Review",
          href: "https://cal.com/shahood-saleem-gbzisb/30min",
        }}
        secondaryCta={{ label: "View All Services", href: "/services" }}
      />
    </>
  );
}
