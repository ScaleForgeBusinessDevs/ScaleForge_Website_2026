import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { ShaderAnimation } from "@/components/ShaderAnimationLazy";

export const metadata: Metadata = {
  title: "About ScaleForge | Our Team, Story & Values",
  description:
    "Meet the founders behind ScaleForge — a Karachi-based studio building custom Next.js sites, AI automation, and SEO systems for ambitious businesses worldwide.",
};

const BELIEFS = [
  {
    title: "Templates are a tax.",
    body: "Every off-the-shelf theme charges you in load time, ranking ceilings, and code you don't own. We refuse to pass that tax on to clients.",
  },
  {
    title: "Speed is a moral commitment.",
    body: "A 6-second mobile site is disrespect to your users. We treat performance as a baseline, not a feature.",
  },
  {
    title: "AI changes the unit economics.",
    body: "Anything repetitive should be automated. We help businesses do in 6 hours what they used to do in 60.",
  },
  {
    title: "Small cohorts, deep work.",
    body: "We cap our active client roster every season. It's the only way to deliver work we're proud to publish.",
  },
];

const FACTS = [
  { label: "Founded", value: "2024" },
  { label: "Team", value: "Remote - First" },
  { label: "Structure", value: "Registered Studio" },
  { label: "Coverage", value: "US / EU / AU time zones" },
];

