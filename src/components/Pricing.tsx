import Reveal from "./Reveal";

const PLANS = [
  {
    name: "Starter Plan",
    price: "$899",
    desc: "For small teams automating their first workflows.",
    features: ["Up to 5 active workflows", "Monthly maintainance", "Core integrations", "Email support"],
    featured: false,
  },
  {
    name: "Growth Plan",
    price: "$1299",
    desc: "For growing teams that need more power and visibility.",
    features: ["Up to 25 active workflows", "Monthly maintainance", "AI workflow agent", "Priority support", "Advanced analytics"],
    featured: true,
  },
  {
    name: "Pro Plan",
    price: "$1599",
    desc: "For organizations running automation at scale.",
    features: ["Unlimited active workflows", "Monthly maintainance", "Custom integrations", "Dedicated success manager", "SOC 2 & SSO"],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="border-y border-white/[0.06] bg-[#0c0c0f] py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/45">
            Start small, scale as you grow — no hidden fees, no surprises.
          </p>
        </Reveal>

        <Reveal stagger className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-8 ${plan.featured
                ? "border-[#5e6ad2]/30 bg-[#161718] shadow-[0_40px_120px_-50px_rgba(94,106,210,0.35)]"
                : "border-white/[0.07] bg-[#101013]"
                }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[15px] font-medium text-white">{plan.name}</h3>
                {plan.featured && (
                  <span className="rounded-full bg-[#2563eb] px-3 py-1 text-[11px] font-medium text-white">
                    Most popular
                  </span>
                )}
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-white/40">{plan.desc}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-[36px] font-semibold tracking-[-0.02em] text-white">{plan.price}</span>
                <span className="text-[13px] text-white/40">/ month</span>
              </p>
              <a
                href="#"
                className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-2.5 font-accent text-[11px] uppercase tracking-[0.12em] transition-transform hover:scale-[1.02] ${plan.featured ? "bg-[#2563eb] text-white" : "border border-white/15 text-white/80"
                  }`}
              >
                Get Started
              </a>
              <ul className="mt-8 flex flex-col gap-3 border-t border-white/[0.07] pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-[13px] text-white/55">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white/15 text-[9px] text-white/60">
                      <i className="bi bi-check-lg" aria-hidden />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[13.5px] font-medium text-white/55 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white/50"
          >
            Compare Plans
            <i className="bi bi-arrow-right" aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
