import Reveal from "./Reveal";
import { Check } from "lucide-react";

const STEPS = [
  {
    n: "01",
    title: "Solution Wireframe",
    body: "Define a clear blueprint of your desired solution.",
    graphic: "select",
  },
  {
    n: "02",
    title: "Build Phase",
    body: "Execute your vision with precision and efficiency.",
    graphic: "slider",
  },
  {
    n: "03",
    title: "Execute & Monitor",
    body: "Launch instantly and track every execution live.",
    graphic: "bars",
  },
];

function StepGraphic({ kind }) {
  if (kind === "select") {
    return (
      <div className="flex w-full flex-col gap-2 px-4">
        <span className="text-[10.5px] text-white/30">Trigger</span>
        {["Discovery", "Strategy", "Development", "Launch"].map((item, i) => (
          <div
            key={item}
            className={`flex items-center justify-between rounded-md border px-3 py-2 text-[11.5px] ${i === 0 ? "border-white/20 bg-white/[0.06] text-white/80" : "border-white/[0.05] text-white/30"}`}
          >
            {item}
            {i === 0 && (
              <Check size={14} className="text-white/50" aria-hidden />
            )}
          </div>
        ))}
      </div>
    );
  }

  if (kind === "slider") {
    return (
      <div className="flex w-full flex-col gap-3 px-4">
        <span className="text-[10.5px] text-white/30">
          Confidence threshold
        </span>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-2/3 rounded-full bg-white/50" />
        </div>
        <span className="text-[10.5px] text-white/30">Fallback action</span>
        <div className="flex items-center justify-between rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-[11.5px] text-white/55">
          Notify reviewer
          <span className="h-3.5 w-7 rounded-full bg-[#e8633a]/70" />
        </div>
      </div>
    );
  }

  return (
    <div className="grid w-full grid-cols-8 gap-1.5 px-6">
      {Array.from({ length: 32 }).map((_, i) => (
        <span
          key={i}
          className="aspect-square rounded-[2px]"
          style={{
            background: `rgba(255,255,255,${0.08 + ((i * 37) % 60) / 220})`,
          }}
        />
      ))}
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="border-y border-white/[0.06] bg-[#0c0c0f] py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
            How We Work
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/60">
            Real-time automation, full visibility, and refined operational
            workflows, built around your team&rsquo;s pace.
          </p>
        </Reveal>

        <Reveal stagger className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="flex flex-col gap-6 rounded-2xl border border-white/[0.07] bg-[#101013] p-7"
            >
              <div>
                <span className="text-[12px] font-medium text-white/30">
                  {step.n}
                </span>
                <h3 className="mt-2 text-[16px] font-medium text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-white/40">
                  {step.body}
                </p>
              </div>
              <div className="flex h-56 items-center justify-center rounded-xl border border-white/[0.05] bg-white/[0.015]">
                <StepGraphic kind={step.graphic} />
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
