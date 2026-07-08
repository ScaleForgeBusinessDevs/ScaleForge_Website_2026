import Reveal from "./Reveal";
import { Network, Clock, Sparkles, Sliders, ArrowLeftRight, AlertTriangle, RefreshCw, Zap, Gauge } from "lucide-react";

const FEATURES = [
  {
    title: "Build Stunning Websites",
    body: "Craft high-performance custom websites tailored to your brand with a focus on aesthetics, user experience, and conversion optimization.",
    icon: "flow" as const,
  },
  {
    title: " SEO Optimization",
    body: "Improve your search engine rankings and drive organic traffic with data-driven SEO strategies and continuous optimization.",
    icon: "clock" as const,
  },
  {
    title: "Automations",
    body: "Streamline your workflows, reduce manual work, and enhance efficiency with custom automation solutions.",
    icon: "spark" as const,
  },
  {
    title: "Meta Marketing",
    body: "Drive targeted leads and accelerate business growth through strategic paid advertising campaigns.",
    icon: "sliders" as const,
  },
];

const CONFIG_ITEMS = [
  { label: "API integration", icon: "api" as const },
  { label: "Error handling", icon: "alert" as const },
  { label: "Workflow sync", icon: "sync" as const },
  { label: "Automation enable", icon: "bolt" as const },
  { label: "Rate limits", icon: "gauge" as const },
];

const FEATURE_ICONS = {
  flow: Network,
  clock: Clock,
  spark: Sparkles,
  sliders: Sliders,
};

function FeatureIcon({ kind }: { kind: (typeof FEATURES)[number]["icon"] }) {
  const Icon = FEATURE_ICONS[kind];
  return <Icon size={20} aria-hidden />;
}

const CONFIG_ICONS = {
  api: ArrowLeftRight,
  alert: AlertTriangle,
  sync: RefreshCw,
  bolt: Zap,
  gauge: Gauge,
};

function ConfigIcon({ kind }: { kind: (typeof CONFIG_ITEMS)[number]["icon"] }) {
  const Icon = CONFIG_ICONS[kind];
  return <Icon size={15} className="text-white/45" aria-hidden />;
}

function FeatureCard({ feature }: { feature: (typeof FEATURES)[number] }) {
  return (
    <div className="group relative flex flex-1 flex-col gap-5 border border-white/[0.07] bg-white/[0.02] p-8 transition-colors duration-300 hover:border-white/[0.14] hover:bg-white/[0.035] lg:p-10">
      <span className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/[0.03] text-white/65">
        <FeatureIcon kind={feature.icon} />
      </span>
      <div>
        <h3 className="text-[18px] font-medium text-white">{feature.title}</h3>
        <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/40">{feature.body}</p>
      </div>
    </div>
  );
}

export default function PlatformFeatures() {
  const [card1, card2, card3, card4] = FEATURES;

  return (
    <section className="bg-[#08080a] py-24 lg:py-32">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h2 className="text-[clamp(2.5rem,5.2vw,4rem)] font-display font-normal tracking-normal leading-[1.1] text-white">
            One Automation Platform
          </h2>
          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-white/45">
            Start small, scale confidently, and unlock advanced automation
            features as your team grows.
          </p>
        </Reveal>

        <Reveal stagger staggerAmount={0.12} className="mt-16 flex flex-col lg:flex-row lg:items-stretch">
          <div className="flex flex-col lg:flex-[5]">
            <FeatureCard feature={card1} />
            <FeatureCard feature={card2} />
          </div>

          <div className="relative overflow-hidden border border-white/[0.07] lg:min-h-[600px] lg:flex-[6]">
            <div className="absolute inset-0" aria-hidden>
              <div className="absolute inset-0 bg-[#0c0a0e]" />
              <div
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{ backgroundImage: "url(/Assets/stars.jpg)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a0e]/10 via-[#0c0a0e]/55 to-[#0c0a0e]" />
            </div>

            <div className="relative flex h-full items-center justify-center p-8 sm:p-12">
              <div className="w-[280px] border border-white/10 bg-[#16161a]/95 p-6 shadow-[0_40px_100px_-24px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
                <h4 className="font-accent text-[12px] uppercase tracking-[0.16em] text-white/55">Workflow configuration</h4>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {CONFIG_ITEMS.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center gap-3 border border-white/[0.06] bg-white/[0.025] px-4 py-3 text-[14px] text-white/55"
                    >
                      <ConfigIcon kind={item.icon} />
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-[5]">
            <FeatureCard feature={card3} />
            <FeatureCard feature={card4} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
