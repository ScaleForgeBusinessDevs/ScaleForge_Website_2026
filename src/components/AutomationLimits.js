import Reveal from "./Reveal";
import {
  SlidersHorizontal,
  TrendingUp,
  Network,
  CheckCircle2,
  Hourglass,
  Sparkles,
  Check,
} from "lucide-react";

const FEATURES = [
  {
    icon: SlidersHorizontal,
    title: "Our Delivery Process",
    body: "Every project moves through structured sprints. You retain full visibility, track progress in real time, and sign off at each milestone.",
    points: [
      "Structured sprint roadmaps",
      "Direct Slack & Figma access",
      "Milestone-based sign-offs",
    ],
  },
  {
    icon: TrendingUp,
    title: "How We Monitor Your Results",
    body: "Continuous post-launch analytics. We track site speed, SEO rankings, and conversion metrics to keep your channels optimized.",
    points: [
      "SEO & speed monitoring",
      "Custom performance dashboards",
      "Actionable growth insights",
    ],
  },
  {
    icon: Network,
    title: "Full-Stack Technical Capability",
    body: "Headless CMS builds, third-party API wiring, n8n automation pipelines. We handle every layer of your technical infrastructure.",
    points: [
      "CMS, CRM & API integrations",
      "Custom n8n & AI pipelines",
      "Third-party tool connectivity",
    ],
  },
];

export default function AutomationLimits() {
  return (
    <section className="bg-[#08080a] py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
            What We Build For You
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/60">
            Digital architecture built to scale your operations, presence and
            client acquisition.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#101013] p-8 sm:p-12">
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              aria-hidden
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
            </div>

            <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-[1.2fr_1fr_1.2fr] items-center">
              {/* Left Column: Lighthouse Score Dial */}
              <div className="flex flex-col items-center text-center p-6 border border-white/[0.05] rounded-xl bg-white/[0.01]">
                <span className="font-accent text-[9px] uppercase tracking-[0.16em] text-white/35">
                  Illustrative Goal
                </span>
                <div className="relative mt-5 flex h-28 w-28 items-center justify-center rounded-full border-4 border-white/5 bg-white/[0.02]">
                  <div className="absolute inset-0 rounded-full border-4 border-t-[#6fcf8e] border-r-[#6fcf8e] border-b-[#6fcf8e]/30 border-l-[#6fcf8e]/10 animate-[spin_3s_linear_infinite]" />
                  <span className="text-[32px] font-bold text-white tracking-tight">
                    95+
                  </span>
                </div>
                <h4 className="mt-4 text-[14px] font-semibold text-white">
                  PageSpeed Target
                </h4>
                <p className="mt-1.5 text-[12px] text-white/40 leading-normal">
                  Optimized code architecture for mobile and desktop screens.
                </p>
              </div>

              {/* Middle Column: Speed Milestone Comparison */}
              <div className="flex flex-col gap-4">
                <div className="p-5 border border-white/[0.05] rounded-xl bg-white/[0.01] text-center">
                  <span className="text-[10px] uppercase tracking-wider text-white/30">
                    Legacy Setup
                  </span>
                  <p className="mt-2 text-[18px] font-semibold text-white/35 line-through decoration-white/20">
                    Slow Loading
                  </p>
                  <span className="mt-1 inline-block rounded-full bg-red-500/10 px-2.5 py-0.5 text-[10px] text-red-400">
                    High Bounce Rate
                  </span>
                </div>
                <div className="p-5 border border-[#6fcf8e]/10 rounded-xl bg-white/[0.02] text-center shadow-[0_0_30px_rgba(111,207,142,0.03)]">
                  <span className="text-[10px] uppercase tracking-wider text-white/50">
                    ScaleForge Optimized
                  </span>
                  <p className="mt-2 text-[18px] font-semibold text-[#6fcf8e]">
                    Sub-Second Speed
                  </p>
                  <span className="mt-1 inline-block rounded-full bg-[#6fcf8e]/10 px-2.5 py-0.5 text-[10px] text-[#6fcf8e]">
                    Instant Loading
                  </span>
                </div>
              </div>

              {/* Right Column: Growth Target Trend */}
              <div className="flex flex-col items-center text-center p-6 border border-white/[0.05] rounded-xl bg-white/[0.01]">
                <span className="font-accent text-[9px] uppercase tracking-[0.16em] text-white/35">
                  Illustrative Goal
                </span>
                <div className="mt-4 flex h-28 items-end gap-2.5 w-full max-w-[160px] px-2">
                  {[25, 40, 35, 60, 50, 85, 75, 100].map((h, i) => (
                    <span
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-white/5 to-[#6fcf8e]/60"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <h4 className="mt-5 text-[14px] font-semibold text-white">
                  Traffic Compound Target
                </h4>
                <p className="mt-1.5 text-[12px] text-white/40 leading-normal">
                  Building organic authority designed to achieve compound
                  traffic growth.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8 grid grid-cols-1 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#101013] sm:grid-cols-2">
          <div className="p-7 sm:border-r sm:border-white/[0.07]">
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6fcf8e]" />
              <h3 className="text-[15px] font-medium text-white">
                Delivery Milestone
              </h3>
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-white/40">
              Live tracking of your service sprint as it goes from design to
              live launch.
            </p>
            <div className="mt-5 space-y-2.5">
              {[
                "Sprint Kickoff",
                "Figma Design Approved",
                "Production Code Deployed",
              ].map((step, i) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-md border border-white/[0.06] bg-white/[0.015] px-3 py-2"
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${i < 2 ? "bg-[#6fcf8e]" : "bg-white/25"}`}
                  />
                  <span className="text-[12.5px] text-white/55">{step}</span>
                  {i < 2 ? (
                    <CheckCircle2
                      size={12}
                      className="ml-auto text-[#6fcf8e]/70"
                      aria-hidden
                    />
                  ) : (
                    <Hourglass
                      size={12}
                      className="ml-auto text-white/25"
                      aria-hidden
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-white/[0.07] p-7 sm:border-t-0">
            <div className="flex items-center gap-2.5">
              <Sparkles size={14} className="text-white/55" aria-hidden />
              <h3 className="text-[15px] font-medium text-white">
                Continuous Optimization
              </h3>
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-white/40">
              Our post-launch retainer teams monitor performance, apply
              upgrades, and iterate content weekly.
            </p>
            <ul className="mt-5 space-y-2.5">
              {[
                "Tracks SEO & performance metrics",
                "Improves conversion rates over time",
                "Maintains zero-downtime operations",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2.5 rounded-md border border-white/[0.06] bg-white/[0.015] px-3 py-2 text-[12.5px] leading-relaxed text-white/55"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal
          stagger
          staggerAmount={0.08}
          className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-5 rounded-2xl border border-white/[0.07] bg-[#101013] p-7"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70">
                <feature.icon size={16} aria-hidden />
              </span>
              <div>
                <h3 className="text-[15px] font-medium text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/40">
                  {feature.body}
                </p>
              </div>
              <ul className="mt-auto space-y-2 border-t border-white/[0.07] pt-5">
                {feature.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2.5 text-[12px] text-white/55"
                  >
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white/15 text-[9px] text-white/60">
                      <Check size={9} aria-hidden />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
