import Reveal from "./Reveal";
import { ShaderAnimation } from "./ShaderAnimationLazy";
import { ArrowRight } from "lucide-react";

export default function PageHero({
  eyebrow,
  title,
  subhead,
  primaryCta,
  secondaryCta,
  stats,
}) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#08090a]">
      <div className="pointer-events-none absolute inset-0 z-0">
        <ShaderAnimation />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[#08090a]/80" />
      <div className="bg-grid-dark bg-grid-fade pointer-events-none absolute inset-0 z-[2]" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-20 pt-32 text-center lg:px-10 lg:pt-28">
        <Reveal className="mx-auto flex max-w-6xl flex-col items-center">
          <h1 className="mx-auto max-w-6xl text-[clamp(2rem,4.8vw,3.25rem)] font-display font-normal leading-[1.12] text-white">
            {title}
          </h1>

          {subhead && (
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-white/60">
              {subhead}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {primaryCta && (
                <a
                  href={primaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-6 py-3 font-accent text-[12px] uppercase tracking-[0.12em] text-white transition-transform hover:scale-[1.03]"
                >
                  {primaryCta.label}
                  <ArrowRight size={14} aria-hidden />
                </a>
              )}
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="rounded-full border border-white/15 px-6 py-3 font-accent text-[12px] uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-white/30 hover:text-white"
                >
                  {secondaryCta.label}
                </a>
              )}
            </div>
          )}
        </Reveal>

        {stats && stats.length > 0 && (
          <Reveal
            stagger
            className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-t border-white/[0.07] pt-4 text-left"
              >
                <p className="text-[26px] font-bold tracking-[-0.01em] text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] uppercase leading-snug tracking-[0.08em] text-white/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  );
}
