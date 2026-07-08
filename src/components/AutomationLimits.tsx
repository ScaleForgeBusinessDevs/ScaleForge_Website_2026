import Reveal from "./Reveal";
import { SlidersHorizontal, TrendingUp, Network, CheckCircle2, Hourglass, Sparkles, Check } from "lucide-react";

const FEATURES = [
  {
    icon: SlidersHorizontal,
    title: "Workflow Execution Control",
    body: "Monitor workflow runs in real time, pause and resume processes, and retain full operational visibility across every run.",
    points: ["Real-time run monitoring", "Detailed progress logs", "Built-in error handling"],
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics & Insights",
    body: "Analyze workflow performance with real-time metrics, execution insights, and visual dashboards designed for operators.",
    points: ["Workflow performance metrics", "Visual trend dashboards", "Actionable automation insights"],
  },
  {
    icon: Network,
    title: "Connected Integrations",
    body: "Integrate leading platforms and synchronize data seamlessly across your entire automation environment without manual coordination.",
    points: ["200+ supported platforms", "Secure data synchronization", "Real-time cross-platform triggers"],
  },
];

export default function AutomationLimits() {
  return (
    <section className="bg-[#08080a] py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
            Automation Without Limits
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/45">
            Advanced automation capabilities designed to support growing teams
            and evolving operational systems.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <div className="relative h-72 overflow-hidden rounded-2xl border border-white/[0.07] sm:h-96">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/Assets/n8n.jpg)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08080a]/70 via-transparent to-transparent" />
          </div>
        </Reveal>

        <Reveal className="mt-8 grid grid-cols-1 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#101013] sm:grid-cols-2">
          <div className="p-7 sm:border-r sm:border-white/[0.07]">
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6fcf8e]" />
              <h3 className="text-[15px] font-medium text-white">Workflow run</h3>
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-white/40">Live status of an automation as it moves through each stage.</p>
            <div className="mt-5 space-y-2.5">
              {["Webhook triggered", "Data validated", "Action executed"].map((step, i) => (
                <div key={step} className="flex items-center gap-3 rounded-md border border-white/[0.06] bg-white/[0.015] px-3 py-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${i < 2 ? "bg-[#6fcf8e]" : "bg-white/25"}`} />
                  <span className="text-[12.5px] text-white/55">{step}</span>
                  {i < 2 ? <CheckCircle2 size={12} className="ml-auto text-[#6fcf8e]/70" aria-hidden /> : <Hourglass size={12} className="ml-auto text-white/25" aria-hidden />}
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-white/[0.07] p-7 sm:border-t-0">
            <div className="flex items-center gap-2.5">
              <Sparkles size={14} className="text-white/55" aria-hidden />
              <h3 className="text-[15px] font-medium text-white">AI Workflow Agent</h3>
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-white/40">An always-on layer that watches every run and improves it over time.</p>
            <ul className="mt-5 space-y-2.5">
              {["Detects workflow anomalies", "Suggests optimizations automatically", "Learns from execution history"].map((line) => (
                <li key={line} className="flex items-start gap-2.5 rounded-md border border-white/[0.06] bg-white/[0.015] px-3 py-2 text-[12.5px] leading-relaxed text-white/55">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal stagger staggerAmount={0.08} className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-5 rounded-2xl border border-white/[0.07] bg-[#101013] p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70">
                <feature.icon size={16} aria-hidden />
              </span>
              <div>
                <h3 className="text-[15px] font-medium text-white">{feature.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/40">{feature.body}</p>
              </div>
              <ul className="mt-auto space-y-2 border-t border-white/[0.07] pt-5">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-[12px] text-white/55">
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
