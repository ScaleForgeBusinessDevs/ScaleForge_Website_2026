import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const STATS = [
  { value: "75%", label: "Avg. Task Automation Rate" },
  { value: "90+", label: "PageSpeed Score" },
  { value: "3.4x", label: "Avg. Organic Traffic Increase" },
  { value: "98%", label: "Audience retention" },
  { value: "24.5%", label: "Avg. Landing Page Conversion" },
];

const CAPABILITIES = [
  { title: "AI Automation and Development", href: "/services/ai-development" },
  { title: "Web Design and Development", href: "/services/web-development" },
  { title: "Search Engine Optimisation", href: "/services/seo" },
  {
    title: "Content Strategy and Creation",
    href: "/services/content-creation",
  },
  { title: "Landing Page Design", href: "/services/web-design" },
];

export default function Capabilities() {
  return (
    <section className="bg-[#08080a] py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="mx-auto mt-6 max-w-9xl text-[clamp(1rem,5vw,2.75rem)] font-display font-normal leading-[1.18] text-white">
            Everything Your Business Needs to Dominate Online
          </h2>
        </Reveal>

        <Reveal
          stagger
          staggerAmount={0.08}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-5 py-6 text-center"
            >
              <p
                className="text-[28px] font-bold tracking-[-0.01em] text-white"
                style={{ textShadow: "0 0 32px rgba(255, 255, 255, 0.35)" }}
              >
                {stat.value}
              </p>
              <p className="mt-2 text-[10.5px] uppercase leading-snug tracking-[0.08em] text-white/40">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal>
          <p className="mt-4 text-center text-[11px] italic text-white/25">
            Measured across all active client projects in 2024–2025.
          </p>
        </Reveal>

        <Reveal
          stagger
          staggerAmount={0.06}
          className="mt-16 flex flex-col border-t border-white/[0.07]"
        >
          {CAPABILITIES.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex items-center justify-between gap-6 border-b border-white/[0.07] py-6 text-[17px] font-medium text-white/60 transition-colors duration-300 hover:text-white sm:text-[19px]"
            >
              {item.title}
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/10 group-hover:text-white">
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:rotate-45"
                  aria-hidden
                />
              </span>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