const PAYMENT = [
  { icon: "bi-credit-card", label: "Stripe" },
  { icon: "bi-bank2", label: "Wise / Payoneer" },
  { icon: "bi-shield-check", label: "Upwork / Contra Escrow" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#08090a]">
        <div className="pointer-events-none absolute inset-0 z-0"><ShaderAnimation /></div>
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[#08090a]/80" />
        <div className="bg-grid-dark bg-grid-fade pointer-events-none absolute inset-0 z-[2]" />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-20 pt-32 text-center lg:px-10 lg:pt-28">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center">
            <h1 className="mx-auto mt-6 max-w-3xl text-[clamp(2.1rem,5.4vw,3.5rem)] font-display font-normal leading-[1.14] text-white">
              Forging the Future of Digital Excellence
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/45">
              ScaleForge isn&apos;t just an agency — it&apos;s a strategic partnership between two builders who got
              tired of watching ambitious businesses get burned by template shops and disappearing freelancers. We
              built the studio we wished existed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The Story */}
      <section className="bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <Reveal>
            <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal text-center tracking-normal leading-[1.12] text-white">
              How ScaleForge Came to Be
            </h2>
            <div className="mt-15 space-y-5 text-[15px] leading-relaxed text-center text-white/45">
              <p>
                ScaleForge started with a frustration. After years of watching ambitious businesses pay agencies for
                slow WordPress sites, generic SEO retainers, and disappearing freelancers, Shahood and Ruhan decided
                to build the studio they wished existed — one that did the work properly, owned its outcomes, and
                treated every engagement like a partnership.
                In 2024, the two co-founded ScaleForge as a formal partnership under Pakistan&apos;s Companies Act
                2017, structured as a two-founder firm with a clear ownership split and operating mandate. From the
                beginning, the bet was the same: combine elite hand-coded engineering with aggressive search
                visibility, do the work for a deliberately small cohort each season, and let the receipts compound.


                Today, ScaleForge operates as a remote-first studio based in Karachi, serving clients across the US,
                UK, Australia, and the EU. Every engagement is led directly by the founders or a senior team member
                they&apos;ve trained — no account managers, no telephone game, no diluted execution.
              </p>
              <p>
                The studio is in active transition toward{" "}
                <Link
                  href="/services/ai-development"
                  className="text-white/70 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
                >
                  AI Development & Automation
                </Link>{" "}
                as a flagship service, building bespoke automation systems using n8n, Make.com, Vapi, Notion, and
                Google Sheets alongside the original Next.js web engineering and SEO work that built the firm.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Founders */}
      <section className="relative overflow-hidden border-t border-white/[0.06] pb-40 pt-24 lg:pb-56 lg:pt-32"
        style={{ background: "#08090a" }}>
        {/* Electric blue ambient glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% 100%, rgba(37,99,235,0.30) 0%, rgba(37,99,235,0.10) 45%, transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 22% 95%, rgba(37,99,235,0.18) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 78% 95%, rgba(37,99,235,0.18) 0%, transparent 60%)",
          }}
        />
        {/* Bottom fade into next section */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-48"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, #08080a 100%)",
          }}
        />

        <div className="relative mx-auto max-w-[1100px] px-6 lg:px-10">
          {/* Header */}
          <Reveal className="mx-auto mb-16 flex max-w-2xl flex-col items-center text-center">
            <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-display font-normal leading-[1.1] text-white">
              Meet the People Behind Scale Forge
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/45">
              A highly dedicated team combining elite engineering and high-ROI digital strategy.
            </p>
          </Reveal>

          {/* Team grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">

            {/* Shahood Saleem */}
            <Reveal>
              <div className="group flex flex-col">
                {/* Photo */}
                <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
                  <img
                    src="/Assets/Shahood.avif"
                    alt="Shahood Saleem — Founder & CEO"
                    className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ filter: "grayscale(100%)", aspectRatio: "3/4" }}
                  />
                </div>
                {/* Info */}
                <div className="mt-5">
                  <h3 className="text-[20px] font-semibold text-white">Shahood Saleem</h3>
                  <p className="mt-1 font-accent text-[10px] uppercase tracking-[0.18em] text-[#2563eb]">
                    Founder &amp; CEO
                  </p>
                  <p className="mt-3 text-[14px] leading-relaxed text-white/50">
                    Shahood leads Scale Forge&apos;s strategy and client partnerships, ensuring every project is
                    aligned with measurable growth outcomes. With a background in conversion-focused design and
                    technical SEO, he oversees the full delivery pipeline from first brief to final launch.
                  </p>
                  <div className="mt-5 flex items-center gap-2.5">
                    <a href="https://www.linkedin.com/in/shahood-saleem/" target="_blank" rel="noopener noreferrer"
                      aria-label="Shahood on LinkedIn"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.10] text-[14px] text-white/40 transition-all hover:border-[#2563eb]/50 hover:text-[#2563eb]">
                      <i className="bi bi-linkedin" aria-hidden />
                    </a>
                    <a href="https://x.com/scaleforge" target="_blank" rel="noopener noreferrer"
                      aria-label="Shahood on X"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.10] text-[14px] text-white/40 transition-all hover:border-[#2563eb]/50 hover:text-[#2563eb]">
                      <i className="bi bi-twitter-x" aria-hidden />
                    </a>
                    <a href="mailto:scaleforgebusinessdev@gmail.com"
                      aria-label="Email Shahood"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.10] text-[14px] text-white/40 transition-all hover:border-[#2563eb]/50 hover:text-[#2563eb]">
                      <i className="bi bi-envelope" aria-hidden />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Ruhan Bhaleshah */}
            <Reveal>
              <div className="group flex flex-col">
                {/* Photo */}
                <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
                  <img
                    src="/Assets/Ruhan_2.avif"
                    alt="Ruhan Bhaleshah — Partner & Technical Lead"
                    className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ filter: "grayscale(100%)", aspectRatio: "3/4" }}
                  />
                </div>
                {/* Info */}
                <div className="mt-5">
                  <h3 className="text-[20px] font-semibold text-white">Ruhan Bhaleshah</h3>
                  <p className="mt-1 font-accent text-[10px] uppercase tracking-[0.18em] text-[#2563eb]">
                    Partner &amp; Technical Lead
                  </p>
                  <p className="mt-3 text-[14px] leading-relaxed text-white/50">
                    Ruhan architects the custom Next.js codebases that power Scale Forge&apos;s client websites.
                    He sets the engineering standards for performance, type safety, and scalability — making sure
                    every build hits 90+ PageSpeed scores and remains maintainable long after launch.
                  </p>
                  <div className="mt-5 flex items-center gap-2.5">
                    <a href="#"
                      aria-label="Ruhan on LinkedIn"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.10] text-[14px] text-white/40 transition-all hover:border-[#2563eb]/50 hover:text-[#2563eb]">
                      <i className="bi bi-linkedin" aria-hidden />
                    </a>
                    <a href="#"
                      aria-label="Ruhan on GitHub"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.10] text-[14px] text-white/40 transition-all hover:border-[#2563eb]/50 hover:text-[#2563eb]">
                      <i className="bi bi-github" aria-hidden />
                    </a>
                    <a href="mailto:scaleforgebusinessdev@gmail.com"
                      aria-label="Email Ruhan"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.10] text-[14px] text-white/40 transition-all hover:border-[#2563eb]/50 hover:text-[#2563eb]">
                      <i className="bi bi-envelope" aria-hidden />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              What We Believe
            </h2>
          </Reveal>

          <Reveal stagger staggerAmount={0.08} className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {BELIEFS.map((belief) => (
              <div key={belief.title} className="rounded-2xl border border-white/[0.07] bg-[#101013] p-7">
                <h3 className="text-[16px] font-medium italic text-white">{belief.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-white/45">{belief.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* How We Work */}
      <section className="border-y border-white/[0.06] bg-[#0c0c0f] py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              Remote - First, Globally Covered
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/45">
              ScaleForge operates remote-first, with clients across the US, UK, Canada, Australia, and the EU. We
              work in your time zone — meetings booked during your business hours, async updates delivered
              overnight when needed.
            </p>
          </Reveal>

          <Reveal stagger staggerAmount={0.07} className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {FACTS.map((fact) => (
              <div key={fact.label} className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-5 py-6 text-center">
                <p className="text-[11px] uppercase tracking-[0.1em] text-white/35">{fact.label}</p>
                <p className="mt-2 text-[13.5px] font-medium leading-snug text-white/75">{fact.value}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {PAYMENT.map((p) => (
              <div key={p.label} className="flex items-center gap-2.5 rounded-full border border-white/[0.07] px-5 py-2.5">
                <i className={`bi ${p.icon} text-[13px] text-white/40`} aria-hidden />
                <span className="text-[12px] text-white/45">{p.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Talent */}
      <section className="bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[860px] px-6 text-center lg:px-10">
          <Reveal>
            <p className="text-[15px] italic leading-relaxed text-white/45">
              Always interested in connecting with senior engineers, designers, and SEO specialists. Email{" "}
              <a
                href="mailto:scaleforgebusinessdev@gmail.com"
                className="text-white/65 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
              >
                scaleforgebusinessdev@gmail.com
              </a>{" "}
              if you&apos;d like to introduce yourself.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="We Are Always Ready to Take the Perfect Shot"
        body="Whether you're at 'I have an idea' or 'I have a deadline,' book a free 30-minute strategy call. We'll listen, ask sharper questions than you expect, and tell you whether (and how) we can help."
        primaryCta={{ label: "Book a Free Strategy Call", href: "https://cal.com/shahood-saleem-gbzisb/30min" }}
        secondaryCta={{ label: "See Our Work", href: "/blog?type=case-studies" }}
      />
    </>
  );
}
