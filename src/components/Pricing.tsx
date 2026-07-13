import Reveal from "./Reveal";
import { ArrowRight, Code, Sparkles, TrendingUp, PenTool } from "lucide-react";
import Link from "next/link";

const SERVICES_TEASER = [
  {
    title: "Web Design & Development",
    desc: "From bespoke high-converting marketing sites to complex web applications. Built with modern tech stacks, fully SEO-optimized, and hand-off ready.",
    icon: Code,
    priceEstimate: "Starts at $1,800",
  },
  {
    title: "AI Development & Automation",
    desc: "Custom scraping, lead enrichment, CRM sync, and Vapi AI voice calling setups. Turn manual spreadsheets and workflows into hands-free operating engines.",
    icon: Sparkles,
    priceEstimate: "Starts at $1,200",
  },
  {
    title: "SEO & Traffic Growth",
    desc: "Targeted keyword research, on-page optimization, and authority link-building. Built to secure search page real estate and compound inbound pipeline monthly.",
    icon: TrendingUp,
    priceEstimate: "Starts at $650 / mo",
  },
  {
    title: "Content & Social Strategy",
    desc: "Authority-building articles, branded graphics, email newsletter layouts, and daily social media calendar management to own your niche.",
    icon: PenTool,
    priceEstimate: "Starts at $750 / mo",
  },
];

export default function Pricing() {
  return (
    <section className="border-y border-white/[0.06] bg-[#0c0c0f] py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-accent text-[10px] uppercase tracking-[0.2em] text-white/35">
            Transparent Investment
          </span>
          <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
            Simple, Service-Based Pricing Tiers
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/45">
            Select standard standalone plans or bundle multiple service tracks. Configure project deliverables or monthly retainers to match your growth objectives.
          </p>
        </Reveal>

        <Reveal stagger className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES_TEASER.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-2xl border border-white/[0.07] bg-[#101013] p-7 transition-colors duration-300 hover:border-white/[0.12]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70">
                <service.icon size={16} aria-hidden />
              </span>
              <h3 className="mt-5 text-[15.5px] font-medium text-white">{service.title}</h3>
              <p className="mt-2.5 text-[13px] leading-relaxed text-white/40">{service.desc}</p>
              <p className="mt-auto pt-6 text-[13px] font-medium text-white/60">
                {service.priceEstimate}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-14 flex flex-col items-center justify-center gap-4">
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-accent text-[11px] uppercase tracking-[0.12em] text-[#08080a] transition-transform hover:scale-[1.02]"
          >
            Configure Package & View Pricing
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
          </Link>
          <p className="text-[12px] text-white/30">
            Have custom requirements? We build hybrid retainer structures.{" "}
            <Link href="/contact" className="text-white/55 underline decoration-white/20 underline-offset-4 hover:text-white/80">
              Request a quote
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
