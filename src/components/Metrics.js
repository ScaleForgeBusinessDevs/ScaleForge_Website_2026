import Reveal from "./Reveal";
import { Zap, CheckCircle2, Award } from "lucide-react";

const METRICS = [
  {
    index: "01",
    icon: Zap,
    stat: "340%",
    title: "Average Valuation Expansion",
    body: "Measured across all active client projects in 2024–2025, within 18 months of engagement.",
  },
  {
    index: "02",
    icon: CheckCircle2,
    stat: "14 Days",
    title: "Prototype-to-Market Delivery",
    body: "Measured across all active client projects in 2024–2025. Aggressive engineering sprints to launch scalable initial products.",
  },
  {
    index: "03",
    icon: Award,
    stat: "Tier 1",
    title: "Global Capital Backing",
    body: "Measured across all active client projects in 2024–2025. Portfolio companies backed by leading syndicates and global venture firms.",
  },
];

export default function Metrics() {
  return (
    <section className="bg-[#08080a] py-24 lg:py-32">
      <h2 className="mx-auto mt-6 max-w-7xl text-center pb-32 text-[clamp(1rem,5vw,2.8rem)] font-display font-normal leading-[1.18] text-white">
        Some Of Our Achievement We're Proud Of
      </h2>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal
          stagger
          staggerAmount={0.12}
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {METRICS.map((metric) => (
            <div
              key={metric.index}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7"
            >
              <div className="flex items-center justify-between">
                <metric.icon
                  size={20}
                  className="text-white"
                  style={{
                    filter: "drop-shadow(0 0 10px rgba(245, 245, 245, 0.55))",
                  }}
                  aria-hidden
                />

                <span className="text-[10.5px] uppercase tracking-[0.18em] text-white/35">
                  {metric.index} // Metrics
                </span>
              </div>

              <p
                className="mt-6 text-[42px] font-bold leading-none tracking-[-0.02em] text-white"
                style={{
                  textShadow:
                    "0 0 56px rgba(255, 255, 255, 0.55), 0 0 18px rgba(255, 255, 255, 0.45)",
                }}
              >
                {metric.stat}
              </p>

              <h3 className="mt-4 text-[15px] font-semibold text-white">
                {metric.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-white/40">
                {metric.body}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
